'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "84539ad6e9e6aca41cf4ea6bc1f8994f",
"assets/AssetManifest.bin.json": "a156e4224a9ee6d79b2b70a1cb8476a2",
"assets/AssetManifest.json": "8daeb1ae776d4da7241ddab6ded0dc9b",
"assets/assets/empte_img/emptyImage.png": "6bb2d2c61bb39c0c571b95ae009acc4b",
"assets/assets/empte_img/im_emptyIcon_1.png": "545e13e1cabb2faf7eac9801f64f7f89",
"assets/assets/empte_img/im_emptyIcon_2.png": "bcff5e23332d92e74562eaf8f47c7bd1",
"assets/assets/empte_img/im_emptyIcon_3.png": "2698f6c94cec9450ced97499b70a34d6",
"assets/assets/images/alrumansiah_splash.png": "e0ca1f237265431c00b34988ff813f37",
"assets/assets/images/alsultan_icon.png": "2befb75b36ea3c1b3fa115dfd4be1137",
"assets/assets/images/circleavatorItem.png": "e0ca1f237265431c00b34988ff813f37",
"assets/assets/images/empty-cart.jpeg": "cf10f0380b91824873dbb617d99f048f",
"assets/assets/images/on_boarding1.png": "fe45b10551a8749b34d7c2357d5dcf65",
"assets/assets/images/on_boarding2.png": "64834733e5888fbae5666a5cc9c1d8b8",
"assets/assets/images/on_boarding3.png": "2a45695b3ab17b47a69113d5dfe78356",
"assets/assets/images/res_image.jpg": "e606af2523b4ca83fa41bb88e3454c43",
"assets/assets/images/res_image1.png": "576caa46940a074151ba8b402e9acae3",
"assets/assets/images/shafi_icon.JPG": "b21d9b148bf0161bdab01f3e6eba0581",
"assets/assets/images/shafi_icon_back.png": "51fdc0452c6cb82620dba20a4ddef831",
"assets/assets/images/sultan_background.png": "20a75751431d338d54e8873cef08bdd8",
"assets/assets/images/yahala.png": "cc51c1a3dfbd5d2194ebd1a25cb852a6",
"assets/FontManifest.json": "5e652c27b57cf1a903557acddaa45cc9",
"assets/fonts/MaterialIcons-Regular.otf": "6bccf28adc42395b24d79e1c3da1841d",
"assets/NOTICES": "75d5c1a7aa15149219a14b8d00e816a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/empty_widget_fork/assets/images/emptyImage.png": "6bb2d2c61bb39c0c571b95ae009acc4b",
"assets/packages/empty_widget_fork/assets/images/im_emptyIcon_1.png": "545e13e1cabb2faf7eac9801f64f7f89",
"assets/packages/empty_widget_fork/assets/images/im_emptyIcon_2.png": "bcff5e23332d92e74562eaf8f47c7bd1",
"assets/packages/empty_widget_fork/assets/images/im_emptyIcon_3.png": "2698f6c94cec9450ced97499b70a34d6",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/packages/persian_fonts/lib/fonts/Sahel.ttf": "25836e3d164d3f4a8d05f2c3cdbaf4af",
"assets/packages/persian_fonts/lib/fonts/Samim.ttf": "dff4f93c6702d280ea2acf25fb4270ae",
"assets/packages/persian_fonts/lib/fonts/Shabnam.ttf": "7b18a4a8f65b3f5eac92df3c91fe4400",
"assets/packages/persian_fonts/lib/fonts/Vazir.ttf": "c456d8064fe9bac3444d70a744446f90",
"assets/packages/persian_fonts/lib/fonts/Yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "abb85e8ed23d98105d7c60ec4a858f15",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d95cc319c83834fac562a11a86ff25b5",
"icons/Icon-192.png": "72a902186af15f2ab73c68d6ed0141a9",
"icons/Icon-512.png": "e1a40ac98872e320ab0292fd70ffdb6b",
"icons/Icon-maskable-192.png": "72a902186af15f2ab73c68d6ed0141a9",
"icons/Icon-maskable-512.png": "e1a40ac98872e320ab0292fd70ffdb6b",
"index.html": "b7981303cba0f2230efd69ad34b89723",
"/": "b7981303cba0f2230efd69ad34b89723",
"main.dart.js": "070a571002050aed0044158676b00aec",
"manifest.json": "2e05c112a6666d9aaaf37833330c22fe",
"version.json": "7824446cff0434f62dc81f457396d34b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
