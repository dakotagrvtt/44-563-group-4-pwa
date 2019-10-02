//makes sure worker is working
console.log('Hello from service-worker.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

//makes sure workbox loads in
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

//handles requests by either cache or responding
workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.NetworkFirst()
);

