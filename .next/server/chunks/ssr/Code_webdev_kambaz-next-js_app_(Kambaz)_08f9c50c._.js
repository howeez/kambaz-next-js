module.exports = [
"[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourseNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
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
function CourseNavigation({ cid }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "wd-courses-navigation",
        className: "wd list-group fs-5 rounded-0",
        children: links.map((link)=>{
            // Special case for People route
            const procecced_link = link === "People" ? `${link}/Table` : link;
            const path = `/Courses/${cid}/${procecced_link}`;
            const isActive = pathname === path;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: path,
                id: `wd-course-${link.toLowerCase()}-link`,
                className: `list-group-item border-0 ${isActive ? "active" : "text-danger"}`,
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
}),
"[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/modules.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"_id\":\"M1234\",\"name\":\"Introduction to React\",\"description\":\"Fundamentals of React.js components, props, and state.\",\"course\":\"CS1234\",\"lessons\":[{\"_id\":\"L1001\",\"name\":\"JSX and Rendering\",\"description\":\"Understanding JSX and rendering elements.\",\"module\":\"M1234\"},{\"_id\":\"L1002\",\"name\":\"Component State\",\"description\":\"Managing state in functional components.\",\"module\":\"M1234\"}]},{\"_id\":\"M4550\",\"name\":\"Web Technologies Overview\",\"description\":\"HTML, CSS, JavaScript, and modern frameworks.\",\"course\":\"CS4550\",\"lessons\":[{\"_id\":\"L2001\",\"name\":\"HTML Basics\",\"description\":\"Structure and semantics of HTML.\",\"module\":\"M4550\"},{\"_id\":\"L2002\",\"name\":\"CSS Layouts\",\"description\":\"Flexbox, Grid, and responsive design.\",\"module\":\"M4550\"}]},{\"_id\":\"M4400\",\"name\":\"Security Fundamentals\",\"description\":\"Introduction to system-level security concepts.\",\"course\":\"CS4400\",\"lessons\":[{\"_id\":\"L3001\",\"name\":\"Buffer Overflows\",\"description\":\"Understanding and mitigating buffer overflows.\",\"module\":\"M4400\"},{\"_id\":\"L3002\",\"name\":\"Access Control\",\"description\":\"Permissions, roles, and authentication.\",\"module\":\"M4400\"}]},{\"_id\":\"M1320\",\"name\":\"Speaking Essentials\",\"description\":\"Basics of speech structure and delivery.\",\"course\":\"COMM1320\",\"lessons\":[{\"_id\":\"L4001\",\"name\":\"Introduction Speeches\",\"description\":\"Crafting and delivering short introductory speeches.\",\"module\":\"M1320\"},{\"_id\":\"L4002\",\"name\":\"Visual Aids\",\"description\":\"Using visuals effectively in presentations.\",\"module\":\"M1320\"}]},{\"_id\":\"M3500\",\"name\":\"20th Century Conflicts\",\"description\":\"Major global conflicts and their consequences.\",\"course\":\"HIST3500\",\"lessons\":[{\"_id\":\"L5001\",\"name\":\"World War I\",\"description\":\"Causes and outcomes of the First World War.\",\"module\":\"M3500\"},{\"_id\":\"L5002\",\"name\":\"Cold War\",\"description\":\"Global tensions and proxy wars.\",\"module\":\"M3500\"}]},{\"_id\":\"M2200\",\"name\":\"Art Movements\",\"description\":\"Exploration of key movements in art history.\",\"course\":\"HIST2200\",\"lessons\":[{\"_id\":\"L6001\",\"name\":\"Renaissance\",\"description\":\"Art and culture during the Renaissance period.\",\"module\":\"M2200\"},{\"_id\":\"L6002\",\"name\":\"Modernism\",\"description\":\"20th-century avant-garde art.\",\"module\":\"M2200\"}]},{\"_id\":\"M4120\",\"name\":\"Algorithm Analysis\",\"description\":\"Time and space complexity of algorithms.\",\"course\":\"CS4120\",\"lessons\":[{\"_id\":\"L7001\",\"name\":\"Big-O Notation\",\"description\":\"Understanding algorithmic efficiency.\",\"module\":\"M4120\"},{\"_id\":\"L7002\",\"name\":\"Sorting Algorithms\",\"description\":\"Common sorting techniques and their trade-offs.\",\"module\":\"M4120\"}]},{\"_id\":\"M4850\",\"name\":\"Game Design Principles\",\"description\":\"Designing mechanics, systems, and user experience.\",\"course\":\"CS4850\",\"lessons\":[{\"_id\":\"L8001\",\"name\":\"Game Loops\",\"description\":\"How game loops control gameplay flow.\",\"module\":\"M4850\"},{\"_id\":\"L8002\",\"name\":\"Level Design\",\"description\":\"Crafting engaging game levels.\",\"module\":\"M4850\"}]}]"));}),
"[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/assignments.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"_id\":\"a101\",\"title\":\"A1 - React Intro\",\"description\":\"Introduction to React components and JSX.\",\"course\":\"1234\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-01\",\"availableFrom\":\"2025-01-15\",\"availableUntil\":\"2025-02-10\"},{\"_id\":\"a102\",\"title\":\"A2 - State & Props\",\"description\":\"Manage component state and pass data via props.\",\"course\":\"1234\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-15\",\"availableFrom\":\"2025-02-01\",\"availableUntil\":\"2025-02-20\"},{\"_id\":\"a201\",\"title\":\"A1 - HTML & CSS\",\"description\":\"Build a responsive page using HTML and CSS.\",\"course\":\"4550\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-05\",\"availableFrom\":\"2025-01-20\",\"availableUntil\":\"2025-02-10\"},{\"_id\":\"a202\",\"title\":\"A2 - Bootstrap Layouts\",\"description\":\"Use Bootstrap to create responsive grid layouts.\",\"course\":\"4550\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-20\",\"availableFrom\":\"2025-02-06\",\"availableUntil\":\"2025-02-25\"},{\"_id\":\"a301\",\"title\":\"A1 - Threat Modeling\",\"description\":\"Identify potential threats in a system design.\",\"course\":\"4400\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-08\",\"availableFrom\":\"2025-01-20\",\"availableUntil\":\"2025-02-15\"},{\"_id\":\"a302\",\"title\":\"A2 - Secure Coding\",\"description\":\"Apply secure coding principles to a given problem.\",\"course\":\"4400\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-22\",\"availableFrom\":\"2025-02-10\",\"availableUntil\":\"2025-02-28\"},{\"_id\":\"a401\",\"title\":\"A1 - Speech Outline\",\"description\":\"Prepare an outline for your first speech.\",\"course\":\"1320\",\"points\":50,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-01-30\",\"availableFrom\":\"2025-01-15\",\"availableUntil\":\"2025-02-02\"},{\"_id\":\"a402\",\"title\":\"A2 - Persuasive Speech\",\"description\":\"Deliver a persuasive speech in class.\",\"course\":\"1320\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-20\",\"availableFrom\":\"2025-02-01\",\"availableUntil\":\"2025-02-25\"},{\"_id\":\"a501\",\"title\":\"A1 - WWI Causes\",\"description\":\"Analyze the causes of World War I.\",\"course\":\"3500\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-05\",\"availableFrom\":\"2025-01-15\",\"availableUntil\":\"2025-02-12\"},{\"_id\":\"a502\",\"title\":\"A2 - Cold War Timeline\",\"description\":\"Create a timeline of key Cold War events.\",\"course\":\"3500\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-25\",\"availableFrom\":\"2025-02-10\",\"availableUntil\":\"2025-03-01\"},{\"_id\":\"a601\",\"title\":\"A1 - Renaissance Art\",\"description\":\"Compare two works of Renaissance art.\",\"course\":\"2200\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-10\",\"availableFrom\":\"2025-01-20\",\"availableUntil\":\"2025-02-15\"},{\"_id\":\"a602\",\"title\":\"A2 - Museum Visit Report\",\"description\":\"Write a report based on a local art museum visit.\",\"course\":\"2200\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-03-05\",\"availableFrom\":\"2025-02-20\",\"availableUntil\":\"2025-03-10\"},{\"_id\":\"a701\",\"title\":\"A1 - Sorting Algorithms\",\"description\":\"Implement and analyze sorting algorithms.\",\"course\":\"4120\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-12\",\"availableFrom\":\"2025-01-22\",\"availableUntil\":\"2025-02-18\"},{\"_id\":\"a702\",\"title\":\"A2 - Recursion Problems\",\"description\":\"Solve algorithmic problems using recursion.\",\"course\":\"4120\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-28\",\"availableFrom\":\"2025-02-15\",\"availableUntil\":\"2025-03-03\"},{\"_id\":\"a801\",\"title\":\"A1 - Game Concept\",\"description\":\"Pitch your original game idea and genre.\",\"course\":\"4850\",\"points\":50,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-01-28\",\"availableFrom\":\"2025-01-15\",\"availableUntil\":\"2025-02-01\"},{\"_id\":\"a802\",\"title\":\"A2 - Level Design\",\"description\":\"Design a playable level using Unity or Unreal.\",\"course\":\"4850\",\"points\":100,\"group\":\"ASSIGNMENTS\",\"dueDate\":\"2025-02-25\",\"availableFrom\":\"2025-02-10\",\"availableUntil\":\"2025-03-01\"}]"));}),
"[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/users.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"_id\":\"123\",\"username\":\"iron_man\",\"password\":\"stark123\",\"firstName\":\"Tony\",\"lastName\":\"Stark\",\"email\":\"tony@stark.com\",\"dob\":\"1970-05-29T00:00:00.000Z\",\"role\":\"FACULTY\",\"loginId\":\"001234561S\",\"section\":\"S101\",\"lastActivity\":\"2020-10-01\",\"totalActivity\":\"10:21:32\"},{\"_id\":\"234\",\"username\":\"dark_knight\",\"password\":\"wayne123\",\"firstName\":\"Bruce\",\"lastName\":\"Wayne\",\"email\":\"bruce@wayne.com\",\"dob\":\"1972-02-19\",\"role\":\"STUDENT\",\"loginId\":\"001234562S\",\"section\":\"S101\",\"lastActivity\":\"2020-11-02\",\"totalActivity\":\"15:32:43\"},{\"_id\":\"345\",\"username\":\"black_widow\",\"password\":\"romanoff123\",\"firstName\":\"Natasha\",\"lastName\":\"Romanoff\",\"email\":\"natasha@avengers.com\",\"dob\":\"1984-11-22\",\"role\":\"TA\",\"loginId\":\"001234564S\",\"section\":\"S101\",\"lastActivity\":\"2020-11-05\",\"totalActivity\":\"13:23:34\"},{\"_id\":\"456\",\"username\":\"thor_odinson\",\"password\":\"mjolnir123\",\"firstName\":\"Thor\",\"lastName\":\"Odinson\",\"email\":\"thor@asgard.com\",\"dob\":\"0982-05-25\",\"role\":\"STUDENT\",\"loginId\":\"001234565S\",\"section\":\"S101\",\"lastActivity\":\"2020-12-01\",\"totalActivity\":\"11:22:33\"},{\"_id\":\"567\",\"username\":\"hulk_smash\",\"password\":\"banner123\",\"firstName\":\"Bruce\",\"lastName\":\"Banner\",\"email\":\"bruce@avengers.com\",\"dob\":\"1969-12-18\",\"role\":\"STUDENT\",\"loginId\":\"001234566S\",\"section\":\"S101\",\"lastActivity\":\"2020-12-01\",\"totalActivity\":\"22:33:44\"},{\"_id\":\"678\",\"username\":\"ring_bearer\",\"password\":\"shire123\",\"firstName\":\"Frodo\",\"lastName\":\"Baggins\",\"email\":\"frodo@shire.com\",\"dob\":\"1368-09-22\",\"role\":\"FACULTY\",\"loginId\":\"001234567S\",\"section\":\"S101\",\"lastActivity\":\"2020-12-02\",\"totalActivity\":\"44:33:22\"},{\"_id\":\"789\",\"username\":\"strider\",\"password\":\"aragorn123\",\"firstName\":\"Aragorn\",\"lastName\":\"Elessar\",\"email\":\"aragorn@gondor.com\",\"dob\":\"2931-03-01\",\"role\":\"TA\",\"loginId\":\"001234568S\",\"section\":\"S101\",\"lastActivity\":\"2020-12-04\",\"totalActivity\":\"12:23:34\"},{\"_id\":\"890\",\"username\":\"elf_archer\",\"password\":\"legolas123\",\"firstName\":\"Legolas\",\"lastName\":\"Greenleaf\",\"email\":\"legolas@mirkwood.com\",\"dob\":\"2879-07-15\",\"role\":\"STUDENT\",\"loginId\":\"001234569S\",\"section\":\"S101\",\"lastActivity\":\"2020-11-11\",\"totalActivity\":\"21:32:43\"},{\"_id\":\"777\",\"username\":\"ada\",\"password\":\"123\",\"firstName\":\"Ada\",\"lastName\":\"Lovelace\",\"email\":\"ada@lovelace.com\",\"dob\":\"1815-12-15\",\"role\":\"ADMIN\",\"loginId\":\"002143650S\",\"section\":\"S101\",\"lastActivity\":\"1852-11-27\",\"totalActivity\":\"21:32:43\"}]"));}),
"[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/enrollments.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"_id\":\"1\",\"user\":\"123\",\"course\":\"CS1234\"},{\"_id\":\"2\",\"user\":\"234\",\"course\":\"CS1234\"},{\"_id\":\"3\",\"user\":\"345\",\"course\":\"CS1234\"},{\"_id\":\"4\",\"user\":\"456\",\"course\":\"CS1234\"},{\"_id\":\"5\",\"user\":\"567\",\"course\":\"CS1234\"},{\"_id\":\"6\",\"user\":\"234\",\"course\":\"CS4550\"},{\"_id\":\"7\",\"user\":\"789\",\"course\":\"CS4550\"},{\"_id\":\"8\",\"user\":\"890\",\"course\":\"CS4550\"},{\"_id\":\"9\",\"user\":\"123\",\"course\":\"CS4550\"},{\"_id\":\"10\",\"user\":\"345\",\"course\":\"CS4550\"},{\"_id\":\"11\",\"user\":\"678\",\"course\":\"CS4400\"},{\"_id\":\"12\",\"user\":\"789\",\"course\":\"CS4400\"},{\"_id\":\"13\",\"user\":\"890\",\"course\":\"CS4400\"},{\"_id\":\"14\",\"user\":\"567\",\"course\":\"CS4400\"},{\"_id\":\"15\",\"user\":\"456\",\"course\":\"CS4400\"},{\"_id\":\"16\",\"user\":\"890\",\"course\":\"COMM1320\"},{\"_id\":\"17\",\"user\":\"789\",\"course\":\"COMM1320\"},{\"_id\":\"18\",\"user\":\"123\",\"course\":\"COMM1320\"},{\"_id\":\"19\",\"user\":\"678\",\"course\":\"COMM1320\"},{\"_id\":\"20\",\"user\":\"567\",\"course\":\"HIST3500\"},{\"_id\":\"21\",\"user\":\"890\",\"course\":\"HIST3500\"},{\"_id\":\"22\",\"user\":\"345\",\"course\":\"HIST3500\"},{\"_id\":\"23\",\"user\":\"234\",\"course\":\"HIST2200\"},{\"_id\":\"24\",\"user\":\"456\",\"course\":\"HIST2200\"},{\"_id\":\"25\",\"user\":\"890\",\"course\":\"HIST2200\"},{\"_id\":\"26\",\"user\":\"123\",\"course\":\"CS4120\"},{\"_id\":\"27\",\"user\":\"345\",\"course\":\"CS4120\"},{\"_id\":\"28\",\"user\":\"678\",\"course\":\"CS4120\"},{\"_id\":\"29\",\"user\":\"234\",\"course\":\"CS4120\"},{\"_id\":\"30\",\"user\":\"890\",\"course\":\"CS4850\"},{\"_id\":\"31\",\"user\":\"456\",\"course\":\"CS4850\"},{\"_id\":\"32\",\"user\":\"567\",\"course\":\"CS4850\"},{\"_id\":\"33\",\"user\":\"789\",\"course\":\"CS4850\"}]"));}),
"[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$courses$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/courses.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$modules$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/modules.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$assignments$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/assignments.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$users$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/users.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$enrollments$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/enrollments.json (json)");
;
;
;
;
;
const db = {
    courses: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$courses$2e$json__$28$json$29$__["default"],
    modules: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$modules$2e$json__$28$json$29$__["default"],
    assignments: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$assignments$2e$json__$28$json$29$__["default"],
    users: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$users$2e$json__$28$json$29$__["default"],
    enrollments: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$enrollments$2e$json__$28$json$29$__["default"]
};
const __TURBOPACK__default__export__ = db;
}),
"[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Breadcrumb.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Breadcrumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
function Breadcrumb({ course }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: [
            "Course ",
            course?.name,
            " > ",
            pathname.split("/").pop()
        ]
    }, void 0, true, {
        fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Breadcrumb.tsx",
        lineNumber: 9,
        columnNumber: 4
    }, this);
}
}),
"[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoursesLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Database/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/Breadcrumb.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
async function CoursesLayout({ children, params }) {
    const { cid } = await params;
    const courses = __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Database$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].courses;
    const course = courses.find((course)=>course._id === cid);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "wd-courses",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-danger",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaAlignJustify"], {
                        className: "me-4 fs-4 mb-1"
                    }, void 0, false, {
                        fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/layout.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    course?.name,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/layout.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                course: course
            }, void 0, false, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/layout.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/layout.tsx",
                lineNumber: 19,
                columnNumber: 40
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-none d-md-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            cid: cid
                        }, void 0, false, {
                            fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/layout.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/layout.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2f$webdev$2f$kambaz$2d$next$2d$js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-fill",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/layout.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/layout.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code/webdev/kambaz-next-js/app/(Kambaz)/Courses/[cid]/layout.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Code_webdev_kambaz-next-js_app_%28Kambaz%29_08f9c50c._.js.map