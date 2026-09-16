// api/broadcast.js
const webpush = require('web-push');

webpush.setVapidDetails(
  'mailto:your-email@example.com', 
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

module.exports = async (req, res) => {
  // 1. PULL ALL STORED USER TOKENS FROM YOUR DATABASE
  // (This is an example structure of what your database will return)
  const allUserSubscriptions = await getAllTokensFromYourDatabase(); 

  // 2. DEFINE YOUR BROADCAST MESSAGE PAYLOAD
  const payload = JSON.stringify({
    title: 'BANKBUGS|FX Alert ⚡',
    body: 'A new liquidity purge setup has been posted to the playbook. Check your dashboard immediately.',
    url: '/dashboard.html'
  });

  // 3. BLAST TO ALL DEVICES INSTANTLY
  const pushPromises = allUserSubscriptions.map(subscription => {
    return webpush.sendNotification(subscription, payload)
      .catch(err => {
        // Clear out old, expired device tokens if a user uninstalled the app
        if (err.statusCode === 410 || err.statusCode === 404) {
          removeTokenFromDatabase(subscription);
        }
      });
  });

  // Wait for all messages to hit Google & Apple's delivery servers
  await Promise.all(pushPromises);

  return res.status(200).json({ success: true, message: `Broadcast successfully pushed to ${pushPromises.length} devices.` });
};
