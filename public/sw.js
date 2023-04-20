const VERSION = new URL(location).searchParams.get('v'),
    CACHE_NAME = 'kndev-' + VERSION,
    ASSET_CACHE_URLS = [
        '/assets/Lato-Light.ttf',
        '/assets/Lato-Regular.ttf',
        '/assets/Lato-Bold.ttf',
        '/assets/brandon-grotesque-black.woff2',
        '/assets/me.webp',
        '/assets/KieranNoble-CV-Nov22.webp',
        '/assets/card.webp',
        '/assets/card2.webp',
        '/assets/card3.webp',
        '/assets/card4.webp',
        '/assets/logo.svg',
        '/assets/logo2.svg',
        '/assets/logo3.svg',
        '/assets/logo4.svg',
    ];

self.addEventListener("install", event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                let _urls = ASSET_CACHE_URLS.map(url => {
                    url = url.split('/');
                    url.splice(url.length - 1, 0, VERSION);
                    url = url.join('/');

                    let _url = new URL(url, location.origin);
                    return _url.href;
                });

                return cache.addAll(_urls);
            })
    )
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith('kndev-')))
                    .filter(cacheName => (cacheName !== CACHE_NAME))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    )
});
