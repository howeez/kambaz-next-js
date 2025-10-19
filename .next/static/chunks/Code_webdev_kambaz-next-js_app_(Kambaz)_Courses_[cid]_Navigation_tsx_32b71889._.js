(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourseNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People"
];
function CourseNavigation(param) {
    let { cid } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "wd-courses-navigation",
        className: "wd list-group fs-5 rounded-0",
        children: links.map((link)=>{
            // Special case for People route
            const procecced_link = link === "People" ? "".concat(link, "/Table") : link;
            const path = "/Courses/".concat(cid, "/").concat(procecced_link);
            const isActive = pathname === path;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: path,
                id: "wd-course-".concat(link.toLowerCase(), "-link"),
                className: "list-group-item border-0 ".concat(isActive ? "active" : "text-danger"),
                children: link
            }, link, false, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Navigation.tsx",
                lineNumber: 27,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Navigation.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(CourseNavigation, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = CourseNavigation;
var _c;
__turbopack_context__.k.register(_c, "CourseNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Code_webdev_kambaz-next-js_app_%28Kambaz%29_Courses_%5Bcid%5D_Navigation_tsx_32b71889._.js.map