(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    if (onNavigate) {
        let isDefaultPrevented = false;
        onNavigate({
            preventDefault: ()=>{
                isDefaultPrevented = true;
            }
        });
        if (isDefaultPrevented) {
            return;
        }
    }
    _react.default.startTransition(()=>{
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    });
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto' && props[key] !== 'unstable_forceStale') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto" | "unstable_forceStale"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = '';
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (arg) {
                classes = appendClass(classes, parseValue(arg));
            }
        }
        return classes;
    }
    function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
            return arg;
        }
        if (typeof arg !== 'object') {
            return '';
        }
        if (Array.isArray(arg)) {
            return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
            return arg.toString();
        }
        var classes = '';
        for(var key in arg){
            if (hasOwn.call(arg, key) && arg[key]) {
                classes = appendClass(classes, key);
            }
        }
        return classes;
    }
    function appendClass(value, newClass) {
        if (!newClass) {
            return value;
        }
        if (value) {
            return value + ' ' + newClass;
        }
        return value + newClass;
    }
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // register as 'classnames', consistent with npm package name
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return classNames;
        }());
    } else {
        window.classNames = classNames;
    }
})();
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/warning/warning.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
var warning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++){
            args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++){
            args[key - 2] = arguments[key];
        }
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
            printWarning.apply(null, [
                format
            ].concat(args));
        }
    };
}
module.exports = warning;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/invariant/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var invariant = function(condition, format, a, b, c, d, e, f) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }
    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            var args = [
                a,
                b,
                c,
                d,
                e,
                f
            ];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
module.exports = invariant;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canAcceptRef",
    ()=>canAcceptRef,
    "defaultKey",
    ()=>defaultKey,
    "isProp",
    ()=>isProp,
    "uncontrolledPropTypes",
    ()=>uncontrolledPropTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$invariant$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/invariant/browser.js [app-client] (ecmascript)");
