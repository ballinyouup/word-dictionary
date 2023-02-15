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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var words_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! words.json */ \"./words.json\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar useSearch = function useSearch() {\n  _s();\n\n  //Creates new query state for search string.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      matching = _useState2[0],\n      setMatching = _useState2[1]; //Creates a new router from next's useRouter hook.\n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)(); //Sets query to the value of the input.\n\n  function handleInput(event) {\n    var trimmedQuery = event.target.value.trim();\n    var keys = Object.keys(words_json__WEBPACK_IMPORTED_MODULE_2__);\n    var matchingWords = keys.filter(function (key) {\n      var regex = new RegExp(\"^\".concat(trimmedQuery), \"i\");\n      return regex.test(key);\n    });\n    setQuery(trimmedQuery);\n    lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function () {\n      return setMatching(matchingWords);\n    }, 300)();\n  } //Runs handleSearch on Enter\n\n\n  function handleKeyDown(event) {\n    if (event.key === \"Enter\") {\n      handleSearch();\n    }\n  } //Runs handleSearch on click of search icon button.\n\n\n  function handleClick() {\n    handleSearch();\n  }\n  /*\r\n   The handleSearch function stored the trimmed query inside trimmedQuery.\r\n   If trimmedQuery has a value, it moves you to the location. \r\n   Resets query, and value of input.\r\n   */\n\n\n  function handleSearch() {\n    var trimmedQuery = query.trim();\n    var keys = Object.keys(words_json__WEBPACK_IMPORTED_MODULE_2__);\n    var matchesQuery = keys.some(function (key) {\n      return key === trimmedQuery;\n    });\n\n    if (matchesQuery) {\n      router.push(\"/\".concat(trimmedQuery));\n      setQuery(\"\");\n    }\n  }\n\n  function handleMatchingClick(result) {\n    router.push(\"/\".concat(result));\n    setQuery(\"\");\n  } //Returns the objects below to be used in components.\n\n\n  return {\n    query: query,\n    setQuery: setQuery,\n    handleInput: handleInput,\n    handleKeyDown: handleKeyDown,\n    handleClick: handleClick,\n    matching: matching,\n    handleMatchingClick: handleMatchingClick\n  };\n};\n\n_s(useSearch, \"qIPUhiAxw2zpI1PbxrIdBH2ppuU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSearch);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VTZWFyY2gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0VBQUE7O0VBQ3ZCO0VBQ0EsZ0JBQTBCSCwrQ0FBUSxDQUFTLEVBQVQsQ0FBbEM7RUFBQSxJQUFPSSxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxpQkFBZ0NMLCtDQUFRLENBQVcsRUFBWCxDQUF4QztFQUFBLElBQU9NLFFBQVA7RUFBQSxJQUFpQkMsV0FBakIsaUJBSHVCLENBSXZCOzs7RUFDQSxJQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQXhCLENBTHVCLENBT3ZCOztFQUNBLFNBQVNVLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQWlFO0lBQ2hFLElBQU1DLFlBQW9CLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxJQUFuQixFQUE3QjtJQUNBLElBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlkLHVDQUFaLENBQWI7SUFDQSxJQUFNZ0IsYUFBYSxHQUFHRixJQUFJLENBQUNHLE1BQUwsQ0FBWSxVQUFDQyxHQUFELEVBQWlCO01BQ2xELElBQU1DLEtBQUssR0FBRyxJQUFJQyxNQUFKLFlBQWVWLFlBQWYsR0FBK0IsR0FBL0IsQ0FBZDtNQUNBLE9BQU9TLEtBQUssQ0FBQ0UsSUFBTixDQUFXSCxHQUFYLENBQVA7SUFDQSxDQUhxQixDQUF0QjtJQUlBZCxRQUFRLENBQUNNLFlBQUQsQ0FBUjtJQUNBVCxzREFBUSxDQUFDO01BQUEsT0FBTUssV0FBVyxDQUFDVSxhQUFELENBQWpCO0lBQUEsQ0FBRCxFQUFtQyxHQUFuQyxDQUFSO0VBQ0EsQ0FqQnNCLENBb0J2Qjs7O0VBQ0EsU0FBU00sYUFBVCxDQUF1QmIsS0FBdkIsRUFBcUU7SUFDcEUsSUFBSUEsS0FBSyxDQUFDUyxHQUFOLEtBQWMsT0FBbEIsRUFBMkI7TUFDMUJLLFlBQVk7SUFDWjtFQUNELENBekJzQixDQTBCdkI7OztFQUNBLFNBQVNDLFdBQVQsR0FBdUI7SUFDdEJELFlBQVk7RUFDWjtFQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztFQUNDLFNBQVNBLFlBQVQsR0FBd0I7SUFDdkIsSUFBTWIsWUFBb0IsR0FBR1AsS0FBSyxDQUFDVSxJQUFOLEVBQTdCO0lBQ0EsSUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWWQsdUNBQVosQ0FBYjtJQUNBLElBQU15QixZQUFZLEdBQUdYLElBQUksQ0FBQ1ksSUFBTCxDQUFVLFVBQUNSLEdBQUQsRUFBaUI7TUFDL0MsT0FBT0EsR0FBRyxLQUFLUixZQUFmO0lBQ0EsQ0FGb0IsQ0FBckI7O0lBR0EsSUFBSWUsWUFBSixFQUFrQjtNQUNqQmxCLE1BQU0sQ0FBQ29CLElBQVAsWUFBZ0JqQixZQUFoQjtNQUNBTixRQUFRLENBQUMsRUFBRCxDQUFSO0lBQ0E7RUFDRDs7RUFFRCxTQUFTd0IsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQTZDO0lBQzVDdEIsTUFBTSxDQUFDb0IsSUFBUCxZQUFnQkUsTUFBaEI7SUFDQXpCLFFBQVEsQ0FBQyxFQUFELENBQVI7RUFDQSxDQW5Ec0IsQ0FxRHZCOzs7RUFDQSxPQUFPO0lBQ05ELEtBQUssRUFBTEEsS0FETTtJQUVOQyxRQUFRLEVBQVJBLFFBRk07SUFHTkksV0FBVyxFQUFYQSxXQUhNO0lBSU5jLGFBQWEsRUFBYkEsYUFKTTtJQUtORSxXQUFXLEVBQVhBLFdBTE07SUFNTm5CLFFBQVEsRUFBUkEsUUFOTTtJQU9OdUIsbUJBQW1CLEVBQW5CQTtFQVBNLENBQVA7QUFTQSxDQS9ERDs7R0FBTTFCO1VBS1VKOzs7QUE0RGhCLCtEQUFlSSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVNlYXJjaC50c3g/YmEyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB3b3JkcyBmcm9tIFwid29yZHMuanNvblwiXHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwibG9kYXNoLmRlYm91bmNlXCJcclxuXHJcbmNvbnN0IHVzZVNlYXJjaCA9ICgpID0+IHtcclxuXHQvL0NyZWF0ZXMgbmV3IHF1ZXJ5IHN0YXRlIGZvciBzZWFyY2ggc3RyaW5nLlxyXG5cdGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG5cdGNvbnN0IFttYXRjaGluZywgc2V0TWF0Y2hpbmddID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxyXG5cdC8vQ3JlYXRlcyBhIG5ldyByb3V0ZXIgZnJvbSBuZXh0J3MgdXNlUm91dGVyIGhvb2suXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblx0Ly9TZXRzIHF1ZXJ5IHRvIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuXHJcblx0ZnVuY3Rpb24gaGFuZGxlSW5wdXQoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcblx0XHRjb25zdCB0cmltbWVkUXVlcnk6IHN0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKClcclxuXHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh3b3JkcylcclxuXHRcdGNvbnN0IG1hdGNoaW5nV29yZHMgPSBrZXlzLmZpbHRlcigoa2V5OiBzdHJpbmcpID0+IHtcclxuXHRcdFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGBeJHt0cmltbWVkUXVlcnl9YCwgXCJpXCIpXHJcblx0XHRcdHJldHVybiByZWdleC50ZXN0KGtleSlcclxuXHRcdH0pXHJcblx0XHRzZXRRdWVyeSh0cmltbWVkUXVlcnkpXHJcblx0XHRkZWJvdW5jZSgoKSA9PiBzZXRNYXRjaGluZyhtYXRjaGluZ1dvcmRzKSwgMzAwKSgpXHJcblx0fVxyXG5cdFxyXG5cclxuXHQvL1J1bnMgaGFuZGxlU2VhcmNoIG9uIEVudGVyXHJcblx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcblx0XHRcdGhhbmRsZVNlYXJjaCgpXHJcblx0XHR9XHJcblx0fVxyXG5cdC8vUnVucyBoYW5kbGVTZWFyY2ggb24gY2xpY2sgb2Ygc2VhcmNoIGljb24gYnV0dG9uLlxyXG5cdGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG5cdFx0aGFuZGxlU2VhcmNoKClcclxuXHR9XHJcblxyXG5cdC8qXHJcbiAgVGhlIGhhbmRsZVNlYXJjaCBmdW5jdGlvbiBzdG9yZWQgdGhlIHRyaW1tZWQgcXVlcnkgaW5zaWRlIHRyaW1tZWRRdWVyeS5cclxuICBJZiB0cmltbWVkUXVlcnkgaGFzIGEgdmFsdWUsIGl0IG1vdmVzIHlvdSB0byB0aGUgbG9jYXRpb24uIFxyXG4gIFJlc2V0cyBxdWVyeSwgYW5kIHZhbHVlIG9mIGlucHV0LlxyXG4gICovXHJcblx0ZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xyXG5cdFx0Y29uc3QgdHJpbW1lZFF1ZXJ5OiBzdHJpbmcgPSBxdWVyeS50cmltKClcclxuXHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh3b3JkcylcclxuXHRcdGNvbnN0IG1hdGNoZXNRdWVyeSA9IGtleXMuc29tZSgoa2V5OiBzdHJpbmcpID0+IHtcclxuXHRcdFx0cmV0dXJuIGtleSA9PT0gdHJpbW1lZFF1ZXJ5XHJcblx0XHR9KVxyXG5cdFx0aWYgKG1hdGNoZXNRdWVyeSkge1xyXG5cdFx0XHRyb3V0ZXIucHVzaChgLyR7dHJpbW1lZFF1ZXJ5fWApXHJcblx0XHRcdHNldFF1ZXJ5KFwiXCIpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVNYXRjaGluZ0NsaWNrKHJlc3VsdDogc3RyaW5nKSB7XHJcblx0XHRyb3V0ZXIucHVzaChgLyR7cmVzdWx0fWApXHJcblx0XHRzZXRRdWVyeShcIlwiKVxyXG5cdH1cclxuXHJcblx0Ly9SZXR1cm5zIHRoZSBvYmplY3RzIGJlbG93IHRvIGJlIHVzZWQgaW4gY29tcG9uZW50cy5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cXVlcnksXHJcblx0XHRzZXRRdWVyeSxcclxuXHRcdGhhbmRsZUlucHV0LFxyXG5cdFx0aGFuZGxlS2V5RG93bixcclxuXHRcdGhhbmRsZUNsaWNrLFxyXG5cdFx0bWF0Y2hpbmcsXHJcblx0XHRoYW5kbGVNYXRjaGluZ0NsaWNrLFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU2VhcmNoXHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIndvcmRzIiwiZGVib3VuY2UiLCJ1c2VTZWFyY2giLCJxdWVyeSIsInNldFF1ZXJ5IiwibWF0Y2hpbmciLCJzZXRNYXRjaGluZyIsInJvdXRlciIsImhhbmRsZUlucHV0IiwiZXZlbnQiLCJ0cmltbWVkUXVlcnkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJrZXlzIiwiT2JqZWN0IiwibWF0Y2hpbmdXb3JkcyIsImZpbHRlciIsImtleSIsInJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsImhhbmRsZUtleURvd24iLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVDbGljayIsIm1hdGNoZXNRdWVyeSIsInNvbWUiLCJwdXNoIiwiaGFuZGxlTWF0Y2hpbmdDbGljayIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useSearch.tsx\n"));

/***/ })

});