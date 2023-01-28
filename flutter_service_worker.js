'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3106ccd3c67bea8fd1ad75d196d1cad1",
".git/config": "a514e28516611f898d93ffdfbcca1c95",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "16e5636d1b471f81f33c97f1d81e3aa3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f58d1c9fc757a11e9ef59014edfda0a",
".git/logs/refs/heads/main": "55323049aa0e158da43087bf0adce3d0",
".git/logs/refs/remotes/origin/main": "839cb1c771975f2d87f5848ec2584bab",
".git/logs/refs/remotes/origin/master": "2efe31ff04f7716e7467bdb194a69eca",
".git/objects/03/6bdaa09b98fb4c51ca50a601381a358b3e8864": "a06a5a292c576db5a5e61425efd56f0d",
".git/objects/04/9903bc1f8f0be279fd2de0a1dc7a24a782fbe7": "29d24cf84f7b3800487c0bf44dda31c5",
".git/objects/0a/a454c437fdbd077f7af676ddd3aaaba7d1bf54": "e3cbc4bac888b85b1f0691c36b20b93e",
".git/objects/0d/156a651cfe4e3004289ef23f6c5b7d4d36b350": "fb0abddd81c1bf861974f1787268a4c1",
".git/objects/0e/ae044a58ab7e75c745dd69258ecf0c9f26ef84": "d29b1efdd14d7b2f208aac9ea6c40e86",
".git/objects/14/4bf9d1ff7d6435260e310c2a9fa75b0e30f845": "9fcf4a70e998e3f07629faa9e45d5fc1",
".git/objects/14/d57478b7e6cf3725cfadb7f218d69fb77a167c": "e53fbbb8f84de1368fb2053f4139dc85",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/bcd20170933279eb43b4d42004f513e73b62c8": "fb5954b805185a41e04ca248ba92578c",
".git/objects/25/82e536d8275aed9f73b0839dea6e5ce11c10da": "5f1bc827b40e36bb8b079475f2029296",
".git/objects/28/318715dbb232bb89a6e64a4afdd12137d0eda1": "2f7d6262af8be2174cb5a3a82005f32f",
".git/objects/2c/2009279cb0944292eae15a340e6e1d7784fd18": "8254d8c91a004da14d97e766f69a86e1",
".git/objects/34/143dfe4d2b338954b72bff6d8c510079d3f6e6": "a6dfd63752ce2324cf2144291365304c",
".git/objects/35/c092e1e4259e3f7669fc3406da9af7338b80af": "bc119a0dccb3c3ae19d481f2711aba5b",
".git/objects/39/01db0d694bea17fa3ce1b047f6ccd092e4c8c7": "1ab79c7f187c8b8cad038dd012741266",
".git/objects/3e/aa3e55b65bdf1a3bcf9be8e64f11f45cf16979": "0173a8d6467feafae4bd96f7bc750fa1",
".git/objects/43/889936e3da41381811e174302f2ad425bef2cd": "fb109209505619aad160c4dd097accfc",
".git/objects/4a/e3826172ea6185b92a2913755a797709e581c0": "1ef06842d86e55884babae2dab897857",
".git/objects/53/49824fb48d069541279e1e80ae7b5a17d79442": "0c33c6681539d8abd0bc9a1e3ba0191d",
".git/objects/56/20a335abd44b3925fc9fcd77aaedce77abf47d": "831212ac4d1c9135944ac149ed13184a",
".git/objects/59/0587415c1ee338196ac4f9258e22705662e4af": "3126dfdfc2dd9ac62c03a47dcd516324",
".git/objects/63/bf4d19f0e5d095c08b114f460f0eba3bd6ebad": "884fe2b91ea53406783d4347b8f8f30a",
".git/objects/63/d57975b78fcc3fe398e76827150ee965957ba6": "fc0b92437240c8d04d7036b8dd74cc2a",
".git/objects/63/fbd5e939cc5ec1f04121fc4784657bcbea5180": "aa2886f0a74249bd767728f805d38da8",
".git/objects/65/2dfc0b3a865493b14ee52632cf8a1f7e21f9ed": "f290a2e66881c82b1a33e8f66c47fe80",
".git/objects/67/61f7e9ef54fc51fa2b951ccd5355f8a06f6f5f": "5063cf0bdce86bbdd3a0b223f572ebab",
".git/objects/67/842f894b8680efedf9e187bb29541ca5701e3c": "5e517e56c847a7d7b8192ef702493d9a",
".git/objects/6a/66ce8e397e0a9cf00d2c11b53beb1651833f36": "f4e1abb765c685e07efab0770076d6c3",
".git/objects/71/ea2450a8b215ca8896f95e06e0095294301f0c": "f4672234c7a1dff677f7ec44e1104dd9",
".git/objects/78/47f2f7da3b51a45672126659b95a0e046d2471": "5c22e521de0ec378b127a647e3864c91",
".git/objects/7d/4cb0fa343018cc4307df236efba74b9d136f93": "811f4e2d806d3bf52ca38185c88b25c0",
".git/objects/81/ba5936928e6734f76c83017ac1ff8fcd825880": "3f99bbf5296e793a2024d8be0b0524f0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/85cae1e2ad87dceb06e928fed87dfbd4ff49f8": "17e1c49ad6c8944481b8ed3921cdaea5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/372fa753f392e2836eca1f07966a8b1db6c964": "65f6b28ae6dc6962ec89487121035021",
".git/objects/94/f42feef00bed7cdfde960c142dcbc444c5a000": "d5dd933a7c276131b6d64e90def4ce4e",
".git/objects/95/4c0e32f4a0887f1b83f66d69beb79131680543": "a2e31c9b31a15050f973221b5a10f153",
".git/objects/a0/175821e6d55ab52ae30a98130baa9371770308": "2e92f206719b3c1b944a9747effd7437",
".git/objects/a1/930c12ed610a147c4b3bb14499378e0dab06d9": "cf04438d9559499ca4ab379fa1595df3",
".git/objects/a2/a6f955b555f1b661e518e23bd2027495cafd5d": "591522e253365f32f9e5e9c8428aca1a",
".git/objects/a8/a3df3341edfd328da385da96c932f33fae6f74": "c1f4eb658d928ea1c928f5a7cf0e296a",
".git/objects/a8/b5342d3d372023d9265c1e30e0fb523cc5a67d": "3dd6c615c90959945d0f62352bad3fba",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b6/170ce23754b064b135718dd20d93a9ac7f64e6": "237b2f7148e23f08ad68d8bd6686f4ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/74bbcd248bf693bba81e36f5f6befa6445d481": "fdd92b93ebcb613484326a913bdd0d42",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/098f4f6969d705a3cfdb9eeec109ba56651435": "e33923ebabb14ea0c9a6094a8f43abdd",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/c0/266f99797c99add19f2680f63cbe848a75755f": "fce56a58101047d0de5e727567f524cc",
".git/objects/c2/06b066d16a4b0c2422b1e94a73b307651a86d6": "98308da9c09afa5c153891fcf705df95",
".git/objects/cc/268d9e5c3e68a9914e3faf93bffab99062c414": "d52cbd3df45301f4959215c30e867f6e",
".git/objects/d3/e7fe32b916cbe7d26679bc36dd940a7d6a7efd": "a2ebd33176d96ae0a0bc70fd0cf4a49d",
".git/objects/d4/dc767b3b0b61672ba6ea8d2568c6eddc3b6b36": "dcffa7dbf67dc68f9fee78268df08b5e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e9/2aa835e59016f2dda51a3f458c424be305c669": "13390d9d10ee8a7badf4ad49ac298ca2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/051a2ffe2a20b414b2e5a1948280a08ab72f7d": "a7d6a439583774deb4d4c86f67b34965",
".git/objects/ef/f46fac42211f1391083bbeb57d8cdf2a19fcfa": "317f2ef4bd3ce5b84e71faa3c794b864",
".git/objects/f0/d969609e507517fb835ab5a2f0af0647a82d99": "a5a9c18aafdc7d69788790c9d8fba915",
".git/objects/f4/2c027824156149fdf7bae1e918b91926c34f82": "f9d50cd9c1473a88e70dd76244f928b9",
".git/objects/f4/2d647ac7fde4f4fcd844dcbf4456ac5765bb1b": "397b26316c573604ff62a1fc16f79fb8",
".git/objects/f9/a3d3149338fda8c27a71086aa2793facb22d43": "f68789abcd89e475f363d09be09009da",
".git/refs/heads/main": "1347ab27dbc4365b6e7b644f2142bbd4",
".git/refs/remotes/origin/main": "1347ab27dbc4365b6e7b644f2142bbd4",
".git/refs/remotes/origin/master": "b54de8b59ef8b97496e4348dcb41a909",
"assets/AssetManifest.bin": "0f44af845f12b349761a1ebe89df2f08",
"assets/AssetManifest.json": "74b52aa035a582825444e74795f1c905",
"assets/assets/icons/empty.png": "14cc14619ca58bd2502949f44b132e0f",
"assets/FontManifest.json": "fd2ecf29ab751503d1dd54eb1a8cfd28",
"assets/fonts/IRANSansXFaNum-Regular.otf": "d49ce2f2f0b3ccd96a5f524f1a4715cb",
"assets/fonts/MaterialIcons-Regular.otf": "8f7d480f22b0e75804ea7826be1113f2",
"assets/NOTICES": "fba71e7edb04034492aaf644f2b57b70",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "45e1d3666d6e25e67f39fc1ae39837ce",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2281cf0a22c29917ebf755ba9d11e50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9713978c68bcf226d5b984ada43cb8a0",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/shaders/ink_sparkle.frag": "92666cc97576adbea2e2d3061a953137",
"canvaskit/canvaskit.js": "971260b2fcb9a1c3b5fd69fb698cf9ba",
"canvaskit/canvaskit.wasm": "244ac1f4ded981c2691f42d0b69f85f5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a08a2eac76de9ea2be43f364d9f0bbb",
"/": "4a08a2eac76de9ea2be43f364d9f0bbb",
"main.dart.js": "a68bac8b719d97c5b60a0f5dfd099112",
"manifest.json": "34d7a93a24a9edfdcbc76b9763f73a11",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
