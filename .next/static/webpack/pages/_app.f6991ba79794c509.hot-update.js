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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var words_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! words.json */ \"./words.json\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useSearch = function useSearch() {\n  _s();\n\n  //Creates new query state for search string.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      matching = _useState2[0],\n      setMatching = _useState2[1]; //Creates a new router from next's useRouter hook.\n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)(); // Creates a memoized debounced function that sets the matching state.\n\n  var debouncedMatching = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function (matchingWords) {\n    return setMatching(matchingWords);\n  }, 300), []); //Sets query to the value of the input.\n\n  function handleInput(event) {\n    // Gets trimmed query from input.\n    var trimmedQuery = event.target.value.trim(); //\n\n    if (trimmedQuery.length < 2) {\n      setMatching([]);\n      return;\n    } // Gets keys of the words object.\n\n\n    var keys = Object.keys(words_json__WEBPACK_IMPORTED_MODULE_2__); // Filters the keys based on whether they match the trimmed query.\n\n    var matchingWords = keys.filter(function (key) {\n      var regex = new RegExp(\"^\".concat(trimmedQuery), \"i\");\n      return regex.test(key);\n    }); // Sets query state to the trimmed query.\n\n    setQuery(trimmedQuery); // Calls the memoized debounced function to set the matching state with the matching words.\n\n    debouncedMatching(matchingWords);\n  } //Runs handleSearch on Enter\n\n\n  function handleKeyDown(event) {\n    if (event.key === \"Enter\") {\n      handleSearch();\n    }\n  } //Runs handleSearch on click of search icon button.\n\n\n  function handleClick() {\n    handleSearch();\n  }\n  /*\r\n   The handleSearch function stored the trimmed query inside trimmedQuery.\r\n   If trimmedQuery has a value, it moves you to the location. \r\n   Resets query, and value of input.\r\n   */\n\n\n  function handleSearch() {\n    var trimmedQuery = query.trim();\n    var keys = Object.keys(words_json__WEBPACK_IMPORTED_MODULE_2__);\n    var matchesQuery = keys.some(function (key) {\n      return key === trimmedQuery;\n    });\n\n    if (matchesQuery) {\n      router.push(\"/\".concat(trimmedQuery));\n      setQuery(\"\");\n    }\n  }\n\n  function handleMatchingClick(result) {\n    router.push(\"/\".concat(result));\n    setQuery(\"\");\n  } //Returns the objects below to be used in components.\n\n\n  return {\n    query: query,\n    setQuery: setQuery,\n    handleInput: handleInput,\n    handleKeyDown: handleKeyDown,\n    handleClick: handleClick,\n    matching: matching,\n    handleMatchingClick: handleMatchingClick\n  };\n};\n\n_s(useSearch, \"gCnWVMXU0a5kcup8yCkj5+Zfdp8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSearch);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBS05FLFdBQVcsRUFBWEEsV0FMTTtJQU1OckIsUUFBUSxFQUFSQSxRQU5NO0lBT055QixtQkFBbUIsRUFBbkJBO0VBUE0sQ0FBUDtBQVNBLENBaEZEOztHQUFNNUI7VUFLVUw7OztBQTZFaEIsK0RBQWVLLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlU2VhcmNoLnRzeD9iYTI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHdvcmRzIGZyb20gXCJ3b3Jkcy5qc29uXCJcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gXCJsb2Rhc2guZGVib3VuY2VcIlxyXG5cclxuY29uc3QgdXNlU2VhcmNoID0gKCkgPT4ge1xyXG5cdC8vQ3JlYXRlcyBuZXcgcXVlcnkgc3RhdGUgZm9yIHNlYXJjaCBzdHJpbmcuXHJcblx0Y29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcblx0Y29uc3QgW21hdGNoaW5nLCBzZXRNYXRjaGluZ10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXHJcblx0Ly9DcmVhdGVzIGEgbmV3IHJvdXRlciBmcm9tIG5leHQncyB1c2VSb3V0ZXIgaG9vay5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdC8vIENyZWF0ZXMgYSBtZW1vaXplZCBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSBtYXRjaGluZyBzdGF0ZS5cclxuXHRjb25zdCBkZWJvdW5jZWRNYXRjaGluZyA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0ZGVib3VuY2UoKG1hdGNoaW5nV29yZHM6IHN0cmluZ1tdKSA9PiBzZXRNYXRjaGluZyhtYXRjaGluZ1dvcmRzKSwgMzAwKSxcclxuXHRcdFtdXHJcblx0KVxyXG5cclxuXHQvL1NldHMgcXVlcnkgdG8gdGhlIHZhbHVlIG9mIHRoZSBpbnB1dC5cclxuXHRmdW5jdGlvbiBoYW5kbGVJbnB1dChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIC8vIEdldHMgdHJpbW1lZCBxdWVyeSBmcm9tIGlucHV0LlxyXG4gICAgY29uc3QgdHJpbW1lZFF1ZXJ5OiBzdHJpbmcgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpXHJcbiAgICAvL1xyXG4gICAgaWYgKHRyaW1tZWRRdWVyeS5sZW5ndGggPCAyKSB7XHJcbiAgICAgIHNldE1hdGNoaW5nKFtdKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gR2V0cyBrZXlzIG9mIHRoZSB3b3JkcyBvYmplY3QuXHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMod29yZHMpXHJcblxyXG4gICAgLy8gRmlsdGVycyB0aGUga2V5cyBiYXNlZCBvbiB3aGV0aGVyIHRoZXkgbWF0Y2ggdGhlIHRyaW1tZWQgcXVlcnkuXHJcbiAgICBjb25zdCBtYXRjaGluZ1dvcmRzID0ga2V5cy5maWx0ZXIoKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7dHJpbW1lZFF1ZXJ5fWAsIFwiaVwiKVxyXG4gICAgICByZXR1cm4gcmVnZXgudGVzdChrZXkpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIFNldHMgcXVlcnkgc3RhdGUgdG8gdGhlIHRyaW1tZWQgcXVlcnkuXHJcbiAgICBzZXRRdWVyeSh0cmltbWVkUXVlcnkpXHJcblxyXG4gICAgLy8gQ2FsbHMgdGhlIG1lbW9pemVkIGRlYm91bmNlZCBmdW5jdGlvbiB0byBzZXQgdGhlIG1hdGNoaW5nIHN0YXRlIHdpdGggdGhlIG1hdGNoaW5nIHdvcmRzLlxyXG4gICAgZGVib3VuY2VkTWF0Y2hpbmcobWF0Y2hpbmdXb3JkcylcclxuICB9XHJcblxyXG5cdC8vUnVucyBoYW5kbGVTZWFyY2ggb24gRW50ZXJcclxuXHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcblx0XHRpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuXHRcdFx0aGFuZGxlU2VhcmNoKClcclxuXHRcdH1cclxuXHR9XHJcblx0Ly9SdW5zIGhhbmRsZVNlYXJjaCBvbiBjbGljayBvZiBzZWFyY2ggaWNvbiBidXR0b24uXHJcblx0ZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcblx0XHRoYW5kbGVTZWFyY2goKVxyXG5cdH1cclxuXHJcblx0LypcclxuICBUaGUgaGFuZGxlU2VhcmNoIGZ1bmN0aW9uIHN0b3JlZCB0aGUgdHJpbW1lZCBxdWVyeSBpbnNpZGUgdHJpbW1lZFF1ZXJ5LlxyXG4gIElmIHRyaW1tZWRRdWVyeSBoYXMgYSB2YWx1ZSwgaXQgbW92ZXMgeW91IHRvIHRoZSBsb2NhdGlvbi4gXHJcbiAgUmVzZXRzIHF1ZXJ5LCBhbmQgdmFsdWUgb2YgaW5wdXQuXHJcbiAgKi9cclxuXHRmdW5jdGlvbiBoYW5kbGVTZWFyY2goKSB7XHJcblx0XHRjb25zdCB0cmltbWVkUXVlcnk6IHN0cmluZyA9IHF1ZXJ5LnRyaW0oKVxyXG5cdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHdvcmRzKVxyXG5cdFx0Y29uc3QgbWF0Y2hlc1F1ZXJ5ID0ga2V5cy5zb21lKChrZXk6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRyZXR1cm4ga2V5ID09PSB0cmltbWVkUXVlcnlcclxuXHRcdH0pXHJcblx0XHRpZiAobWF0Y2hlc1F1ZXJ5KSB7XHJcblx0XHRcdHJvdXRlci5wdXNoKGAvJHt0cmltbWVkUXVlcnl9YClcclxuXHRcdFx0c2V0UXVlcnkoXCJcIilcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZU1hdGNoaW5nQ2xpY2socmVzdWx0OiBzdHJpbmcpIHtcclxuXHRcdHJvdXRlci5wdXNoKGAvJHtyZXN1bHR9YClcclxuXHRcdHNldFF1ZXJ5KFwiXCIpXHJcblx0fVxyXG5cclxuXHQvL1JldHVybnMgdGhlIG9iamVjdHMgYmVsb3cgdG8gYmUgdXNlZCBpbiBjb21wb25lbnRzLlxyXG5cdHJldHVybiB7XHJcblx0XHRxdWVyeSxcclxuXHRcdHNldFF1ZXJ5LFxyXG5cdFx0aGFuZGxlSW5wdXQsXHJcblx0XHRoYW5kbGVLZXlEb3duLFxyXG5cdFx0aGFuZGxlQ2xpY2ssXHJcblx0XHRtYXRjaGluZyxcclxuXHRcdGhhbmRsZU1hdGNoaW5nQ2xpY2ssXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTZWFyY2hcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ3b3JkcyIsImRlYm91bmNlIiwidXNlU2VhcmNoIiwicXVlcnkiLCJzZXRRdWVyeSIsIm1hdGNoaW5nIiwic2V0TWF0Y2hpbmciLCJyb3V0ZXIiLCJkZWJvdW5jZWRNYXRjaGluZyIsIm1hdGNoaW5nV29yZHMiLCJoYW5kbGVJbnB1dCIsImV2ZW50IiwidHJpbW1lZFF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwibGVuZ3RoIiwia2V5cyIsIk9iamVjdCIsImZpbHRlciIsImtleSIsInJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsImhhbmRsZUtleURvd24iLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVDbGljayIsIm1hdGNoZXNRdWVyeSIsInNvbWUiLCJwdXNoIiwiaGFuZGxlTWF0Y2hpbmdDbGljayIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useSearch.tsx\n"));

/***/ })

});