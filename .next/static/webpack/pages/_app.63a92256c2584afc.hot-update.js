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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var words_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! words.json */ \"./words.json\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useSearch = function useSearch() {\n  _s();\n\n  //Creates new query state for search string.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      matching = _useState2[0],\n      setMatching = _useState2[1]; //Creates a new router from next's useRouter hook.\n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)(); // Creates a memoized debounced function that sets the matching state.\n\n  var debouncedMatching = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function (matchingWords) {\n    return setMatching(matchingWords);\n  }, 300), []); //Sets query to the value of the input.\n\n  function handleInput(event) {\n    // Gets trimmed query from input.\n    var trimmedQuery = event.target.value.trim(); // Waits for 1 character\n\n    if (trimmedQuery.length < 2) {\n      setMatching([]);\n      return;\n    } // Gets keys of the words object.\n\n\n    var keys = Object.keys(words_json__WEBPACK_IMPORTED_MODULE_2__); // Filters the keys based on whether they match the trimmed query.\n\n    var matchingWords = keys.filter(function (key) {\n      var regex = new RegExp(\"^\".concat(trimmedQuery), \"i\");\n      return regex.test(key);\n    }); // Sets query state to the trimmed query.\n\n    setQuery(trimmedQuery); // Calls the memoized debounced function to set the matching state with the matching words.\n\n    debouncedMatching(matchingWords);\n  } //Runs handleSearch on Enter\n\n\n  function handleKeyDown(event) {\n    if (event.key === \"Enter\") {\n      handleSearch();\n    }\n  } //Runs handleSearch on click of search icon button.\n\n\n  function handleClick() {\n    handleSearch();\n  }\n  /*\r\n   The handleSearch function stored the trimmed query inside trimmedQuery.\r\n   If trimmedQuery has a value, it moves you to the location. \r\n   Resets query, and value of input.\r\n   */\n\n\n  function handleSearch() {\n    var trimmedQuery = query.trim();\n    var keys = Object.keys(words_json__WEBPACK_IMPORTED_MODULE_2__);\n    var matchesQuery = keys.some(function (key) {\n      return key === trimmedQuery;\n    });\n\n    if (matchesQuery) {\n      router.push(\"/\".concat(trimmedQuery));\n      setQuery(\"\");\n    }\n  }\n\n  function handleMatchingClick(result) {\n    router.push(\"/\".concat(result));\n    setQuery(\"\");\n  } //Returns the objects below to be used in components.\n\n\n  return {\n    query: query,\n    setQuery: setQuery,\n    handleInput: handleInput,\n    handleKeyDown: handleKeyDown,\n    handleClick: handleClick,\n    matching: matching,\n    handleMatchingClick: handleMatchingClick\n  };\n};\n\n_s(useSearch, \"gCnWVMXU0a5kcup8yCkj5+Zfdp8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSearch);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBS05FLFdBQVcsRUFBWEEsV0FMTTtJQU1OckIsUUFBUSxFQUFSQSxRQU5NO0lBT055QixtQkFBbUIsRUFBbkJBO0VBUE0sQ0FBUDtBQVNBLENBaEZEOztHQUFNNUI7VUFLVUw7OztBQTZFaEIsK0RBQWVLLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlU2VhcmNoLnRzeD9iYTI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHdvcmRzIGZyb20gXCJ3b3Jkcy5qc29uXCJcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gXCJsb2Rhc2guZGVib3VuY2VcIlxyXG5cclxuY29uc3QgdXNlU2VhcmNoID0gKCkgPT4ge1xyXG5cdC8vQ3JlYXRlcyBuZXcgcXVlcnkgc3RhdGUgZm9yIHNlYXJjaCBzdHJpbmcuXHJcblx0Y29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcblx0Y29uc3QgW21hdGNoaW5nLCBzZXRNYXRjaGluZ10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXHJcblx0Ly9DcmVhdGVzIGEgbmV3IHJvdXRlciBmcm9tIG5leHQncyB1c2VSb3V0ZXIgaG9vay5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdC8vIENyZWF0ZXMgYSBtZW1vaXplZCBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSBtYXRjaGluZyBzdGF0ZS5cclxuXHRjb25zdCBkZWJvdW5jZWRNYXRjaGluZyA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0ZGVib3VuY2UoKG1hdGNoaW5nV29yZHM6IHN0cmluZ1tdKSA9PiBzZXRNYXRjaGluZyhtYXRjaGluZ1dvcmRzKSwgMzAwKSxcclxuXHRcdFtdXHJcblx0KVxyXG5cclxuXHQvL1NldHMgcXVlcnkgdG8gdGhlIHZhbHVlIG9mIHRoZSBpbnB1dC5cclxuXHRmdW5jdGlvbiBoYW5kbGVJbnB1dChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIC8vIEdldHMgdHJpbW1lZCBxdWVyeSBmcm9tIGlucHV0LlxyXG4gICAgY29uc3QgdHJpbW1lZFF1ZXJ5OiBzdHJpbmcgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpXHJcbiAgICAvLyBXYWl0cyBmb3IgMSBjaGFyYWN0ZXJcclxuICAgIGlmICh0cmltbWVkUXVlcnkubGVuZ3RoIDwgMikge1xyXG4gICAgICBzZXRNYXRjaGluZyhbXSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIEdldHMga2V5cyBvZiB0aGUgd29yZHMgb2JqZWN0LlxyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHdvcmRzKVxyXG5cclxuICAgIC8vIEZpbHRlcnMgdGhlIGtleXMgYmFzZWQgb24gd2hldGhlciB0aGV5IG1hdGNoIHRoZSB0cmltbWVkIHF1ZXJ5LlxyXG4gICAgY29uc3QgbWF0Y2hpbmdXb3JkcyA9IGtleXMuZmlsdGVyKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYF4ke3RyaW1tZWRRdWVyeX1gLCBcImlcIilcclxuICAgICAgcmV0dXJuIHJlZ2V4LnRlc3Qoa2V5KVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBTZXRzIHF1ZXJ5IHN0YXRlIHRvIHRoZSB0cmltbWVkIHF1ZXJ5LlxyXG4gICAgc2V0UXVlcnkodHJpbW1lZFF1ZXJ5KVxyXG5cclxuICAgIC8vIENhbGxzIHRoZSBtZW1vaXplZCBkZWJvdW5jZWQgZnVuY3Rpb24gdG8gc2V0IHRoZSBtYXRjaGluZyBzdGF0ZSB3aXRoIHRoZSBtYXRjaGluZyB3b3Jkcy5cclxuICAgIGRlYm91bmNlZE1hdGNoaW5nKG1hdGNoaW5nV29yZHMpXHJcbiAgfVxyXG5cclxuXHQvL1J1bnMgaGFuZGxlU2VhcmNoIG9uIEVudGVyXHJcblx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcblx0XHRcdGhhbmRsZVNlYXJjaCgpXHJcblx0XHR9XHJcblx0fVxyXG5cdC8vUnVucyBoYW5kbGVTZWFyY2ggb24gY2xpY2sgb2Ygc2VhcmNoIGljb24gYnV0dG9uLlxyXG5cdGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG5cdFx0aGFuZGxlU2VhcmNoKClcclxuXHR9XHJcblxyXG5cdC8qXHJcbiAgVGhlIGhhbmRsZVNlYXJjaCBmdW5jdGlvbiBzdG9yZWQgdGhlIHRyaW1tZWQgcXVlcnkgaW5zaWRlIHRyaW1tZWRRdWVyeS5cclxuICBJZiB0cmltbWVkUXVlcnkgaGFzIGEgdmFsdWUsIGl0IG1vdmVzIHlvdSB0byB0aGUgbG9jYXRpb24uIFxyXG4gIFJlc2V0cyBxdWVyeSwgYW5kIHZhbHVlIG9mIGlucHV0LlxyXG4gICovXHJcblx0ZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xyXG5cdFx0Y29uc3QgdHJpbW1lZFF1ZXJ5OiBzdHJpbmcgPSBxdWVyeS50cmltKClcclxuXHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh3b3JkcylcclxuXHRcdGNvbnN0IG1hdGNoZXNRdWVyeSA9IGtleXMuc29tZSgoa2V5OiBzdHJpbmcpID0+IHtcclxuXHRcdFx0cmV0dXJuIGtleSA9PT0gdHJpbW1lZFF1ZXJ5XHJcblx0XHR9KVxyXG5cdFx0aWYgKG1hdGNoZXNRdWVyeSkge1xyXG5cdFx0XHRyb3V0ZXIucHVzaChgLyR7dHJpbW1lZFF1ZXJ5fWApXHJcblx0XHRcdHNldFF1ZXJ5KFwiXCIpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVNYXRjaGluZ0NsaWNrKHJlc3VsdDogc3RyaW5nKSB7XHJcblx0XHRyb3V0ZXIucHVzaChgLyR7cmVzdWx0fWApXHJcblx0XHRzZXRRdWVyeShcIlwiKVxyXG5cdH1cclxuXHJcblx0Ly9SZXR1cm5zIHRoZSBvYmplY3RzIGJlbG93IHRvIGJlIHVzZWQgaW4gY29tcG9uZW50cy5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cXVlcnksXHJcblx0XHRzZXRRdWVyeSxcclxuXHRcdGhhbmRsZUlucHV0LFxyXG5cdFx0aGFuZGxlS2V5RG93bixcclxuXHRcdGhhbmRsZUNsaWNrLFxyXG5cdFx0bWF0Y2hpbmcsXHJcblx0XHRoYW5kbGVNYXRjaGluZ0NsaWNrLFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU2VhcmNoXHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwid29yZHMiLCJkZWJvdW5jZSIsInVzZVNlYXJjaCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJtYXRjaGluZyIsInNldE1hdGNoaW5nIiwicm91dGVyIiwiZGVib3VuY2VkTWF0Y2hpbmciLCJtYXRjaGluZ1dvcmRzIiwiaGFuZGxlSW5wdXQiLCJldmVudCIsInRyaW1tZWRRdWVyeSIsInRhcmdldCIsInZhbHVlIiwidHJpbSIsImxlbmd0aCIsImtleXMiLCJPYmplY3QiLCJmaWx0ZXIiLCJrZXkiLCJyZWdleCIsIlJlZ0V4cCIsInRlc3QiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlQ2xpY2siLCJtYXRjaGVzUXVlcnkiLCJzb21lIiwicHVzaCIsImhhbmRsZU1hdGNoaW5nQ2xpY2siLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useSearch.tsx\n"));

/***/ })

});