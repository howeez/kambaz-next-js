(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const Container = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { bsPrefix, fluid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div', className, ...props } = param;
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'container');
    const suffix = typeof fluid === 'string' ? "-".concat(fluid) : '-fluid';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, fluid ? "".concat(prefix).concat(suffix) : prefix)
    });
});
Container.displayName = 'Container';
const __TURBOPACK__default__export__ = Container;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const Row = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { bsPrefix, className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div', ...props } = param;
    const decoratedBsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'row');
    const breakpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapBreakpoints"])();
    const minBreakpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapMinBreakpoint"])();
    const sizePrefix = "".concat(decoratedBsPrefix, "-cols");
    const classes = [];
    breakpoints.forEach((brkPoint)=>{
        const propValue = props[brkPoint];
        delete props[brkPoint];
        let cols;
        if (propValue != null && typeof propValue === 'object') {
            ({ cols } = propValue);
        } else {
            cols = propValue;
        }
        const infix = brkPoint !== minBreakpoint ? "-".concat(brkPoint) : '';
        if (cols != null) classes.push("".concat(sizePrefix).concat(infix, "-").concat(cols));
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, decoratedBsPrefix, ...classes)
    });
});
Row.displayName = 'Row';
const __TURBOPACK__default__export__ = Row;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useCol",
    ()=>useCol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function useCol(param) {
    let { as, bsPrefix, className, ...props } = param;
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'col');
    const breakpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapBreakpoints"])();
    const minBreakpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapMinBreakpoint"])();
    const spans = [];
    const classes = [];
    breakpoints.forEach((brkPoint)=>{
        const propValue = props[brkPoint];
        delete props[brkPoint];
        let span;
        let offset;
        let order;
        if (typeof propValue === 'object' && propValue != null) {
            ({ span, offset, order } = propValue);
        } else {
            span = propValue;
        }
        const infix = brkPoint !== minBreakpoint ? "-".concat(brkPoint) : '';
        if (span) spans.push(span === true ? "".concat(bsPrefix).concat(infix) : "".concat(bsPrefix).concat(infix, "-").concat(span));
        if (order != null) classes.push("order".concat(infix, "-").concat(order));
        if (offset != null) classes.push("offset".concat(infix, "-").concat(offset));
    });
    return [
        {
            ...props,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, ...spans, ...classes)
        },
        {
            as,
            bsPrefix,
            spans
        }
    ];
}
const Col = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref)=>{
    const [{ className, ...colProps }, { as: Component = 'div', bsPrefix, spans }] = useCol(props);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...colProps,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, !spans.length && bsPrefix)
    });
});
Col.displayName = 'Col';
const __TURBOPACK__default__export__ = Col;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Table.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { bsPrefix, className, striped, bordered, borderless, hover, size, variant, responsive, ...props } = param;
    const decoratedBsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'table');
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, decoratedBsPrefix, variant && "".concat(decoratedBsPrefix, "-").concat(variant), size && "".concat(decoratedBsPrefix, "-").concat(size), striped && "".concat(decoratedBsPrefix, "-").concat(typeof striped === 'string' ? "striped-".concat(striped) : 'striped'), bordered && "".concat(decoratedBsPrefix, "-bordered"), borderless && "".concat(decoratedBsPrefix, "-borderless"), hover && "".concat(decoratedBsPrefix, "-hover"));
    const table = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("table", {
        ...props,
        className: classes,
        ref: ref
    });
    if (responsive) {
        let responsiveClass = "".concat(decoratedBsPrefix, "-responsive");
        if (typeof responsive === 'string') {
            responsiveClass = "".concat(responsiveClass, "-").concat(responsive);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: responsiveClass,
            children: table
        });
    }
    return table;
});
Table.displayName = 'Table';
const __TURBOPACK__default__export__ = Table;
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
"[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ListGroupItem.js [app-client] (ecmascript) <export default as ListGroupItem>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListGroupItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ListGroupItem.js [app-client] (ecmascript)");
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
// TODO
const FormContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const __TURBOPACK__default__export__ = FormContext;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/warning/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
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
const FormLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'label', bsPrefix, column = false, visuallyHidden = false, className, htmlFor, ...props } = param;
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-label');
    let columnClass = 'col-form-label';
    if (typeof column === 'string') columnClass = "".concat(columnClass, " ").concat(columnClass, "-").concat(column);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
    ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : "TURBOPACK unreachable";
    htmlFor = htmlFor || controlId;
    if (column) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        as: "label",
        className: classes,
        htmlFor: htmlFor,
        ...props
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: classes,
        htmlFor: htmlFor,
        ...props
    });
});
FormLabel.displayName = 'FormLabel';
const __TURBOPACK__default__export__ = FormLabel;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports.default = module.exports; //# sourceMappingURL=object-assign.js.map
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/prop-types/lib/has.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
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
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var ReactIs = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/react-is/index.js [app-client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
var has = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
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
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/prop-types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/react-is/index.js [app-client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/Code/webdev/kambaz-next-js/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Feedback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
const propTypes = {
    /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */ type: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    /** Display feedback as a tooltip. */ tooltip: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    as: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].elementType
};
const Feedback = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(param, ref)=>{
    let { as: Component = 'div', className, type = 'valid', tooltip = false, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, "".concat(type, "-").concat(tooltip ? 'tooltip' : 'feedback'))
    });
});
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
const __TURBOPACK__default__export__ = Feedback;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormControl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/warning/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Feedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Feedback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
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
const FormControl = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { bsPrefix, type, size, htmlSize, id, className, isValid = false, isInvalid = false, plaintext, readOnly, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'input', ...props } = param;
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-control');
    ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : "TURBOPACK unreachable";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        type: type,
        size: htmlSize,
        ref: ref,
        readOnly: readOnly,
        id: id || controlId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, plaintext ? "".concat(bsPrefix, "-plaintext") : bsPrefix, size && "".concat(bsPrefix, "-").concat(size), type === 'color' && "".concat(bsPrefix, "-color"), isValid && 'is-valid', isInvalid && 'is-invalid')
    });
});
FormControl.displayName = 'FormControl';
const __TURBOPACK__default__export__ = Object.assign(FormControl, {
    Feedback: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Feedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormSelect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const FormSelect = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { bsPrefix, size, htmlSize, className, isValid = false, isInvalid = false, id, ...props } = param;
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-select');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("select", {
        ...props,
        size: htmlSize,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, size && "".concat(bsPrefix, "-").concat(size), isValid && "is-valid", isInvalid && "is-invalid"),
        id: id || controlId
    });
});
FormSelect.displayName = 'FormSelect';
const __TURBOPACK__default__export__ = FormSelect;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormCheckInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const FormCheckInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { id, bsPrefix, className, type = 'checkbox', isValid = false, isInvalid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'input', ...props } = param;
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-check-input');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ref: ref,
        type: type,
        id: id || controlId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
    });
});
FormCheckInput.displayName = 'FormCheckInput';
const __TURBOPACK__default__export__ = FormCheckInput;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormCheckLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const FormCheckLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { bsPrefix, className, htmlFor, ...props } = param;
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-check-label');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
        ...props,
        ref: ref,
        htmlFor: htmlFor || controlId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix)
    });
});
FormCheckLabel.displayName = 'FormCheckLabel';
const __TURBOPACK__default__export__ = FormCheckLabel;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ElementChildren.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forEach",
    ()=>forEach,
    "hasChildOfType",
    ()=>hasChildOfType,
    "map",
    ()=>map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */ function map(children, func) {
    let index = 0;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) ? func(child, index++) : child);
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */ function forEach(children, func) {
    let index = 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].forEach(children, (child)=>{
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child)) func(child, index++);
    });
}
/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */ function hasChildOfType(children, type) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children).some((child)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === type);
}
;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormCheck.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Feedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Feedback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormCheckInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormCheckLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ElementChildren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ElementChildren.js [app-client] (ecmascript)");
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
;
;
;
;
const FormCheck = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { id, bsPrefix, bsSwitchPrefix, inline = false, reverse = false, disabled = false, isValid = false, isInvalid = false, feedbackTooltip = false, feedback, feedbackType, className, style, title = '', type = 'checkbox', label, children, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as = 'input', ...props } = param;
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-check');
    bsSwitchPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsSwitchPrefix, 'form-switch');
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const innerFormContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FormCheck.useMemo[innerFormContext]": ()=>({
                controlId: id || controlId
            })
    }["FormCheck.useMemo[innerFormContext]"], [
        controlId,
        id
    ]);
    const hasLabel = !children && label != null && label !== false || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ElementChildren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChildOfType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        type: type === 'switch' ? 'checkbox' : type,
        ref: ref,
        isValid: isValid,
        isInvalid: isInvalid,
        disabled: disabled,
        as: as
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: innerFormContext,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            style: style,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, hasLabel && bsPrefix, inline && "".concat(bsPrefix, "-inline"), reverse && "".concat(bsPrefix, "-reverse"), type === 'switch' && bsSwitchPrefix),
            children: children || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    input,
                    hasLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: title,
                        children: label
                    }),
                    feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Feedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: feedbackType,
                        tooltip: feedbackTooltip,
                        children: feedback
                    })
                ]
            })
        })
    });
});
FormCheck.displayName = 'FormCheck';
const __TURBOPACK__default__export__ = Object.assign(FormCheck, {
    Input: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Label: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/InputGroupContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
context.displayName = 'InputGroupContext';
const __TURBOPACK__default__export__ = context;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/InputGroupText.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const InputGroupText = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { className, bsPrefix, as: Component = 'span', ...props } = param;
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'input-group-text');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
InputGroupText.displayName = 'InputGroupText';
const __TURBOPACK__default__export__ = InputGroupText;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormCheckInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/InputGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroupText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/InputGroupText.js [app-client] (ecmascript)");
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
const InputGroupCheckbox = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroupText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            type: "checkbox",
            ...props
        })
    });
