(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue"] = factory();
	else
		root["vue"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "112a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unregisterServiceWorker = exports.registerServiceWorker = void 0;
/* istanbul ignore file */

const isSafari_1 = __webpack_require__("a54e");

function registerServiceWorker(serviceWorkerPath) {
  if ((0, isSafari_1.isSafariPrivateWindow)()) {
    // Private windows in safari have a known bug with sending cookies
    // in POST requests.  This often breaks cart and checkout, so we choose
    // not to use service workers at all when in safari private windows.
    // See the bug report here: https://bugs.webkit.org/show_bug.cgi?id=186617
    console.log('skipping service worker in Safari private window');
    unregisterServiceWorker();
    return;
  }

  if ('serviceWorker' in navigator) {
    if (document.readyState === 'complete') {
      registerValidSW(serviceWorkerPath);
    } else {
      window.addEventListener('load', () => {
        registerValidSW(serviceWorkerPath);
      });
    }
  }
}

exports.registerServiceWorker = registerServiceWorker;

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (!installingWorker) return;

      installingWorker.onstatechange = () => {
        console.log('[edgio service worker] state:', installingWorker.state);

        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            document.dispatchEvent(new CustomEvent('sw-update-available'));
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

exports.unregisterServiceWorker = unregisterServiceWorker;

/***/ }),

/***/ "297c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prefetch = exports.configure = void 0;

const waitForServiceWorker_1 = __importDefault(__webpack_require__("c101"));

const constants_1 = __webpack_require__("e037");

const getHostName_1 = __importDefault(__webpack_require__("fa1a")); // According to Fastly, 2^13 (8192) is the max number of bytes allowed for a URL:


const MAX_URL_BYTES = 2 ** 13;
const prefetched = new Set();
const defaults = {
  includeCacheMisses: false,
  cacheHost: undefined,
  spaRoutes: [],
  forcePrefetchRatio: 0
};
let options = defaults;
/**
 * Configures prefetching options
 * @param opts
 */

function configure(opts) {
  options = { ...defaults,
    ...opts
  };
}

exports.configure = configure;
/**
 * Prefetches and caches the specified URL.
 *
 * **Example**
 *
 * ```js
 * import { prefetch } from '@edgio/prefetch/window
 *
 * // Prefetches the URL with default PrefetchConfiguration
 * prefetch('/some/url')
 *
 * // Prefetches the URL as fetch with custom PrefetchConfiguration
 * prefetch('/some/url', "fetch", {
 *     // Overrides the default Prefetch TTL or serviceWorkerSeconds value defined in routes.js
 *     maxAgeSeconds: 300, // 5 minutes
 *
 *     // Allows to override the default forcePrefetchRatio value from install() function
 *     includeCacheMisses: true
 * });
 * ```
 * @param {String} url The URL to prefetch
 * @param {String} as Value to use for the "as" attribute of the <link> tag
 * @param {PrefetchConfiguration} config Options to use for the prefetch
 */

async function prefetch(url, as = 'fetch', config = {
  cors: 'anonymous',
  includeCacheMisses: options.includeCacheMisses,
  forcePrefetchRatio: options.forcePrefetchRatio
}) {
  var _a, _b, _c, _d, _e; // In case service-worker was not registered by our install() function,
  // this function will add eventListener manually
  // @ts-ignore


  if (!window.swEventListenerAdded) {
    // Dynamic import is required to avoid circular dependency
    ;
    (await Promise.resolve().then(() => __importStar(__webpack_require__("71a0")))).default();
  }

  if (typeof url === 'undefined') {
    console.error(`prefetch() called with an undefined url`);
    return;
  } // Set values from global config if any of config options is missing
  // Set default value if global config value is undefined


  config.cors = (_a = config.cors) !== null && _a !== void 0 ? _a : 'anonymous';
  config.includeCacheMisses = (_c = (_b = config.includeCacheMisses) !== null && _b !== void 0 ? _b : options.includeCacheMisses) !== null && _c !== void 0 ? _c : false;
  config.forcePrefetchRatio = (_e = (_d = config.forcePrefetchRatio) !== null && _d !== void 0 ? _d : options.forcePrefetchRatio) !== null && _e !== void 0 ? _e : 0; // @ts-ignore

  if (config.headers) {
    console.warn('The prefetch `headers` configuration option has been removed as it is not compatible with the service-worker prefetch mechanism. Please set headers in your routes.js file with `setRequestHeader` if required.');
  }

  const cacheUrl = modifyUrl(url, config);

  if (typeof TextEncoder !== 'undefined' && new TextEncoder().encode(cacheUrl).length > MAX_URL_BYTES) {
    console.warn(`URL is too many characters to prefetch and cache: ${cacheUrl}`);
    return;
  } // This causes all the prefetch request to be called even though they are already cached in SW,
  // but they should be served from SW cache anyway. The impact to the performance with hmtl DOM changes is minimal,
  // tested with 1k prefetch calls.


  if (prefetched.has(cacheUrl)) {
    let prefetchLink = document.querySelector(`link[href='${cacheUrl}']`);
    prefetchLink === null || prefetchLink === void 0 ? void 0 : prefetchLink.remove();
  }

  prefetched.add(cacheUrl);
  await (0, waitForServiceWorker_1.default)();
  const link = document.createElement('link');
  const {
    relList
  } = link;
  link.setAttribute('href', cacheUrl);

  if (config.cors) {
    link.setAttribute('crossorigin', config.cors);
  }

  link.setAttribute('rel', relList.supports('preload') &&
  /* istanbul ignore next */
  !relList.supports('prefetch') ?
  /* istanbul ignore next */
  'preload' : 'prefetch' // Safari does not support prefetch so we use preload instead
  );
  link.setAttribute('as', as);
  document.head.append(link);
}

exports.prefetch = prefetch;

function modifyUrl(url, config) {
  const {
    body,
    method,
    maxAgeSeconds
  } = config;
  const parsed = new URL(url, window.origin);
  maybeAddHeadParam(parsed);

  if (parsed.hostname === (0, getHostName_1.default)()) {
    // If we are prefetching from Edgio sidecar, rewrite the URL to use the sidecar's domain name
    if (options.cacheHost) {
      const cacheHostUrl = new URL(`https://${options.cacheHost}`);
      parsed.hostname = cacheHostUrl.hostname;
      parsed.protocol = cacheHostUrl.protocol;
      parsed.port = cacheHostUrl.port;
    }

    appendSearchParam(parsed, constants_1.DEVTOOLS_PREFETCH_QUERY_PARAM, '1');
    maybeAddThrottleParam(parsed, config);
  }

  if (body) {
    appendSearchParam(parsed, constants_1.POST_BODY_QUERY_PARAM, body);
  }

  if (method) {
    appendSearchParam(parsed, constants_1.METHOD_QUERY_PARAM, method);
  }

  if (maxAgeSeconds && maxAgeSeconds > 0) {
    appendSearchParam(parsed, constants_1.PREFETCH_TTL_PARAM, maxAgeSeconds.toString());
  }

  return parsed.toString();
}

function appendSearchParam(url, name, value) {
  const separator = url.search.length ? '&' : '?';
  url.search += `${separator}${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
}
/**
 * Adds the query param that indicates to the service worker that a request may be throttled
 * @param url
 * @param config
 */


function maybeAddThrottleParam(url, config) {
  if (!config.includeCacheMisses && shouldAcceptThrottling(config)) {
    appendSearchParam(url, constants_1.THROTTLED_QUERY_PARAM, '1');
  }
}
/**
 * Returns true if the next prefetch request should only be served from the edge cache.
 * This is done by comparing a random number between 0 and 1 to options.forcePrefetchRatio
 */


function shouldAcceptThrottling(config) {
  return !config.forcePrefetchRatio || Math.random() > config.forcePrefetchRatio;
}

function maybeAddHeadParam(url) {
  options.spaRoutes.some(routePattern => {
    if (routePattern.test(url.pathname)) {
      appendSearchParam(url, constants_1.HEAD_QUERY_PARAM, '1');
      return true;
    }
  });
}

/***/ }),

/***/ "535d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const prefetch_1 = __webpack_require__("297c");

const registerServiceWorker_1 = __webpack_require__("112a");

const watchElements_1 = __importDefault(__webpack_require__("e495"));

const listenForSwMessages_1 = __importDefault(__webpack_require__("71a0")); // The following was removed for the 7.x release because we removed support for cache-manifest.js
// import watchLinks from './watchLinks'
// import loadManifest from './loadManifest'
// import CacheManifest, { CacheManifestEntry } from '@edgio/core/router/CacheManifest'


const defaults = {
  includeCacheMisses: false,
  cacheHost: undefined,
  forcePrefetchRatio: 0
};
/**
 * Installs the service worker, prefetches any URLs specified in `prefetchURLs` and watches
 * all links whose `href` attribute matches one of the specified `prefetchPatterns`.  When
 * a matching link is visible in the viewport, the destination URL will be prefetched and
 * added to the cache.
 * @param options
 */

async function install(options) {
  options = { ...defaults,
    ...options
  };
  const {
    serviceWorker
  } = navigator;

  if (typeof serviceWorker === 'undefined') {
    return;
  }

  const {
    prefetchURLs,
    watch,
    serviceWorkerPath = '/service-worker.js'
    /*, observe*/

  } = options; // The following was removed for the 7.x release because we removed support for cache-manifest.js
  // await loadManifest({ cacheHost: options.cacheHost })
  // const cacheManifest: CacheManifest = CacheManifest.fromEntries(
  //   // @ts-ignore
  //   window.__EDGIO_CACHE_MANIFEST__ || []
  // )
  // const prefetchPatterns: CacheManifestEntry[] = [...(options.prefetchPatterns || [])].map(
  //   routeRegex => ({
  //     criteriaPath: routeRegex.source,
  //     route: routeRegex.source,
  //     cacheOptions: { edge: { maxAgeSeconds: 1 }, browser: { serviceWorkerSeconds: 1 } },
  //     returnsResponse: false,
  //   })
  // )
  // spaRoutes.push(...cacheManifest.spaRoutes)

  (0, prefetch_1.configure)({ ...options
  }); // install the service worker

  (0, registerServiceWorker_1.registerServiceWorker)(serviceWorkerPath); // prefetch requested URLs

  prefetchURLs === null || prefetchURLs === void 0 ? void 0 : prefetchURLs.forEach(url => (0, prefetch_1.prefetch)(url)); // The following was removed for the 7.x release because we removed support for cache-manifest.js
  // watch links currently in the DOM as well as any links that are added in the future
  // watchLinks(cacheManifest, observe) // observer options only needs supplied to the first call since this creates the MutationObserver
  // watchLinks(CacheManifest.fromEntries(prefetchPatterns))

  (0, watchElements_1.default)(watch);
  (0, listenForSwMessages_1.default)();
}

exports.default = install;

/***/ }),

/***/ "54de":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getUserAgent() {
  return navigator.userAgent;
}

exports.default = getUserAgent;

/***/ }),

/***/ "6ce7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = exports.waitForServiceWorker = exports.prefetch = void 0;

var prefetch_1 = __webpack_require__("297c");

Object.defineProperty(exports, "prefetch", {
  enumerable: true,
  get: function () {
    return prefetch_1.prefetch;
  }
});

var waitForServiceWorker_1 = __webpack_require__("c101");

Object.defineProperty(exports, "waitForServiceWorker", {
  enumerable: true,
  get: function () {
    return __importDefault(waitForServiceWorker_1).default;
  }
});

var install_1 = __webpack_require__("535d");

Object.defineProperty(exports, "install", {
  enumerable: true,
  get: function () {
    return __importDefault(install_1).default;
  }
});

/***/ }),

/***/ "71a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const prefetch_1 = __webpack_require__("297c");
/**
 * Adds event listener for messages sent by service-worker if it wasn't added already
 */


function listenForSwMessages() {
  const {
    serviceWorker
  } = navigator; // In case service-worker was not registered or eventListener for messages was already added, do nothing
  // @ts-ignore

  if (typeof serviceWorker === 'undefined' || window.swEventListenerAdded) {
    return;
  }

  serviceWorker.addEventListener('message', event => {
    if (event.data.action === 'prefetch') {
      (0, prefetch_1.prefetch)(event.data.url, event.data.as, event.data.options);
    }
  }); // @ts-ignore

  window.swEventListenerAdded = true;
}

exports.default = listenForSwMessages;

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "98fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Runs a callback function when an element it is visible in the viewport
 * @param {HTMLElement} el The element
 * @param {Function} callback The function to call once the element is visible
 */

function runWhenVisible(el, callback) {
  /* istanbul ignore next */
  if (typeof IntersectionObserver === 'undefined') return;
  const observer = new IntersectionObserver(entries => {
    // if intersectionRatio is 0, the element is out of view and we do not need to do anything.
    if (entries[0].intersectionRatio > 0) {
      observer.disconnect();
      callback(el);
    }
  }, {
    // setting this to > 0 to avoid a race condition where an element comes into the
    // viewport at the same time as display/visibility becomes block/visible, and
    // the IntersectionObserver is then only triggered with a ratio of 0
    threshold: 0.01
  }); // Note: apparently we don't need to clean these up when the observed node is removed.
  // See https://stackoverflow.com/questions/51106261/should-mutationobservers-be-removed-disconnected-when-the-attached-dom-node-is-r/51106262#51106262

  observer.observe(el);
}

exports.default = runWhenVisible;

/***/ }),

/***/ "a54e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafariPrivateWindow = exports.isSafari = void 0;

const getUserAgent_1 = __importDefault(__webpack_require__("54de"));

let _isSafari = null;

function isSafari() {
  if (_isSafari == null) {
    _isSafari = /^((?!chrome|android).)*safari/i.test((0, getUserAgent_1.default)());
  }

  return _isSafari;
}

exports.isSafari = isSafari;
/**
 * Returns true if this is a private window in safari
 * From https://stackoverflow.com/questions/12821127/how-to-check-if-ios-is-using-private-browsing/47642304#47642304
 */

function isSafariPrivateWindow() {
  if (!isSafari()) return false;

  try {
    // @ts-ignore
    window.openDatabase(null, null, null, null);
    return false;
  } catch (_) {
    return true;
  }
}

exports.isSafariPrivateWindow = isSafariPrivateWindow;

/***/ }),

/***/ "c101":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Resolves when the service worker has been installed.
 */

async function waitForServiceWorker() {
  if (!navigator.serviceWorker || !navigator.serviceWorker.ready) {
    throw new Error('service worker not supported');
  }

  await navigator.serviceWorker.ready;

  if (navigator.serviceWorker.controller) {
    return navigator.serviceWorker.controller;
  } else {
    return new Promise((resolve, reject) => {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (navigator.serviceWorker.controller) {
          resolve(navigator.serviceWorker.controller);
        } else {
          reject(new Error('service worker not supported'));
        }
      });
    });
  }
}

exports.default = waitForServiceWorker;

/***/ }),

/***/ "e037":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAR_FUTURE_TTL = exports.DEFLATE_ENCODING = exports.GZIP_ENCODING = exports.BROTLI_ENCODING = exports.IS_BROWSER = exports.EDGIO_IMAGE_OPTIMIZER_PATH = exports.HOSTS_NOINDEX_PERMALINK_REGEX = exports.ROUTES_NOINDEX_GROUP = exports.ROUTES_CATCH_GROUP = exports.ROUTES_FALLBACK = exports.METHOD_QUERY_PARAM = exports.POST_BODY_QUERY_PARAM = exports.HEAD_QUERY_PARAM = exports.DEVTOOLS_PREFETCH_QUERY_PARAM = exports.PREFETCH_TTL_PARAM = exports.PREFETCH_QUERY_PARAM = exports.THROTTLED_QUERY_PARAM = exports.CACHING_DEBUG_CACHEABLE = exports.CACHING_DEBUG_STATUS = exports.CACHING_DEBUG_HEADERS = exports.CACHEABLE_METHODS = exports.CACHING_STATUS = exports.HTTP_HEADERS = exports.HTTP_METHODS = exports.JS_BACKEND_HOSTNAME = exports.BACKENDS = exports.ACTIONS = exports.EDGIO_UNCACHED_PREFETCH_STATUS = exports.EDGIO_TOO_MANY_HEADERS_STATUS_CODE = exports.EDGIO_MAX_USER_HEADERS_ALLOWED = exports.EDGIO_SERVERLESS_HINTS = exports.EDGIO_SERVERLESS_HINT_HEADER = exports.EDGIO_HEADERS_PREFIX = exports.EDGIO_DEPLOYMENT_TYPE_AWS = exports.EDGIO_EDGE_FUNCTION_ENV_VARIABLES = exports.EDGIO_ENV_VARIABLES = exports.EDGIO_ASSET_ALIASES_FILE = exports.EDGIO_CONFIG_FILE = void 0;
/**
 * Edgio configuration file name.
 */

exports.EDGIO_CONFIG_FILE = 'edgio.config.js';
/**
 * Indicate asset files that need to be uploaded under a different
 * bucket key.
 * It contains values like
 * {
 *   '/posts' => '/posts/index.html'
 * }
 */

exports.EDGIO_ASSET_ALIASES_FILE = 'asset-aliases.json';
/**
 * Environment variables used by Edgio.
 */

exports.EDGIO_ENV_VARIABLES = {
  /**
   * Edgio configuration environment variable key.
   */
  config: 'EDGIO_CONFIG',

  /**
   * Edgio internal configuration environment variable key.
   */
  internalConfig: 'EDGIO_INTERNAL_CONFIG',

  /**
   * Indicates whether code is running locally or in the cloud.
   * @private
   */
  deploymentType: 'EDGIO_DEPLOYMENT_TYPE',

  /**
   * Allows Edgio development team to easily override Edgio version
   * during development process.
   * @private
   */
  versionOverride: 'EDGIO_VERSION_OVERRIDE',

  /**
   * Indicates that we are running a production build.
   * @private
   */
  productionBuild: 'EDGIO_PRODUCTION_BUILD',

  /**
   * Indicates that we are running app locally.
   * @private
   */
  local: 'EDGIO_LOCAL',

  /**
   * Turns on the cache when set to 'true'.
   * @private
   */
  cache: 'EDGIO_CACHE'
};
/**
 * Environment variables used by Edgio Edge Functions.
 */

exports.EDGIO_EDGE_FUNCTION_ENV_VARIABLES = {
  /**
   * The path to the edge function within the project.
   */
  path: '__EDGE_FUNCTION_PATH__',

  /**
   * The edge function's QuickJS bytecode (base64 encoded).
   */
  quickjsBytecodeBase64: '__EDGE_FUNCTION_QUICKJS_BYTECODE_BASE64__'
};
/**
 * Indicates that code is running in AWS.
 * @private
 */

exports.EDGIO_DEPLOYMENT_TYPE_AWS = 'AWS';
/**
 * Prefix of all Edgio headers.
 */

exports.EDGIO_HEADERS_PREFIX = 'x-edg-';
/**
 * Instructs the runtime to forward the request directly to the user's app or a function rather than processing
 * edge-control rules.
 * @private
 */

exports.EDGIO_SERVERLESS_HINT_HEADER = 'x-edg-serverless-hint';
/**
 * Instructs the runtime to forward the request directly one of the router's functions by hint name.
 * @private
 */

exports.EDGIO_SERVERLESS_HINTS = {
  // Instructs the runtime to forward the request directly to the user's app.
  app: 'app',
  // Instructs the runtime to forward the request directly one of the router's functions by index.
  compute: 'compute',
  // Instructs the runtime to invoke a compute that will execute a redirect and return early.
  redirect: 'redirect',
  // Instructs the runtime to invoke a compute that will execute a redirect and return early.
  proxy: 'proxy'
};
/**
 * Maximum number of user headers allowed by Edgio platform.
 *
 * We limit the request and response headers allowed to 70. This is due to a limitation that edge has
 * which at the moment supports up to 96 headers. Edge provider itself needs to use some of those headers
 * with the remainder used by our edge code.
 *
 * NOTE: This constant must be equal ot the constant of the same name defined in Edgio buffer proxy.
 * NOTE: If this constant is updated then the constant of the same name has to be updated in @edgio/build-lambda module.
 */

exports.EDGIO_MAX_USER_HEADERS_ALLOWED = 70;
/**
 * Status code returned when there are too many request or response headers.
 *
 * Must be equal to HeaderOverflowError status code as defined in build lambda and Edgio buffer proxy.
 */

exports.EDGIO_TOO_MANY_HEADERS_STATUS_CODE = 542;
/**
 * The status code returned when the edgio_prefetch query param is present and a response could not be found in the cache.
 */

exports.EDGIO_UNCACHED_PREFETCH_STATUS = 412;
/**
 * CDN-as-code configuration actions
 */

exports.ACTIONS = {
  setHeader: 'set-header',
  updateHeader: 'update-header',
  removeHeader: 'remove-header',
  syntheticRes: 'synthetic-response',
  updatePath: 'update-path',
  proxy: 'proxy',
  addCookie: 'add-cookie',
  updateCookie: 'update-cookie',
  removeCookie: 'remove-cookie'
};
/**
 * The backend for cloud functions
 */

exports.BACKENDS = {
  js: '__js__',
  static: '__static__',
  permanentStatic: '__permanent_static__',
  imageOptimizer: '__image_optimizer__'
};
/**
 * The hostname used for the internal service running the user's application.
 */

exports.JS_BACKEND_HOSTNAME = '127.0.0.1';
exports.HTTP_METHODS = {
  head: 'head',
  get: 'get',
  post: 'post',
  delete: 'delete',
  put: 'put',
  patch: 'patch',
  options: 'options'
};
/**
 * Common HTTP headers.
 */

exports.HTTP_HEADERS = {
  acceptEncoding: 'accept-encoding',
  authorization: 'authorization',
  cacheControl: 'cache-control',
  contentEncoding: 'content-encoding',
  contentLength: 'content-length',
  contentType: 'content-type',
  cookie: 'cookie',
  expires: 'expires',
  host: 'host',
  location: 'location',
  range: 'range',
  serverTiming: 'server-timing',
  setCookie: 'set-cookie',
  userAgent: 'user-agent',
  vary: 'vary',
  via: 'via',
  transferEncoding: 'transfer-encoding',
  xEcDebug: 'x-ec-debug',
  xForwardedFor: 'x-forwarded-for',
  xRequestId: 'x-request-id',
  xSwCacheControl: 'x-sw-cache-control',
  xEdgeBrowser: 'x-edg-browser',
  xEdgeCacheControl: 'x-edg-cache-control',
  xEdgeCachingStatus: 'x-edg-caching-status',
  xEdgeClientIp: 'x-edg-client-ip',
  xEdgeComponents: 'x-edg-components',
  xEdgeDestination: 'x-edg-destination',
  xEdgeDevice: 'x-edg-device',
  xEdgeDeviceIsBot: 'x-edg-device-is-bot',
  xEdgeGeoCity: 'x-edg-geo-city',
  xEdgeGeoCountryCode: 'x-edg-geo-country-code',
  xEdgeGeoLatitude: 'x-edg-geo-latitude',
  xEdgeGeoLongitude: 'x-edg-geo-longitude',
  xEdgeGeoPostalCode: 'x-edg-geo-postal-code',
  xEdgeMatchedRoutes: 'x-edg-matched-routes',
  xEdgeProtocol: 'x-edg-protocol',
  xEdgeRoute: 'x-edg-route',
  xEdgeStatus: 'x-edg-status',
  xEdgeSurrogateKey: 'x-edg-surrogate-key',
  xEdgeT: 'x-edg-t',
  xEdgeUserT: 'x-edg-user-t',
  xEdgeVendor: 'x-edg-vendor',
  xEdgeVersion: 'x-edg-version',
  xEdgServerlessError: 'x-edg-serverless-error',
  x0ClientIp: 'x-0-client-ip',
  x0Protocol: 'x-0-protocol',
  x0Version: 'x-0-version'
};
/**
 * Values for x-edg-caching-status
 */

exports.CACHING_STATUS = {
  cached: 'cached',
  hit: 'hit',
  bypassed: 'bypassed',
  private: 'private',
  method: 'method',
  bodyTooBig: 'body-too-big',
  code: 'code',
  setCookie: 'set-cookie',
  noMaxAge: 'no-max-age'
};
exports.CACHEABLE_METHODS = new Set(['get', 'head']);
/**
 * Values for x-edg-caching-status
 */

exports.CACHING_DEBUG_HEADERS = {
  cache: 'x-ec-cache',
  checkCacheable: 'x-ec-check-cacheable',
  cacheState: 'x-ec-cache-state',
  cacheKey: 'x-ec-cache-key'
}; // Caching debug status codes.
// https://docs.edgecast.com/cdn/Content/Reference/Cache_Status_Codes.htm

exports.CACHING_DEBUG_STATUS = {
  configNoCache: 'CONFIG_NOCACHE',
  none: 'NONE',
  tcpClientRefreshMiss: 'TCP_CLIENT_REFRESH_MISS',
  tcpExpiredHit: 'TCP_EXPIRED_HIT',
  tcpExpiredMiss: 'TCP_EXPIRED_MISS',
  tcpHit: 'TCP_HIT',
  tcpMiss: 'TCP_MISS',
  tcpPartialHit: 'TCP_PARTIAL_HIT',
  uncacheable: 'UNCACHEABLE'
};
exports.CACHING_DEBUG_CACHEABLE = {
  yes: 'YES',
  no: 'NO'
};
/**
 * When present, this query parameter will cause Edgio to return a 412 status
 * if a response could not be found in the cache.
 */

exports.THROTTLED_QUERY_PARAM = 'edgio_prefetch';
/**
 * Same value as above but DEPRECATED.
 */

exports.PREFETCH_QUERY_PARAM = exports.THROTTLED_QUERY_PARAM;
/**
 Adds query parameter with custom maxAgeSecond value for service-worker cache if it's specified in PrefetchConfiguration
 */

exports.PREFETCH_TTL_PARAM = 'edgio_prefetch_ttl';
/**
 Labels the request so that devtools will display as prefetched
 */

exports.DEVTOOLS_PREFETCH_QUERY_PARAM = 'edgio_dt_pf';
/**
 * The name of the query parameter used to detect HEAD requests.
 */

exports.HEAD_QUERY_PARAM = 'edgio_head';
/**
 * The name of the query parameter used for the body of POST requests, which is used for the cache key
 */

exports.POST_BODY_QUERY_PARAM = 'pref_edgio_body';
/**
 * The name of the query parameter used for the method of requests, which is used for the cache key
 */

exports.METHOD_QUERY_PARAM = 'pref_edgio_method';
/**
 * Route Group name, which is used in router for fallback routes
 */

exports.ROUTES_FALLBACK = 'fallback';
/**
 * Route Group name, which is used in router for error page routes
 */

exports.ROUTES_CATCH_GROUP = 'catch';
/**
 * Route Group name, which is used in router for noindex routes
 */

exports.ROUTES_NOINDEX_GROUP = 'noindex';
/**
 * Regex used to determine if the host should be excluded from
 * SE indexing
 */

exports.HOSTS_NOINDEX_PERMALINK_REGEX = /\.edgio\.link|\.edgio-perma\.link/;
/**
 * The path for the built-in image optimizer.
 */
// TODO: APPOPS-15850 We are unable to affect this path from XDN repo

exports.EDGIO_IMAGE_OPTIMIZER_PATH = '/__layer0_image_optimizer';
/**
 * Is current environment 'browser'
 */

exports.IS_BROWSER = typeof window !== 'undefined';
/**
 * Brotli encoding code.
 */

exports.BROTLI_ENCODING = 'br';
/**
 * Gzip encoding code.
 */

exports.GZIP_ENCODING = 'gzip';
/**
 * Deflate encoding code.
 */

exports.DEFLATE_ENCODING = 'deflate';
/**
 * One year in seconds
 */

exports.FAR_FUTURE_TTL = '1y';

/***/ }),

/***/ "e495":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const runWhenVisible_1 = __importDefault(__webpack_require__("98fb"));

let observer;
const watchConfigs = new Set();
/**
 * Sets up observers to watch for elements matching the list of selectors, then
 * perform the given callback when an element becomes visible
 * @param {PrefetchWatcherConfig[]} configArr Contains the list of selector/callback pairs
 */

function watchElements(configArr) {
  /* istanbul ignore next */
  if (typeof MutationObserver === 'undefined') return;
  if (!configArr || !configArr.length) return;
  configArr.forEach(watch => watchConfigs.add(watch));

  if (!observer) {
    observer = new MutationObserver(mutationsList => {
      for (let mutation of mutationsList) {
        ;
        [...watchConfigs].forEach(watch => {
          filterBySelector(mutation.addedNodes, watch.selector).forEach(match => (0, runWhenVisible_1.default)(match, watch.callback));
        });
      }
    });
  }

  observer.observe(document.body, {
    subtree: true,
    childList: true
  });
  configArr.forEach(watch => {
    document.querySelectorAll(watch.selector).forEach(match => {
      const el = match;
      (0, runWhenVisible_1.default)(el, watch.callback);
    });
  });
}

exports.default = watchElements;
/**
 * Returns all nodes in the node list that match one of the given selectors
 * @param {NodeList} nodes A node list to filter
 * @param {String} selector Selector used to match elements
 */

function filterBySelector(nodes, selector) {
  const results = new Set();
  Array.from(nodes).forEach(n => {
    if (n.nodeType === Node.ELEMENT_NODE) {
      const el = n;

      if (el.matches(selector)) {
        results.add(el);
      } else {
        const matches = el.querySelectorAll(selector);
        matches.forEach(match => results.add(match));
      }
    }
  });
  return results;
}

/***/ }),

/***/ "fa1a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getHostName() {
  return window.location.hostname;
}

exports.default = getHostName;

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ../prefetch/dist/window/index.js
var dist_window = __webpack_require__("6ce7");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Prefetch.vue?vue&type=script&lang=js&

/* harmony default export */ var Prefetchvue_type_script_lang_js_ = ({
  name: 'Prefetch',
  props: {
    immediately: Boolean,
    url: [String, Function, Promise]
  },
  methods: {
    getChild() {
      var _this$$slots, _this$$slots2, _this$$slots3;

      // Select first component from slots.
      // In vue3 default is function which needs to be evaluated
      let childLinkArray = typeof ((_this$$slots = this.$slots) === null || _this$$slots === void 0 ? void 0 : _this$$slots.default) === 'function' ? (_this$$slots2 = this.$slots) === null || _this$$slots2 === void 0 ? void 0 : _this$$slots2.default() : (_this$$slots3 = this.$slots) === null || _this$$slots3 === void 0 ? void 0 : _this$$slots3.default;
      return Array.isArray(childLinkArray) && childLinkArray.length > 0 ? childLinkArray[0] : null;
    },

    async prefetchUrl() {
      var _childLink$componentO, _childLink$type;

      const childLink = this.getChild();
      if (!childLink) return; // Find out component type
      // vue2 has tag property
      // vue3 has type property

      let componentType = (childLink === null || childLink === void 0 ? void 0 : childLink.type) || (childLink === null || childLink === void 0 ? void 0 : (_childLink$componentO = childLink.componentOptions) === null || _childLink$componentO === void 0 ? void 0 : _childLink$componentO.tag) || (childLink === null || childLink === void 0 ? void 0 : childLink.tag) || null;
      componentType = typeof (childLink === null || childLink === void 0 ? void 0 : childLink.type) === 'string' ? childLink === null || childLink === void 0 ? void 0 : childLink.type : componentType;
      componentType = typeof (childLink === null || childLink === void 0 ? void 0 : childLink.type) === 'object' ? childLink === null || childLink === void 0 ? void 0 : (_childLink$type = childLink.type) === null || _childLink$type === void 0 ? void 0 : _childLink$type.name : componentType;
      let componentHref = null; // vue 2

      if (childLink === null || childLink === void 0 ? void 0 : childLink.tag) {
        var _childLink$componentO2, _childLink$componentO3;

        const vue2SupportedComponents = ['router-link', 'nuxt-link'];
        componentHref = componentType === 'a' ? childLink.data.attrs.href : componentHref;
        componentHref = componentType !== 'a' && vue2SupportedComponents.includes(componentType) ? childLink === null || childLink === void 0 ? void 0 : (_childLink$componentO2 = childLink.componentOptions) === null || _childLink$componentO2 === void 0 ? void 0 : (_childLink$componentO3 = _childLink$componentO2.propsData) === null || _childLink$componentO3 === void 0 ? void 0 : _childLink$componentO3.to : componentHref;
      } // vue 3


      if (childLink === null || childLink === void 0 ? void 0 : childLink.type) {
        var _childLink$props, _childLink$props2;

        const vue3SupportedComponents = ['NuxtLink', 'RouterLink'];
        componentHref = componentType === 'a' ? childLink === null || childLink === void 0 ? void 0 : (_childLink$props = childLink.props) === null || _childLink$props === void 0 ? void 0 : _childLink$props.href : componentHref;
        componentHref = componentType !== 'a' && vue3SupportedComponents.includes(componentType) ? childLink === null || childLink === void 0 ? void 0 : (_childLink$props2 = childLink.props) === null || _childLink$props2 === void 0 ? void 0 : _childLink$props2.to : componentHref;
      } // Get URL from component prop


      let url = await (typeof this.url === 'function' ? this.url(componentHref) : this.url); // Use children component's 'href' or 'to' props
      // when no URL prop is provided

      url = !url ? componentHref : url;
      Object(dist_window["prefetch"])(url);
      return componentHref;
    }

  },

  mounted() {
    if (this.immediately) {
      // Prefetch URL when immediately prop is provided
      this.prefetchUrl();
      return;
    }

    this.observer = new IntersectionObserver(entries => {
      // if intersectionRatio is 0, the element is out of view
      if (entries[0].intersectionRatio === 0 || !entries[0].isIntersecting) return;
      this.prefetchUrl();
      this.observer.disconnect();
    });
    this.$nextTick(() => {
      const childLink = this.getChild(); // vue 2

      if (childLink && childLink.elm) {
        this.observer.observe(childLink.elm);
        return;
      } // vue 3


      if (childLink && childLink.el) {
        this.observer.observe(childLink.el);
        return;
      } // TODO: Write working implementation with IntersectionObserver for vue3.
      // The childLink.el is null in most of the cases and we can't access the exact HTML DOM element
      // from the slot component and observe it
      // When there's no element to observe, prefetch URL immediately


      this.prefetchUrl();
    });
  },

  destroyed() {
    this.$emit('destroyed');
    if (this.observer) this.observer.disconnect();
  },

  render() {
    var _this$$slots4, _this$$slots5;

    // vue 3
    if (typeof ((_this$$slots4 = this.$slots) === null || _this$$slots4 === void 0 ? void 0 : _this$$slots4.default) === 'function') return this.$slots.default(); // vue 2

    if (Array.isArray((_this$$slots5 = this.$slots) === null || _this$$slots5 === void 0 ? void 0 : _this$$slots5.default)) return this.$slots.default[0];
    return null;
  }

});
// CONCATENATED MODULE: ./src/Prefetch.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Prefetchvue_type_script_lang_js_ = (Prefetchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/Prefetch.vue
var render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  src_Prefetchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Prefetch = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Prefetch);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=Prefetch.umd.js.map