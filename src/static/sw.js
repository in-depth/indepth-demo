self.addEventListener('install', function (event) {
  self.skipWaiting()
})

self.addEventListener('activate', function (event) {
})

self.addEventListener('push', function (event) {
  const title = 'Push message'
  event.waitUntil(
    self.registration.showNotification(title, {
      body: 'The Message',
      icon: '',
      tag: 'my-tag',
    })
  )
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  var url = '/collection'
  event.waitUntil(
    clients.matchAll({
      type: 'window'
    })
    .then(function(windowClients) {
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i]
        if (client.url === url && 'focus' in client) {
          return client.focus()
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url)
      }
    })
  )
})
