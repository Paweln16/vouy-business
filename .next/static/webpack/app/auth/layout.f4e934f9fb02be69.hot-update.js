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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_signin_SignOutButton_SignOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/signin/SignOutButton/SignOut */ \"(app-pages-browser)/./src/app/signin/SignOutButton/SignOut.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! motion/react */ \"(app-pages-browser)/./node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! motion/react */ \"(app-pages-browser)/./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! motion */ \"(app-pages-browser)/./node_modules/motion/dist/es/framer-motion/dist/es/easing/cubic-bezier.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const links = [\n        {\n            label: \"Dashboard\",\n            href: \"/auth/dashboard\"\n        },\n        {\n            label: \"Invoices\",\n            href: \"/auth/invoices\"\n        },\n        {\n            label: \"Projects\",\n            href: \"/auth/projects\"\n        },\n        {\n            label: \"Orders\",\n            href: \"/auth/orders\"\n        },\n        {\n            label: \"Tasks\",\n            href: \"/auth/tasks\"\n        },\n        {\n            label: \"Users\",\n            href: \"/auth/users\"\n        },\n        {\n            label: \"Company\",\n            href: \"/auth/company\"\n        }\n    ];\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const path = pathname;\n    function getPathUntilSecondSlash(path) {\n        const match = path.match(/^\\/[^/]+\\/[^/]+/);\n        return match ? match[0] : null;\n    }\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const modalVariants = {\n        hidden: {\n            height: \"0\"\n        },\n        visible: {\n            height: \"100vh\",\n            transition: {\n                type: \"tween\",\n                ease: (0,motion__WEBPACK_IMPORTED_MODULE_5__.cubicBezier)(0.65, 0, 0.35, 1),\n                duration: 1.2\n            }\n        },\n        exit: {\n            y: \"-100vh\",\n            transition: {\n                type: \"tween\",\n                duration: 0.3,\n                delay: 0.3\n            }\n        }\n    };\n    const linkItemVariants = {\n        hidden: {\n            opacity: 0,\n            y: \"50%\"\n        },\n        visible: {\n            opacity: 1,\n            y: 0,\n            transition: {\n                duration: 0.5,\n                ease: \"easeOut\"\n            }\n        },\n        exit: {\n            opacity: 0,\n            y: \"50%\",\n            transition: {\n                duration: 0.1,\n                ease: \"easeOut\"\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-[100px] bg-white fixed top-0 left-0 flex items-center px-[30px] gap-[100px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/auth/dashboard\",\n                    className: \"font-[600] text-[20px]\",\n                    children: \"VOUY\"\n                }, void 0, false, {\n                    fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden lg:flex gap-[25px]\",\n                children: links.map((link, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        style: {\n                            color: link.href === getPathUntilSecondSlash(path) ? \"#000000\" : \"#979797\"\n                        },\n                        href: link.href,\n                        children: link.label\n                    }, index, false, {\n                        fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden lg:flex w-full mb-[15px] justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_signin_SignOutButton_SignOut__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full justify-end flex lg:hidden mr-[10px]\",\n                onClick: ()=>{\n                    setIsMenuOpen(!isMenuOpen);\n                },\n                children: \"Menu\"\n            }, void 0, false, {\n                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion_react__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {\n                children: isMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion_react__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                    variants: modalVariants,\n                    initial: \"hidden\",\n                    animate: \"visible\",\n                    exit: \"exit\",\n                    className: \" bg-white overflow-hidden z-50 top-0 left-0 h-screen w-screen fixed flex flex-col \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-full h-[100px] px-[30px] items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/auth/dashboard\",\n                                        className: \"font-[600] text-[20px]\",\n                                        children: \"VOUY\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mr-[10px]\",\n                                    onClick: ()=>{\n                                        setIsMenuOpen(false);\n                                    },\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex items-center h-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full  flex flex-col pl-[40px] text-[20px] \",\n                                children: links.map((link, index)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion_react__WEBPACK_IMPORTED_MODULE_7__.motion.span, {\n                                        variants: linkItemVariants,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: link.href,\n                                            onClick: ()=>{\n                                                setIsMenuOpen(false);\n                                            },\n                                            style: {\n                                                color: link.href === getPathUntilSecondSlash(path) ? \"#000000\" : \"#979797\"\n                                            },\n                                            children: link.label\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                                            lineNumber: 137,\n                                            columnNumber: 23\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 21\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"d/L2GqF9l44rBl7/rgBWSc2ljcI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM2QjtBQUNpQjtBQUNxQjtBQUNsQztBQUNzQjtBQUNWO0FBRTlCLFNBQVNPOztJQUN0QixNQUFNQyxRQUFRO1FBQ1o7WUFBRUMsT0FBTztZQUFhQyxNQUFNO1FBQWtCO1FBQzlDO1lBQUVELE9BQU87WUFBWUMsTUFBTTtRQUFpQjtRQUM1QztZQUFFRCxPQUFPO1lBQVlDLE1BQU07UUFBaUI7UUFDNUM7WUFBRUQsT0FBTztZQUFVQyxNQUFNO1FBQWU7UUFDeEM7WUFBRUQsT0FBTztZQUFTQyxNQUFNO1FBQWM7UUFDdEM7WUFBRUQsT0FBTztZQUFTQyxNQUFNO1FBQWM7UUFDdEM7WUFBRUQsT0FBTztZQUFXQyxNQUFNO1FBQWdCO0tBQzNDO0lBRUQsTUFBTUMsV0FBV1YsNERBQVdBO0lBQzVCLE1BQU1XLE9BQU9EO0lBRWIsU0FBU0Usd0JBQXdCRCxJQUFZO1FBQzNDLE1BQU1FLFFBQVFGLEtBQUtFLEtBQUssQ0FBQztRQUN6QixPQUFPQSxRQUFRQSxLQUFLLENBQUMsRUFBRSxHQUFHO0lBQzVCO0lBRUEsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1jLGdCQUFnQjtRQUNwQkMsUUFBUTtZQUNOQyxRQUFRO1FBQ1Y7UUFDQUMsU0FBUztZQUNQRCxRQUFRO1lBQ1JFLFlBQVk7Z0JBQ1ZDLE1BQU07Z0JBQ05DLE1BQU1qQixtREFBV0EsQ0FBQyxNQUFNLEdBQUcsTUFBTTtnQkFDakNrQixVQUFVO1lBQ1o7UUFDRjtRQUNBQyxNQUFNO1lBQ0pDLEdBQUc7WUFDSEwsWUFBWTtnQkFDVkMsTUFBTTtnQkFDTkUsVUFBVTtnQkFDVkcsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE1BQU1DLG1CQUFtQjtRQUN2QlYsUUFBUTtZQUFFVyxTQUFTO1lBQUdILEdBQUc7UUFBTTtRQUMvQk4sU0FBUztZQUNQUyxTQUFTO1lBQ1RILEdBQUc7WUFDSEwsWUFBWTtnQkFDVkcsVUFBVTtnQkFDVkQsTUFBTTtZQUNSO1FBQ0Y7UUFDQUUsTUFBTTtZQUNKSSxTQUFTO1lBQ1RILEdBQUc7WUFDSEwsWUFBWTtnQkFDVkcsVUFBVTtnQkFDVkQsTUFBTTtZQUNSO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7MEJBQ0MsNEVBQUM5QixpREFBSUE7b0JBQUNVLE1BQUs7b0JBQWtCcUIsV0FBVTs4QkFBeUI7Ozs7Ozs7Ozs7OzBCQUlsRSw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1p2QixNQUFNd0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DO29CQUNoQixxQkFDRSw4REFBQ2xDLGlEQUFJQTt3QkFDSG1DLE9BQU87NEJBQ0xDLE9BQ0VILEtBQUt2QixJQUFJLEtBQUtHLHdCQUF3QkQsUUFDbEMsWUFDQTt3QkFDUjt3QkFFQUYsTUFBTXVCLEtBQUt2QixJQUFJO2tDQUVkdUIsS0FBS3hCLEtBQUs7dUJBSE55Qjs7Ozs7Z0JBTVg7Ozs7OzswQkFFRiw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM3Qix5RUFBYUE7Ozs7Ozs7Ozs7MEJBRWhCLDhEQUFDNEI7Z0JBQ0NDLFdBQVU7Z0JBQ1ZNLFNBQVM7b0JBQ1ByQixjQUFjLENBQUNEO2dCQUNqQjswQkFDRDs7Ozs7OzBCQUdELDhEQUFDWCx5REFBZUE7MEJBQ2JXLDRCQUNDLDhEQUFDVixnREFBTUEsQ0FBQ3lCLEdBQUc7b0JBQ1RRLFVBQVVyQjtvQkFDVnNCLFNBQVE7b0JBQ1JDLFNBQVE7b0JBQ1JmLE1BQUs7b0JBQ0xNLFdBQVU7O3NDQUVWLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEOzhDQUNDLDRFQUFDOUIsaURBQUlBO3dDQUFDVSxNQUFLO3dDQUFrQnFCLFdBQVU7a0RBQXlCOzs7Ozs7Ozs7Ozs4Q0FJbEUsOERBQUNVO29DQUNDVixXQUFVO29DQUNWTSxTQUFTO3dDQUNQckIsY0FBYztvQ0FDaEI7OENBQ0Q7Ozs7Ozs7Ozs7OztzQ0FJSCw4REFBQ2M7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOzBDQUNadkIsTUFBTXdCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztvQ0FDaEIscUJBQ0UsOERBQUM3QixnREFBTUEsQ0FBQ3FDLElBQUk7d0NBQWFKLFVBQVVWO2tEQUNqQyw0RUFBQzVCLGlEQUFJQTs0Q0FDSFUsTUFBTXVCLEtBQUt2QixJQUFJOzRDQUNmMkIsU0FBUztnREFDUHJCLGNBQWM7NENBQ2hCOzRDQUNBbUIsT0FBTztnREFDTEMsT0FDRUgsS0FBS3ZCLElBQUksS0FBS0csd0JBQXdCRCxRQUNsQyxZQUNBOzRDQUNSO3NEQUVDcUIsS0FBS3hCLEtBQUs7Ozs7Ozt1Q0FiR3lCOzs7OztnQ0FpQnRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWhCO0dBeEp3QjNCOztRQVdMTix3REFBV0E7OztLQVhOTSIsInNvdXJjZXMiOlsiL1VzZXJzL3Bhd2VsbmllZHp3aWVkei9EZXNrdG9wL3ZvdXktYnVzaW5lc3Mvc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBTaWduT3V0QnV0dG9uIGZyb20gXCIuLi8uLi9hcHAvc2lnbmluL1NpZ25PdXRCdXR0b24vU2lnbk91dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcIm1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgY3ViaWNCZXppZXIsIGVhc2VJbiB9IGZyb20gXCJtb3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBsaW5rcyA9IFtcbiAgICB7IGxhYmVsOiBcIkRhc2hib2FyZFwiLCBocmVmOiBcIi9hdXRoL2Rhc2hib2FyZFwiIH0sXG4gICAgeyBsYWJlbDogXCJJbnZvaWNlc1wiLCBocmVmOiBcIi9hdXRoL2ludm9pY2VzXCIgfSxcbiAgICB7IGxhYmVsOiBcIlByb2plY3RzXCIsIGhyZWY6IFwiL2F1dGgvcHJvamVjdHNcIiB9LFxuICAgIHsgbGFiZWw6IFwiT3JkZXJzXCIsIGhyZWY6IFwiL2F1dGgvb3JkZXJzXCIgfSxcbiAgICB7IGxhYmVsOiBcIlRhc2tzXCIsIGhyZWY6IFwiL2F1dGgvdGFza3NcIiB9LFxuICAgIHsgbGFiZWw6IFwiVXNlcnNcIiwgaHJlZjogXCIvYXV0aC91c2Vyc1wiIH0sXG4gICAgeyBsYWJlbDogXCJDb21wYW55XCIsIGhyZWY6IFwiL2F1dGgvY29tcGFueVwiIH0sXG4gIF07XG5cbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBwYXRoID0gcGF0aG5hbWU7XG5cbiAgZnVuY3Rpb24gZ2V0UGF0aFVudGlsU2Vjb25kU2xhc2gocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2ggPSBwYXRoLm1hdGNoKC9eXFwvW14vXStcXC9bXi9dKy8pO1xuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzBdIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtb2RhbFZhcmlhbnRzID0ge1xuICAgIGhpZGRlbjoge1xuICAgICAgaGVpZ2h0OiBcIjBcIixcbiAgICB9LFxuICAgIHZpc2libGU6IHtcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOiBcInR3ZWVuXCIsXG4gICAgICAgIGVhc2U6IGN1YmljQmV6aWVyKDAuNjUsIDAsIDAuMzUsIDEpLFxuICAgICAgICBkdXJhdGlvbjogMS4yLCAvLyBTcGVjaWZ5IGR1cmF0aW9uXG4gICAgICB9LFxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgeTogXCItMTAwdmhcIixcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgdHlwZTogXCJ0d2VlblwiLFxuICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICBkZWxheTogMC4zLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGxpbmtJdGVtVmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IFwiNTAlXCIgfSxcbiAgICB2aXNpYmxlOiB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgeTogMCxcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgZWFzZTogXCJlYXNlT3V0XCIsIC8vIEFkZCBlYXNlLW91dCBlYXNpbmcgZnVuY3Rpb25cbiAgICAgIH0sXG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgeTogXCI1MCVcIixcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZHVyYXRpb246IDAuMSxcbiAgICAgICAgZWFzZTogXCJlYXNlT3V0XCIsIC8vIEFkZCBlYXNlLW91dCBlYXNpbmcgZnVuY3Rpb25cbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1bMTAwcHhdIGJnLXdoaXRlIGZpeGVkIHRvcC0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBweC1bMzBweF0gZ2FwLVsxMDBweF1cIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9kYXNoYm9hcmRcIiBjbGFzc05hbWU9XCJmb250LVs2MDBdIHRleHQtWzIwcHhdXCI+XG4gICAgICAgICAgVk9VWVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggZ2FwLVsyNXB4XVwiPlxuICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgbGluay5ocmVmID09PSBnZXRQYXRoVW50aWxTZWNvbmRTbGFzaChwYXRoKVxuICAgICAgICAgICAgICAgICAgICA/IFwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCIjOTc5Nzk3XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggdy1mdWxsIG1iLVsxNXB4XSBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICA8U2lnbk91dEJ1dHRvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LWVuZCBmbGV4IGxnOmhpZGRlbiBtci1bMTBweF1cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0SXNNZW51T3BlbighaXNNZW51T3Blbik7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIE1lbnVcbiAgICAgIDwvZGl2PlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAge2lzTWVudU9wZW4gJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB2YXJpYW50cz17bW9kYWxWYXJpYW50c31cbiAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxuICAgICAgICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLXdoaXRlIG92ZXJmbG93LWhpZGRlbiB6LTUwIHRvcC0wIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlbiBmaXhlZCBmbGV4IGZsZXgtY29sIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBoLVsxMDBweF0gcHgtWzMwcHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvZGFzaGJvYXJkXCIgY2xhc3NOYW1lPVwiZm9udC1bNjAwXSB0ZXh0LVsyMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgVk9VWVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItWzEwcHhdXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRJc01lbnVPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgIGZsZXggZmxleC1jb2wgcGwtWzQwcHhdIHRleHQtWzIwcHhdIFwiPlxuICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnNwYW4ga2V5PXtpbmRleH0gdmFyaWFudHM9e2xpbmtJdGVtVmFyaWFudHN9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTWVudU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9PT0gZ2V0UGF0aFVudGlsU2Vjb25kU2xhc2gocGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIjOTc5Nzk3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwiU2lnbk91dEJ1dHRvbiIsInVzZVN0YXRlIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiY3ViaWNCZXppZXIiLCJIZWFkZXIiLCJsaW5rcyIsImxhYmVsIiwiaHJlZiIsInBhdGhuYW1lIiwicGF0aCIsImdldFBhdGhVbnRpbFNlY29uZFNsYXNoIiwibWF0Y2giLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsIm1vZGFsVmFyaWFudHMiLCJoaWRkZW4iLCJoZWlnaHQiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJlYXNlIiwiZHVyYXRpb24iLCJleGl0IiwieSIsImRlbGF5IiwibGlua0l0ZW1WYXJpYW50cyIsIm9wYWNpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJzdHlsZSIsImNvbG9yIiwib25DbGljayIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJwIiwic3BhbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/Header.tsx\n"));

/***/ })

});