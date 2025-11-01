module.exports = [
"[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/courses.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"_id\":\"1234\",\"name\":\"React JS\",\"number\":\"CS1234\",\"startDate\":\"2025-01-15\",\"endDate\":\"2025-05-10\",\"department\":\"CS\",\"credits\":4,\"description\":\"Full Stack software developer\",\"image\":\"/images/reactjs.jpg\"},{\"_id\":\"4550\",\"name\":\"Web Development\",\"number\":\"CS4550\",\"startDate\":\"2025-01-15\",\"endDate\":\"2025-05-10\",\"department\":\"CS\",\"credits\":4,\"description\":\"WebDev\",\"image\":\"/images/webdev.jpg\"},{\"_id\":\"4400\",\"name\":\"Systems Security\",\"number\":\"CS4400\",\"startDate\":\"2025-01-15\",\"endDate\":\"2025-05-10\",\"department\":\"CS\",\"credits\":3,\"description\":\"Systems Security\",\"image\":\"/images/syssec.jpg\"},{\"_id\":\"1320\",\"name\":\"Public Speaking\",\"number\":\"COMM1320\",\"startDate\":\"2025-01-15\",\"endDate\":\"2025-05-10\",\"department\":\"COMM\",\"credits\":3,\"description\":\"Public Speaking\",\"image\":\"/images/publicspeaking.jpg\"},{\"_id\":\"3500\",\"name\":\"Modern Conflicts\",\"number\":\"HIST3500\",\"startDate\":\"2025-01-15\",\"endDate\":\"2025-05-10\",\"department\":\"HIST\",\"credits\":3,\"description\":\"Modern Conflicts\",\"image\":\"/images/ModernConflicts.jpg\"},{\"_id\":\"2200\",\"name\":\"Art History\",\"number\":\"HIST2200\",\"startDate\":\"2025-01-15\",\"endDate\":\"2025-05-10\",\"department\":\"HIST\",\"credits\":3,\"description\":\"Art History\",\"image\":\"/images/arthistory.jpg\"},{\"_id\":\"4120\",\"name\":\"Algorithms\",\"number\":\"CS4120\",\"startDate\":\"2025-01-15\",\"endDate\":\"2025-05-10\",\"department\":\"CS\",\"credits\":4,\"description\":\"Algorithms\",\"image\":\"/images/algo.jpg\"},{\"_id\":\"4850\",\"name\":\"Game Design\",\"number\":\"CS4850\",\"startDate\":\"2025-01-15\",\"endDate\":\"2025-05-10\",\"department\":\"CS\",\"credits\":4,\"description\":\"Game Design\",\"image\":\"/images/GameDesign.jpg\"}]"));}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/reducer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addNewCourse",
    ()=>addNewCourse,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteCourse",
    ()=>deleteCourse,
    "updateCourse",
    ()=>updateCourse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$courses$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/courses.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/uuid/dist-node/v4.js [app-ssr] (ecmascript) <export default as v4>");
;
;
;
const initialState = {
    courses: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$courses$2e$json__$28$json$29$__["default"]
};
const coursesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, { payload: course })=>{
            const newCourse = {
                ...course,
                _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
            };
            state.courses = [
                ...state.courses,
                newCourse
            ];
        },
        deleteCourse: (state, { payload: courseId })=>{
            state.courses = state.courses.filter((course)=>course._id !== courseId);
        },
        updateCourse: (state, { payload: course })=>{
            state.courses = state.courses.map((c)=>c._id === course._id ? course : c);
        }
    }
});
const { addNewCourse, deleteCourse, updateCourse } = coursesSlice.actions;
const __TURBOPACK__default__export__ = coursesSlice.reducer;
}),
"[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Card.js [app-ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/CardBody.js [app-ssr] (ecmascript) <export default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardImg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardImg$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/CardImg.js [app-ssr] (ecmascript) <export default as CardImg>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardText$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/CardText.js [app-ssr] (ecmascript) <export default as CardText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardTitle$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/CardTitle.js [app-ssr] (ecmascript) <export default as CardTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Col.js [app-ssr] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/FormControl.js [app-ssr] (ecmascript) <export default as FormControl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-bootstrap/esm/Row.js [app-ssr] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/reducer.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Dashboard() {
    const { courses } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.coursesReducer);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [course, setCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "wd-dashboard",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                id: "wd-dashboard-title",
                children: "Dashboard"
            }, void 0, false, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                children: [
                    "New Course",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary float-end",
                        id: "wd-add-new-course-click",
                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addNewCourse"])(course)),
                        children: " Add "
                    }, void 0, false, {
                        fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-warning float-end me-2",
                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCourse"])(course)),
                        id: "wd-update-course-click",
                        children: "Update "
                    }, void 0, false, {
                        fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                lineNumber: 30,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                value: course.name,
                className: "mb-2",
                onChange: (e)=>setCourse({
                        ...course,
                        name: e.target.value
                    })
            }, void 0, false, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FormControl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                value: course.description,
                as: "textarea",
                rows: 3,
                onChange: (e)=>setCourse({
                        ...course,
                        description: e.target.value
                    })
            }, void 0, false, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                lineNumber: 32,
                columnNumber: 144
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "wd-dashboard-published",
                children: [
                    "Published Courses (",
                    courses.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "wd-dashboard-courses",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                    xs: 1,
                    md: 5,
                    className: "g-4",
                    children: courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                            className: "wd-dashboard-course",
                            style: {
                                width: "300px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/Courses/${course._id}/Home`,
                                    className: "wd-dashboard-course-link text-decoration-none text-dark",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardImg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardImg$3e$__["CardImg"], {
                                            src: course.image,
                                            variant: "top",
                                            width: "100%",
                                            height: 160,
                                            alt: `${course.name} thumbnail`
                                        }, void 0, false, {
                                            fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                                            lineNumber: 43,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardBody$3e$__["CardBody"], {
                                            className: "card-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardTitle$3e$__["CardTitle"], {
                                                    className: "wd-dashboard-course-title text-nowrap overflow-hidden",
                                                    children: [
                                                        course.number,
                                                        " ",
                                                        course.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardText$3e$__["CardText"], {
                                                    className: "wd-dashboard-course-description overflow-hidden",
                                                    style: {
                                                        height: "100px"
                                                    },
                                                    children: course.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    variant: "primary",
                                                    children: "Go"
                                                }, void 0, false, {
                                                    fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (event)=>{
                                                        event.preventDefault();
                                                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f$reducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteCourse"])(course._id));
                                                    },
                                                    className: "btn btn-danger float-end",
                                                    id: "wd-delete-course-click",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    id: "wd-edit-course-click",
                                                    onClick: (event)=>{
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    },
                                                    className: "btn btn-warning me-2 float-end",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this)
                        }, course._id, false, {
                            fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Dashboard/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function uuidv4() {
    throw new Error("Function not implemented.");
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2962a558._.js.map