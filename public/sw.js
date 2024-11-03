// Import Workbox libraries
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Precache the assets generated by the build process
// `self.__WB_MANIFEST` is a placeholder that will be replaced during the build
precacheAndRoute(self.__WB_MANIFEST);

// Example of caching additional resources with a runtime caching strategy
registerRoute(
  ({ request }) => request.destination === 'document' || request.destination === 'script' || request.destination === 'style' || request.destination === 'image',
  new StaleWhileRevalidate()
);

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install event');
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate event');
});

self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] Fetch intercepted for:', event.request.url);
});
