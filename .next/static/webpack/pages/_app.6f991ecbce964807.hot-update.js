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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var words_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! words.json */ \"./words.json\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useSearch = function useSearch() {\n  _s();\n\n  //Creates new query state for search string.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      matching = _useState2[0],\n      setMatching = _useState2[1]; //Creates a new router from next's useRouter hook.\n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  var debouncedSetMatching = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function (matchingWords) {\n    return setMatching(matchingWords);\n  }, 300), []); //Sets query to the value of the input.\n\n  function handleInput(event) {\n    var trimmedQuery = event.target.value.trim();\n    var keys = Object.keys(words_json__WEBPACK_IMPORTED_MODULE_2__);\n    var matchingWords = keys.filter(function (key) {\n      var regex = new RegExp(\"^\".concat(trimmedQuery), \"i\");\n      return regex.test(key);\n    });\n    setQuery(trimmedQuery);\n    debouncedSetMatching(matchingWords);\n  } //Runs handleSearch on Enter\n\n\n  function handleKeyDown(event) {\n    if (event.key === \"Enter\") {\n      handleSearch();\n    }\n  } //Runs handleSearch on click of search icon button.\n\n\n  function handleClick() {\n    handleSearch();\n  }\n  /*\r\n   The handleSearch function stored the trimmed query inside trimmedQuery.\r\n   If trimmedQuery has a value, it moves you to the location. \r\n   Resets query, and value of input.\r\n   */\n\n\n  function handleSearch() {\n    var trimmedQuery = query.trim();\n    var keys = Object.keys(words_json__WEBPACK_IMPORTED_MODULE_2__);\n    var matchesQuery = keys.some(function (key) {\n      return key === trimmedQuery;\n    });\n\n    if (matchesQuery) {\n      router.push(\"/\".concat(trimmedQuery));\n      setQuery(\"\");\n    }\n  }\n\n  function handleMatchingClick(result) {\n    router.push(\"/\".concat(result));\n    setQuery(\"\");\n  } //Returns the objects below to be used in components.\n\n\n  return {\n    query: query,\n    setQuery: setQuery,\n    handleInput: handleInput,\n    handleKeyDown: handleKeyDown,\n    handleClick: handleClick,\n    matching: matching,\n    handleMatchingClick: handleMatchingClick\n  };\n};\n\n_s(useSearch, \"o1VPcO96hpOKuTDgn3lahsSOOm4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSearch);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3g/YmEyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB3b3JkcyBmcm9tIFwid29yZHMuanNvblwiXHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwibG9kYXNoLmRlYm91bmNlXCJcclxuXHJcbmNvbnN0IHVzZVNlYXJjaCA9ICgpID0+IHtcclxuXHQvL0NyZWF0ZXMgbmV3IHF1ZXJ5IHN0YXRlIGZvciBzZWFyY2ggc3RyaW5nLlxyXG5cdGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG5cdGNvbnN0IFttYXRjaGluZywgc2V0TWF0Y2hpbmddID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxyXG5cdC8vQ3JlYXRlcyBhIG5ldyByb3V0ZXIgZnJvbSBuZXh0J3MgdXNlUm91dGVyIGhvb2suXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblx0XHJcblx0Y29uc3QgZGVib3VuY2VkU2V0TWF0Y2hpbmcgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKChtYXRjaGluZ1dvcmRzOiBzdHJpbmdbXSkgPT4gc2V0TWF0Y2hpbmcobWF0Y2hpbmdXb3JkcyksIDMwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcbiAgLy9TZXRzIHF1ZXJ5IHRvIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuXHJcbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXQoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCB0cmltbWVkUXVlcnk6IHN0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMod29yZHMpO1xyXG4gICAgY29uc3QgbWF0Y2hpbmdXb3JkcyA9IGtleXMuZmlsdGVyKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYF4ke3RyaW1tZWRRdWVyeX1gLCBcImlcIik7XHJcbiAgICAgIHJldHVybiByZWdleC50ZXN0KGtleSk7XHJcbiAgICB9KTtcclxuICAgIHNldFF1ZXJ5KHRyaW1tZWRRdWVyeSk7XHJcbiAgICBkZWJvdW5jZWRTZXRNYXRjaGluZyhtYXRjaGluZ1dvcmRzKTtcclxuICB9XHJcblxyXG5cdC8vUnVucyBoYW5kbGVTZWFyY2ggb24gRW50ZXJcclxuXHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcblx0XHRpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuXHRcdFx0aGFuZGxlU2VhcmNoKClcclxuXHRcdH1cclxuXHR9XHJcblx0Ly9SdW5zIGhhbmRsZVNlYXJjaCBvbiBjbGljayBvZiBzZWFyY2ggaWNvbiBidXR0b24uXHJcblx0ZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcblx0XHRoYW5kbGVTZWFyY2goKVxyXG5cdH1cclxuXHJcblx0LypcclxuICBUaGUgaGFuZGxlU2VhcmNoIGZ1bmN0aW9uIHN0b3JlZCB0aGUgdHJpbW1lZCBxdWVyeSBpbnNpZGUgdHJpbW1lZFF1ZXJ5LlxyXG4gIElmIHRyaW1tZWRRdWVyeSBoYXMgYSB2YWx1ZSwgaXQgbW92ZXMgeW91IHRvIHRoZSBsb2NhdGlvbi4gXHJcbiAgUmVzZXRzIHF1ZXJ5LCBhbmQgdmFsdWUgb2YgaW5wdXQuXHJcbiAgKi9cclxuXHRmdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XHJcblx0XHRjb25zdCB0cmltbWVkUXVlcnk6IHN0cmluZyA9IHF1ZXJ5LnRyaW0oKVxyXG5cdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHdvcmRzKVxyXG5cdFx0Y29uc3QgbWF0Y2hlc1F1ZXJ5ID0ga2V5cy5zb21lKChrZXk6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRyZXR1cm4ga2V5ID09PSB0cmltbWVkUXVlcnlcclxuXHRcdH0pXHJcblx0XHRpZiAobWF0Y2hlc1F1ZXJ5KSB7XHJcblx0XHRcdHJvdXRlci5wdXNoKGAvJHt0cmltbWVkUXVlcnl9YClcclxuXHRcdFx0c2V0UXVlcnkoXCJcIilcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZU1hdGNoaW5nQ2xpY2socmVzdWx0OiBzdHJpbmcpIHtcclxuXHRcdHJvdXRlci5wdXNoKGAvJHtyZXN1bHR9YClcclxuXHRcdHNldFF1ZXJ5KFwiXCIpXHJcblx0fVxyXG5cclxuXHQvL1JldHVybnMgdGhlIG9iamVjdHMgYmVsb3cgdG8gYmUgdXNlZCBpbiBjb21wb25lbnRzLlxyXG5cdHJldHVybiB7XHJcblx0XHRxdWVyeSxcclxuXHRcdHNldFF1ZXJ5LFxyXG5cdFx0aGFuZGxlSW5wdXQsXHJcblx0XHRoYW5kbGVLZXlEb3duLFxyXG5cdFx0aGFuZGxlQ2xpY2ssXHJcblx0XHRtYXRjaGluZyxcclxuXHRcdGhhbmRsZU1hdGNoaW5nQ2xpY2ssXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTZWFyY2hcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ3b3JkcyIsImRlYm91bmNlIiwidXNlU2VhcmNoIiwicXVlcnkiLCJzZXRRdWVyeSIsIm1hdGNoaW5nIiwic2V0TWF0Y2hpbmciLCJyb3V0ZXIiLCJkZWJvdW5jZWRTZXRNYXRjaGluZyIsIm1hdGNoaW5nV29yZHMiLCJoYW5kbGVJbnB1dCIsImV2ZW50IiwidHJpbW1lZFF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwia2V5cyIsIk9iamVjdCIsImZpbHRlciIsImtleSIsInJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsImhhbmRsZUtleURvd24iLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVDbGljayIsIm1hdGNoZXNRdWVyeSIsInNvbWUiLCJwdXNoIiwiaGFuZGxlTWF0Y2hpbmdDbGljayIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useSearch.tsx\n"));

/***/ })

});