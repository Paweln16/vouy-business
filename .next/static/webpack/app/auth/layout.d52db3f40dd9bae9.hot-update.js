"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/layout",{

/***/ "(app-pages-browser)/./src/components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_signin_SignOutButton_SignOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/signin/SignOutButton/SignOut */ \"(app-pages-browser)/./src/app/signin/SignOutButton/SignOut.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! motion/react */ \"(app-pages-browser)/./node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Header() {\n    _s();\n    const links = [\n        {\n            label: \"Dashboard\",\n            href: \"/auth/dashboard\"\n        },\n        {\n            label: \"Invoices\",\n            href: \"/auth/invoices\"\n        },\n        {\n            label: \"Projects\",\n            href: \"/auth/projects\"\n        },\n        {\n            label: \"Orders\",\n            href: \"/auth/orders\"\n        },\n        {\n            label: \"Tasks\",\n            href: \"/auth/tasks\"\n        },\n        {\n            label: \"Users\",\n            href: \"/auth/users\"\n        },\n        {\n            label: \"Company\",\n            href: \"/auth/company\"\n        }\n    ];\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const path = pathname;\n    function getPathUntilSecondSlash(path) {\n        const match = path.match(/^\\/[^/]+\\/[^/]+/);\n        return match ? match[0] : null;\n    }\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-[100px] bg-white fixed top-0 left-0 flex items-center px-[30px] gap-[100px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/auth/dashboard\",\n                    className: \"font-[600] text-[20px]\",\n                    children: \"VOUY\"\n                }, void 0, false, {\n                    fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden lg:flex gap-[25px]\",\n                children: links.map((link, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        style: {\n                            color: link.href === getPathUntilSecondSlash(path) ? \"#000000\" : \"#979797\"\n                        },\n                        href: link.href,\n                        children: link.label\n                    }, index, false, {\n                        fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden lg:flex w-full mb-[15px] justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_signin_SignOutButton_SignOut__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full justify-end flex lg:hidden mr-[10px]\",\n                onClick: ()=>{\n                    setIsMenuOpen(!isMenuOpen);\n                },\n                children: \"Menu\"\n            }, void 0, false, {\n                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion_react__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                children: isMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion.div, {\n                    className: \" bg-white top-0 left-0 h-screen w-screen fixed flex justify-between  items-cemter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full h-[100px] px-[30px] items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: \"/auth/dashboard\",\n                                    className: \"font-[600] text-[20px]\",\n                                    children: \"VOUY\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mr-[10px]\",\n                                onClick: ()=>{\n                                    setIsMenuOpen(false);\n                                },\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"d/L2GqF9l44rBl7/rgBWSc2ljcI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDaUI7QUFDcUI7QUFDbEM7QUFDYztBQUVoQyxTQUFTSzs7SUFDdEIsTUFBTUMsUUFBUTtRQUNaO1lBQUVDLE9BQU87WUFBYUMsTUFBTTtRQUFrQjtRQUM5QztZQUFFRCxPQUFPO1lBQVlDLE1BQU07UUFBaUI7UUFDNUM7WUFBRUQsT0FBTztZQUFZQyxNQUFNO1FBQWlCO1FBQzVDO1lBQUVELE9BQU87WUFBVUMsTUFBTTtRQUFlO1FBQ3hDO1lBQUVELE9BQU87WUFBU0MsTUFBTTtRQUFjO1FBQ3RDO1lBQUVELE9BQU87WUFBU0MsTUFBTTtRQUFjO1FBQ3RDO1lBQUVELE9BQU87WUFBV0MsTUFBTTtRQUFnQjtLQUMzQztJQUVELE1BQU1DLFdBQVdSLDREQUFXQTtJQUM1QixNQUFNUyxPQUFPRDtJQUViLFNBQVNFLHdCQUF3QkQsSUFBWTtRQUMzQyxNQUFNRSxRQUFRRixLQUFLRSxLQUFLLENBQUM7UUFDekIsT0FBT0EsUUFBUUEsS0FBSyxDQUFDLEVBQUUsR0FBRztJQUM1QjtJQUVBLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUU3QyxxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEOzBCQUNDLDRFQUFDZixpREFBSUE7b0JBQUNRLE1BQUs7b0JBQWtCUSxXQUFVOzhCQUF5Qjs7Ozs7Ozs7Ozs7MEJBSWxFLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWlYsTUFBTVcsR0FBRyxDQUFDLENBQUNDLE1BQU1DO29CQUNoQixxQkFDRSw4REFBQ25CLGlEQUFJQTt3QkFDSG9CLE9BQU87NEJBQ0xDLE9BQ0VILEtBQUtWLElBQUksS0FBS0csd0JBQXdCRCxRQUNsQyxZQUNBO3dCQUNSO3dCQUVBRixNQUFNVSxLQUFLVixJQUFJO2tDQUVkVSxLQUFLWCxLQUFLO3VCQUhOWTs7Ozs7Z0JBTVg7Ozs7OzswQkFFRiw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNkLHlFQUFhQTs7Ozs7Ozs7OzswQkFFaEIsOERBQUNhO2dCQUNDQyxXQUFVO2dCQUNWTSxTQUFTO29CQUNQUixjQUFjLENBQUNEO2dCQUNqQjswQkFDRDs7Ozs7OzBCQUdELDhEQUFDVCx5REFBZUE7MEJBQ2JTLDRCQUNDLDhEQUFDVSxPQUFPUixHQUFHO29CQUFDQyxXQUFVOzhCQUNwQiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDswQ0FDQyw0RUFBQ2YsaURBQUlBO29DQUFDUSxNQUFLO29DQUFrQlEsV0FBVTs4Q0FBeUI7Ozs7Ozs7Ozs7OzBDQUlsRSw4REFBQ1E7Z0NBQ0NSLFdBQVU7Z0NBQ1ZNLFNBQVM7b0NBQ1BSLGNBQWM7Z0NBQ2hCOzBDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0FoRndCVDs7UUFXTEosd0RBQVdBOzs7S0FYTkkiLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXdlbG5pZWR6d2llZHovRGVza3RvcC92b3V5LWJ1c2luZXNzL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgU2lnbk91dEJ1dHRvbiBmcm9tIFwiLi4vLi4vYXBwL3NpZ25pbi9TaWduT3V0QnV0dG9uL1NpZ25PdXRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwibW90aW9uL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgbGlua3MgPSBbXG4gICAgeyBsYWJlbDogXCJEYXNoYm9hcmRcIiwgaHJlZjogXCIvYXV0aC9kYXNoYm9hcmRcIiB9LFxuICAgIHsgbGFiZWw6IFwiSW52b2ljZXNcIiwgaHJlZjogXCIvYXV0aC9pbnZvaWNlc1wiIH0sXG4gICAgeyBsYWJlbDogXCJQcm9qZWN0c1wiLCBocmVmOiBcIi9hdXRoL3Byb2plY3RzXCIgfSxcbiAgICB7IGxhYmVsOiBcIk9yZGVyc1wiLCBocmVmOiBcIi9hdXRoL29yZGVyc1wiIH0sXG4gICAgeyBsYWJlbDogXCJUYXNrc1wiLCBocmVmOiBcIi9hdXRoL3Rhc2tzXCIgfSxcbiAgICB7IGxhYmVsOiBcIlVzZXJzXCIsIGhyZWY6IFwiL2F1dGgvdXNlcnNcIiB9LFxuICAgIHsgbGFiZWw6IFwiQ29tcGFueVwiLCBocmVmOiBcIi9hdXRoL2NvbXBhbnlcIiB9LFxuICBdO1xuXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgcGF0aCA9IHBhdGhuYW1lO1xuXG4gIGZ1bmN0aW9uIGdldFBhdGhVbnRpbFNlY29uZFNsYXNoKHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoID0gcGF0aC5tYXRjaCgvXlxcL1teL10rXFwvW14vXSsvKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFswXSA6IG51bGw7XG4gIH1cblxuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtWzEwMHB4XSBiZy13aGl0ZSBmaXhlZCB0b3AtMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHgtWzMwcHhdIGdhcC1bMTAwcHhdXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvZGFzaGJvYXJkXCIgY2xhc3NOYW1lPVwiZm9udC1bNjAwXSB0ZXh0LVsyMHB4XVwiPlxuICAgICAgICAgIFZPVVlcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGdhcC1bMjVweF1cIj5cbiAgICAgICAge2xpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9PT0gZ2V0UGF0aFVudGlsU2Vjb25kU2xhc2gocGF0aClcbiAgICAgICAgICAgICAgICAgICAgPyBcIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiIzk3OTc5N1wiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IHctZnVsbCBtYi1bMTVweF0ganVzdGlmeS1lbmRcIj5cbiAgICAgICAgPFNpZ25PdXRCdXR0b24gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1lbmQgZmxleCBsZzpoaWRkZW4gbXItWzEwcHhdXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBNZW51XG4gICAgICA8L2Rpdj5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIHtpc01lbnVPcGVuICYmIChcbiAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCIgYmctd2hpdGUgdG9wLTAgbGVmdC0wIGgtc2NyZWVuIHctc2NyZWVuIGZpeGVkIGZsZXgganVzdGlmeS1iZXR3ZWVuICBpdGVtcy1jZW10ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaC1bMTAwcHhdIHB4LVszMHB4XSBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2Rhc2hib2FyZFwiIGNsYXNzTmFtZT1cImZvbnQtWzYwMF0gdGV4dC1bMjBweF1cIj5cbiAgICAgICAgICAgICAgICAgIFZPVVlcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLVsxMHB4XVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0SXNNZW51T3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VQYXRobmFtZSIsIlNpZ25PdXRCdXR0b24iLCJ1c2VTdGF0ZSIsIkFuaW1hdGVQcmVzZW5jZSIsIkhlYWRlciIsImxpbmtzIiwibGFiZWwiLCJocmVmIiwicGF0aG5hbWUiLCJwYXRoIiwiZ2V0UGF0aFVudGlsU2Vjb25kU2xhc2giLCJtYXRjaCIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibGluayIsImluZGV4Iiwic3R5bGUiLCJjb2xvciIsIm9uQ2xpY2siLCJtb3Rpb24iLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/Header.tsx\n"));

/***/ })

});