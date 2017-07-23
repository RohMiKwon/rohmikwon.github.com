/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/07/23/hello/index.html","899cf05c532d3504a917cb9b6089ac8b"],["/about/index.html","e708b86ea9325829e0937e9e4d1a100d"],["/archives/2017/07/index.html","a944aec65c4c4291f7fbe819bbc2e97c"],["/archives/2017/index.html","2d53de4344a09615222ddc52745857c8"],["/archives/index.html","eaa5c1bd11f3a4cf2663c90e2898fe34"],["/atom.xml","166b94297498ae30db67485c4d335c83"],["/content.json","182306980c8bd5874585297a6f16fef8"],["/css/images/alipay.jpg","5c48e98c15c65e4cd7fc699df88e0f36"],["/css/images/escheres.png","c32d69c2308cb4267b8bd6fafadddd32"],["/css/images/logo-header.png","3f81ea77dffb79a36b2538e401b7675f"],["/css/images/logo.png","11a328a8d37f12775d5d4586c2613b00"],["/css/images/menu.png","ca8f9182696a140328ebdc8124230a60"],["/css/images/opacity-10.png","86e659d06525c84fd7819ad538562652"],["/css/images/s-left.png","64e4220263a6370864f25b19399397f2"],["/css/images/thumb-default-small.png","0d3d38c94b750b66de049f80a7772ea7"],["/css/images/thumb-default.png","ca390f3d20b8ecbc84b807974b656572"],["/css/images/top.png","d8a930f543d14c3d6f06153253d478b3"],["/css/images/wechat.jpg","203acb668ea050e72886af722e7f5f11"],["/css/plugins/gitment.css","00472d0665b8d95bdb0b57c293f188db"],["/css/style.css","08f4beb4fc0272a46dc6a5a7e3191aee"],["/fonts/SourceSansPro.ttf","ba6cad25afe01d394e830f548a7f94df"],["/images/components.png","7769fd61a903797e4273c74888ed8b9b"],["/images/data.png","2fdee1ad51c9b990ca186769cbc92dc4"],["/images/hn-architecture.png","2414356400811f80a25178bad519927e"],["/images/hn.png","907b2c671bfe609f3bbf7b4e51480c0b"],["/images/lifecycle.png","b6749746ba4b05899f1e721a8084e572"],["/images/mvvm.png","9ef4a737380c1e72d3c1a5fae8480533"],["/images/props-events.png","a18498cd0176946ccee943d2fec4f420"],["/images/state.png","ca9bd676c6d66f5f0797ec6ad35eb2b4"],["/images/transition.png","ca34aef3910abf105dc112aa23026d54"],["/images/typescript-type-error.png","ac1a1aa8c51a40565dc603917925a14e"],["/images/vue-component-with-preprocessors.png","f1bdf44c793758fc8576724406014986"],["/images/vue-component.png","91752852891f91a4afd27d95bb00b22d"],["/index.html","a2df0c07daf86155010f0bb82454f004"],["/js/gitment.js","434949e3fa004587f73aada62910cfc4"],["/js/insight.js","c0ce0c62e8584741021f163f618b2982"],["/js/main.js","ed1e4d82c7c13dc86b4c3af4f2096f67"],["/js/qrious.js","ea58889c516e953d6e78ca4834f834c4"],["/js/script.js","fad8e74a8d81cc7c2bc3eb1b9711f34a"],["/libs/font-awesome/css/font-awesome.css","a16730221cf9c8b1bad3dd5419edf16b"],["/libs/font-awesome/css/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["/libs/font-awesome/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/libs/font-awesome/fonts/fontawesome-webfont.svg","24c601e721ebd8279d38e2cfa0d01bc6"],["/libs/font-awesome/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/libs/font-awesome/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/libs/font-awesome/fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["/libs/jquery/2.0.3/jquery.min.js","ccd0edd113b78697e04fb5c1b519a5cd"],["/libs/justified-gallery/jquery.justifiedGallery.min.js","7b8f9e0d4b845e90381ae044b8b5e657"],["/libs/justified-gallery/justifiedGallery.min.css","9a5e8949e0c84f864668f0205c5fafbd"],["/libs/lightgallery/css/lg-fb-comment-box.css","2ab4129c7b8cd8f3d4d0ce62e66904d6"],["/libs/lightgallery/css/lg-fb-comment-box.min.css","f216c9f755ca3131d5d8abff3eee5193"],["/libs/lightgallery/css/lg-transitions.css","c7c90f6be9108b17e459ef992e7e889b"],["/libs/lightgallery/css/lg-transitions.min.css","a3330c0ba52c1c1f912fa21966ba7079"],["/libs/lightgallery/css/lightgallery.css","fd0ae83fc66fd7b96d2066b94805a39e"],["/libs/lightgallery/css/lightgallery.min.css","2a128ed1be3f9be67ef99d92f95845fc"],["/libs/lightgallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightgallery/fonts/lg.svg","0cb1b8af9950584b5cc8e8250e045508"],["/libs/lightgallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightgallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightgallery/img/loading.gif","0aeca8b09888accfccf11976b34c4e64"],["/libs/lightgallery/img/video-play.png","4f03bd8dec67211ade8abdab39dcbf4a"],["/libs/lightgallery/img/vimeo-play.png","699d005153517ee4264615dd1e4e2b64"],["/libs/lightgallery/img/youtube-play.png","96bc9d7e27d077372cc0bc9524c500e6"],["/libs/lightgallery/js/lg-autoplay.js","eead116e849544337f98e1f909984da6"],["/libs/lightgallery/js/lg-autoplay.min.js","9cc557cce697d947b82db9c63bec1f56"],["/libs/lightgallery/js/lg-fullscreen.js","4f138d53ae7b5f8ebec5917daebe1892"],["/libs/lightgallery/js/lg-fullscreen.min.js","ad666d733183e14359ad2dc3b17ed161"],["/libs/lightgallery/js/lg-hash.js","4de75c991f347a3501fdb2fe0833b1cf"],["/libs/lightgallery/js/lg-hash.min.js","17182adfcf75dccb64391343c90586ad"],["/libs/lightgallery/js/lg-pager.js","2ddc77bc71fdd588e05ee3f27b6e187b"],["/libs/lightgallery/js/lg-pager.min.js","79ae9590a49eece30be5a7318d2836c6"],["/libs/lightgallery/js/lg-share.js","40bb22981ba549bf9086118147608b4e"],["/libs/lightgallery/js/lg-share.min.js","f38dda2f772f0cc5a143e40e0cb96eae"],["/libs/lightgallery/js/lg-thumbnail.js","02e7bfe2e732f524cd3dd6f78dec110b"],["/libs/lightgallery/js/lg-thumbnail.min.js","16d7b8599fddeb7af22cf00684ab2b25"],["/libs/lightgallery/js/lg-video.js","4e1459c4a990ca4f9fe58f385762b31a"],["/libs/lightgallery/js/lg-video.min.js","974a23bceeaada9b60c467129acfc422"],["/libs/lightgallery/js/lg-zoom.js","284a3d8af84caf362eea54eefe89b145"],["/libs/lightgallery/js/lg-zoom.min.js","280784d5d0c1cd5f74c758eb44217149"],["/libs/lightgallery/js/lightgallery.js","22c34dbc5304139b95331d24c547c5fa"],["/libs/lightgallery/js/lightgallery.min.js","d8362d715c324c128556fd285143e0af"],["/libs/source-code-pro/fonts/mrl8jkM18OlOQN8JLgasD9V_2ngZ8dMf8fLgjYEouxg.woff2","89f2d0bc9b0b668da7eed7b81fd13e04"],["/libs/source-code-pro/fonts/mrl8jkM18OlOQN8JLgasDy2Q8seG17bfDXYR_jUsrzg.woff2","430e7d6b50c6d66a1385d94d04937440"],["/libs/source-code-pro/styles.css","fd6b67f05e7415482cf4e038fd39efed"],["/libs/titillium-web/fonts/7XUFZ5tgS-tD6QamInJTcSo_WB_cotcEMUw1LsIE8mM.woff2","6bb722aa1cf0bf3015a6b00e142cf989"],["/libs/titillium-web/fonts/7XUFZ5tgS-tD6QamInJTcZSnX671uNZIV63UdXh3Mg0.woff2","554608d6a34d2ebcf72a8151b4838a59"],["/libs/titillium-web/fonts/anMUvcNT0H1YN4FII8wpr4-67659ICLY8bMrYhtePPA.woff2","ab8ed1cd33ed4e7f0aa2e9c907f6991c"],["/libs/titillium-web/fonts/anMUvcNT0H1YN4FII8wpr46gJz9aNFrmnwBdd69aqzY.woff2","8f37882c975636941705796849ff4192"],["/libs/titillium-web/fonts/anMUvcNT0H1YN4FII8wpr9INifKjd1RJ3NxxEi9Cy2w.woff2","73e06ff168e2364328cd219caf1d4675"],["/libs/titillium-web/fonts/anMUvcNT0H1YN4FII8wpr_SNRT0fZ5CX-AqRkMYgJJo.woff2","9b9040a100f1eda21d5f086410f17cce"],["/libs/titillium-web/styles.css","9a621d9a0f9bf19259f840a5c305f5df"],["/menu/index.html","86c3b8908d48232556ec337a47fad1b1"],["/perf/index.html","ffe60bfb54656e9e3e32fcab61652332"],["/project/index.html","dc5e8b9bfca32dc74d568090012ae5d7"],["/support-vuejs/index.html","b053c1b489478f5d784e34f7e47bc134"],["/tags/hexo/index.html","3c7301606e5566fb38bc1f7260599f8c"],["/tags/index.html","6b1dc53e81319e713693f21c8de83946"],["/v2/api/index.html","728c2887b437e33431d5becf3aa75961"],["/v2/cookbook/adding-instance-properties.html","4b3ff7a269644f4beec0279ca09df6e3"],["/v2/cookbook/index.html","1e8003c4626e9c7b6eb559cd381656fb"],["/v2/examples/commits.html","ac2bcb0279424d1dd007ddb76ff54dab"],["/v2/examples/deepstream.html","3f78daff0f678eb817c747a25f15c4f5"],["/v2/examples/elastic-header.html","1b36a794d226034178e4000fc3bcd676"],["/v2/examples/firebase.html","4a102bbcc14fbf9c622744df5e54850d"],["/v2/examples/grid-component.html","aab29f53102b9d252d3fd6fab17405ba"],["/v2/examples/hackernews.html","75025e8692bc015acf1a562fbc45c8b7"],["/v2/examples/index.html","f37f8a2e67ac3b0fb796f78e520d9081"],["/v2/examples/modal.html","df6d868f62841d29a27e7894d0cebbfd"],["/v2/examples/select2.html","83769460b5a8dc989e2fddccc09e7b82"],["/v2/examples/svg.html","763daebd7e751fbbc07636aa9ce2a59f"],["/v2/examples/todomvc.html","1d885bdcaa35d679464301065bc65a6b"],["/v2/examples/tree-view.html","62b89a6310b79a306a46cc223af214a6"],["/v2/guide/class-and-style.html","8d55ba3988aac701e18fc779932ba817"],["/v2/guide/comparison.html","0410ec2a7baa06fafa1585bb55717d7f"],["/v2/guide/components.html","e92540de0276ce3a3823fe08f090113c"],["/v2/guide/computed.html","9e31cfc40305bc5fc833327f7ab9948e"],["/v2/guide/conditional.html","c52f118201f5049648f1799acc9c83ef"],["/v2/guide/custom-directive.html","94d159af18136d010141220b3527a0c1"],["/v2/guide/deployment.html","ce14ae0be8dd271b452e7616b1126714"],["/v2/guide/events.html","517728236a72a1bc343747e432fd207d"],["/v2/guide/forms.html","a42392432bcd9401f52e18e9d3cf9141"],["/v2/guide/index.html","1c730eaae34ce1cce2e7115a0c5dbb9f"],["/v2/guide/installation.html","e05e94302a1e2a372d21a2f8f627abe5"],["/v2/guide/instance.html","d33ec848f428c98eb4e98242a4fcebea"],["/v2/guide/join.html","928866d90c7475bcba5b42e302332330"],["/v2/guide/list.html","c698d7f9e58a8d06916a5a57bf31cd1d"],["/v2/guide/migration-vue-router.html","0242b3a576e63b10c39c03c262288a00"],["/v2/guide/migration-vuex.html","4503ee014aebe83d4d43c787836d4142"],["/v2/guide/migration.html","46e00378e043c9d04bf6dd34070e2850"],["/v2/guide/mixins.html","36afbe0559a0c77f384b0eacbb3cf347"],["/v2/guide/plugins.html","e52ffd4c2f15110d36bd95aa33555abb"],["/v2/guide/reactivity.html","74a6db6f925331eea1d23d91b49eb63e"],["/v2/guide/render-function.html","ea21a057796290b589c7b114b0ff8195"],["/v2/guide/routing.html","b165abb1e2d9f52fbee4eed2a7801cd7"],["/v2/guide/single-file-components.html","a8340e501def6d4e47ad330135ff79bc"],["/v2/guide/ssr.html","ba3ab63c27b15399fa478a081afbef9b"],["/v2/guide/state-management.html","7858ece7eee6dad0838846f90884c2c6"],["/v2/guide/syntax.html","9e8dafcafd0929262c8297fe9b2ce358"],["/v2/guide/team.html","b9f7eb6d79f0cdf1d0fa037d7a73e5e3"],["/v2/guide/transitioning-state.html","26fd6d8d6baa5a7cee1ae872a2463abd"],["/v2/guide/transitions.html","2a292c18f1e321c837808bb81264e74e"],["/v2/guide/typescript.html","5185b91fdeec59e9a6018f2e3682b664"],["/v2/guide/unit-testing.html","10959dad4e83215699377afa6a158d14"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"srv.carbonads.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




