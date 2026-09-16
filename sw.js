// sw.js - Background Core Thread for BANKBUGS|FX

// Force worker to activate instantly without a page reload
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
  console.log('BANKBUGS|FX Background Worker Active.');
});

// Capture incoming free push streams
self.addEventListener('push', (event) => {
  let payload = { title: 'BANKBUGS|FX Update', body: 'New strategy or liquidity alert available.' };

  if (event.data) {
    try {
      payload = event.data.json();
    } catch (e) {
      payload.body = event.data.text();
    }
  }

  const notificationOptions = {
    body: payload.body,
    icon: '/icon-192x192.png',  // Uses your exact manifest asset
    badge: '/icon-192x192.png', // Small icon for Android status bars
    vibrate:,
    data: {
      url: '/dashboard.html'
    },
    tag: 'bb-fx-alert',        // Stacks incoming updates to avoid layout spam
    renotify: true
  };

  event.waitUntil(
    self.registration.showNotification(payload.title, notificationOptions)
  );
});

// Click action - targets dashboard app interface directly
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // Focus if dashboard is already open
      for (let client of windowClients) {
        if (client.url.includes('/dashboard.html') && 'focus' in client) {
          return client.focus();
        }
      }
      // Open fresh dashboard window if closed
      if (clients.openWindow) {
        return clients.openWindow('/dashboard.html');
      }
    })
  );
});
