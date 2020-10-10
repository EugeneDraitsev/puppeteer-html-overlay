(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handler.ts":
/*!************************!*\
  !*** ./src/handler.ts ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var puppeteer_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! puppeteer-extra */ "puppeteer-extra");
/* harmony import */ var puppeteer_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(puppeteer_extra__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var puppeteer_extra_plugin_stealth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! puppeteer-extra-plugin-stealth */ "puppeteer-extra-plugin-stealth");
/* harmony import */ var puppeteer_extra_plugin_stealth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(puppeteer_extra_plugin_stealth__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async event => {
  puppeteer_extra__WEBPACK_IMPORTED_MODULE_0___default().use(puppeteer_extra_plugin_stealth__WEBPACK_IMPORTED_MODULE_1___default()());

  try {
    const {
      url = '',
      width = 1500,
      height = 900
    } = event.queryStringParameters || {};

    if (!url || !url.startsWith('http')) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          massage: 'you should specify page URL'
        })
      };
    }

    const browser = await puppeteer_extra__WEBPACK_IMPORTED_MODULE_0___default().launch({});
    const page = await browser.newPage();
    page.setViewport({
      width: Number(width),
      height: Number(height)
    });
    await page.goto(url);
    await page.waitFor(3000);
    const [body, styleSheets] = await page.evaluate(() => {
      const scripts = document.getElementsByTagName('script');
      Array.from(scripts).forEach(script => {
        var _script$parentNode;

        script === null || script === void 0 ? void 0 : (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);
      });
      const css = [];
      Array.from(document.styleSheets).forEach(sheet => {
        // @ts-ignore
        const rules = 'cssRules' in sheet ? sheet.cssRules : sheet.rules;
        Array.from(rules).forEach(rule => {
          if ('cssText' in rule) {
            css.push(rule.cssText);
          } else {
            var _rule$style;

            // @ts-ignore
            css.push((rule === null || rule === void 0 ? void 0 : rule.selectorText) + ' {\n' + (rule === null || rule === void 0 ? void 0 : (_rule$style = rule.style) === null || _rule$style === void 0 ? void 0 : _rule$style.cssText) + '\n}\n');
          }
        });
      });
      return [document.body.innerHTML, css.join('\n')];
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        body,
        styleSheets
      })
    };
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify({
        massage: 'Something going wrong on backend side'
      })
    };
  }
});

/***/ }),

/***/ "puppeteer-extra":
/*!**********************************!*\
  !*** external "puppeteer-extra" ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! export default [maybe provided (runtime-defined)] [used] [provision prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [unused] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("puppeteer-extra");

/***/ }),

/***/ "puppeteer-extra-plugin-stealth":
/*!*************************************************!*\
  !*** external "puppeteer-extra-plugin-stealth" ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! export default [maybe provided (runtime-defined)] [used] [provision prevents renaming] */
/*! other exports [maybe provided (runtime-defined)] [unused] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("puppeteer-extra-plugin-stealth");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/handler.ts");
/******/ })()

));
//# sourceMappingURL=handler.js.map