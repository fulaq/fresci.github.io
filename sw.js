const CACHE_NAME = 'iqo-core-v5';
const ASSETS = [
    '/',
    '/index.html',
    '/data.js',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Serif:wght@400;600&display=swap'
];

self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
    e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null))));
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request).then(response => {
                return caches.open(CACHE_NAME).then(cache => {
                    if(e.request.method === 'GET') cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});
