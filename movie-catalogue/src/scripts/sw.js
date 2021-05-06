self.addEventListener('install', (e) => {
  console.log('installing Service Worker..');

  // TODOL Chaching app shell resource
});

self.addEventListener('activate', (e) => {
  console.log('activating Service Worker');

  // TODOL Delete old caches
});

self.addEventListener('fetch', (e) => {
  console.log(e.request);

  e.respondWith(fetch(e.request));
  // TODOL add/get fetch req to/from caches
});
