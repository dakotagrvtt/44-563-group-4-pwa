importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

//makes sure worker file is connected
console.log('Hello from service-worker.js');

//makes sure workbox loads in
if (workbox) {
  console.log(`Workbox loaded`);
} else {
  console.log(`Workbox didn't load`);
}

//handles requests by either cache or responding
workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  // Cache CSS files.
  /\.css$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);

workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