;
var noop = function noop() {};
function readOnlyPropType(handler, name) {
    return function(props, propName) {
        if (props[propName] !== undefined) {
            if (!props[handler]) {
                return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
            }
        }
    };
}
function uncontrolledPropTypes(controlledValues, displayName) {
    var propTypes = {};
    Object.keys(controlledValues).forEach(function(prop) {
        // add default propTypes for folks that use runtime checks
        propTypes[defaultKey(prop)] = noop;
        if ("TURBOPACK compile-time truthy", 1) {
            var handler = controlledValues[prop];
            !(typeof handler === 'string' && handler.trim().length) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$invariant$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : "TURBOPACK unreachable" : void 0;
            propTypes[prop] = readOnlyPropType(handler, displayName);
        }
    });
    return propTypes;
}
function isProp(props, prop) {
    return props[prop] !== undefined;
}
function defaultKey(key) {
    return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
function canAcceptRef(component) {
    return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/hook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useUncontrolled,
    "useUncontrolledProp",
    ()=>useUncontrolledProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/utils.js [app-client] (ecmascript)");
;
;
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
;
;
function useUncontrolledProp(propValue, defaultValue, handler) {
    var wasPropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(propValue !== undefined);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue), stateValue = _useState[0], setState = _useState[1];
    var isProp = propValue !== undefined;
    var wasProp = wasPropRef.current;
    wasPropRef.current = isProp;
    /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */ if (!isProp && wasProp && stateValue !== defaultValue) {
        setState(defaultValue);
    }
    return [
        isProp ? propValue : stateValue,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useUncontrolledProp.useCallback": function(value) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                if (handler) handler.apply(void 0, [
                    value
                ].concat(args));
                setState(value);
            }
        }["useUncontrolledProp.useCallback"], [
            handler
        ])
    ];
}
;
function useUncontrolled(props, config) {
    return Object.keys(config).reduce(function(result, fieldName) {
        var _extends2;
        var _ref = result, defaultValue = _ref[__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultKey"](fieldName)], propsValue = _ref[fieldName], rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref, [
            __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultKey"](fieldName),
            fieldName
        ].map(_toPropertyKey));
        var handlerName = config[fieldName];
        var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
    }, props);
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inheritsLoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-client] (ecmascript)");
;
function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, o);
}
;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "polyfill",
    ()=>polyfill
]);
function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) {
        this.setState(state);
    }
}
function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
        return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
    try {
        var prevProps = this.props;
        var prevState = this.state;
        this.props = nextProps;
        this.state = nextState;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally{
        this.props = prevProps;
        this.state = prevState;
    }
}
// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
    var prototype = Component.prototype;
    if (!prototype || !prototype.isReactComponent) {
        throw new Error('Can only polyfill class components');
    }
    if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
        return Component;
    }
    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === 'function') {
        foundWillMountName = 'componentWillMount';
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
    }
    if (typeof prototype.componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'componentWillReceiveProps';
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
    }
    if (typeof prototype.componentWillUpdate === 'function') {
        foundWillUpdateName = 'componentWillUpdate';
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
    }
    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var componentName = Component.displayName || Component.name;
        var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
        throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
    }
    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === 'function') {
        prototype.componentWillMount = componentWillMount;
        prototype.componentWillReceiveProps = componentWillReceiveProps;
    }
    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
        if (typeof prototype.componentDidUpdate !== 'function') {
            throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
        }
        prototype.componentWillUpdate = componentWillUpdate;
        var componentDidUpdate = prototype.componentDidUpdate;
        prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
            // 16.3+ will not execute our will-update method;
            // It will pass a snapshot value to did-update though.
            // Older versions will require our polyfilled will-update value.
            // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
            // Because for <= 15.x versions this might be a "prevContext" object.
            // We also can't just check "__reactInternalSnapshot",
            // Because get-snapshot might return a falsy value.
            // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
            var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
            componentDidUpdate.call(this, prevProps, prevState, snapshot);
        };
    }
    return Component;
}
;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/uncontrollable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>uncontrollable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$lifecycles$2d$compat$2f$react$2d$lifecycles$2d$compat$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$invariant$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/invariant/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/utils.js [app-client] (ecmascript)");
;
;
;
var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
;
;
;
;
function uncontrollable(Component, controlledValues, methods) {
    if (methods === void 0) {
        methods = [];
    }
    var displayName = Component.displayName || Component.name || 'Component';
    var canAcceptRef = __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canAcceptRef"](Component);
    var controlledProps = Object.keys(controlledValues);
    var PROPS_TO_OMIT = controlledProps.map(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultKey"]);
    !(canAcceptRef || !methods.length) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$invariant$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : "TURBOPACK unreachable" : void 0;
    var UncontrolledComponent = /*#__PURE__*/ function(_React$Component) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(UncontrolledComponent, _React$Component);
        function UncontrolledComponent() {
            var _this;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            _this = _React$Component.call.apply(_React$Component, [
                this
            ].concat(args)) || this;
            _this.handlers = Object.create(null);
            controlledProps.forEach(function(propName) {
                var handlerName = controlledValues[propName];
                var handleChange = function handleChange(value) {
                    if (_this.props[handlerName]) {
                        var _this$props;
                        _this._notifying = true;
                        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                            args[_key2 - 1] = arguments[_key2];
                        }
                        (_this$props = _this.props)[handlerName].apply(_this$props, [
                            value
                        ].concat(args));
                        _this._notifying = false;
                    }
                    if (!_this.unmounted) _this.setState(function(_ref) {
                        var _extends2;
                        var values = _ref.values;
                        return {
                            values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
                        };
                    });
                };
                _this.handlers[handlerName] = handleChange;
            });
            if (methods.length) _this.attachRef = function(ref) {
                _this.inner = ref;
            };
            var values = Object.create(null);
            controlledProps.forEach(function(key) {
                values[key] = _this.props[__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultKey"](key)];
            });
            _this.state = {
                values: values,
                prevProps: {}
            };
            return _this;
        }
        var _proto = UncontrolledComponent.prototype;
        _proto.shouldComponentUpdate = function shouldComponentUpdate() {
            //let setState trigger the update
            return !this._notifying;
        };
        UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
            var values = _ref2.values, prevProps = _ref2.prevProps;
            var nextState = {
                values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Object.create(null), values),
                prevProps: {}
            };
            controlledProps.forEach(function(key) {
                /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */ nextState.prevProps[key] = props[key];
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProp"](props, key) && __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProp"](prevProps, key)) {
                    nextState.values[key] = props[__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultKey"](key)];
                }
            });
            return nextState;
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
            this.unmounted = true;
        };
        _proto.render = function render() {
            var _this2 = this;
            var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_this$props2, [
                "innerRef"
            ]);
            PROPS_TO_OMIT.forEach(function(prop) {
                delete props[prop];
            });
            var newProps = {};
            controlledProps.forEach(function(propName) {
                var propValue = _this2.props[propName];
                newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, newProps, this.handlers, {
                ref: innerRef || this.attachRef
            }));
        };
        return UncontrolledComponent;
    }(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$lifecycles$2d$compat$2f$react$2d$lifecycles$2d$compat$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polyfill"])(UncontrolledComponent);
    UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
    UncontrolledComponent.propTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        innerRef: function innerRef() {}
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uncontrolledPropTypes"](controlledValues, displayName));
    methods.forEach(function(method) {
        UncontrolledComponent.prototype[method] = function $proxiedMethod() {
            var _this$inner;
            return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
        };
    });
    var WrappedComponent = UncontrolledComponent;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef) {
        WrappedComponent = __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function(props, ref) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(UncontrolledComponent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
                innerRef: ref,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                },
                __self: this
            }));
        });
        WrappedComponent.propTypes = UncontrolledComponent.propTypes;
    }
    WrappedComponent.ControlledComponent = Component;
    /**
   * useful when wrapping a Component and you want to control
   * everything
   */ WrappedComponent.deferControlTo = function(newComponent, additions, nextMethods) {
        if (additions === void 0) {
            additions = {};
        }
        return uncontrollable(newComponent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, controlledValues, additions), nextMethods);
    };
    return WrappedComponent;
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/hook.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$uncontrollable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/uncontrollable.js [app-client] (ecmascript)");
;
;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/hook.js [app-client] (ecmascript) <export default as useUncontrolled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUncontrolled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/hook.js [app-client] (ecmascript)");
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/dom-helpers/esm/querySelectorAll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>qsa
]);
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
    return toArray(element.querySelectorAll(selector));
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useForceUpdate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useForceUpdate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useForceUpdate() {
    // The toggling state value is designed to defeat React optimizations for skipping
    // updates when they are strictly equal to the last state value
    const [, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
        "useForceUpdate.useReducer": (revision)=>revision + 1
    }["useForceUpdate.useReducer"], 0);
    return dispatch;
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "mergeRefs",
    ()=>mergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const toFnRef = (ref)=>!ref || typeof ref === 'function' ? ref : (value)=>{
        ref.current = value;
    };
