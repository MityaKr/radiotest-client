(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\n@font-face {\n  font-family: \"flaticon\";\n  src: url('flaticon.ttf?67d6963c633695c2cdf0734edc57286b') format(\"truetype\"),\n    url('flaticon.woff?67d6963c633695c2cdf0734edc57286b') format(\"woff\"),\n    url('flaticon.woff2?67d6963c633695c2cdf0734edc57286b') format(\"woff2\"),\n    url('flaticon.eot?67d6963c633695c2cdf0734edc57286b#iefix') format(\"embedded-opentype\"),\n    url('flaticon.svg?67d6963c633695c2cdf0734edc57286b#flaticon') format(\"svg\");\n}\n[class^=\"flaticon-\"]:before,\n[class*=\" flaticon-\"]:before {\n  font-family: flaticon !important;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.flaticon-add:before {\n  content: \"\\f101\";\n}\n.flaticon-blank-check-box:before {\n  content: \"\\f102\";\n}\n.flaticon-cancel:before {\n  content: \"\\f103\";\n}\n.flaticon-check-box:before {\n  content: \"\\f104\";\n}\n.flaticon-circle:before {\n  content: \"\\f105\";\n}\n.flaticon-compliant:before {\n  content: \"\\f106\";\n}\n.flaticon-contact-book:before {\n  content: \"\\f107\";\n}\n.flaticon-down-arrow-1:before {\n  content: \"\\f108\";\n}\n.flaticon-down-arrow-2:before {\n  content: \"\\f109\";\n}\n.flaticon-email:before {\n  content: \"\\f10a\";\n}\n.flaticon-error:before {\n  content: \"\\f10b\";\n}\n.flaticon-facebook:before {\n  content: \"\\f10c\";\n}\n.flaticon-instagram:before {\n  content: \"\\f10d\";\n}\n.flaticon-logout:before {\n  content: \"\\f10e\";\n}\n.flaticon-magnifiying-glass:before {\n  content: \"\\f10f\";\n}\n.flaticon-medal:before {\n  content: \"\\f110\";\n}\n.flaticon-menu:before {\n  content: \"\\f111\";\n}\n.flaticon-microphone:before {\n  content: \"\\f112\";\n}\n.flaticon-minus:before {\n  content: \"\\f113\";\n}\n.flaticon-music-note:before {\n  content: \"\\f114\";\n}\n.flaticon-pause:before {\n  content: \"\\f115\";\n}\n.flaticon-pen:before {\n  content: \"\\f116\";\n}\n.flaticon-play-button-arrowhead:before {\n  content: \"\\f117\";\n}\n.flaticon-plus:before {\n  content: \"\\f118\";\n}\n.flaticon-question:before {\n  content: \"\\f119\";\n}\n.flaticon-radio-on-button:before {\n  content: \"\\f11a\";\n}\n.flaticon-settings:before {\n  content: \"\\f11b\";\n}\n.flaticon-sound-waves:before {\n  content: \"\\f11c\";\n}\n.flaticon-statistics:before {\n  content: \"\\f11d\";\n}\n.flaticon-stop-1:before {\n  content: \"\\f11e\";\n}\n.flaticon-stop:before {\n  content: \"\\f11f\";\n}\n.flaticon-support:before {\n  content: \"\\f120\";\n}\n.flaticon-telephone:before {\n  content: \"\\f121\";\n}\n.flaticon-tick:before {\n  content: \"\\f122\";\n}\n.flaticon-up-arrow:before {\n  content: \"\\f123\";\n}\n.flaticon-volume:before {\n  content: \"\\f124\";\n}\n.flaticon-warning-sign:before {\n  content: \"\\f125\";\n}\n@font-face {\n  font-family: \"Poppins-ExtraBold\";\n  src: url('Poppins-ExtraBold.ttf');\n}\n@font-face {\n  font-family: \"Poppins-SemiBold\";\n  src: url('Poppins-SemiBold.ttf');\n}\n@font-face {\n  font-family: \"Poppins-Bold\";\n  src: url('Poppins-Bold.ttf');\n}\n@font-face {\n  font-family: \"Poppins-Medium\";\n  src: url('Poppins-Medium.ttf');\n}\n@font-face {\n  font-family: \"Poppins-Regular\";\n  src: url('Poppins-Regular.ttf');\n}\n@font-face {\n  font-family: \"Poppins-Light\";\n  src: url('Poppins-Light.ttf');\n}\n@font-face {\n  font-family: \"Poppins-Light\";\n  src: url('Poppins-Light.ttf');\n}\n@font-face {\n  font-family: \"Poppins-Italic\";\n  src: url('Poppins-Italic.ttf');\n}\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n   * Prevent modern browsers from displaying `audio` without controls.\n   * Remove excess height in iOS 5 devices.\n   */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n   * Address `[hidden]` styling not present in IE 8/9/10.\n   * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n   */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Links\n     ========================================================================== */\n/**\n   * Remove the gray background color from active links in IE 10.\n   */\na {\n  background-color: transparent;\n  text-decoration: none;\n  display: block;\n  text-align: center;\n}\n/**\n   * Improve readability when focused and also mouse hovered in all browsers.\n   */\na:active,\na:hover {\n  outline: 0;\n}\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n   */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/**\n   * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n   */\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n   * Address styling not present in Safari and Chrome.\n   */\ndfn {\n  font-style: italic;\n}\n/**\n   * Address variable `h1` font-size and margin within `section` and `article`\n   * contexts in Firefox 4+, Safari, and Chrome.\n   */\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n}\np {\n  margin: 0;\n}\n/**\n   * Address styling not present in IE 8/9.\n   */\nmark {\n  background: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n  object-fit: contain;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 0;\n}\nhr {\n  box-sizing: content-box;\n  margin: 0;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n  outline: none;\n}\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n.rotate {\n  transform: rotate(-90deg);\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nbody {\n  font-family: Poppins-Regular;\n  color: #000000;\n  background-color: #f9f9f9;\n}\nbody {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  body {\n    font-size: calc(12px + 6 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  body {\n    font-size: 18px;\n  }\n}\n* {\n  box-sizing: border-box;\n}\n.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  max-width: 1365px;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 1365px;\n}\n@media (max-width: 1440px) {\n  .container {\n    max-width: 90%;\n  }\n}\n.title {\n  font-family: Poppins-ExtraBold;\n  color: #FF3B3F;\n  text-align: left;\n  text-transform: uppercase;\n}\n.title {\n  font-size: 22px;\n}\n@media screen and (min-width: 320px) {\n  .title {\n    font-size: calc(22px + 10 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .title {\n    font-size: 32px;\n  }\n}\n.subtitle {\n  font-family: #A9A9A9;\n  color: #000000;\n  text-align: left;\n}\n.subtitle {\n  font-size: 16px;\n}\n@media screen and (min-width: 320px) {\n  .subtitle {\n    font-size: calc(16px + 8 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .subtitle {\n    font-size: 24px;\n  }\n}\n.tab__title {\n  font-family: Poppins-Regular;\n  color: #000000;\n  text-align: left;\n}\n.tab__title {\n  font-size: 16px;\n}\n@media screen and (min-width: 320px) {\n  .tab__title {\n    font-size: calc(16px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .tab__title {\n    font-size: 18px;\n  }\n}\n.wrapper {\n  display: flex;\n}\n.facebook {\n  color: #4267b2;\n  font-weight: bold;\n}\n.facebook::before {\n  color: #4267b2 !important;\n}\n.instagram {\n  background: -webkit-linear-gradient(#ffc107, #f44336, #9c27b0, #9c27b0);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: bold;\n}\n.instagram::before {\n  background: -webkit-linear-gradient(#ffc107, #f44336, #9c27b0, #9c27b0);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.twitter {\n  background: #1da1f2 !important;\n}\n.youtube {\n  background: #ff0000 !important;\n}\n.linkedin {\n  background: #2867b2 !important;\n}\n.whatsapp {\n  background: #25d366;\n}\n.pinterest {\n  background: #e60023;\n}\n.odnoklassniki {\n  background: #ed812b;\n}\n.table {\n  max-width: 100%;\n  width: 100%;\n  box-shadow: 0px 2px 25px rgba(15, 28, 71, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n  overflow-x: auto;\n}\n.table::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #f5f5f5;\n}\n.table::-webkit-scrollbar {\n  height: 12px;\n  background-color: #f5f5f5;\n}\n.table::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #FF3B3F;\n}\n.table__row {\n  background-color: #EFEFEF;\n}\n.table__row:nth-child(2n+2) {\n  background-color: #fff;\n}\n.table__row--item {\n  padding: 15px 20px;\n  width: 25%;\n}\n.table__row--item:not(:first-child) {\n  border-left: 2px solid rgba(0, 0, 0, 0.05);\n}\n.table__row th {\n  padding: 15px 10px;\n  text-align: left;\n}\n.table__row th:first-child {\n  border-radius: 10px 0 0 0;\n}\n.table__row th:last-child {\n  border-radius: 0 10px 0 0;\n}\n.table__row th:not(:first-child) {\n  border-left: 2px solid rgba(0, 0, 0, 0.05);\n}\n.table__row th .btn {\n  color: #A9A9A9;\n  border: none;\n  outline: none;\n  font-weight: lighter;\n  margin-right: 5px;\n  background-color: #EFEFEF;\n}\n.link {\n  border: 1px solid #FF3B3F;\n  width: 150px;\n  height: 40px;\n  display: block;\n  border-radius: 10px;\n  font-family: Poppins-Regular;\n  color: #FF3B3F;\n  line-height: 40px;\n  text-align: center;\n  transition: 0.5 ease-in-out all;\n}\n.link {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .link {\n    font-size: calc(12px + 6 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .link {\n    font-size: 18px;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .link:hover {\n    color: #fff !important;\n    background-color: #FF3B3F;\n  }\n}\n.wrapper-container {\n  max-width: 100%;\n  width: 100%;\n  box-shadow: inset 1px 350px 100px -100px #CAEBF0;\n  padding-top: 100px;\n  min-height: calc(100vh - 274px);\n}\n@media only screen and (max-width: 1247px) {\n  .wrapper-container {\n    padding-top: 90px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .wrapper-container {\n    padding-top: 70px;\n  }\n}\n@media only screen and (max-width: 559px) {\n  .wrapper-container {\n    padding-top: 65px;\n  }\n}\n.btn {\n  background-color: #FF3B3F;\n  border: none;\n  outline: none;\n  border-radius: 10px;\n  color: #fff;\n  border: 1px solid #FF3B3F;\n  transition: 0.5s ease-in-out all;\n  box-shadow: 0px 24px 16px -22px #ff3b3f;\n}\n@media only screen and (min-width: 1024px) {\n  .btn:hover {\n    background-color: #fff;\n    color: #FF3B3F;\n  }\n}\n.btn._outline {\n  background: #fff;\n  border: 1px solid #FF3B3F;\n  color: #FF3B3F;\n  box-shadow: none;\n}\n@media only screen and (min-width: 1024px) {\n  .btn._outline:hover {\n    background-color: #FF3B3F;\n    color: #fff;\n  }\n}\n.btn._success {\n  color: #fff;\n  background-color: #2AB930;\n  border-color: #2AB930;\n  box-shadow: 0px 24px 16px -22px #2AB930;\n}\n@media only screen and (min-width: 1024px) {\n  .btn._success:hover {\n    background-color: #fff;\n    color: #2AB930;\n  }\n}\n.btn:disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: alias;\n}\n.form {\n  max-width: 100%;\n  width: 100%;\n  margin-top: 5px;\n}\n.form__input {\n  max-width: 100%;\n  width: 100%;\n  margin-top: 20px;\n  padding: 0;\n  display: block;\n}\n.form__input {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .form__input {\n    font-size: calc(12px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .form__input {\n    font-size: 14px;\n  }\n}\n.form__input input {\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  max-width: 100%;\n  width: 100%;\n  height: 63px;\n  padding: 20px;\n  outline: none;\n}\n.form__input--label {\n  margin-bottom: 5px;\n}\n.form__link {\n  color: #FF3B3F;\n  text-decoration: underline;\n  cursor: pointer;\n  align-self: flex-end;\n}\n.form .wrapper {\n  margin: 15px 0 0;\n  justify-content: flex-end;\n}\n.form__btn {\n  max-width: 100%;\n  width: 100%;\n  margin-top: 40px;\n  display: block;\n  height: 60px;\n}\n@media only screen and (max-width: 1247px) {\n  .form__input input {\n    height: 50px;\n    padding: 15px 20px;\n  }\n  .form__btn {\n    height: 50px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .form__input input {\n    height: 40px;\n    padding: 15px;\n  }\n  .form__btn {\n    height: 40px;\n  }\n}\n.content__form {\n  margin: auto;\n  max-width: 500px;\n  padding: 20px;\n  width: 100%;\n}\n.content__form .error__item {\n  margin-top: 5px;\n  color: #FF3B3F;\n}\n.content__form .error__item {\n  font-size: 10px;\n}\n@media screen and (min-width: 320px) {\n  .content__form .error__item {\n    font-size: calc(10px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .content__form .error__item {\n    font-size: 12px;\n  }\n}\n.content__form .error input {\n  border-color: #FF3B3F;\n  color: #FF3B3F;\n}\n.content__form .wrapper-navigation {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n}\n.content__form .wrapper-navigation span {\n  color: #A9A9A9;\n  margin-right: 10px;\n}\n.error__item {\n  margin-top: 5px;\n  color: #FF3B3F;\n}\n.error__item {\n  font-size: 10px;\n}\n@media screen and (min-width: 320px) {\n  .error__item {\n    font-size: calc(10px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .error__item {\n    font-size: 12px;\n  }\n}\n.error input {\n  border-color: #FF3B3F;\n  color: #FF3B3F;\n}\n.quil p {\n  font-family: Poppins-Regular;\n  color: #000000;\n  margin-bottom: 5px;\n}\n.quil p {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .quil p {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .quil p {\n    font-size: 16px;\n  }\n}\n.quil table {\n  border-collapse: collapse;\n}\n.quil li {\n  font-family: Poppins-Regular;\n  color: #000000;\n}\n.quil li {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .quil li {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .quil li {\n    font-size: 16px;\n  }\n}\n.quil img {\n  display: block;\n  margin: 10px auto;\n}\n.ql h1,\n.ql h2,\n.ql h3 {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.ql p sup {\n  margin: 10px auto !important;\n}\n.ql img {\n  margin: 10px auto !important;\n  max-width: 100%;\n  width: 100%;\n  max-height: 250px;\n  object-fit: contain;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .ql img {\n    max-width: 30%;\n  }\n}\n.ql table,\n.ql td,\n.ql th {\n  border: 1px solid #CAEBF0;\n  margin: 20px auto;\n}\n.ql table {\n  border-collapse: separate;\n  border-spacing: 0 5px;\n  max-width: 100%;\n  width: 100%;\n  border: 1px solid #CAEBF0;\n}\n.ql table td {\n  word-break: break-all;\n  padding: 5px;\n}\n.ql table td img {\n  max-height: 100px;\n  object-position: left;\n  max-width: none;\n  width: auto;\n}\n.ql ul {\n  box-sizing: border-box;\n  margin: 12px 12px 12px 0px;\n  padding-left: 40px;\n}\n.ql ul li {\n  list-style: disc;\n  margin-top: 5px;\n}\n.ql ol {\n  box-sizing: border-box;\n  margin: 12px 12px 12px 0px;\n}\n.ql ol li {\n  padding-left: 5px;\n  margin-top: 5px;\n  list-style: decimal !important;\n}\n.ql a {\n  display: inline-block;\n  color: #CAEBF0 !important;\n  text-decoration: underline;\n}\n.ql-video {\n  height: 35vh;\n  width: 100%;\n  margin: 10px auto;\n  display: flex;\n}\n@media only screen and (min-width: 768px) {\n  .ql-video {\n    width: 60%;\n    height: 30vh;\n  }\n}\n.ql-align-center {\n  text-align: center;\n}\n.ql-align-justify img {\n  margin: 0 auto;\n}\napp-settings {\n  max-width: 100%;\n  width: 100%;\n}\napp-edit-user {\n  max-width: 100%;\n  width: 100%;\n}\napp-login {\n  max-width: 100%;\n  width: 100%;\n}\napp-register {\n  max-width: 100%;\n  width: 100%;\n}\napp-forgot-password {\n  max-width: 100%;\n  width: 100%;\n}\napp-reset-password {\n  max-width: 100%;\n  width: 100%;\n}\n#ys-toasts {\n  display: flex;\n  flex-direction: column;\n  z-index: -1;\n  position: fixed;\n  top: 30px;\n  right: 30px;\n  max-width: 350px;\n  width: 100%;\n  overflow: hidden;\n}\n.ys-toast {\n  display: flex;\n  opacity: 0;\n  align-items: center;\n  padding: 15px 20px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 100%;\n  margin-bottom: 10px;\n  /* Chrome 16+, Safari 4+ */\n  /* FF 5+ */\n  /* Not implemented yet */\n  /* IE 10+ */\n  animation-fill-mode: forwards;\n}\n.ys-toast .toast-icon {\n  margin-right: 10px;\n  font-size: 24px;\n}\n.ys-toast .toast-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.ys-toast .toast-content .header {\n  position: relative;\n  width: 100%;\n}\n.ys-toast .toast-content .header .toast-title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 16px;\n}\n.ys-toast .toast-content .header .close-toast-btn {\n  position: absolute;\n  top: 5px;\n  right: 0;\n  font-size: 12px;\n  cursor: pointer;\n}\n.ys-toast .toast-content .toast-message {\n  width: 100%;\n  margin: 0;\n  font-size: 14px;\n}\n.toast-success {\n  background-color: #b7d8b7;\n  animation-name: toast-init;\n  animation-duration: 0.6s;\n}\n.toast-error {\n  background-color: #f8b7bd;\n  animation-name: toast-init;\n  animation-duration: 0.6s;\n}\n.toast-warn {\n  background-color: #ffe399;\n  animation-name: toast-init;\n  animation-duration: 0.6s;\n}\n@keyframes toast-init {\n  100% {\n    opacity: 1;\n    z-index: 100000;\n  }\n}\n@keyframes toast-close {\n  0% {\n    opacity: 1;\n    z-index: 100000;\n    height: auto;\n  }\n  50% {\n    overflow: hidden;\n    height: 50px;\n  }\n  100% {\n    height: 0;\n    opacity: 0;\n    z-index: -1;\n  }\n}", "",{"version":3,"sources":["webpack://src/styles.scss","webpack://src/assets/icons/flaticon.css","webpack://src/assets/scss/fonts.scss","webpack://src/assets/scss/normalize.scss","webpack://src/assets/scss/mixins.scss","webpack://src/assets/scss/primary.scss","webpack://src/assets/scss/theme.scss"],"names":[],"mappings":"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;AGGA;;EAEI,YAAA;AHAJ;AGKA;EACI,6BAAA;EACA,MAAA;EAGA,MAAA;EACA,uBAAA;AHFJ;AGKA;;EAEI,wBAAA;AHFJ;AGOA;EACI,yBAAA;EACA,aAAA;EACA,8BAAA;AHJJ;AGOA;EACI,SAAA;EACA,MAAA;EACA,UAAA;EACA,MAAA;AHJJ;AGSA;EACI,cAAA;AHNJ;AGSA;EACI,iBAAA;AHNJ;AGSA;EACI,yBAAA;EACA,iBAAA;AHNJ;AGSA;;EAEI,UAAA;AHNJ;AGmBA;;EAEI,wBAAA;EACA,SAAA;AHhBJ;AGmBA,YAAA;AACA;EACI,0BAAA;AHhBJ;AGmBA;EACI,yBAAA;AHhBJ;AI5KA;EACI;IACI,UAAA;EJ+KN;EI5KE;IACI,UAAA;EJ8KN;AACF;AK9UA;EDmGQ,4BElFE;EFsFF,cEpGF;EDDJ,yBCMmB;AN2UrB;AI9MQ;EACI,eCrIe;ALqV3B;AI9MY;EAHJ;IAIQ,mDAAA;EJiNd;AACF;AI/MY;EAPJ;IAQQ,eC5IiB;EL8V/B;AACF;AK3VA;EACE,sBAAA;AL8VF;AK3VA;ED6CI,aAAA;EAGI,mBC9CgB;EDkDhB,8BClDqB;EDsDrB,mBCtDoC;EAC1C,sBAAA;EACA,iBCQU;EDPV,cAAA;EACA,WAAA;EACA,iBCKU;AN2VZ;AK9VE;EATF;IAUI,cAAA;ELiWF;AACF;AK9VA;ED4EQ,8BErFC;EFyFD,cE7FI;EFyGJ,gBC3FoD;EAC1D,yBAAA;ALmWF;AIvPQ;EACI,eC9Ge;ALuW3B;AIvPY;EAHJ;IAIQ,oDAAA;EJ0Pd;AACF;AIxPY;EAPJ;IAQQ,eCrHiB;ELgX/B;AACF;AK7WA;EDuEQ,oBE5FC;EFgGD,cEpGF;EFgHE,gBCtF+C;ALkXvD;AI1QQ;EACI,eCzGe;ALqX3B;AI1QY;EAHJ;IAIQ,mDAAA;EJ6Qd;AACF;AI3QY;EAPJ;IAQQ,eChHiB;EL8X/B;AACF;AK3XE;EDkEM,4BElFE;EFsFF,cEpGF;EFgHE,gBCjFkD;ALgY1D;AI7RQ;EACI,eCpGiB;ALmY7B;AI7RY;EAHJ;IAIQ,mDAAA;EJgSd;AACF;AI9RY;EAPJ;IAQQ,eC3GmB;EL4YjC;AACF;AKzYA;EDgBI,a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","sourcesContent":["/* You can add global styles to this file, and also import other style files */\r\n@import \"assets/icons/flaticon.css\";\r\n@import \"assets/scss/fonts.scss\";\r\n@import \"assets/scss/normalize.scss\";\r\n@import \"assets/scss/theme.scss\";\r\n@import \"assets/scss/mixins.scss\";\r\n@import \"assets/scss/primary\";\r\n\r\napp-settings {\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\napp-edit-user {\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\napp-login {\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\napp-register {\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\napp-forgot-password {\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\napp-reset-password {\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\n#ys-toasts {\r\n  display: flex;\r\n  flex-direction: column;\r\n  z-index: -1;\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 30px;\r\n  max-width: 350px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n.ys-toast {\r\n  // display: none;\r\n  display: flex;\r\n  opacity: 0;\r\n  align-items: center;\r\n  padding: 15px 20px;\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n\r\n  -webkit-animation-fill-mode: forwards;\r\n  /* Chrome 16+, Safari 4+ */\r\n  -moz-animation-fill-mode: forwards;\r\n  /* FF 5+ */\r\n  -o-animation-fill-mode: forwards;\r\n  /* Not implemented yet */\r\n  -ms-animation-fill-mode: forwards;\r\n  /* IE 10+ */\r\n  animation-fill-mode: forwards;\r\n\r\n  .toast-icon {\r\n    margin-right: 10px;\r\n    font-size: 24px;\r\n  }\r\n\r\n  .toast-content {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    .header {\r\n      position: relative;\r\n      width: 100%;\r\n\r\n      .toast-title {\r\n        text-align: center;\r\n        font-weight: bold;\r\n        font-size: 16px;\r\n      }\r\n\r\n      .close-toast-btn {\r\n        position: absolute;\r\n        top: 5px;\r\n        right: 0;\r\n        font-size: 12px;\r\n        cursor: pointer;\r\n      }\r\n\r\n    }\r\n\r\n    .toast-message {\r\n      width: 100%;\r\n      margin: 0;\r\n      font-size: 14px;\r\n      // box-sizing: border-box;\r\n      //   text-align: center;\r\n    }\r\n  }\r\n}\r\n\r\n$toast-anim-duration: 0.6;\r\n\r\n.toast-success {\r\n  background-color: $success-color;\r\n  animation-name: toast-init;\r\n  animation-duration: $toast-anim-duration + s;\r\n\r\n}\r\n\r\n.toast-error {\r\n  background-color: $error-color;\r\n  animation-name: toast-init;\r\n  animation-duration: $toast-anim-duration + s;\r\n\r\n}\r\n\r\n.toast-warn {\r\n  background-color: $warn-color;\r\n  animation-name: toast-init;\r\n  animation-duration: $toast-anim-duration + s;\r\n\r\n}\r\n\r\n@keyframes toast-init {\r\n  0% {\r\n    // opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    z-index: 100000;\r\n  }\r\n}\r\n\r\n@keyframes toast-close {\r\n  0% {\r\n    opacity: 1;\r\n    z-index: 100000;\r\n    height: auto;\r\n  }\r\n\r\n  50% {\r\n    overflow: hidden;\r\n    height: 50px;\r\n  }\r\n\r\n  100% {\r\n    height: 0;\r\n    opacity: 0;\r\n    z-index: -1;\r\n  }\r\n}\r\n","@font-face {\n  font-family: \"flaticon\";\n  src: url(\"./flaticon.ttf?67d6963c633695c2cdf0734edc57286b\") format(\"truetype\"),\n    url(\"./flaticon.woff?67d6963c633695c2cdf0734edc57286b\") format(\"woff\"),\n    url(\"./flaticon.woff2?67d6963c633695c2cdf0734edc57286b\") format(\"woff2\"),\n    url(\"./flaticon.eot?67d6963c633695c2cdf0734edc57286b#iefix\") format(\"embedded-opentype\"),\n    url(\"./flaticon.svg?67d6963c633695c2cdf0734edc57286b#flaticon\") format(\"svg\");\n}\n\n[class^=\"flaticon-\"]:before,\n[class*=\" flaticon-\"]:before {\n  font-family: flaticon !important;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.flaticon-add:before {\n  content: \"\\f101\";\n}\n\n.flaticon-blank-check-box:before {\n  content: \"\\f102\";\n}\n\n.flaticon-cancel:before {\n  content: \"\\f103\";\n}\n\n.flaticon-check-box:before {\n  content: \"\\f104\";\n}\n\n.flaticon-circle:before {\n  content: \"\\f105\";\n}\n\n.flaticon-compliant:before {\n  content: \"\\f106\";\n}\n\n.flaticon-contact-book:before {\n  content: \"\\f107\";\n}\n\n.flaticon-down-arrow-1:before {\n  content: \"\\f108\";\n}\n\n.flaticon-down-arrow-2:before {\n  content: \"\\f109\";\n}\n\n.flaticon-email:before {\n  content: \"\\f10a\";\n}\n\n.flaticon-error:before {\n  content: \"\\f10b\";\n}\n\n.flaticon-facebook:before {\n  content: \"\\f10c\";\n}\n\n.flaticon-instagram:before {\n  content: \"\\f10d\";\n}\n\n.flaticon-logout:before {\n  content: \"\\f10e\";\n}\n\n.flaticon-magnifiying-glass:before {\n  content: \"\\f10f\";\n}\n\n.flaticon-medal:before {\n  content: \"\\f110\";\n}\n\n.flaticon-menu:before {\n  content: \"\\f111\";\n}\n\n.flaticon-microphone:before {\n  content: \"\\f112\";\n}\n\n.flaticon-minus:before {\n  content: \"\\f113\";\n}\n\n.flaticon-music-note:before {\n  content: \"\\f114\";\n}\n\n.flaticon-pause:before {\n  content: \"\\f115\";\n}\n\n.flaticon-pen:before {\n  content: \"\\f116\";\n}\n\n.flaticon-play-button-arrowhead:before {\n  content: \"\\f117\";\n}\n\n.flaticon-plus:before {\n  content: \"\\f118\";\n}\n\n.flaticon-question:before {\n  content: \"\\f119\";\n}\n\n.flaticon-radio-on-button:before {\n  content: \"\\f11a\";\n}\n\n.flaticon-settings:before {\n  content: \"\\f11b\";\n}\n\n.flaticon-sound-waves:before {\n  content: \"\\f11c\";\n}\n\n.flaticon-statistics:before {\n  content: \"\\f11d\";\n}\n\n.flaticon-stop-1:before {\n  content: \"\\f11e\";\n}\n\n.flaticon-stop:before {\n  content: \"\\f11f\";\n}\n\n.flaticon-support:before {\n  content: \"\\f120\";\n}\n\n.flaticon-telephone:before {\n  content: \"\\f121\";\n}\n\n.flaticon-tick:before {\n  content: \"\\f122\";\n}\n\n.flaticon-up-arrow:before {\n  content: \"\\f123\";\n}\n\n.flaticon-volume:before {\n  content: \"\\f124\";\n}\n\n.flaticon-warning-sign:before {\n  content: \"\\f125\";\n}\n","\r\n  @font-face {\r\n    font-family: \"Poppins-ExtraBold\";\r\n    src: url(\"../fonts/Poppins-ExtraBold.ttf\");\r\n  }\r\n\r\n  @font-face {\r\n    font-family: \"Poppins-SemiBold\";\r\n    src: url(\"../fonts/Poppins-SemiBold.ttf\");\r\n  }\r\n\r\n  @font-face {\r\n    font-family: \"Poppins-Bold\";\r\n    src: url(\"../fonts/Poppins-Bold.ttf\");\r\n  }\r\n  @font-face {\r\n    font-family: \"Poppins-Medium\";\r\n    src: url(\"../fonts/Poppins-Medium.ttf\");\r\n  }\r\n  @font-face {\r\n    font-family: \"Poppins-Regular\";\r\n    src: url(\"../fonts/Poppins-Regular.ttf\");\r\n  }\r\n \r\n  @font-face {\r\n    font-family: \"Poppins-Light\";\r\n    src: url(\"../fonts/Poppins-Light.ttf\");\r\n  }\r\n\r\n  @font-face {\r\n    font-family: \"Poppins-Light\";\r\n    src: url(\"../fonts/Poppins-Light.ttf\");\r\n  }\r\n\r\n  @font-face {\r\n    font-family: \"Poppins-Italic\";\r\n    src: url(\"../fonts/Poppins-Italic.ttf\");\r\n  }\r\n\r\n\r\n  ","html {\r\n    font-family: sans-serif;\r\n    /* 1 */\r\n    -ms-text-size-adjust: 100%;\r\n    /* 2 */\r\n    -webkit-text-size-adjust: 100%;\r\n    /* 2 */\r\n}\r\n\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n    display: block;\r\n}\r\n\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n    display: inline-block;\r\n    /* 1 */\r\n    vertical-align: baseline;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Prevent modern browsers from displaying `audio` without controls.\r\n   * Remove excess height in iOS 5 devices.\r\n   */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n   * Address `[hidden]` styling not present in IE 8/9/10.\r\n   * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n   */\r\n\r\n[hidden],\r\ntemplate {\r\n    display: none;\r\n}\r\n\r\n/* Links\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the gray background color from active links in IE 10.\r\n   */\r\n\r\na {\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n/**\r\n   * Improve readability when focused and also mouse hovered in all browsers.\r\n   */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/* Text-level semantics\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n   */\r\n\r\nabbr[title] {\r\n    border-bottom: 1px dotted;\r\n}\r\n\r\n/**\r\n   * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n   */\r\n\r\nb,\r\nstrong {\r\n    font-weight: bold;\r\n}\r\n\r\n/**\r\n   * Address styling not present in Safari and Chrome.\r\n   */\r\n\r\ndfn {\r\n    font-style: italic;\r\n}\r\n\r\n/**\r\n   * Address variable `h1` font-size and margin within `section` and `article`\r\n   * contexts in Firefox 4+, Safari, and Chrome.\r\n   */\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n    margin: 0;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n   * Address styling not present in IE 8/9.\r\n   */\r\n\r\nmark {\r\n    background: #ff0;\r\n    color: #000;\r\n}\r\n\r\nsmall {\r\n    font-size: 80%;\r\n}\r\n\r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n    top: -0.5em;\r\n}\r\n\r\nsub {\r\n    bottom: -0.25em;\r\n}\r\n\r\n\r\n\r\nimg {\r\n    border: 0;\r\n    object-fit: contain;\r\n}\r\n\r\n\r\n\r\nsvg:not(:root) {\r\n    overflow: hidden;\r\n}\r\n\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\nhr {\r\n    box-sizing: content-box;\r\n    margin: 0;\r\n}\r\n\r\n\r\npre {\r\n    overflow: auto;\r\n}\r\n\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n    font-family: monospace, monospace;\r\n    font-size: 1em;\r\n}\r\n\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n    color: inherit;\r\n    font: inherit;\r\n    margin: 0;\r\n}\r\n\r\n\r\nbutton {\r\n    overflow: visible;\r\n}\r\n\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n    outline: none;\r\n}\r\n\r\n\r\n\r\nbutton,\r\nhtml input[type=\"button\"],\r\n/* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button;\r\n    /* 2 */\r\n    cursor: pointer;\r\n    /* 3 */\r\n}\r\n\r\n\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    padding: 0;\r\n    /* 2 */\r\n}\r\n\r\n\r\n\r\ninput[type=\"number\"]::-webkit-inner-spin-button,\r\ninput[type=\"number\"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n\r\n\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield;\r\n    /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box;\r\n    /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\nlegend {\r\n    border: 0;\r\n    /* 1 */\r\n    padding: 0;\r\n    /* 2 */\r\n}\r\n\r\n\r\n\r\ntextarea {\r\n    overflow: auto;\r\n}\r\n\r\noptgroup {\r\n    font-weight: bold;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    // list-style: none;\r\n}\r\n\r\n//   textarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {\r\n//     border-color: $danger;\r\n//     box-shadow: 0 1px 1px rgba($danger, 0.075) inset, 0 0 8px rgba($danger, 0.6);\r\n//     outline: 0 none;\r\n// }\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n/* Firefox */\r\ninput[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n}\r\n\r\n.rotate {\r\n    transform: rotate(-90deg);\r\n}","\r\n\r\n@mixin truncate($max-width) {\r\n    max-width: $max-width;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n$breakpoints: (\"phone\": 400px,\r\n    \"phone-wide\": 480px,\r\n    \"phablet\": 560px,\r\n    \"tablet-small\": 640px,\r\n    \"tablet\": 768px,\r\n    \"tablet-m\": 1000px,\r\n    \"tablet-wide\": 1024px,\r\n    \"desktop\": 1248px,\r\n    \"desktop-wide\": 1440px);\r\n\r\n@mixin mq($width, $type: min) {\r\n    @if map_has_key($breakpoints, $width) {\r\n        $width: map_get($breakpoints, $width);\r\n\r\n        @if $type==max {\r\n            $width: $width - 1px;\r\n        }\r\n\r\n        @media only screen and (#{$type}-width: $width) {\r\n            @content;\r\n        }\r\n    }\r\n}\r\n\r\n@function z($name) {\r\n    @if index($z-indexes, $name) {\r\n        @return (length($z-indexes) - index($z-indexes, $name))+1;\r\n    }\r\n\r\n    @else {\r\n        @warn 'There is no item \"#{$name}\" in this list; choose one of: #{$z-indexes}';\r\n        @return null;\r\n    }\r\n}\r\n\r\n$z-indexes: (\"outdated-browser\", \"modal\", \"site-header\", \"page-wrapper\", \"site-footer\");\r\n\r\n//----before after\r\n@mixin pseudo($display: block, $pos: absolute, $content: \"\") {\r\n    content: $content;\r\n    display: $display;\r\n    position: $pos;\r\n}\r\n\r\n@mixin flex-content($direction: false, $justify: false, $align: false, $align-content: false) {\r\n    display: flex;\r\n\r\n    @if $direction {\r\n        flex-direction: $direction;\r\n    }\r\n\r\n    @if $justify {\r\n        justify-content: $justify;\r\n    }\r\n\r\n    @if $align {\r\n        align-items: $align;\r\n    }\r\n\r\n    @if $align-content {\r\n        align-content: $align-content;\r\n    }\r\n}\r\n\r\n@mixin figure($width, $height: false) {\r\n    @include flex-content(row, center, center, center);\r\n    max-width: $width;\r\n    width: 100%;\r\n\r\n    @if $height {\r\n        height: $height;\r\n    }\r\n}\r\n\r\n\r\n//scalare font\r\n@function strip-unit($value) {\r\n    @return $value / ($value * 0 + 1);\r\n}\r\n\r\n@mixin fluid-type-size($min-font-size,\r\n    $max-font-size,\r\n    $ff: false,\r\n    $colour: false,\r\n    $align: false,\r\n    $lh: false,\r\n    $weight: false,\r\n    $min-vw: 320px,\r\n    $max-vw: 1200px) {\r\n    @if $ff {\r\n        font-family: $ff;\r\n    }\r\n\r\n    @if $colour {\r\n        color: $colour;\r\n    }\r\n\r\n    @if $weight {\r\n        font-weight: $weight;\r\n    }\r\n\r\n    @if $lh {\r\n        line-height: $lh;\r\n    }\r\n\r\n    @if $align {\r\n        text-align: $align;\r\n    }\r\n\r\n    $u1: unit($min-vw);\r\n    $u2: unit($max-vw);\r\n    $u3: unit($min-font-size);\r\n    $u4: unit($min-font-size);\r\n    // @if $min-font-size {\r\n    //   $u3: unit($min-font-size);\r\n    // }\r\n    // @if $max-font-size {\r\n    //   $u3: unit($max-font-size);\r\n    // }\r\n    // $u3: unit($min-font-size);\r\n    // $u4: unit($max-font-size);\r\n\r\n\r\n    @if $u1==$u2 and $u1==$u3 and $u1==$u4 {\r\n        & {\r\n            font-size: $min-font-size;\r\n\r\n            @media screen and (min-width: $min-vw) {\r\n                font-size: calc(#{$min-font-size} + #{strip-unit($max-font-size - $min-font-size)} * ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)}));\r\n            }\r\n\r\n            @media screen and (min-width: $max-vw) {\r\n                font-size: $max-font-size;\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\n@mixin animation ($time) {\r\n    animation: fade $time both;\r\n}\r\n\r\n@keyframes fade {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}","body {\r\n  @include fluid-type-size(12px, 18px, $regular, $dark);\r\n  background-color: $medium-shadow-dark;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n  // padding: 0 $default-padding;\r\n  @include flex-content(row, space-between, center);\r\n  box-sizing: border-box;\r\n  max-width: $container;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  max-width: $container;\r\n\r\n  @media (max-width: 1440px) {\r\n    max-width: 90%;\r\n  }\r\n}\r\n\r\n.title {\r\n  @include fluid-type-size(22px, 32px, $bolder, $secondary, left);\r\n  text-transform: uppercase;\r\n}\r\n\r\n.subtitle {\r\n  @include fluid-type-size(16px, 24px, $medium, $dark, left);\r\n}\r\n\r\n.tab {\r\n  &__title {\r\n    @include fluid-type-size(16px, 18px, $regular, $dark, left);\r\n  }\r\n}\r\n\r\n.wrapper {\r\n  @include flex-content();\r\n}\r\n\r\n.facebook {\r\n  color: #4267b2;\r\n  font-weight: bold;\r\n\r\n  &::before {\r\n    color: #4267b2 !important;\r\n  }\r\n}\r\n\r\n.instagram {\r\n  background: -webkit-linear-gradient(#ffc107, #f44336, #9c27b0, #9c27b0);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  font-weight: bold;\r\n\r\n  &::before {\r\n    background: -webkit-linear-gradient(#ffc107, #f44336, #9c27b0, #9c27b0);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n  }\r\n\r\n  // color:;\r\n}\r\n\r\n.twitter {\r\n  background: #1da1f2 !important;\r\n  // &::before {\r\n  //     color: #1da1f2!important\r\n  // }\r\n}\r\n\r\n.youtube {\r\n  background: #ff0000 !important;\r\n  // &::before {\r\n  //     color: #ff0000!important\r\n  // }\r\n}\r\n\r\n.linkedin {\r\n  background: #2867b2 !important;\r\n  // &::before {\r\n  //     color: #2867b2!important\r\n  // }\r\n}\r\n\r\n.whatsapp {\r\n  background: #25d366;\r\n  // &::before {\r\n  //     color:  #25D366!important\r\n  // }\r\n}\r\n\r\n.pinterest {\r\n  background: #e60023;\r\n}\r\n\r\n.odnoklassniki {\r\n  background: #ed812b;\r\n}\r\n\r\n.table {\r\n  max-width: 100%;\r\n  width: 100%;\r\n  box-shadow: $shadow;\r\n  border-radius: $radius;\r\n  overflow: hidden;\r\n\r\n  @include mq (table-wide, max) {\r\n    display: block;\r\n  }\r\n\r\n  overflow-x: auto;\r\n\r\n  &::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    border-radius: 10px;\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n  &::-webkit-scrollbar {\r\n    height: 12px;\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n  &::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: $secondary;\r\n  }\r\n\r\n  &__row {\r\n    background-color: $medium-shadow-light;\r\n\r\n    &:nth-child(2n + 2) {\r\n      background-color: $light;\r\n    }\r\n\r\n    &--item {\r\n      padding: 15px 20px;\r\n\r\n      &:not(:first-child) {\r\n        border-left: 2px solid rgba(#000, 0.05);\r\n      }\r\n\r\n      width: 25%;\r\n    }\r\n\r\n    th {\r\n      padding: 15px 10px;\r\n      // display: flex;\r\n      text-align: left;\r\n\r\n      &:first-child {\r\n        border-radius: $radius 0 0 0;\r\n      }\r\n\r\n      &:last-child {\r\n        border-radius: 0 $radius 0 0;\r\n      }\r\n\r\n      &:not(:first-child) {\r\n        border-left: 2px solid rgba(#000, 0.05);\r\n      }\r\n\r\n      .btn {\r\n        color: $medium;\r\n        border: none;\r\n        outline: none;\r\n        font-weight: lighter;\r\n        margin-right: 5px;\r\n        background-color: $medium-shadow-light;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.link {\r\n  border: 1px solid $secondary;\r\n  width: 150px;\r\n  height: 40px;\r\n  display: block;\r\n  border-radius: $radius;\r\n  @include fluid-type-size(12px, 18px, $regular, $secondary, center, 40px);\r\n  transition: 0.5 ease-in-out all;\r\n\r\n  @include mq(tablet-wide) {\r\n    &:hover {\r\n      color: $light !important;\r\n      background-color: $secondary;\r\n    }\r\n  }\r\n}\r\n\r\n.wrapper-container {\r\n  max-width: 100%;\r\n  width: 100%;\r\n  box-shadow: inset 1px 350px 100px -100px $primary;\r\n  padding-top: 100px;\r\n  min-height: calc(100vh - 274px);\r\n\r\n  @include mq(desktop, max) {\r\n    padding-top: 90px;\r\n  }\r\n\r\n  @include mq(tablet, max) {\r\n    padding-top: 70px;\r\n  }\r\n\r\n  @include mq(phablet, max) {\r\n    padding-top: 65px;\r\n  }\r\n}\r\n\r\n.btn {\r\n  background-color: $secondary;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: $radius;\r\n  color: $light;\r\n  border: 1px solid $secondary;\r\n  transition: 0.5s ease-in-out all;\r\n  box-shadow: $shadow-btn;\r\n\r\n  @include mq(tablet-wide) {\r\n    &:hover {\r\n      background-color: $light;\r\n      color: $secondary;\r\n    }\r\n  }\r\n\r\n  &._outline {\r\n    background: $light;\r\n    border: 1px solid $secondary;\r\n    color: $secondary;\r\n    box-shadow: none;\r\n\r\n    @include mq(tablet-wide) {\r\n      &:hover {\r\n        background-color: $secondary;\r\n        color: $light;\r\n      }\r\n    }\r\n  }\r\n\r\n  &._success {\r\n    color: $light;\r\n    background-color: $success;\r\n    border-color: $success;\r\n    box-shadow: $shadow-success;\r\n\r\n    @include mq(tablet-wide) {\r\n      &:hover {\r\n        background-color: $light;\r\n        color: $success;\r\n      }\r\n    }\r\n  }\r\n\r\n  &:disabled {\r\n    opacity: .5;\r\n    pointer-events: none;\r\n    cursor: alias;\r\n  }\r\n}\r\n\r\n.form {\r\n  max-width: 100%;\r\n  width: 100%;\r\n  margin-top: 5px;\r\n\r\n  &__input {\r\n    max-width: 100%;\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    padding: 0;\r\n    display: block;\r\n    @include fluid-type-size(12px, 14px);\r\n\r\n    input {\r\n      background-color: $light;\r\n      border: 1px solid $opacity;\r\n      border-radius: $radius;\r\n      max-width: 100%;\r\n      width: 100%;\r\n      height: 63px;\r\n      padding: 20px;\r\n      outline: none;\r\n    }\r\n\r\n    &--label {\r\n      margin-bottom: 5px;\r\n    }\r\n  }\r\n\r\n  &__checkbox {\r\n    // display: block;\r\n    // position: relative;\r\n    // padding-left: 35px;\r\n    // margin-bottom: 12px;\r\n    // cursor: pointer;\r\n    // font-size: 22px;\r\n    // user-select: none;\r\n    // max-width: 100%;\r\n    // width: 100%;\r\n\r\n    // input {\r\n    //     position: absolute;\r\n    //     opacity: 0;\r\n    //     cursor: pointer;\r\n    //     height: 0;\r\n    //     width: 0;\r\n    //   }\r\n\r\n    //   .checkmark {\r\n    //     position: absolute;\r\n    //     top: 0;\r\n    //     left: 0;\r\n    //     height: 25px;\r\n    //     width: 25px;\r\n    //     background-color: #eee;\r\n    //   }\r\n\r\n    //   &:hover input ~ .checkmark {\r\n    //     background-color: #ccc;\r\n    //   }\r\n\r\n    //   input:checked ~ .checkmark {\r\n    //     background-color: #2196F3;\r\n    //   }\r\n\r\n    //   .checkmark:after {\r\n    //     content: \"\";\r\n    //     position: absolute;\r\n    //     display: none;\r\n    //   }\r\n\r\n    //   input:checked ~ .checkmark:after {\r\n    //     display: block;\r\n    //   }\r\n\r\n    //   .checkmark:after {\r\n    //     left: 9px;\r\n    //     top: 5px;\r\n    //     width: 5px;\r\n    //     height: 10px;\r\n    //     border: solid white;\r\n    //     border-width: 0 3px 3px 0;\r\n    //     -webkit-transform: rotate(45deg);\r\n    //     -ms-transform: rotate(45deg);\r\n    //     transform: rotate(45deg);\r\n    //   }\r\n\r\n    // display: block;\r\n    // align-items: center;\r\n    // user-select: none;\r\n    // position: relative;\r\n    // padding-left: 35px;\r\n    // margin-bottom: 12px;\r\n    // font-size: 14px;\r\n    // line-height: 20px;\r\n    // // overflow: hidden;\r\n    // height: 20px;\r\n    // cursor: pointer;\r\n    // &:hover input ~ .checkmark {\r\n    //     background-color: #ccc;\r\n    // }\r\n    // input {\r\n    //     position: absolute;\r\n    //     opacity: 0;\r\n    //     cursor: pointer;\r\n    //     height: 0;\r\n    //     width: 0;\r\n    // }\r\n\r\n    // .checkmark {\r\n    //     display: flex;\r\n    //     position: absolute;\r\n    //     top: 0;\r\n    //     left: 0;\r\n    //     height: 20px;\r\n    //     width: 20px;\r\n    //     background-color: $medium;\r\n    //     border: 1px solid $secondary;\r\n    //     line-height: 20px;\r\n    //     cursor: pointer;\r\n    //     white-space: nowrap\r\n    // }\r\n    // input:checked ~ .checkmark {\r\n    //     background-color: $secondary;\r\n    // }\r\n\r\n    // .checkmark:after {\r\n    //     content: \"\";\r\n    //     position: absolute;\r\n    //     display: none;\r\n    // }\r\n    // input:checked ~ .checkmark:after {\r\n    //     display: block;\r\n    // }\r\n\r\n    // .checkmark:after {\r\n    //     left: 6px;\r\n    //     top: 3px;\r\n    //     width: 2px;\r\n    //     height: 8px;\r\n    //     border: solid white;\r\n    //     border-width: 0 3px 3px 0;\r\n    //     -webkit-transform: rotate(45deg);\r\n    //     -ms-transform: rotate(45deg);\r\n    //     transform: rotate(45deg);\r\n    // }\r\n  }\r\n\r\n  &__link {\r\n    color: $secondary;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n    align-self: flex-end;\r\n  }\r\n\r\n  .wrapper {\r\n    margin: 15px 0 0;\r\n    justify-content: flex-end;\r\n    //    justify-content: space-between;\r\n  }\r\n\r\n  &__btn {\r\n    max-width: 100%;\r\n    width: 100%;\r\n    margin-top: 40px;\r\n    display: block;\r\n    height: 60px;\r\n    //    color: $dark;\r\n\r\n    //    &:hover {\r\n    //        border-color: $dark;\r\n    //        color: $dark;\r\n    //    }\r\n  }\r\n\r\n  @include mq(desktop, max) {\r\n    &__input {\r\n      input {\r\n        height: 50px;\r\n        padding: 15px 20px;\r\n      }\r\n    }\r\n\r\n    &__btn {\r\n      height: 50px;\r\n    }\r\n  }\r\n\r\n  @include mq(tablet, max) {\r\n    &__input {\r\n      input {\r\n        height: 40px;\r\n        padding: 15px;\r\n      }\r\n    }\r\n\r\n    &__btn {\r\n      height: 40px;\r\n    }\r\n  }\r\n}\r\n\r\n.content__form {\r\n  margin: auto;\r\n  max-width: 500px;\r\n  padding: 20px;\r\n  width: 100%;\r\n\r\n  .error {\r\n    &__item {\r\n      margin-top: 5px;\r\n      color: $secondary;\r\n      @include fluid-type-size(10px, 12px);\r\n    }\r\n\r\n    input {\r\n      border-color: $secondary;\r\n      color: $secondary;\r\n    }\r\n  }\r\n\r\n  .wrapper-navigation {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 30px;\r\n\r\n    span {\r\n      color: $medium;\r\n      margin-right: 10px;\r\n    }\r\n  }\r\n}\r\n\r\n.error {\r\n  &__item {\r\n    margin-top: 5px;\r\n    color: $secondary;\r\n    @include fluid-type-size(10px, 12px);\r\n  }\r\n\r\n  input {\r\n    border-color: $secondary;\r\n    color: $secondary;\r\n  }\r\n}\r\n\r\n.quil {\r\n  p {\r\n    @include fluid-type-size(12px, 16px, $regular, $dark);\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  table {\r\n    border-collapse: collapse;\r\n  }\r\n\r\n  li {\r\n    @include fluid-type-size(12px, 16px, $regular, $dark);\r\n  }\r\n\r\n  img {\r\n    display: block;\r\n    margin: 10px auto;\r\n  }\r\n}\r\n\r\n.ql {\r\n\r\n  h1,\r\n  h2,\r\n  h3 {\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n  }\r\n\r\n  p {\r\n    sup {\r\n      margin: 10px auto !important;\r\n    }\r\n  }\r\n\r\n  img {\r\n    margin: 10px auto !important;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    max-height: 250px;\r\n    object-fit: contain;\r\n\r\n    @media all and (-ms-high-contrast: none),\r\n    (-ms-high-contrast: active) {\r\n      max-width: 30%;\r\n    }\r\n  }\r\n\r\n  table,\r\n  td,\r\n  th {\r\n    border: 1px solid $primary;\r\n    margin: 20px auto;\r\n  }\r\n\r\n  table {\r\n    border-collapse: separate;\r\n    border-spacing: 0 5px;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    border: 1px solid $primary;\r\n\r\n    td {\r\n      word-break: break-all;\r\n      padding: 5px;\r\n\r\n      img {\r\n        max-height: 100px;\r\n        object-position: left;\r\n        max-width: none;\r\n        width: auto;\r\n      }\r\n    }\r\n  }\r\n\r\n  ul {\r\n    box-sizing: border-box;\r\n    margin: 12px 12px 12px 0px;\r\n    padding-left: 40px;\r\n\r\n    li {\r\n      // padding-left: 20px;\r\n      list-style: disc;\r\n      margin-top: 5px;\r\n    }\r\n  }\r\n\r\n  ol {\r\n    box-sizing: border-box;\r\n    margin: 12px 12px 12px 0px;\r\n\r\n    li {\r\n      padding-left: 5px;\r\n      margin-top: 5px;\r\n      list-style: decimal !important;\r\n    }\r\n  }\r\n\r\n  a {\r\n    display: inline-block;\r\n    color: $primary !important;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  &-video {\r\n    height: 35vh;\r\n    width: 100%;\r\n    margin: 10px auto;\r\n    display: flex;\r\n\r\n    @include mq(tablet) {\r\n      width: 60%;\r\n      height: 30vh;\r\n    }\r\n  }\r\n\r\n  &-align-center {\r\n    text-align: center;\r\n  }\r\n\r\n  &-align-justify {\r\n    img {\r\n      margin: 0 auto;\r\n    }\r\n  }\r\n}\r\n","$primary: #CAEBF0;\r\n$primary-shadow-dark: #CAEBF0;\r\n$primary-shadow-light: rgba(#CAEBF0, 0.2);\r\n$dark:#000000;\r\n$dark-shadow-dark:#000000;\r\n$dark-shadow-light:#000000;\r\n$light: #fff;\r\n$medium: #A9A9A9;\r\n$medium-shadow-dark: #f9f9f9;\r\n$medium-shadow-light: #EFEFEF;\r\n$secondary: #FF3B3F;\r\n$success: #2AB930;\r\n// $intermediate: #655f5f;\r\n\r\n$bolder: Poppins-ExtraBold;\r\n$bold: Poppins-Bold;\r\n$f-medium: Poppins-SemiBold;\r\n$regular: Poppins-Regular;\r\n$f-light: Poppins-Light;\r\n$f-italic: Poppins-Italic;\r\n\r\n$container: 1365px;\r\n\r\n$btn-height: 40px;\r\n$default-padding: 15px;\r\n$item-padding: 5px;\r\n\r\n$radius: 10px;\r\n\r\n$opacity: rgba($dark, 0.2);\r\n\r\n$gradient: linear-gradient(to right, #E32024, #FFD54C);\r\n$shadow: 0px 2px 25px rgba(15, 28, 71, 0.1);\r\n$shadow-btn: 0px 24px 16px -22px #ff3b3f;\r\n$shadow-success: 0px 24px 16px -22px $success;\r\n\r\n$success-color: #b7d8b7;\r\n$error-color: #f8b7bd;\r\n$warn-color: #ffe399;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\RADIO-TEST\radiotest-client\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map