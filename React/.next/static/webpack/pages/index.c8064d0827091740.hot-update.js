"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layout/header/SideBar.js":
/*!**************************************!*\
  !*** ./src/layout/header/SideBar.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst SideBar = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fromNamen, setFromNamen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fromEmail, setFromEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const submitInfo = (e)=>{\n        console.log(\"ola\", e.target[0].value);\n        console.log(\"ola\", e.target[1].value);\n        console.log(\"ola\", e.target[2].value);\n        emailjs.sendForm(\"YOUR_SERVICE_ID\", \"YOUR_TEMPLATE_ID\", form.current, \"YOUR_PUBLIC_KEY\").then((result)=>{\n            console.log(result.text);\n        }, (error)=>{\n            console.log(error.text);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-back-drop\"\n            }, void 0, false, {\n                fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"hidden-bar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inner-box text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cross-icon\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"fa fa-times\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Get Appointment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"appointment-form\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: (e)=>{\n                                    e.preventDefault();\n                                    document.querySelector(\"body\").classList.remove(\"side-content-visible\");\n                                    submitInfo(e);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"text\",\n                                            placeholder: \"Name\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            name: \"email\",\n                                            placeholder: \"Email Address\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            placeholder: \"Message\",\n                                            rows: 5\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"theme-btn\",\n                                            children: \"Submit now\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"social-style-one\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fab fa-facebook-f\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fab fa-instagram\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ctw02306/myProjects/NexDigitalis/React/src/layout/header/SideBar.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SideBar, \"Q2i3+hd/9xWKD3/sMNLregiiW3Q=\");\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L2hlYWRlci9TaWRlQmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFFM0MsTUFBTUUsVUFBVSxJQUFNOztJQUVwQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNUSxhQUFXLENBQUNDLElBQUk7UUFFcEJDLFFBQVFDLEdBQUcsQ0FBQyxPQUFPRixFQUFFRyxNQUFNLENBQUMsRUFBRSxDQUFDQyxLQUFLO1FBQ3BDSCxRQUFRQyxHQUFHLENBQUMsT0FBT0YsRUFBRUcsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSztRQUNwQ0gsUUFBUUMsR0FBRyxDQUFDLE9BQU9GLEVBQUVHLE1BQU0sQ0FBQyxFQUFFLENBQUNDLEtBQUs7UUFDcENDLFFBQVFDLFFBQVEsQ0FBQyxtQkFBbUIsb0JBQW9CQyxLQUFLQyxPQUFPLEVBQUUsbUJBQ3JFQyxJQUFJLENBQUMsQ0FBQ0MsU0FBVztZQUNkVCxRQUFRQyxHQUFHLENBQUNRLE9BQU9DLElBQUk7UUFDM0IsR0FBRyxDQUFDQyxRQUFVO1lBQ1ZYLFFBQVFDLEdBQUcsQ0FBQ1UsTUFBTUQsSUFBSTtRQUMxQjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNyQiwyQ0FBUUE7OzBCQUNQLDhEQUFDdUI7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0M7Z0JBQVFELFdBQVU7MEJBQ2pCLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRTtnQ0FBS0YsV0FBVTs7Ozs7Ozs7Ozs7c0NBRWxCLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0c7MENBQUc7Ozs7Ozs7Ozs7O3NDQUdOLDhEQUFDSjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1A7Z0NBQ0NXLFVBQVUsQ0FBQ2xCLElBQU07b0NBQ2ZBLEVBQUVtQixjQUFjO29DQUNoQkMsU0FDR0MsYUFBYSxDQUFDLFFBQ2RDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO29DQUNsQnhCLFdBQVdDO2dDQUNmOztrREFFQSw4REFBQ2E7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNVOzRDQUFNQyxNQUFLOzRDQUFPaEMsTUFBSzs0Q0FBT2lDLGFBQVk7NENBQU9DLFFBQVE7Ozs7Ozs7Ozs7O2tEQUU1RCw4REFBQ2Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNVOzRDQUNDQyxNQUFLOzRDQUNMaEMsTUFBSzs0Q0FDTGlDLGFBQVk7NENBQ1pDLFFBQVE7Ozs7Ozs7Ozs7O2tEQUdaLDhEQUFDZDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ2M7NENBQVNGLGFBQVk7NENBQVVHLE1BQU07Ozs7Ozs7Ozs7O2tEQUV4Qyw4REFBQ2hCO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDZ0I7NENBQU9MLE1BQUs7NENBQVNYLFdBQVU7c0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBT2xELDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNpQjtvQ0FBRUMsTUFBSzs4Q0FDTiw0RUFBQ0M7d0NBQUVuQixXQUFVOzs7Ozs7Ozs7Ozs4Q0FFZiw4REFBQ2lCO29DQUFFQyxNQUFLOzhDQUNOLDRFQUFDQzt3Q0FBRW5CLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0I7R0ExRU10QjtLQUFBQTtBQTJFTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0L2hlYWRlci9TaWRlQmFyLmpzP2NjNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTaWRlQmFyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtmcm9tTmFtZW4sIHNldEZyb21OYW1lbl0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtmcm9tRW1haWwsIHNldEZyb21FbWFpbF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICBjb25zdCBzdWJtaXRJbmZvPShlKT0+e1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwib2xhXCIsIGUudGFyZ2V0WzBdLnZhbHVlKVxyXG4gICAgY29uc29sZS5sb2coXCJvbGFcIiwgZS50YXJnZXRbMV0udmFsdWUpXHJcbiAgICBjb25zb2xlLmxvZyhcIm9sYVwiLCBlLnRhcmdldFsyXS52YWx1ZSlcclxuICAgIGVtYWlsanMuc2VuZEZvcm0oJ1lPVVJfU0VSVklDRV9JRCcsICdZT1VSX1RFTVBMQVRFX0lEJywgZm9ybS5jdXJyZW50LCAnWU9VUl9QVUJMSUNfS0VZJylcclxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYmFjay1kcm9wXCI+PC9kaXY+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhpZGRlbi1iYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWJveCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zcy1pY29uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDQ+R2V0IEFwcG9pbnRtZW50PC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qQXBwb2ludG1lbnQgRm9ybSovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBvaW50bWVudC1mb3JtXCI+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlLWNvbnRlbnQtdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgc3VibWl0SW5mbyhlKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIiByb3dzPXs1fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidGhlbWUtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgIFN1Ym1pdCBub3dcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKlNvY2lhbCBJY29ucyovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtc3R5bGUtb25lXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZVN0YXRlIiwiU2lkZUJhciIsIm5hbWUiLCJzZXROYW1lIiwiZnJvbU5hbWVuIiwic2V0RnJvbU5hbWVuIiwiZnJvbUVtYWlsIiwic2V0RnJvbUVtYWlsIiwic3VibWl0SW5mbyIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJlbWFpbGpzIiwic2VuZEZvcm0iLCJmb3JtIiwiY3VycmVudCIsInRoZW4iLCJyZXN1bHQiLCJ0ZXh0IiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwic3BhbiIsImg0Iiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iLCJhIiwiaHJlZiIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/header/SideBar.js\n"));

/***/ })

});