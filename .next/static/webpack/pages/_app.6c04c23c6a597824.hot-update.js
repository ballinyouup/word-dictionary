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

/***/ "./hooks/useSearch.tsx":
/*!*****************************!*\
  !*** ./hooks/useSearch.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var words_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! words.json */ \"./words.json\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useSearch = function useSearch() {\n  _s();\n\n  //Creates new query state for search string.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      matching = _useState2[0],\n      setMatching = _useState2[1];\n\n  var timeout; //Creates a new router from next's useRouter hook.\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)(); //Sets query to the value of the input.\n\n  function handleInput(event) {\n    var trimmedQuery = event.target.value.trim();\n    var keys = Object.keys(words_json__WEBPACK_IMPORTED_MODULE_2__);\n    var matchingWords = keys.filter(function (key) {\n      var regex = new RegExp(\"^\".concat(trimmedQuery), 'i');\n      return regex.test(key);\n    });\n    setQuery(trimmedQuery);\n    setMatching(matchingWords);\n  }\n\n  var debouncedInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(handleInput, 300), []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    console.log(matching);\n  }, [matching]); //Runs handleSearch on Enter\n\n  function handleKeyDown(event) {\n    if (event.key === 'Enter') {\n      handleSearch();\n    }\n  } //Runs handleSearch on click of search icon button.\n\n\n  function handleClick() {\n    handleSearch();\n  }\n  /*\r\n  The handleSearch function stored the trimmed query inside trimmedQuery.\r\n  If trimmedQuery has a value, it moves you to the location. \r\n  Resets query, and value of input.\r\n  */\n\n\n  function handleSearch() {\n    var trimmedQuery = query.trim();\n    var keys = Object.keys(words_json__WEBPACK_IMPORTED_MODULE_2__);\n    var matchesQuery = keys.some(function (key) {\n      return key === trimmedQuery;\n    });\n\n    if (matchesQuery) {\n      router.push(\"/\".concat(trimmedQuery));\n      setQuery('');\n    }\n  }\n\n  function handleMatchingClick(result) {\n    router.push(\"/\".concat(result));\n    setQuery('');\n  } //Returns the objects below to be used in components.\n\n\n  return {\n    query: query,\n    setQuery: setQuery,\n    handleInput: handleInput,\n    handleKeyDown: handleKeyDown,\n    handleClick: handleClick,\n    matching: matching,\n    handleMatchingClick: handleMatchingClick\n  };\n};\n\n_s(useSearch, \"0zzWJNqfxzsCY3VMuNRAQ9N3Bb4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSearch);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZU0sU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VTZWFyY2gudHN4P2JhMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHdvcmRzIGZyb20gJ3dvcmRzLmpzb24nO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJ1xyXG5cclxuY29uc3QgdXNlU2VhcmNoID0gKCkgPT4ge1xyXG4gIC8vQ3JlYXRlcyBuZXcgcXVlcnkgc3RhdGUgZm9yIHNlYXJjaCBzdHJpbmcuXHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBbbWF0Y2hpbmcsIHNldE1hdGNoaW5nXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgbGV0IHRpbWVvdXQ7XHJcbiAgLy9DcmVhdGVzIGEgbmV3IHJvdXRlciBmcm9tIG5leHQncyB1c2VSb3V0ZXIgaG9vay5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy9TZXRzIHF1ZXJ5IHRvIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuXHJcbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXQoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCB0cmltbWVkUXVlcnk6IHN0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMod29yZHMpO1xyXG4gICAgY29uc3QgbWF0Y2hpbmdXb3JkcyA9IGtleXMuZmlsdGVyKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYF4ke3RyaW1tZWRRdWVyeX1gLCAnaScpO1xyXG4gICAgICByZXR1cm4gcmVnZXgudGVzdChrZXkpO1xyXG4gICAgfSk7XHJcbiAgICBzZXRRdWVyeSh0cmltbWVkUXVlcnkpO1xyXG4gICAgc2V0TWF0Y2hpbmcobWF0Y2hpbmdXb3Jkcyk7XHJcbiAgfVxyXG4gIGNvbnN0IGRlYm91bmNlZElucHV0ID0gdXNlQ2FsbGJhY2soZGVib3VuY2UoaGFuZGxlSW5wdXQsIDMwMCksIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG1hdGNoaW5nKTtcclxuICB9LCBbbWF0Y2hpbmddKTtcclxuXHJcbiAgLy9SdW5zIGhhbmRsZVNlYXJjaCBvbiBFbnRlclxyXG4gIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgaGFuZGxlU2VhcmNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vUnVucyBoYW5kbGVTZWFyY2ggb24gY2xpY2sgb2Ygc2VhcmNoIGljb24gYnV0dG9uLlxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgaGFuZGxlU2VhcmNoKCk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gIFRoZSBoYW5kbGVTZWFyY2ggZnVuY3Rpb24gc3RvcmVkIHRoZSB0cmltbWVkIHF1ZXJ5IGluc2lkZSB0cmltbWVkUXVlcnkuXHJcbiAgSWYgdHJpbW1lZFF1ZXJ5IGhhcyBhIHZhbHVlLCBpdCBtb3ZlcyB5b3UgdG8gdGhlIGxvY2F0aW9uLiBcclxuICBSZXNldHMgcXVlcnksIGFuZCB2YWx1ZSBvZiBpbnB1dC5cclxuICAqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaCgpIHtcclxuICAgIGNvbnN0IHRyaW1tZWRRdWVyeTogc3RyaW5nID0gcXVlcnkudHJpbSgpO1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHdvcmRzKTtcclxuICAgIGNvbnN0IG1hdGNoZXNRdWVyeSA9IGtleXMuc29tZSgoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIGtleSA9PT0gdHJpbW1lZFF1ZXJ5O1xyXG4gICAgfSk7XHJcbiAgICBpZiAobWF0Y2hlc1F1ZXJ5KSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvJHt0cmltbWVkUXVlcnl9YCk7XHJcbiAgICAgIHNldFF1ZXJ5KCcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU1hdGNoaW5nQ2xpY2socmVzdWx0OiBzdHJpbmcpIHtcclxuICAgIHJvdXRlci5wdXNoKGAvJHtyZXN1bHR9YCk7XHJcbiAgICBzZXRRdWVyeSgnJyk7XHJcbiAgfVxyXG5cclxuICAvL1JldHVybnMgdGhlIG9iamVjdHMgYmVsb3cgdG8gYmUgdXNlZCBpbiBjb21wb25lbnRzLlxyXG4gIHJldHVybiB7XHJcbiAgICBxdWVyeSxcclxuICAgIHNldFF1ZXJ5LFxyXG4gICAgaGFuZGxlSW5wdXQsXHJcbiAgICBoYW5kbGVLZXlEb3duLFxyXG4gICAgaGFuZGxlQ2xpY2ssXHJcbiAgICBtYXRjaGluZyxcclxuICAgIGhhbmRsZU1hdGNoaW5nQ2xpY2ssXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNlYXJjaDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ3b3JkcyIsImRlYm91bmNlIiwidXNlU2VhcmNoIiwicXVlcnkiLCJzZXRRdWVyeSIsIm1hdGNoaW5nIiwic2V0TWF0Y2hpbmciLCJ0aW1lb3V0Iiwicm91dGVyIiwiaGFuZGxlSW5wdXQiLCJldmVudCIsInRyaW1tZWRRdWVyeSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsImtleXMiLCJPYmplY3QiLCJtYXRjaGluZ1dvcmRzIiwiZmlsdGVyIiwia2V5IiwicmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwiZGVib3VuY2VkSW5wdXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUNsaWNrIiwibWF0Y2hlc1F1ZXJ5Iiwic29tZSIsInB1c2giLCJoYW5kbGVNYXRjaGluZ0NsaWNrIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useSearch.tsx\n"));

/***/ })

});