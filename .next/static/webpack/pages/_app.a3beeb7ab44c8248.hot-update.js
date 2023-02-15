"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hooks_useSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useSearch */ \"./hooks/useSearch.tsx\");\n/* harmony import */ var _styles_Search_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Search.module.css */ \"./styles/Search.module.css\");\n/* harmony import */ var _styles_Search_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"Z:\\\\DictionaryApp\\\\word-dictionary\\\\components\\\\Search.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Search = function Search() {\n  _s();\n\n  var _useSearch = (0,_hooks_useSearch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n      query = _useSearch.query,\n      debouncedInput = _useSearch.debouncedInput,\n      handleKeyDown = _useSearch.handleKeyDown,\n      handleClick = _useSearch.handleClick,\n      matching = _useSearch.matching,\n      handleMatchingClick = _useSearch.handleMatchingClick;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: (_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchContainer),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n      className: (_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_2___default().search),\n      onChange: debouncedInput,\n      onKeyDown: handleKeyDown,\n      placeholder: \"Enter word for definition..\",\n      value: query\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_2___default().resultContainer),\n      children: query != '' ? matching.slice(0, 10).map(function (result, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: function onClick() {\n            return handleMatchingClick(result);\n          },\n          className: (_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_2___default().result),\n          children: result\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 15\n        }, _this);\n      }) : null\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      className: (_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchButton),\n      onClick: handleClick,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n        className: (_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchIcon),\n        src: \"https://cdn-icons-png.flaticon.com/512/149/149852.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Search, \"iwtoy7b18eipVPE1nNtEDTOzncg=\", false, function () {\n  return [_hooks_useSearch__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n});\n\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUNBLElBQU1FLE1BQVUsR0FBRyxTQUFiQSxNQUFhLEdBQU07RUFBQTs7RUFDdkIsaUJBT0lGLDREQUFTLEVBUGI7RUFBQSxJQUNFRyxLQURGLGNBQ0VBLEtBREY7RUFBQSxJQUVFQyxjQUZGLGNBRUVBLGNBRkY7RUFBQSxJQUdFQyxhQUhGLGNBR0VBLGFBSEY7RUFBQSxJQUlFQyxXQUpGLGNBSUVBLFdBSkY7RUFBQSxJQUtFQyxRQUxGLGNBS0VBLFFBTEY7RUFBQSxJQU1FQyxtQkFORixjQU1FQSxtQkFORjs7RUFRQSxvQkFDRTtJQUFLLFNBQVMsRUFBRVAsa0ZBQWhCO0lBQUEsd0JBQ0U7TUFDRSxTQUFTLEVBQUVBLHlFQURiO01BRUUsUUFBUSxFQUFFRyxjQUZaO01BR0UsU0FBUyxFQUFFQyxhQUhiO01BSUUsV0FBVyxFQUFDLDZCQUpkO01BS0UsS0FBSyxFQUFFRjtJQUxUO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixlQVFFO01BQUssU0FBUyxFQUFFRixrRkFBaEI7TUFBQSxVQUNHRSxLQUFLLElBQUksRUFBVCxHQUNHSSxRQUFRLENBQUNLLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCQyxHQUF0QixDQUEwQixVQUFDQyxNQUFELEVBQWlCQyxLQUFqQjtRQUFBLG9CQUN4QjtVQUNFLE9BQU8sRUFBRTtZQUFBLE9BQU1QLG1CQUFtQixDQUFDTSxNQUFELENBQXpCO1VBQUEsQ0FEWDtVQUVFLFNBQVMsRUFBRWIseUVBRmI7VUFBQSxVQUtHYTtRQUxILEdBR09DLEtBSFA7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUR3QjtNQUFBLENBQTFCLENBREgsR0FVRztJQVhOO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FSRixlQXFCRTtNQUFRLFNBQVMsRUFBRWQsK0VBQW5CO01BQXdDLE9BQU8sRUFBRUssV0FBakQ7TUFBQSx1QkFDRTtRQUNFLFNBQVMsRUFBRUwsNkVBRGI7UUFFRSxHQUFHLEVBQUM7TUFGTjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQXJCRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQThCRCxDQXZDRDs7R0FBTUM7VUFRQUY7OztLQVJBRTtBQXlDTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaC50c3g/Yjk2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVNlYXJjaCBmcm9tICcuLi9ob29rcy91c2VTZWFyY2gnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9TZWFyY2gubW9kdWxlLmNzcyc7XHJcbmNvbnN0IFNlYXJjaDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcXVlcnksXHJcbiAgICBkZWJvdW5jZWRJbnB1dCxcclxuICAgIGhhbmRsZUtleURvd24sXHJcbiAgICBoYW5kbGVDbGljayxcclxuICAgIG1hdGNoaW5nLFxyXG4gICAgaGFuZGxlTWF0Y2hpbmdDbGljayxcclxuICB9ID0gdXNlU2VhcmNoKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQ29udGFpbmVyfT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofVxyXG4gICAgICAgIG9uQ2hhbmdlPXtkZWJvdW5jZWRJbnB1dH1cclxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB3b3JkIGZvciBkZWZpbml0aW9uLi5cIlxyXG4gICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHRDb250YWluZXJ9PlxyXG4gICAgICAgIHtxdWVyeSAhPSAnJ1xyXG4gICAgICAgICAgPyBtYXRjaGluZy5zbGljZSgwLCAxMCkubWFwKChyZXN1bHQ6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1hdGNoaW5nQ2xpY2socmVzdWx0KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH1cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdH1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSWNvbn1cclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzE0OS8xNDk4NTIucG5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTZWFyY2giLCJzdHlsZXMiLCJTZWFyY2giLCJxdWVyeSIsImRlYm91bmNlZElucHV0IiwiaGFuZGxlS2V5RG93biIsImhhbmRsZUNsaWNrIiwibWF0Y2hpbmciLCJoYW5kbGVNYXRjaGluZ0NsaWNrIiwic2VhcmNoQ29udGFpbmVyIiwic2VhcmNoIiwicmVzdWx0Q29udGFpbmVyIiwic2xpY2UiLCJtYXAiLCJyZXN1bHQiLCJpbmRleCIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaEljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Search.tsx\n"));

/***/ })

});