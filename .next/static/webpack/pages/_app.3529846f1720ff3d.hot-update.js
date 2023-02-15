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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var words_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! words.json */ \"./words.json\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useSearch = function useSearch() {\n  _s();\n\n  //Creates new query state for search string.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      matching = _useState2[0],\n      setMatching = _useState2[1]; //Creates a new router from next's useRouter hook.\n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)(); // Creates a memoized debounced function that sets the matching state.\n\n  var debouncedMatching = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function (matchingWords) {\n    return setMatching(matchingWords);\n  }, 300), []); //Sets query to the value of the input.\n\n  function handleInput(event) {\n    // Gets trimmed query from input.\n    var trimmedQuery = event.target.value.trim();\n\n    if (trimmedQuery.length < 2) {\n      // Gets keys of the words object.\n      var keys = Object.keys(words_json__WEBPACK_IMPORTED_MODULE_2__); // Filters the keys based on whether they match the trimmed query.\n\n      var matchingWords = keys.filter(function (key) {\n        var regex = new RegExp(\"^\".concat(trimmedQuery), \"i\");\n        return regex.test(key);\n      }); // Sets query state to the trimmed query.\n\n      setQuery(trimmedQuery); // Calls the memoized debounced function to set the matching state with the matching words.\n\n      debouncedMatching(matchingWords);\n    } else {\n      setQuery(trimmedQuery);\n      setMatching([]);\n    }\n  } //Runs handleSearch on Enter\n\n\n  function handleKeyDown(event) {\n    if (event.key === \"Enter\") {\n      handleSearch();\n    }\n  } //Runs handleSearch on click of search icon button.\n\n\n  function handleClick() {\n    handleSearch();\n  }\n  /*\r\n   The handleSearch function stored the trimmed query inside trimmedQuery.\r\n   If trimmedQuery has a value, it moves you to the location. \r\n   Resets query, and value of input.\r\n   */\n\n\n  function handleSearch() {\n    var trimmedQuery = query.trim();\n    var keys = Object.keys(words_json__WEBPACK_IMPORTED_MODULE_2__);\n    var matchesQuery = keys.some(function (key) {\n      return key === trimmedQuery;\n    });\n\n    if (matchesQuery) {\n      router.push(\"/\".concat(trimmedQuery));\n      setQuery(\"\");\n    }\n  }\n\n  function handleMatchingClick(result) {\n    router.push(\"/\".concat(result));\n    setQuery(\"\");\n  } //Returns the objects below to be used in components.\n\n\n  return {\n    query: query,\n    setQuery: setQuery,\n    handleInput: handleInput,\n    handleKeyDown: handleKeyDown,\n    handleClick: handleClick,\n    matching: matching,\n    handleMatchingClick: handleMatchingClick\n  };\n};\n\n_s(useSearch, \"gCnWVMXU0a5kcup8yCkj5+Zfdp8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSearch);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLEVBQWJBLGFBSk07SUFLTkUsV0FBVyxFQUFYQSxXQUxNO0lBTU5yQixRQUFRLEVBQVJBLFFBTk07SUFPTnlCLG1CQUFtQixFQUFuQkE7RUFQTSxDQUFQO0FBU0EsQ0FoRkQ7O0dBQU01QjtVQUtVTDs7O0FBNkVoQiwrREFBZUssU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VTZWFyY2gudHN4P2JhMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgd29yZHMgZnJvbSBcIndvcmRzLmpzb25cIlxyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiXHJcblxyXG5jb25zdCB1c2VTZWFyY2ggPSAoKSA9PiB7XHJcblx0Ly9DcmVhdGVzIG5ldyBxdWVyeSBzdGF0ZSBmb3Igc2VhcmNoIHN0cmluZy5cclxuXHRjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuXHRjb25zdCBbbWF0Y2hpbmcsIHNldE1hdGNoaW5nXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcclxuXHQvL0NyZWF0ZXMgYSBuZXcgcm91dGVyIGZyb20gbmV4dCdzIHVzZVJvdXRlciBob29rLlxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Ly8gQ3JlYXRlcyBhIG1lbW9pemVkIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IHNldHMgdGhlIG1hdGNoaW5nIHN0YXRlLlxyXG5cdGNvbnN0IGRlYm91bmNlZE1hdGNoaW5nID0gdXNlQ2FsbGJhY2soXHJcblx0XHRkZWJvdW5jZSgobWF0Y2hpbmdXb3Jkczogc3RyaW5nW10pID0+IHNldE1hdGNoaW5nKG1hdGNoaW5nV29yZHMpLCAzMDApLFxyXG5cdFx0W11cclxuXHQpXHJcblxyXG5cdC8vU2V0cyBxdWVyeSB0byB0aGUgdmFsdWUgb2YgdGhlIGlucHV0LlxyXG5cdGZ1bmN0aW9uIGhhbmRsZUlucHV0KGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG5cdFx0Ly8gR2V0cyB0cmltbWVkIHF1ZXJ5IGZyb20gaW5wdXQuXHJcblx0XHRjb25zdCB0cmltbWVkUXVlcnk6IHN0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKClcclxuXHRcdGlmICh0cmltbWVkUXVlcnkubGVuZ3RoIDwgMikge1xyXG5cdFx0XHQvLyBHZXRzIGtleXMgb2YgdGhlIHdvcmRzIG9iamVjdC5cclxuXHRcdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHdvcmRzKVxyXG5cclxuXHRcdFx0Ly8gRmlsdGVycyB0aGUga2V5cyBiYXNlZCBvbiB3aGV0aGVyIHRoZXkgbWF0Y2ggdGhlIHRyaW1tZWQgcXVlcnkuXHJcblx0XHRcdGNvbnN0IG1hdGNoaW5nV29yZHMgPSBrZXlzLmZpbHRlcigoa2V5OiBzdHJpbmcpID0+IHtcclxuXHRcdFx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYF4ke3RyaW1tZWRRdWVyeX1gLCBcImlcIilcclxuXHRcdFx0XHRyZXR1cm4gcmVnZXgudGVzdChrZXkpXHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHQvLyBTZXRzIHF1ZXJ5IHN0YXRlIHRvIHRoZSB0cmltbWVkIHF1ZXJ5LlxyXG5cdFx0XHRzZXRRdWVyeSh0cmltbWVkUXVlcnkpXHJcblxyXG5cdFx0XHQvLyBDYWxscyB0aGUgbWVtb2l6ZWQgZGVib3VuY2VkIGZ1bmN0aW9uIHRvIHNldCB0aGUgbWF0Y2hpbmcgc3RhdGUgd2l0aCB0aGUgbWF0Y2hpbmcgd29yZHMuXHJcblx0XHRcdGRlYm91bmNlZE1hdGNoaW5nKG1hdGNoaW5nV29yZHMpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRRdWVyeSh0cmltbWVkUXVlcnkpXHJcblx0XHRcdHNldE1hdGNoaW5nKFtdKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly9SdW5zIGhhbmRsZVNlYXJjaCBvbiBFbnRlclxyXG5cdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuXHRcdGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG5cdFx0XHRoYW5kbGVTZWFyY2goKVxyXG5cdFx0fVxyXG5cdH1cclxuXHQvL1J1bnMgaGFuZGxlU2VhcmNoIG9uIGNsaWNrIG9mIHNlYXJjaCBpY29uIGJ1dHRvbi5cclxuXHRmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcclxuXHRcdGhhbmRsZVNlYXJjaCgpXHJcblx0fVxyXG5cclxuXHQvKlxyXG4gIFRoZSBoYW5kbGVTZWFyY2ggZnVuY3Rpb24gc3RvcmVkIHRoZSB0cmltbWVkIHF1ZXJ5IGluc2lkZSB0cmltbWVkUXVlcnkuXHJcbiAgSWYgdHJpbW1lZFF1ZXJ5IGhhcyBhIHZhbHVlLCBpdCBtb3ZlcyB5b3UgdG8gdGhlIGxvY2F0aW9uLiBcclxuICBSZXNldHMgcXVlcnksIGFuZCB2YWx1ZSBvZiBpbnB1dC5cclxuICAqL1xyXG5cdGZ1bmN0aW9uIGhhbmRsZVNlYXJjaCgpIHtcclxuXHRcdGNvbnN0IHRyaW1tZWRRdWVyeTogc3RyaW5nID0gcXVlcnkudHJpbSgpXHJcblx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMod29yZHMpXHJcblx0XHRjb25zdCBtYXRjaGVzUXVlcnkgPSBrZXlzLnNvbWUoKGtleTogc3RyaW5nKSA9PiB7XHJcblx0XHRcdHJldHVybiBrZXkgPT09IHRyaW1tZWRRdWVyeVxyXG5cdFx0fSlcclxuXHRcdGlmIChtYXRjaGVzUXVlcnkpIHtcclxuXHRcdFx0cm91dGVyLnB1c2goYC8ke3RyaW1tZWRRdWVyeX1gKVxyXG5cdFx0XHRzZXRRdWVyeShcIlwiKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlTWF0Y2hpbmdDbGljayhyZXN1bHQ6IHN0cmluZykge1xyXG5cdFx0cm91dGVyLnB1c2goYC8ke3Jlc3VsdH1gKVxyXG5cdFx0c2V0UXVlcnkoXCJcIilcclxuXHR9XHJcblxyXG5cdC8vUmV0dXJucyB0aGUgb2JqZWN0cyBiZWxvdyB0byBiZSB1c2VkIGluIGNvbXBvbmVudHMuXHJcblx0cmV0dXJuIHtcclxuXHRcdHF1ZXJ5LFxyXG5cdFx0c2V0UXVlcnksXHJcblx0XHRoYW5kbGVJbnB1dCxcclxuXHRcdGhhbmRsZUtleURvd24sXHJcblx0XHRoYW5kbGVDbGljayxcclxuXHRcdG1hdGNoaW5nLFxyXG5cdFx0aGFuZGxlTWF0Y2hpbmdDbGljayxcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNlYXJjaFxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIndvcmRzIiwiZGVib3VuY2UiLCJ1c2VTZWFyY2giLCJxdWVyeSIsInNldFF1ZXJ5IiwibWF0Y2hpbmciLCJzZXRNYXRjaGluZyIsInJvdXRlciIsImRlYm91bmNlZE1hdGNoaW5nIiwibWF0Y2hpbmdXb3JkcyIsImhhbmRsZUlucHV0IiwiZXZlbnQiLCJ0cmltbWVkUXVlcnkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJsZW5ndGgiLCJrZXlzIiwiT2JqZWN0IiwiZmlsdGVyIiwia2V5IiwicmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwiaGFuZGxlS2V5RG93biIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUNsaWNrIiwibWF0Y2hlc1F1ZXJ5Iiwic29tZSIsInB1c2giLCJoYW5kbGVNYXRjaGluZ0NsaWNrIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useSearch.tsx\n"));

/***/ })

});