function mergeRefs(refA, refB) {
    const a = toFnRef(refA);
    const b = toFnRef(refB);
    return (value)=>{
        if (a) a(value);
        if (b) b(value);
    };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */ function useMergedRefs(refA, refB) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMergedRefs.useMemo": ()=>mergeRefs(refA, refB)
    }["useMergedRefs.useMemo"], [
        refA,
        refB
    ]);
}
const __TURBOPACK__default__export__ = useMergedRefs;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/NavContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const NavContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
NavContext.displayName = 'NavContext';
const __TURBOPACK__default__export__ = NavContext;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/SelectableContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "makeEventKey",
    ()=>makeEventKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const SelectableContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const makeEventKey = function(eventKey) {
    let href = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (eventKey != null) return String(eventKey);
    return href || null;
};
const __TURBOPACK__default__export__ = SelectableContext;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/TabContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const TabContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const __TURBOPACK__default__export__ = TabContext;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/DataKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATTRIBUTE_PREFIX",
    ()=>ATTRIBUTE_PREFIX,
    "PROPERTY_PREFIX",
    ()=>PROPERTY_PREFIX,
    "dataAttr",
    ()=>dataAttr,
    "dataProp",
    ()=>dataProp
]);
const ATTRIBUTE_PREFIX = "data-rr-ui-";
const PROPERTY_PREFIX = "rrUi";
function dataAttr(property) {
    return "".concat(ATTRIBUTE_PREFIX).concat(property);
}
function dataProp(property) {
    return "".concat(PROPERTY_PREFIX).concat(property);
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */ function useCommittedRef(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCommittedRef.useEffect": ()=>{
            ref.current = value;
        }
    }["useCommittedRef.useEffect"], [
        value
    ]);
    return ref;
}
const __TURBOPACK__default__export__ = useCommittedRef;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEventCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js [app-client] (ecmascript)");
;
;
function useEventCallback(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fn);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEventCallback.useCallback": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return ref.current && ref.current(...args);
        }
    }["useEventCallback.useCallback"], [
        ref
    ]);
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isTrivialHref",
    ()=>isTrivialHref,
    "useButtonProps",
    ()=>useButtonProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _excluded = [
    "as",
    "disabled"
];
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.indexOf(n) >= 0) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
function isTrivialHref(href) {
    return !href || href.trim() === '#';
}
function useButtonProps(param) {
    let { tagName, disabled, href, target, rel, role, onClick, tabIndex = 0, type } = param;
    if (!tagName) {
        if (href != null || target != null || rel != null) {
            tagName = 'a';
        } else {
            tagName = 'button';
        }
    }
    const meta = {
        tagName
    };
    if (tagName === 'button') {
        return [
            {
                type: type || 'button',
                disabled
            },
            meta
        ];
    }
    const handleClick = (event)=>{
        if (disabled || tagName === 'a' && isTrivialHref(href)) {
            event.preventDefault();
        }
        if (disabled) {
            event.stopPropagation();
            return;
        }
        onClick == null ? void 0 : onClick(event);
    };
    const handleKeyDown = (event)=>{
        if (event.key === ' ') {
            event.preventDefault();
            handleClick(event);
        }
    };
    if (tagName === 'a') {
        // Ensure there's a href so Enter can trigger anchor button.
        href || (href = '#');
        if (disabled) {
            href = undefined;
        }
    }
    return [
        {
            role: role != null ? role : 'button',
            // explicitly undefined so that it overrides the props disabled in a spread
            // e.g. <Tag {...props} {...hookProps} />
            disabled: undefined,
            tabIndex: disabled ? undefined : tabIndex,
            href,
            target: tagName === 'a' ? target : undefined,
            'aria-disabled': !disabled ? undefined : disabled,
            rel: tagName === 'a' ? rel : undefined,
            onClick: handleClick,
            onKeyDown: handleKeyDown
        },
        meta
    ];
}
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((_ref, ref)=>{
    let { as: asProp, disabled } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    const [buttonProps, { tagName: Component }] = useButtonProps(Object.assign({
        tagName: asProp,
        disabled
    }, props));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, Object.assign({}, props, buttonProps, {
        ref: ref
    }));
});
Button.displayName = 'Button';
const __TURBOPACK__default__export__ = Button;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/NavItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useNavItem",
    ()=>useNavItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$NavContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/NavContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/SelectableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$DataKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/DataKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/TabContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _excluded = [
    "as",
    "active",
    "eventKey"
];
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.indexOf(n) >= 0) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
;
;
;
;
;
function useNavItem(param) {
    let { key, onClick, active, id, role, disabled } = param;
    const parentOnSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const navContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$NavContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const tabContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    let isActive = active;
    const props = {
        role
    };
    if (navContext) {
        if (!role && navContext.role === 'tablist') props.role = 'tab';
        const contextControllerId = navContext.getControllerId(key != null ? key : null);
        const contextControlledId = navContext.getControlledId(key != null ? key : null);
        // @ts-ignore
        props[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$DataKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])('event-key')] = key;
        props.id = contextControllerId || id;
        isActive = active == null && key != null ? navContext.activeKey === key : active;
        /**
     * Simplified scenario for `mountOnEnter`.
     *
     * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
     * once, it would also complicate the code quite a bit, for very little gain.
     * The following implementation is probably good enough.
     *
     * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
     */ if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props['aria-controls'] = contextControlledId;
    }
    if (props.role === 'tab') {
        props['aria-selected'] = isActive;
        if (!isActive) {
            props.tabIndex = -1;
        }
        if (disabled) {
            props.tabIndex = -1;
            props['aria-disabled'] = true;
        }
    }
    props.onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useNavItem.useEventCallback": (e)=>{
            if (disabled) return;
            onClick == null ? void 0 : onClick(e);
            if (key == null) {
                return;
            }
            if (parentOnSelect && !e.isPropagationStopped()) {
                parentOnSelect(key, e);
            }
        }
    }["useNavItem.useEventCallback"]);
    return [
        props,
        {
            isActive
        }
    ];
}
const NavItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((_ref, ref)=>{
    let { as: Component = __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], active, eventKey } = _ref, options = _objectWithoutPropertiesLoose(_ref, _excluded);
    const [props, meta] = useNavItem(Object.assign({
        key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeEventKey"])(eventKey, options.href),
        active
    }, options));
    // @ts-ignore
    props[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$DataKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])('active')] = meta.isActive;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, Object.assign({}, options, props, {
        ref: ref
    }));
});
NavItem.displayName = 'NavItem';
const __TURBOPACK__default__export__ = NavItem;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/Nav.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$querySelectorAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/dom-helpers/esm/querySelectorAll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useForceUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useForceUpdate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$NavContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/NavContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/SelectableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/TabContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$DataKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/DataKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$NavItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/NavItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _excluded = [
    "as",
    "onSelect",
    "activeKey",
    "role",
    "onKeyDown"
];
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.indexOf(n) >= 0) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
;
;
;
;
;
;
;
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = ()=>{};
const EVENT_KEY_ATTR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$DataKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])('event-key');
const Nav = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((_ref, ref)=>{
    let { // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div', onSelect, activeKey, role, onKeyDown } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
    // and don't want to reset the set in the effect
    const forceUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useForceUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const needsRefocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const parentOnSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const tabContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    let getControlledId, getControllerId;
    if (tabContext) {
        role = role || 'tablist';
        activeKey = tabContext.activeKey;
        // TODO: do we need to duplicate these?
        getControlledId = tabContext.getControlledId;
        getControllerId = tabContext.getControllerId;
    }
    const listNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getNextActiveTab = (offset)=>{
        const currentListNode = listNode.current;
        if (!currentListNode) return null;
        const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$querySelectorAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentListNode, "[".concat(EVENT_KEY_ATTR, "]:not([aria-disabled=true])"));
        const activeChild = currentListNode.querySelector('[aria-selected=true]');
        if (!activeChild || activeChild !== document.activeElement) return null;
        const index = items.indexOf(activeChild);
        if (index === -1) return null;
        let nextIndex = index + offset;
        if (nextIndex >= items.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = items.length - 1;
        return items[nextIndex];
    };
    const handleSelect = (key, event)=>{
        if (key == null) return;
        onSelect == null ? void 0 : onSelect(key, event);
        parentOnSelect == null ? void 0 : parentOnSelect(key, event);
    };
    const handleKeyDown = (event)=>{
        onKeyDown == null ? void 0 : onKeyDown(event);
        if (!tabContext) {
            return;
        }
        let nextActiveChild;
        switch(event.key){
            case 'ArrowLeft':
            case 'ArrowUp':
                nextActiveChild = getNextActiveTab(-1);
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                nextActiveChild = getNextActiveTab(1);
                break;
            default:
                return;
        }
        if (!nextActiveChild) return;
        event.preventDefault();
        handleSelect(nextActiveChild.dataset[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$DataKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataProp"])('EventKey')] || null, event);
        needsRefocusRef.current = true;
        forceUpdate();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            if (listNode.current && needsRefocusRef.current) {
                const activeChild = listNode.current.querySelector("[".concat(EVENT_KEY_ATTR, "][aria-selected=true]"));
                activeChild == null ? void 0 : activeChild.focus();
            }
            needsRefocusRef.current = false;
        }
    }["Nav.useEffect"]);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ref, listNode);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: handleSelect,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$NavContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: {
                role,
                // used by NavLink to determine it's role
                activeKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeEventKey"])(activeKey),
                getControlledId: getControlledId || noop,
                getControllerId: getControllerId || noop
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, Object.assign({}, props, {
                onKeyDown: handleKeyDown,
                ref: mergedRef,
                role: role
            }))
        })
    });
});
Nav.displayName = 'Nav';
const __TURBOPACK__default__export__ = Object.assign(Nav, {
    Item: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$NavItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_BREAKPOINTS",
    ()=>DEFAULT_BREAKPOINTS,
    "DEFAULT_MIN_BREAKPOINT",
    ()=>DEFAULT_MIN_BREAKPOINT,
    "ThemeConsumer",
    ()=>Consumer,
    "createBootstrapComponent",
    ()=>createBootstrapComponent,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useBootstrapBreakpoints",
    ()=>useBootstrapBreakpoints,
    "useBootstrapMinBreakpoint",
    ()=>useBootstrapMinBreakpoint,
    "useBootstrapPrefix",
    ()=>useBootstrapPrefix,
    "useIsRTL",
    ()=>useIsRTL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
const DEFAULT_BREAKPOINTS = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
];
const DEFAULT_MIN_BREAKPOINT = 'xs';
const ThemeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    prefixes: {},
    breakpoints: DEFAULT_BREAKPOINTS,
    minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
const { Consumer, Provider } = ThemeContext;
function ThemeProvider(param) {
    let { prefixes = {}, breakpoints = DEFAULT_BREAKPOINTS, minBreakpoint = DEFAULT_MIN_BREAKPOINT, dir, children } = param;
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[contextValue]": ()=>({
                prefixes: {
                    ...prefixes
                },
                breakpoints,
                minBreakpoint,
                dir
            })
    }["ThemeProvider.useMemo[contextValue]"], [
        prefixes,
        breakpoints,
        minBreakpoint,
        dir
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Provider, {
        value: contextValue,
        children: children
    });
}
function useBootstrapPrefix(prefix, defaultPrefix) {
    const { prefixes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
    const { breakpoints } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    return breakpoints;
}
function useBootstrapMinBreakpoint() {
    const { minBreakpoint } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    return minBreakpoint;
}
function useIsRTL() {
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    return dir === 'rtl';
}
function createBootstrapComponent(Component, opts) {
    if (typeof opts === 'string') opts = {
        prefix: opts
    };
    const isClassy = Component.prototype && Component.prototype.isReactComponent;
    // If it's a functional component make sure we don't break it with a ref
    const { prefix, forwardRefAs = isClassy ? 'ref' : 'innerRef' } = opts;
    const Wrapped = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
        let { ...props } = param;
        props[forwardRefAs] = ref;
        const bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            ...props,
            bsPrefix: bsPrefix
        });
    });
    Wrapped.displayName = "Bootstrap(".concat(Component.displayName || Component.name, ")");
    return Wrapped;
}
;
const __TURBOPACK__default__export__ = ThemeProvider;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/hooks/esm/useCommittedRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */ function useCommittedRef(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCommittedRef.useEffect": ()=>{
            ref.current = value;
        }
    }["useCommittedRef.useEffect"], [
        value
    ]);
    return ref;
}
const __TURBOPACK__default__export__ = useCommittedRef;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/hooks/esm/useEventCallback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEventCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/hooks/esm/useCommittedRef.js [app-client] (ecmascript)");
;
;
function useEventCallback(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fn);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEventCallback.useCallback": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return ref.current && ref.current(...args);
        }
    }["useEventCallback.useCallback"], [
        ref
    ]);
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ListGroupItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/warning/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/hooks/esm/useEventCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$NavItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/NavItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/SelectableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const ListGroupItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { bsPrefix, active, disabled, eventKey, className, variant, action, as, ...props } = param;
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'list-group-item');
    const [navItemProps, meta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$NavItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavItem"])({
        key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeEventKey"])(eventKey, props.href),
        active,
        ...props
    });
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "ListGroupItem.useEventCallback[handleClick]": (event)=>{
            if (disabled) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            navItemProps.onClick(event);
        }
    }["ListGroupItem.useEventCallback[handleClick]"]);
    if (disabled && props.tabIndex === undefined) {
        props.tabIndex = -1;
        props['aria-disabled'] = true;
    }
    const Component = as || (action ? props.href ? 'a' : 'button' : 'div');
    ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(as || !(!action && props.href), '`action=false` and `href` should not be used together.') : "TURBOPACK unreachable";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        ...props,
        ...navItemProps,
        onClick: handleClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, meta.isActive && 'active', disabled && 'disabled', variant && "".concat(bsPrefix, "-").concat(variant), action && "".concat(bsPrefix, "-action"))
    });
});
ListGroupItem.displayName = 'ListGroupItem';
const __TURBOPACK__default__export__ = ListGroupItem;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ListGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/warning/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useUncontrolled$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/hook.js [app-client] (ecmascript) <export default as useUncontrolled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/Nav.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ListGroupItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const ListGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { className, bsPrefix: initialBsPrefix, variant, horizontal, numbered, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as = 'div', ...controlledProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useUncontrolled$3e$__["useUncontrolled"])(props, {
        activeKey: 'onSelect'
    });
    const bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(initialBsPrefix, 'list-group');
    let horizontalVariant;
    if (horizontal) {
        horizontalVariant = horizontal === true ? 'horizontal' : "horizontal-".concat(horizontal);
    }
    ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!(horizontal && variant === 'flush'), '`variant="flush"` and `horizontal` should not be used together.') : "TURBOPACK unreachable";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        ...controlledProps,
        as: as,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, variant && "".concat(bsPrefix, "-").concat(variant), horizontalVariant && "".concat(bsPrefix, "-").concat(horizontalVariant), numbered && "".concat(bsPrefix, "-numbered"))
    });
});
ListGroup.displayName = 'ListGroup';
const __TURBOPACK__default__export__ = Object.assign(ListGroup, {
    Item: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
}),
]);

//# sourceMappingURL=164c2_cc6846c9._.js.map