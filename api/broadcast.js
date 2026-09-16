// api/broadcast.js
const webpush = require('web-push');

// Identify your platform backend securely to browser push servers
webpush.setVapidDetails(
  'mailto:support@bankbugsfx.com', 
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

module.exports = async (req, res) => {
  // Setup headers to allow local testing tools to connect safely
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST') {
    try {
      const { title, body, token } = req.body;

      // Ensure a target token parameter is supplied to send a message
      if (!token) {
        return res.status(400).json({ success: false, error: "Missing destination token payload." });
      }

      const payload = JSON.stringify({
        title: title || 'BANKBUGS|FX ⚡',
        body: body || 'Market liquidity metric updated.'
      });

      // Execute push operation via Google/Apple secure messaging tracks
      await webpush.sendNotification(token, payload);

      return res.status(200).json({ success: true, message: 'Push stream dispatched successfully!' });
    } catch (error) {
      console.error('Server function crashed:', error);
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  return res.status(405).json({ message: 'Method disallowed.' });
};