const InputGroupRadio = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroupText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormCheckInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            type: "radio",
            ...props
        })
    });
const InputGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { bsPrefix, size, hasValidation, className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div', ...props } = param;
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'input-group');
    // Intentionally an empty object. Used in detecting if a dropdown
    // exists under an input group.
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InputGroup.useMemo[contextValue]": ()=>({})
    }["InputGroup.useMemo[contextValue]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            ref: ref,
            ...props,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, size && "".concat(bsPrefix, "-").concat(size), hasValidation && 'has-validation')
        })
    });
});
InputGroup.displayName = 'InputGroup';
const __TURBOPACK__default__export__ = Object.assign(InputGroup, {
    Text: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroupText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Radio: InputGroupRadio,
    Checkbox: InputGroupCheckbox
});
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormFloating.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const FormFloating = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { className, bsPrefix, as: Component = 'div', ...props } = param;
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-floating');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
FormFloating.displayName = 'FormFloating';
const __TURBOPACK__default__export__ = FormFloating;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormRange.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const FormRange = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { bsPrefix, className, id, ...props } = param;
    const { controlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-range');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
        ...props,
        type: "range",
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        id: id || controlId
    });
});
FormRange.displayName = 'FormRange';
const __TURBOPACK__default__export__ = FormRange;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormText.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const FormText = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(param, ref)=>{
    let { bsPrefix, className, as: Component = 'small', muted, ...props } = param;
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-text');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, muted && 'text-muted')
    });
});
FormText.displayName = 'FormText';
const __TURBOPACK__default__export__ = FormText;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
const FormGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { controlId, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div', ...props } = param;
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FormGroup.useMemo[context]": ()=>({
                controlId
            })
    }["FormGroup.useMemo[context]"], [
        controlId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: context,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            ...props,
            ref: ref
        })
    });
});
FormGroup.displayName = 'FormGroup';
const __TURBOPACK__default__export__ = FormGroup;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FloatingLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const FloatingLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { bsPrefix, className, children, controlId, label, ...props } = param;
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'form-floating');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        controlId: controlId,
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                htmlFor: controlId,
                children: label
            })
        ]
    });
});
FloatingLabel.displayName = 'FloatingLabel';
const __TURBOPACK__default__export__ = FloatingLabel;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { as, bsPrefix, variant = 'primary', size, active = false, disabled = false, className, ...props } = param;
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'btn');
    const [buttonProps, { tagName }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonProps"])({
        tagName: as,
        disabled,
        ...props
    });
    const Component = tagName;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...buttonProps,
        ...props,
        ref: ref,
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, prefix, active && 'active', variant && "".concat(prefix, "-").concat(variant), size && "".concat(prefix, "-").concat(size), props.href && disabled && 'disabled')
    });
});
Button.displayName = 'Button';
const __TURBOPACK__default__export__ = Button;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/NavbarContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
// TODO: check
const context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
context.displayName = 'NavbarContext';
const __TURBOPACK__default__export__ = context;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/CardHeaderContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
context.displayName = 'CardHeaderContext';
const __TURBOPACK__default__export__ = context;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/NavItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const NavItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { className, bsPrefix, as: Component = 'div', ...props } = param;
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'nav-item');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
NavItem.displayName = 'NavItem';
const __TURBOPACK__default__export__ = NavItem;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEventListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js [app-client] (ecmascript)");
;
;
function useEventListener(eventTarget, event, listener) {
    let capture = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(listener);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEventListener.useEffect": ()=>{
            const target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
            target.addEventListener(event, handler, capture);
            return ({
                "useEventListener.useEffect": ()=>target.removeEventListener(event, handler, capture)
            })["useEventListener.useEffect"];
        }
    }["useEventListener.useEffect"], [
        eventTarget
    ]);
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useGlobalListener.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useGlobalListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function useGlobalListener(event, handler) {
    let capture = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    const documentTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGlobalListener.useCallback[documentTarget]": ()=>document
    }["useGlobalListener.useCallback[documentTarget]"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(documentTarget, event, handler, capture);
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useInterval.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js [app-client] (ecmascript)");
;
;
/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */ /**
 * Creates a pausable `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  const [paused, setPaused] = useState(false)
 *  const [timer, setTimer] = useState(0)
 *
 *  useInterval(() => setTimer(i => i + 1), 1000, paused)
 *
 *  return (
 *    <span>
 *      {timer} seconds past
 *
 *      <button onClick={() => setPaused(p => !p)}>{paused ? 'Play' : 'Pause' }</button>
 *    </span>
 * )
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 */ /**
 * Creates a pausable `setInterval` that _fires_ immediately and is
 * properly cleaned up when a component unmounted
 *
 * ```tsx
 *  const [timer, setTimer] = useState(-1)
 *  useInterval(() => setTimer(i => i + 1), 1000, false, true)
 *
 *  // will update to 0 on the first effect
 *  return <span>{timer} seconds past</span>
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 * @param runImmediately Whether to run the function immediately on mount or unpause
 * rather than waiting for the first interval to elapse
 *

 */ function useInterval(fn, ms) {
    let paused = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, runImmediately = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    let handle;
    const fnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(paused);
    const tick = ()=>{
        if (pausedRef.current) return;
        fnRef.current();
        schedule(); // eslint-disable-line no-use-before-define
    };
    const schedule = ()=>{
        clearTimeout(handle);
        handle = setTimeout(tick, ms);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInterval.useEffect": ()=>{
            if (runImmediately) {
                tick();
            } else {
                schedule();
            }
            return ({
                "useInterval.useEffect": ()=>clearTimeout(handle)
            })["useInterval.useEffect"];
        }
    }["useInterval.useEffect"], [
        paused,
        runImmediately
    ]);
}
const __TURBOPACK__default__export__ = useInterval;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useRafInterval.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js [app-client] (ecmascript)");
;
;
function useRafInterval(fn, ms) {
    let paused = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    let handle;
    let start = new Date().getTime();
    const fnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(paused);
    function loop() {
        const current = new Date().getTime();
        const delta = current - start;
        if (pausedRef.current) return;
        if (delta >= ms && fnRef.current) {
            fnRef.current();
            start = new Date().getTime();
        }
        cancelAnimationFrame(handle);
        handle = requestAnimationFrame(loop);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRafInterval.useEffect": ()=>{
            handle = requestAnimationFrame(loop);
            return ({
                "useRafInterval.useEffect": ()=>cancelAnimationFrame(handle)
            })["useRafInterval.useEffect"];
        }
    }["useRafInterval.useEffect"], []);
}
const __TURBOPACK__default__export__ = useRafInterval;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMergeState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useMergeState(initialState) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const updater = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMergeState.useCallback[updater]": (update)=>{
            if (update === null) return;
            if (typeof update === 'function') {
                setState({
                    "useMergeState.useCallback[updater]": (state)=>{
                        const nextState = update(state);
                        return nextState == null ? state : Object.assign({}, state, nextState);
                    }
                }["useMergeState.useCallback[updater]"]);
            } else {
                setState({
                    "useMergeState.useCallback[updater]": (state)=>Object.assign({}, state, update)
                }["useMergeState.useCallback[updater]"]);
            }
        }
    }["useMergeState.useCallback[updater]"], [
        setState
    ]);
    return [
        state,
        updater
    ];
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeStateFromProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMergeStateFromProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMergeState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js [app-client] (ecmascript)");
;
function useMergeStateFromProps(props, gDSFP, initialState) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMergeState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(initialState);
    const nextState = gDSFP(props, state);
    if (nextState !== null) setState(nextState);
    return [
        state,
        setState
    ];
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMounted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useMounted() {
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useMounted.useRef[isMounted]": ()=>mounted.current
    }["useMounted.useRef[isMounted]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMounted.useEffect": ()=>{
            mounted.current = true;
            return ({
                "useMounted.useEffect": ()=>{
                    mounted.current = false;
                }
            })["useMounted.useEffect"];
        }
    }["useMounted.useEffect"], []);
    return isMounted.current;
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>usePrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function usePrevious(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrevious.useEffect": ()=>{
            ref.current = value;
        }
    }["usePrevious.useEffect"]);
    return ref.current;
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useImage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useImage(imageOrUrl, crossOrigin) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        image: null,
        error: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useImage.useEffect": ()=>{
            if (!imageOrUrl) return undefined;
            let image;
            if (typeof imageOrUrl === 'string') {
                image = new Image();
                if (crossOrigin) image.crossOrigin = crossOrigin;
                image.src = imageOrUrl;
            } else {
                image = imageOrUrl;
                if (image.complete && image.naturalHeight > 0) {
                    setState({
                        image,
                        error: null
                    });
                    return;
                }
            }
            function onLoad() {
                setState({
                    image,
                    error: null
                });
            }
            function onError(error) {
                setState({
                    image,
                    error
                });
            }
            image.addEventListener('load', onLoad);
            image.addEventListener('error', onError);
            return ({
                "useImage.useEffect": ()=>{
                    image.removeEventListener('load', onLoad);
                    image.removeEventListener('error', onError);
                }
            })["useImage.useEffect"];
        }
    }["useImage.useEffect"], [
        imageOrUrl,
        crossOrigin
    ]);
    return state;
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useIsomorphicEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const isReactNative = ("TURBOPACK compile-time value", "object") !== 'undefined' && // @ts-ignore
/*TURBOPACK member replacement*/ __turbopack_context__.g.navigator && // @ts-ignore
/*TURBOPACK member replacement*/ __turbopack_context__.g.navigator.product === 'ReactNative';
const isDOM = typeof document !== 'undefined';
const __TURBOPACK__default__export__ = isDOM || isReactNative ? __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useResizeObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useResizeObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useIsomorphicEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useIsomorphicEffect.js [app-client] (ecmascript)");
;
;
const targetMap = new WeakMap();
let resizeObserver;
function getResizeObserver() {
    // eslint-disable-next-line no-return-assign
    return resizeObserver = resizeObserver || new window.ResizeObserver((entries)=>{
        entries.forEach((entry)=>{
            const handler = targetMap.get(entry.target);
            if (handler) handler(entry.contentRect);
        });
    });
}
function useResizeObserver(element) {
    const [rect, setRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useIsomorphicEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useResizeObserver.useEffect": ()=>{
            if (!element) return;
            getResizeObserver().observe(element);
            setRect(element.getBoundingClientRect());
            targetMap.set(element, {
                "useResizeObserver.useEffect": (rect)=>{
                    setRect(rect);
                }
            }["useResizeObserver.useEffect"]);
            return ({
                "useResizeObserver.useEffect": ()=>{
                    targetMap.delete(element);
                }
            })["useResizeObserver.useEffect"];
        }
    }["useResizeObserver.useEffect"], [
        element
    ]);
    return rect;
}
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCallbackRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useGlobalListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useGlobalListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useRafInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useRafInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMergeState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMergeStateFromProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeStateFromProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$usePrevious$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useResizeObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useResizeObserver.js [app-client] (ecmascript)");
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
;
;
;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js [app-client] (ecmascript) <export default as useEventCallback>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEventCallback",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js [app-client] (ecmascript)");
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/Anchor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isTrivialHref",
    ()=>isTrivialHref
]);
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/anchor-has-content */ var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEventCallback$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js [app-client] (ecmascript) <export default as useEventCallback>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _excluded = [
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
function isTrivialHref(href) {
    return !href || href.trim() === '#';
}
/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */ const Anchor = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((_ref, ref)=>{
    let { onKeyDown } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    const [buttonProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButtonProps"])(Object.assign({
        tagName: 'a'
    }, props));
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEventCallback$3e$__["useEventCallback"])({
        "Anchor.useEventCallback[handleKeyDown]": (e)=>{
            buttonProps.onKeyDown(e);
            onKeyDown == null ? void 0 : onKeyDown(e);
        }
    }["Anchor.useEventCallback[handleKeyDown]"]);
    if (isTrivialHref(props.href) || props.role === 'button') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", Object.assign({
            ref: ref
        }, props, buttonProps, {
            onKeyDown: handleKeyDown
        }));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", Object.assign({
        ref: ref
    }, props, {
        onKeyDown: onKeyDown
    }));
});
Anchor.displayName = 'Anchor';
const __TURBOPACK__default__export__ = Anchor;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/NavLink.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/Anchor.js [app-client] (ecmascript)");
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
const NavLink = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { bsPrefix, className, as: Component = __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], active, eventKey, disabled = false, ...props } = param;
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'nav-link');
    const [navItemProps, meta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$NavItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavItem"])({
        key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$SelectableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeEventKey"])(eventKey, props.href),
        active,
        disabled,
        ...props
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ...navItemProps,
        ref: ref,
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, disabled && 'disabled', meta.isActive && 'active')
    });
});
NavLink.displayName = 'NavLink';
const __TURBOPACK__default__export__ = NavLink;
}),
"[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Nav.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useUncontrolled$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/uncontrollable/lib/esm/hook.js [app-client] (ecmascript) <export default as useUncontrolled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@restart/ui/esm/Nav.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/NavbarContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeaderContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/CardHeaderContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/NavItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/NavLink.js [app-client] (ecmascript)");
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
;
;
;
const Nav = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((uncontrolledProps, ref)=>{
    const { as = 'div', bsPrefix: initialBsPrefix, variant, fill = false, justify = false, navbar, navbarScroll, className, activeKey, ...props } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useUncontrolled$3e$__["useUncontrolled"])(uncontrolledProps, {
        activeKey: 'onSelect'
    });
    const bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(initialBsPrefix, 'nav');
    let navbarBsPrefix;
    let cardHeaderBsPrefix;
    let isNavbar = false;
    const navbarContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const cardHeaderContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeaderContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    if (navbarContext) {
        navbarBsPrefix = navbarContext.bsPrefix;
        isNavbar = navbar == null ? true : navbar;
    } else if (cardHeaderContext) {
        ({ cardHeaderBsPrefix } = cardHeaderContext);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$restart$2f$ui$2f$esm$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        as: as,
        ref: ref,
        activeKey: activeKey,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, {
            [bsPrefix]: !isNavbar,
            ["".concat(navbarBsPrefix, "-nav")]: isNavbar,
            ["".concat(navbarBsPrefix, "-nav-scroll")]: isNavbar && navbarScroll,
            ["".concat(cardHeaderBsPrefix, "-").concat(variant)]: !!cardHeaderBsPrefix,
            ["".concat(bsPrefix, "-").concat(variant)]: !!variant,
            ["".concat(bsPrefix, "-fill")]: fill,
            ["".concat(bsPrefix, "-justified")]: justify
        }),
        ...props
    });
});
Nav.displayName = 'Nav';
const __TURBOPACK__default__export__ = Object.assign(Nav, {
    Item: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Link: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
}),
]);

//# sourceMappingURL=164c2_1e260026._.js.map