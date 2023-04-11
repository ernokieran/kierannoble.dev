const VERSION = new URL(location).searchParams.get('v'),
    CACHE_NAME = 'kndev-' + VERSION,
    CACHE_URLS = [
        '/favicon.png',
        '/assets/Lato-Light.ttf',
        '/assets/Lato-Regular.ttf',
        '/assets/Lato-Bold.ttf',
        '/assets/brandon-grotesque-black.woff2',
        '/assets/close.svg',
        '/assets/arrow.svg',
        '/assets/download.svg',
        '/assets/me.webp',
        '/assets/linkedin.svg',
        '/assets/twitter.svg',
        '/assets/telegram.svg',
        '/assets/email.svg',
    ];

self.addEventListener("install", event => {
    this.skipWaiting();
    // console.log("installing cache: " + CACHE_NAME);
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                // Cache busting
                _urls = CACHE_URLS.map(url => {
                    let _url = new URL(url, location.origin);
                    _url.searchParams.append('v', VERSION);
                    return _url.href;
                });

                return cache.addAll(_urls);
            })
    )
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            // console.log("activating cache: " + CACHE_NAME);
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
                    console.log("Cache hit: " + event.request.url);
                    return response;
                }
                console.log("Cache miss: " + event.request.url);
                return fetch(event.request);
            })
    )
});
