/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/orders/route";
exports.ids = ["app/api/orders/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.ts&appDir=%2FUsers%2Fpawelniedzwiedz%2FDesktop%2Fvouy-business%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpawelniedzwiedz%2FDesktop%2Fvouy-business&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.ts&appDir=%2FUsers%2Fpawelniedzwiedz%2FDesktop%2Fvouy-business%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpawelniedzwiedz%2FDesktop%2Fvouy-business&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_pawelniedzwiedz_Desktop_vouy_business_src_app_api_orders_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/orders/route.ts */ \"(rsc)/./src/app/api/orders/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/orders/route\",\n        pathname: \"/api/orders\",\n        filename: \"route\",\n        bundlePath: \"app/api/orders/route\"\n    },\n    resolvedPagePath: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/api/orders/route.ts\",\n    nextConfigOutput,\n    userland: _Users_pawelniedzwiedz_Desktop_vouy_business_src_app_api_orders_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZvcmRlcnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm9yZGVycyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm9yZGVycyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnBhd2VsbmllZHp3aWVkeiUyRkRlc2t0b3AlMkZ2b3V5LWJ1c2luZXNzJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnBhd2VsbmllZHp3aWVkeiUyRkRlc2t0b3AlMkZ2b3V5LWJ1c2luZXNzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN3QjtBQUNyRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3Bhd2VsbmllZHp3aWVkei9EZXNrdG9wL3ZvdXktYnVzaW5lc3Mvc3JjL2FwcC9hcGkvb3JkZXJzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9vcmRlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9vcmRlcnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL29yZGVycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9wYXdlbG5pZWR6d2llZHovRGVza3RvcC92b3V5LWJ1c2luZXNzL3NyYy9hcHAvYXBpL29yZGVycy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.ts&appDir=%2FUsers%2Fpawelniedzwiedz%2FDesktop%2Fvouy-business%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpawelniedzwiedz%2FDesktop%2Fvouy-business&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/orders/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/orders/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _app_lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/prisma */ \"(rsc)/./src/app/lib/prisma.ts\");\n/* harmony import */ var _app_lib_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/session */ \"(rsc)/./src/app/lib/session.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET(req) {\n    const token = req.headers.get(\"authorization\");\n    const session = await (0,_app_lib_session__WEBPACK_IMPORTED_MODULE_1__.decrypt)(token);\n    if (!token || !session) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    const organizationId = session.organizationId;\n    const orders = await _app_lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].order.findMany({\n        where: {\n            organizationId\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(orders, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9vcmRlcnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQztBQUNNO0FBQ0Q7QUFFcEMsZUFBZUcsSUFBSUMsR0FBWTtJQUNwQyxNQUFNQyxRQUFRRCxJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUM5QixNQUFNQyxVQUFVLE1BQU1QLHlEQUFPQSxDQUFDSTtJQUU5QixJQUFJLENBQUNBLFNBQVMsQ0FBQ0csU0FBUztRQUN0QixPQUFPTixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBZSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN0RTtJQUVBLE1BQU1DLGlCQUFpQkosUUFBUUksY0FBYztJQUU3QyxNQUFNQyxTQUFTLE1BQU1iLHVEQUFNQSxDQUFDYyxLQUFLLENBQUNDLFFBQVEsQ0FBQztRQUN6Q0MsT0FBTztZQUNMSjtRQUNGO0lBQ0Y7SUFFQSxPQUFPVixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDSSxRQUFRO1FBQUVGLFFBQVE7SUFBSTtBQUNqRCIsInNvdXJjZXMiOlsiL1VzZXJzL3Bhd2VsbmllZHp3aWVkei9EZXNrdG9wL3ZvdXktYnVzaW5lc3Mvc3JjL2FwcC9hcGkvb3JkZXJzL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIkAvYXBwL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGRlY3J5cHQgfSBmcm9tIFwiQC9hcHAvbGliL3Nlc3Npb25cIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogUmVxdWVzdCkge1xuICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmdldChcImF1dGhvcml6YXRpb25cIik7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBkZWNyeXB0KHRva2VuIGFzIHN0cmluZyk7XG5cbiAgaWYgKCF0b2tlbiB8fCAhc2Vzc2lvbikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgfVxuXG4gIGNvbnN0IG9yZ2FuaXphdGlvbklkID0gc2Vzc2lvbi5vcmdhbml6YXRpb25JZCBhcyBzdHJpbmc7XG5cbiAgY29uc3Qgb3JkZXJzID0gYXdhaXQgcHJpc21hLm9yZGVyLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgb3JnYW5pemF0aW9uSWQsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKG9yZGVycywgeyBzdGF0dXM6IDIwMCB9KTtcbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJkZWNyeXB0IiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVxIiwidG9rZW4iLCJoZWFkZXJzIiwiZ2V0Iiwic2Vzc2lvbiIsImpzb24iLCJtZXNzYWdlIiwic3RhdHVzIiwib3JnYW5pemF0aW9uSWQiLCJvcmRlcnMiLCJvcmRlciIsImZpbmRNYW55Iiwid2hlcmUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/orders/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/prisma.ts":
/*!*******************************!*\
  !*** ./src/app/lib/prisma.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9wcmlzbWEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLElBQUlDO0FBRUosSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxPQUFPRixNQUFNLEVBQUU7UUFDbEJFLE9BQU9GLE1BQU0sR0FBRyxJQUFJRCx3REFBWUE7SUFDbEM7SUFDQUMsU0FBU0UsT0FBT0YsTUFBTTtBQUN4QjtBQUVBLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvcGF3ZWxuaWVkendpZWR6L0Rlc2t0b3Avdm91eS1idXNpbmVzcy9zcmMvYXBwL2xpYi9wcmlzbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/session.ts":
/*!********************************!*\
  !*** ./src/app/lib/session.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSession: () => (/* binding */ createSession),\n/* harmony export */   decrypt: () => (/* binding */ decrypt),\n/* harmony export */   deleteSession: () => (/* binding */ deleteSession),\n/* harmony export */   encrypt: () => (/* binding */ encrypt)\n/* harmony export */ });\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! server-only */ \"(rsc)/./node_modules/next/dist/compiled/server-only/empty.js\");\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(server_only__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n\n\n\nconst secretKey = process.env.AUTH_SECRET;\nconst encodedKey = new TextEncoder().encode(secretKey);\nasync function encrypt(payload) {\n    return new jose__WEBPACK_IMPORTED_MODULE_2__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"7d\").sign(encodedKey);\n}\nasync function decrypt(session = \"\") {\n    try {\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_3__.jwtVerify)(session, encodedKey, {\n            algorithms: [\n                \"HS256\"\n            ]\n        });\n        return payload;\n    } catch (error) {\n        console.log(\"Failed to verify session\");\n    }\n}\nasync function createSession(userId, organizationId) {\n    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    const session = await encrypt({\n        userId,\n        organizationId,\n        expiresAt\n    });\n    cookieStore.set(\"session\", session, {\n        httpOnly: true,\n        secure: true,\n        expires: expiresAt,\n        sameSite: \"lax\",\n        path: \"/\"\n    });\n}\nasync function deleteSession() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    cookieStore.delete(\"session\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9zZXNzaW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQjtBQUNrQjtBQUNHO0FBRzFDLE1BQU1HLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUN6QyxNQUFNQyxhQUFhLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ047QUFFckMsZUFBZU8sUUFBUUMsT0FBdUI7SUFDbkQsT0FBTyxJQUFJVix5Q0FBT0EsQ0FBQ1UsU0FDaEJDLGtCQUFrQixDQUFDO1FBQUVDLEtBQUs7SUFBUSxHQUNsQ0MsV0FBVyxHQUNYQyxpQkFBaUIsQ0FBQyxNQUNsQkMsSUFBSSxDQUFDVDtBQUNWO0FBRU8sZUFBZVUsUUFBUUMsVUFBOEIsRUFBRTtJQUM1RCxJQUFJO1FBQ0YsTUFBTSxFQUFFUCxPQUFPLEVBQUUsR0FBRyxNQUFNVCwrQ0FBU0EsQ0FBQ2dCLFNBQVNYLFlBQVk7WUFDdkRZLFlBQVk7Z0JBQUM7YUFBUTtRQUN2QjtRQUNBLE9BQU9SO0lBQ1QsRUFBRSxPQUFPUyxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0FBQ0Y7QUFFTyxlQUFlQyxjQUFjQyxNQUFjLEVBQUVDLGNBQXNCO0lBQ3hFLE1BQU1DLFlBQVksSUFBSUMsS0FBS0EsS0FBS0MsR0FBRyxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUs7SUFFM0QsTUFBTUMsY0FBYyxNQUFNN0IscURBQU9BO0lBQ2pDLE1BQU1rQixVQUFVLE1BQU1SLFFBQVE7UUFBRWM7UUFBUUM7UUFBZ0JDO0lBQVU7SUFDbEVHLFlBQVlDLEdBQUcsQ0FBQyxXQUFXWixTQUFTO1FBQ2xDYSxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsU0FBU1A7UUFDVFEsVUFBVTtRQUNWQyxNQUFNO0lBQ1I7QUFDRjtBQUVPLGVBQWVDO0lBQ3BCLE1BQU1QLGNBQWMsTUFBTTdCLHFEQUFPQTtJQUNqQzZCLFlBQVlRLE1BQU0sQ0FBQztBQUNyQiIsInNvdXJjZXMiOlsiL1VzZXJzL3Bhd2VsbmllZHp3aWVkei9EZXNrdG9wL3ZvdXktYnVzaW5lc3Mvc3JjL2FwcC9saWIvc2Vzc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJzZXJ2ZXItb25seVwiO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcbmltcG9ydCB7IFNpZ25KV1QsIGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XG5pbXBvcnQgeyBTZXNzaW9uUGF5bG9hZCB9IGZyb20gXCJAL3R5cGVzL2F1dGhcIjtcblxuY29uc3Qgc2VjcmV0S2V5ID0gcHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVQ7XG5jb25zdCBlbmNvZGVkS2V5ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHNlY3JldEtleSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbmNyeXB0KHBheWxvYWQ6IFNlc3Npb25QYXlsb2FkKSB7XG4gIHJldHVybiBuZXcgU2lnbkpXVChwYXlsb2FkKVxuICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6IFwiSFMyNTZcIiB9KVxuICAgIC5zZXRJc3N1ZWRBdCgpXG4gICAgLnNldEV4cGlyYXRpb25UaW1lKFwiN2RcIilcbiAgICAuc2lnbihlbmNvZGVkS2V5KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlY3J5cHQoc2Vzc2lvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gXCJcIikge1xuICB0cnkge1xuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYXdhaXQgand0VmVyaWZ5KHNlc3Npb24sIGVuY29kZWRLZXksIHtcbiAgICAgIGFsZ29yaXRobXM6IFtcIkhTMjU2XCJdLFxuICAgIH0pO1xuICAgIHJldHVybiBwYXlsb2FkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIHZlcmlmeSBzZXNzaW9uXCIpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uKHVzZXJJZDogc3RyaW5nLCBvcmdhbml6YXRpb25JZDogc3RyaW5nKSB7XG4gIGNvbnN0IGV4cGlyZXNBdCA9IG5ldyBEYXRlKERhdGUubm93KCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBlbmNyeXB0KHsgdXNlcklkLCBvcmdhbml6YXRpb25JZCwgZXhwaXJlc0F0IH0pO1xuICBjb29raWVTdG9yZS5zZXQoXCJzZXNzaW9uXCIsIHNlc3Npb24sIHtcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzZWN1cmU6IHRydWUsXG4gICAgZXhwaXJlczogZXhwaXJlc0F0LFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlc3Npb24oKSB7XG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICBjb29raWVTdG9yZS5kZWxldGUoXCJzZXNzaW9uXCIpO1xufVxuIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJTaWduSldUIiwiand0VmVyaWZ5Iiwic2VjcmV0S2V5IiwicHJvY2VzcyIsImVudiIsIkFVVEhfU0VDUkVUIiwiZW5jb2RlZEtleSIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiZW5jcnlwdCIsInBheWxvYWQiLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJzZXRJc3N1ZWRBdCIsInNldEV4cGlyYXRpb25UaW1lIiwic2lnbiIsImRlY3J5cHQiLCJzZXNzaW9uIiwiYWxnb3JpdGhtcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVNlc3Npb24iLCJ1c2VySWQiLCJvcmdhbml6YXRpb25JZCIsImV4cGlyZXNBdCIsIkRhdGUiLCJub3ciLCJjb29raWVTdG9yZSIsInNldCIsImh0dHBPbmx5Iiwic2VjdXJlIiwiZXhwaXJlcyIsInNhbWVTaXRlIiwicGF0aCIsImRlbGV0ZVNlc3Npb24iLCJkZWxldGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/session.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.ts&appDir=%2FUsers%2Fpawelniedzwiedz%2FDesktop%2Fvouy-business%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpawelniedzwiedz%2FDesktop%2Fvouy-business&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();