// sw.js - BANKBUGS|FX Background Process Thread

// 1. Force the worker to activate instantly when a trader installs or refreshes
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
  console.log('BANKBUGS|FX Background Thread Hot.');
});

// 2. Catch incoming broadcast updates from your Vercel cloud function
self.addEventListener('push', (event) => {
  let payload = { title: 'BANKBUGS|FX Alert ⚡', body: 'New market liquidity setup available.' };

  if (event.data) {
    try {
      payload = event.data.json();
    } catch (e) {
      payload.body = event.data.text();
    }
  }

  const options = {
    body: payload.body,
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    vibrate:,
    data: { url: '/dashboard.html' },
    tag: 'bb-fx-broadcast', // Stacks messages to avoid alert clutter
    renotify: true
  };

  event.waitUntil(
    self.registration.showNotification(payload.title, options)
  );
});

// 3. Focus or launch the app when a trader taps the notification
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (let client of windowClients) {
        if (client.url.includes('/dashboard.html') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/dashboard.html');
      }
    })
  );
});
