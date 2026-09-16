// api/broadcast.js - Serverless engine to securely push signals
const webpush = require('web-push');

// Identify your platform backend securely to browser push servers
webpush.setVapidDetails(
  'mailto:support@bankbugsfx.com', 
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { tokens, message } = req.body;

  if (!tokens || !message) {
    return res.status(400).json({ error: 'Missing tokens or message payload.' });
  }

  const payload = JSON.stringify({
    title: '⚡ BANKBUGS|FX SIGNAL',
    body: message
  });

  const pushPromises = tokens.map(userSubscription => {
    return webpush.sendNotification(userSubscription, payload)
      .catch(err => {
        console.error('Failed to send to endpoint:', userSubscription.endpoint, err);
        // Retain failed tokens so you can filter out inactive users later
        return { success: false, endpoint: userSubscription.endpoint };
      });
  });

  await Promise.all(pushPromises);
  return res.status(200).json({ success: true, message: 'Broadcast cycle processed successfully.' });
}
