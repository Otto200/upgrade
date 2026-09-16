async function establishPushSubscription(reg) {
  try {
    const subscription = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: base64ToUint8(BGMyOqSJXyL8XezQfZqDmJgV_uXCWMkjyI_GcBzk95bkpB4oFihlVpo9M9Sr6qjPmfKT6VEPCdDtaX0UIBepxB)
    });
    
    // Automatic Save Protocol: Push this user's token straight to your Vercel database API
    await fetch('/api/broadcast.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subscription })
    });
    
    console.log('User synced to broadcast list.');
  } catch (pushErr) {
    console.error('Failed to extract device token:', pushErr);
  }
}
