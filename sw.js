var urlpart = location.href.split('=');
var id = "";
 
if (urlpart.length > 1) {
    id = urlpart[1];

}
self.addEventListener('install', function (e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/Android-Home-Screen/',
         '/Android-Home-Screen/index.html?id=' + id,
         '/Android-Home-Screen/index.js',
         '/Android-Home-Screen/sw.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
