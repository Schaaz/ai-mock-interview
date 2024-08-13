"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isProtectedRoute = createRouteMatcher([\n    \"/dashboard(.*)\",\n    \"/forum(.*)\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.clerkMiddleware)((auth, req)=>{\n    if (isProtectedRoute(req)) auth().protect();\n}));\nconst config = {\n    matcher: [\n        // Skip Next.js internals and all static files, unless found in search params\n        \"/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)\",\n        // Always run for API routes\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUQ7QUFJdkQsTUFBTUMsbUJBQW1CQyxtQkFBbUI7SUFDeEM7SUFDQTtDQUNEO0FBRUgsaUVBQWVGLHFFQUFlQSxDQUFDLENBQUNHLE1BQU1DO0lBQ2xDLElBQUlILGlCQUFpQkcsTUFBTUQsT0FBT0UsT0FBTztBQUMzQyxFQUFFLEVBQUM7QUFFRSxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO1FBQ1AsNkVBQTZFO1FBQzdFO1FBQ0EsNEJBQTRCO1FBQzVCO0tBQ0Q7QUFDSCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUuanM/M2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVya01pZGRsZXdhcmUgfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcclxuXHJcblxyXG5cclxuY29uc3QgaXNQcm90ZWN0ZWRSb3V0ZSA9IGNyZWF0ZVJvdXRlTWF0Y2hlcihbXHJcbiAgICAnL2Rhc2hib2FyZCguKiknLFxyXG4gICAgJy9mb3J1bSguKiknLFxyXG4gIF0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xlcmtNaWRkbGV3YXJlKChhdXRoLCByZXEpID0+IHtcclxuICAgIGlmIChpc1Byb3RlY3RlZFJvdXRlKHJlcSkpIGF1dGgoKS5wcm90ZWN0KCk7XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIG1hdGNoZXI6IFtcclxuICAgIC8vIFNraXAgTmV4dC5qcyBpbnRlcm5hbHMgYW5kIGFsbCBzdGF0aWMgZmlsZXMsIHVubGVzcyBmb3VuZCBpbiBzZWFyY2ggcGFyYW1zXHJcbiAgICAnLygoPyFfbmV4dHxbXj9dKlxcXFwuKD86aHRtbD98Y3NzfGpzKD8hb24pfGpwZT9nfHdlYnB8cG5nfGdpZnxzdmd8dHRmfHdvZmYyP3xpY298Y3N2fGRvY3g/fHhsc3g/fHppcHx3ZWJtYW5pZmVzdCkpLiopJyxcclxuICAgIC8vIEFsd2F5cyBydW4gZm9yIEFQSSByb3V0ZXNcclxuICAgICcvKGFwaXx0cnBjKSguKiknLFxyXG4gIF0sXHJcbn07Il0sIm5hbWVzIjpbImNsZXJrTWlkZGxld2FyZSIsImlzUHJvdGVjdGVkUm91dGUiLCJjcmVhdGVSb3V0ZU1hdGNoZXIiLCJhdXRoIiwicmVxIiwicHJvdGVjdCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});