(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "CHM0":
/*!***************************************!*\
  !*** ./src/app/_models/home.model.ts ***!
  \***************************************/
/*! exports provided: HomeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModel", function() { return HomeModel; });
class HomeModel {
    constructor() {
        this.last_radiotests = [];
    }
}


/***/ }),

/***/ "b0DA":
/*!***************************************************!*\
  !*** ./src/app/home/use-app/use-app.component.ts ***!
  \***************************************************/
/*! exports provided: UseAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseAppComponent", function() { return UseAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/settings.service */ "f6A8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function UseAppComponent_picture_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.data.image && ctx_r0.data.image.url && ctx_r0._settings.returnImg(ctx_r0.data.image.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.data.image && ctx_r0.data.image.alt && ctx_r0.data.image.alt);
} }
function UseAppComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.title);
} }
function UseAppComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.data.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class UseAppComponent {
    constructor(_settings) {
        this._settings = _settings;
    }
    ngOnInit() {
    }
}
UseAppComponent.ɵfac = function UseAppComponent_Factory(t) { return new (t || UseAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
UseAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UseAppComponent, selectors: [["app-use-app"]], inputs: { data: ["block3", "data"] }, decls: 8, vars: 3, consts: [[1, "container"], [4, "ngIf"], [1, "content"], ["class", "title", 4, "ngIf"], ["class", "about", 3, "innerHTML", 4, "ngIf"], ["href", "", 1, "link"], [2, "width", "auto", 3, "src", "alt"], [1, "title"], [1, "about", 3, "innerHTML"]], template: function UseAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UseAppComponent_picture_2_Template, 2, 2, "picture", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UseAppComponent_h2_4_Template, 2, 1, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UseAppComponent_p_5_Template, 1, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.image && ctx.data.image.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nsection[_ngcontent-%COMP%] {\n  background-color: #fff;\n  max-width: 100%;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n@media (max-width: 900px) {\n  .container[_ngcontent-%COMP%] {\n    flex-wrap: wrap-reverse;\n    justify-content: center;\n  }\n}\n@media only screen and (max-width: 559px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 50px 0;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  padding-left: 30px;\n  flex: 1 1 400px;\n}\n@media (max-width: 900px) {\n  .content[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding-left: 0;\n    margin-bottom: 40px;\n  }\n}\n.about[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  padding: 0;\n  font-family: Poppins-Regular;\n  color: #A9A9A9;\n  text-align: left;\n}\n.about[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 320px) {\n  .about[_ngcontent-%COMP%] {\n    font-size: calc(14px + 10 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .about[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\npicture[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  max-width: 750px;\n  width: 100%;\n  height: 765px;\n  flex: 1 1 400px;\n}\npicture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: contain;\n  max-width: 100%;\n  max-height: 100%;\n}\n@media only screen and (max-width: 1439px) {\n  picture[_ngcontent-%COMP%] {\n    height: 600px;\n  }\n}\n@media only screen and (max-width: 1247px) {\n  picture[_ngcontent-%COMP%] {\n    height: 450px;\n  }\n}\n@media only screen and (max-width: 559px) {\n  picture[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n@media (max-width: 900px) {\n  picture[_ngcontent-%COMP%] {\n    width: auto;\n    margin: 0 auto;\n    flex: none;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvaG9tZS91c2UtYXBwL3VzZS1hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SkE7RUFDSTtJQUNJLFVBQUE7RUN4Sk47RUQySkU7SUFDSSxVQUFBO0VDekpOO0FBQ0Y7QUFKQTtFQUNJLHNCQ0VJO0VEREosZUFBQTtFQUNBLFdBQUE7QUFNSjtBQUpBO0VBQ0ksZUFBQTtBQU9KO0FBTkk7RUFGSjtJQUdRLHVCQUFBO0lBQ0EsdUJBQUE7RUFTTjtBQUNGO0FES1E7RUNuQlI7SUFPUSxlQUFBO0VBV047QUFDRjtBQVJBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFXSjtBQVZJO0VBSko7SUFLUSxlQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBYU47QUFDRjtBQVZBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RURtRUksNEJFbEZFO0VGc0ZGLGNFaEdDO0VGNEdELGdCQ2xGb0Q7QUFlNUQ7QURxRlE7RUFDSSxlQ3JHaUI7QUFrQjdCO0FEcUZZO0VBSEo7SUFJUSxvREFBQTtFQ2xGZDtBQUNGO0FEb0ZZO0VBUEo7SUFRUSxlQzVHbUI7RUEyQmpDO0FBQ0Y7QUF6QkE7RURrQkksYUFBQTtFQUdJLG1CQWlCa0I7RUFibEIsdUJBYXVCO0VBVHZCLG1CQVMrQjtFQUwvQixxQkFLdUM7RUFDM0MsZ0JDdENnQjtFRHVDaEIsV0FBQTtFQUdJLGFDMUNtQjtFQUN2QixlQUFBO0FBbUNKO0FBbENJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFvQ1I7QURuRFE7RUNTUjtJQVVPLGFBQUE7RUFvQ0w7QUFDRjtBRHhEUTtFQ1NSO0lBYU8sYUFBQTtFQXNDTDtBQUNGO0FEN0RRO0VDU1I7SUFnQk8sYUFBQTtFQXdDTDtBQUNGO0FBdENJO0VBbkJKO0lBb0JRLFdBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RUF5Q047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdXNlLWFwcC91c2UtYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWl4aW4gdHJ1bmNhdGUoJG1heC13aWR0aCkge1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuJGJyZWFrcG9pbnRzOiAoXCJwaG9uZVwiOiA0MDBweCxcclxuICAgIFwicGhvbmUtd2lkZVwiOiA0ODBweCxcclxuICAgIFwicGhhYmxldFwiOiA1NjBweCxcclxuICAgIFwidGFibGV0LXNtYWxsXCI6IDY0MHB4LFxyXG4gICAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgICBcInRhYmxldC1tXCI6IDEwMDBweCxcclxuICAgIFwidGFibGV0LXdpZGVcIjogMTAyNHB4LFxyXG4gICAgXCJkZXNrdG9wXCI6IDEyNDhweCxcclxuICAgIFwiZGVza3RvcC13aWRlXCI6IDE0NDBweCk7XHJcblxyXG5AbWl4aW4gbXEoJHdpZHRoLCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwX2hhc19rZXkoJGJyZWFrcG9pbnRzLCAkd2lkdGgpIHtcclxuICAgICAgICAkd2lkdGg6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkd2lkdGgpO1xyXG5cclxuICAgICAgICBAaWYgJHR5cGU9PW1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoI3skdHlwZX0td2lkdGg6ICR3aWR0aCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiB6KCRuYW1lKSB7XHJcbiAgICBAaWYgaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpIHtcclxuICAgICAgICBAcmV0dXJuIChsZW5ndGgoJHotaW5kZXhlcykgLSBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkpKzE7XHJcbiAgICB9XHJcblxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEB3YXJuICdUaGVyZSBpcyBubyBpdGVtIFwiI3skbmFtZX1cIiBpbiB0aGlzIGxpc3Q7IGNob29zZSBvbmUgb2Y6ICN7JHotaW5kZXhlc30nO1xyXG4gICAgICAgIEByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuJHotaW5kZXhlczogKFwib3V0ZGF0ZWQtYnJvd3NlclwiLCBcIm1vZGFsXCIsIFwic2l0ZS1oZWFkZXJcIiwgXCJwYWdlLXdyYXBwZXJcIiwgXCJzaXRlLWZvb3RlclwiKTtcclxuXHJcbi8vLS0tLWJlZm9yZSBhZnRlclxyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiBcIlwiKSB7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbnRlbnQoJGRpcmVjdGlvbjogZmFsc2UsICRqdXN0aWZ5OiBmYWxzZSwgJGFsaWduOiBmYWxzZSwgJGFsaWduLWNvbnRlbnQ6IGZhbHNlKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBpZiAkZGlyZWN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGp1c3RpZnkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduLWNvbnRlbnQge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICRhbGlnbi1jb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmlndXJlKCR3aWR0aCwgJGhlaWdodDogZmFsc2UpIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csIGNlbnRlciwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAaWYgJGhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9zY2FsYXJlIGZvbnRcclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbHVpZC10eXBlLXNpemUoJG1pbi1mb250LXNpemUsXHJcbiAgICAkbWF4LWZvbnQtc2l6ZSxcclxuICAgICRmZjogZmFsc2UsXHJcbiAgICAkY29sb3VyOiBmYWxzZSxcclxuICAgICRhbGlnbjogZmFsc2UsXHJcbiAgICAkbGg6IGZhbHNlLFxyXG4gICAgJHdlaWdodDogZmFsc2UsXHJcbiAgICAkbWluLXZ3OiAzMjBweCxcclxuICAgICRtYXgtdnc6IDEyMDBweCkge1xyXG4gICAgQGlmICRmZiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmZjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGNvbG91ciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICR3ZWlnaHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkbGgge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGg7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgICR1MTogdW5pdCgkbWluLXZ3KTtcclxuICAgICR1MjogdW5pdCgkbWF4LXZ3KTtcclxuICAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAkdTQ6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gQGlmICRtaW4tZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vIEBpZiAkbWF4LWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuXHJcblxyXG4gICAgQGlmICR1MT09JHUyIGFuZCAkdTE9PSR1MyBhbmQgJHUxPT0kdTQge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHRpbWUpIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAkdGltZSBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogODBweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1OXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgfVxufVxuXG4uY29udGVudCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgZmxleDogMSAxIDQwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbn1cblxuLmFib3V0IHtcbiAgbWFyZ2luOiA1MHB4IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGNvbG9yOiAjQTlBOUE5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmFib3V0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmFib3V0IHtcbiAgICBmb250LXNpemU6IGNhbGMoMTRweCArIDEwICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFib3V0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cblxucGljdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc2NXB4O1xuICBmbGV4OiAxIDEgNDAwcHg7XG59XG5waWN0dXJlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gIHBpY3R1cmUge1xuICAgIGhlaWdodDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI0N3B4KSB7XG4gIHBpY3R1cmUge1xuICAgIGhlaWdodDogNDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTU5cHgpIHtcbiAgcGljdHVyZSB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIHBpY3R1cmUge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZsZXg6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59IiwiJHByaW1hcnk6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1kYXJrOiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctbGlnaHQ6IHJnYmEoI0NBRUJGMCwgMC4yKTtcclxuJGRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWxpZ2h0OiMwMDAwMDA7XHJcbiRsaWdodDogI2ZmZjtcclxuJG1lZGl1bTogI0E5QTlBOTtcclxuJG1lZGl1bS1zaGFkb3ctZGFyazogI2Y5ZjlmOTtcclxuJG1lZGl1bS1zaGFkb3ctbGlnaHQ6ICNFRkVGRUY7XHJcbiRzZWNvbmRhcnk6ICNGRjNCM0Y7XHJcbiRzdWNjZXNzOiAjMkFCOTMwO1xyXG4vLyAkaW50ZXJtZWRpYXRlOiAjNjU1ZjVmO1xyXG5cclxuJGJvbGRlcjogUG9wcGlucy1FeHRyYUJvbGQ7XHJcbiRib2xkOiBQb3BwaW5zLUJvbGQ7XHJcbiRmLW1lZGl1bTogUG9wcGlucy1TZW1pQm9sZDtcclxuJHJlZ3VsYXI6IFBvcHBpbnMtUmVndWxhcjtcclxuJGYtbGlnaHQ6IFBvcHBpbnMtTGlnaHQ7XHJcbiRmLWl0YWxpYzogUG9wcGlucy1JdGFsaWM7XHJcblxyXG4kY29udGFpbmVyOiAxMzY1cHg7XHJcblxyXG4kYnRuLWhlaWdodDogNDBweDtcclxuJGRlZmF1bHQtcGFkZGluZzogMTVweDtcclxuJGl0ZW0tcGFkZGluZzogNXB4O1xyXG5cclxuJHJhZGl1czogMTBweDtcclxuXHJcbiRvcGFjaXR5OiByZ2JhKCRkYXJrLCAwLjIpO1xyXG5cclxuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMzIwMjQsICNGRkQ1NEMpO1xyXG4kc2hhZG93OiAwcHggMnB4IDI1cHggcmdiYSgxNSwgMjgsIDcxLCAwLjEpO1xyXG4kc2hhZG93LWJ0bjogMHB4IDI0cHggMTZweCAtMjJweCAjZmYzYjNmO1xyXG4kc2hhZG93LXN1Y2Nlc3M6IDBweCAyNHB4IDE2cHggLTIycHggJHN1Y2Nlc3M7XHJcblxyXG4kc3VjY2Vzcy1jb2xvcjogI2I3ZDhiNztcclxuJGVycm9yLWNvbG9yOiAjZjhiN2JkO1xyXG4kd2Fybi1jb2xvcjogI2ZmZTM5OTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UseAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-use-app',
                templateUrl: './use-app.component.html',
                styleUrls: ['./use-app.component.scss']
            }]
    }], function () { return [{ type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['block3']
        }] }); })();


/***/ }),

/***/ "cPhq":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_home_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_models/home.model */ "CHM0");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/settings.service */ "f6A8");
/* harmony import */ var src_app_services_queries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/queries.service */ "x+J2");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../head/head.component */ "oUSg");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about/about.component */ "yMNI");
/* harmony import */ var _use_app_use_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../use-app/use-app.component */ "b0DA");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contacts/contacts.component */ "giEC");










const _c0 = ["about"];
const _c1 = ["contacts"];
class HomeComponent {
    constructor(_settings, query, sanitizer) {
        this._settings = _settings;
        this.query = query;
        this.sanitizer = sanitizer;
        this.data = new src_app_models_home_model__WEBPACK_IMPORTED_MODULE_1__["HomeModel"]();
    }
    ngOnInit() {
        this.getInfo();
    }
    ngAfterViewInit() {
        this.subscribeToNavigate();
    }
    gotoItem(item) {
        switch (item) {
            case 'about':
                {
                    // setTimeout(() => {
                    const pos = this.aboutUs.nativeElement.style.position;
                    const top = this.aboutUs.nativeElement.style.top;
                    this.aboutUs.nativeElement.style.position = 'relative';
                    this.aboutUs.nativeElement.style.top = '-100px';
                    this.aboutUs.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    this.aboutUs.nativeElement.style.top = top;
                    this.aboutUs.nativeElement.style.position = pos;
                    // }, 200);
                }
                break;
            case 'contacts':
                {
                    // setTimeout(() => {
                    const pos = this.contacts.nativeElement.style.position;
                    const top = this.contacts.nativeElement.style.top;
                    this.contacts.nativeElement.style.position = 'relative';
                    this.contacts.nativeElement.style.top = '-100px';
                    this.contacts.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    this.contacts.nativeElement.style.top = top;
                    this.contacts.nativeElement.style.position = pos;
                    // }, 200);
                }
                break;
        }
    }
    subscribeToNavigate() {
        this._settings.navigate.subscribe(route => {
            if ((route == 'contacts') || (route == 'about')) {
                this.gotoItem(route);
            }
        });
    }
    getInfo() {
        this.query.getHome().subscribe((data) => {
            console.log(data);
            this.data = data;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_queries_service__WEBPACK_IMPORTED_MODULE_3__["QueriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.aboutUs = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contacts = _t.first);
    } }, decls: 6, vars: 6, consts: [[3, "lastTests", "block1"], [3, "block2"], ["about", ""], [3, "block3"], [3, "contacts1", "contacts2"], ["contacts", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-head", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-use-app", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-contacts", 4, 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lastTests", ctx.data && ctx.data.last_radiotests)("block1", ctx.data && ctx.data.block1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("block2", ctx.data && ctx.data.block2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("block3", ctx.data && ctx.data.block3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts1", ctx.data && ctx.data.contacts1)("contacts2", ctx.data && ctx.data.contacts2);
    } }, directives: [_head_head_component__WEBPACK_IMPORTED_MODULE_5__["HeadComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _use_app_use_app_component__WEBPACK_IMPORTED_MODULE_7__["UseAppComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }, { type: src_app_services_queries_service__WEBPACK_IMPORTED_MODULE_3__["QueriesService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }]; }, { aboutUs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['about', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contacts', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts/contacts.component */ "giEC");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./head/head.component */ "oUSg");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "yMNI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "cPhq");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _use_app_use_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-app/use-app.component */ "b0DA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












const routes = [
    {
        path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }
];
class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"], _head_head_component__WEBPACK_IMPORTED_MODULE_3__["HeadComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _use_app_use_app_component__WEBPACK_IMPORTED_MODULE_8__["UseAppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"], _head_head_component__WEBPACK_IMPORTED_MODULE_3__["HeadComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _use_app_use_app_component__WEBPACK_IMPORTED_MODULE_8__["UseAppComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "giEC":
/*!*****************************************************!*\
  !*** ./src/app/home/contacts/contacts.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_utils/formValidationUtils */ "npik");
/* harmony import */ var src_app_services_queries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/queries.service */ "x+J2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/validation-error-show/validation-error-show.component */ "1dAB");








function ContactsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Phone: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contacts1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contacts1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contacts1.contact1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r0.contacts1.phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contacts1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r0.contacts1.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.contacts1.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contacts1.contact2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contacts1.contact2Text);
} }
function ContactsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.contacts2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.contacts2.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r1.contacts1.phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.contacts1.phone);
} }
class ContactsComponent {
    constructor(_query) {
        this._query = _query;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_2__["trimValidator"]]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128), src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_2__["trimValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            // phone: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8), phoneValidator]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_2__["trimValidator"]]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(512), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_2__["trimValidator"]]),
        });
    }
    ngOnInit() {
    }
    saveData() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (this.form.valid) {
            const data = {
                name: this.form.controls.name.value,
                // phone: this.form.controls.phone.value,
                email: this.form.controls.email.value,
                subject: this.form.controls.subject.value,
                message: this.form.controls.message.value
            };
            console.log('**************************', data);
            this._query.postRequest(data).subscribe(data => {
                this.form.reset();
            });
        }
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_queries_service__WEBPACK_IMPORTED_MODULE_3__["QueriesService"])); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], inputs: { contacts1: "contacts1", contacts2: "contacts2" }, decls: 19, vars: 7, consts: [["class", "container", 4, "ngIf"], [1, "contacts-form"], [1, "container"], ["class", "content", 4, "ngIf"], ["novalidate", "", 1, "form", 3, "formGroup", "submit"], ["for", "", 1, "form__label"], [3, "control"], ["type", "text", "placeholder", "Your name", "formControlName", "name", 1, "form__input"], ["type", "text", "placeholder", "Your email", "formControlName", "email", 1, "form__input"], ["type", "text", "placeholder", "Subject", "formControlName", "subject", 1, "form__input"], ["placeholder", "Message", "formControlName", "message", 1, "form__input", "form__textarea"], ["type", "submit", 1, "btn"], [1, "title"], [1, "description-head"], [1, "wrapper", "contacts"], [1, "contacts__item"], [1, "contacts__item--icon", "flaticon-telephone"], [1, "contacts__item--title"], [1, "contacts__item--list"], [3, "href"], [1, "contacts__item--icon", "flaticon-email"], [1, "contacts__item--description"], [1, "content"], [1, "description"], [1, "call", 3, "href"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactsComponent_div_0_Template, 27, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactsComponent_div_3_Template, 7, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactsComponent_Template_form_submit_4_listener() { return ctx.saveData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-validation-error-show", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-validation-error-show", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-validation-error-show", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-validation-error-show", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Send message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contacts1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contacts2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.controls.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.controls.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.controls.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.controls.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_5__["ValidationErrorShowComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  flex-direction: column;\n  max-width: 700px;\n  padding: 60px 0 260px;\n}\n@media only screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 50px 0;\n  }\n}\n.description-head[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n  color: #A9A9A9;\n  text-align: center;\n}\n.description-head[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 320px) {\n  .description-head[_ngcontent-%COMP%] {\n    font-size: calc(14px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .description-head[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .description-head[_ngcontent-%COMP%] {\n    max-width: 90%;\n    width: 100%;\n  }\n}\n.contacts[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  max-width: 100%;\n  width: 100%;\n  margin-top: 25px;\n}\n.contacts__item[_ngcontent-%COMP%] {\n  max-width: 300px;\n  width: 100%;\n  margin: 0 30px;\n  padding: 30px;\n  border: 1px dashed #A9A9A9;\n  border-radius: 10px;\n}\n.contacts__item--icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: block;\n  line-height: 42px;\n  text-align: center;\n  margin-right: 25px;\n  color: #FF3B3F;\n  background-color: rgba(255, 59, 63, 0.4);\n  margin: 0 auto;\n}\n.contacts__item--title[_ngcontent-%COMP%] {\n  font-family: Poppins-Regular;\n  color: #000000;\n  margin: 20px auto;\n  text-align: center;\n}\n.contacts__item--title[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .contacts__item--title[_ngcontent-%COMP%] {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .contacts__item--title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.contacts__item--list[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0;\n  font-family: Poppins-Regular;\n  color: #A9A9A9;\n  text-align: center;\n}\n.contacts__item--list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.contacts__item--list[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .contacts__item--list[_ngcontent-%COMP%] {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .contacts__item--list[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.contacts__item--list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #A9A9A9;\n  margin-left: 5px;\n}\n@media only screen and (max-width: 559px) {\n  .contacts__item--list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .contacts__item--list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    max-width: 100%;\n    width: 100%;\n  }\n}\n.contacts__item--description[_ngcontent-%COMP%] {\n  font-family: Poppins-Regular;\n  color: #A9A9A9;\n  text-align: center;\n}\n.contacts__item--description[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .contacts__item--description[_ngcontent-%COMP%] {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .contacts__item--description[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .contacts[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n  .contacts__item[_ngcontent-%COMP%] {\n    margin: 0 10px;\n    padding: 15px;\n  }\n}\n@media only screen and (max-width: 479px) {\n  .contacts[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .contacts__item[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .contacts__item[_ngcontent-%COMP%]:not(:first-child) {\n    margin-top: 20px;\n  }\n  .contacts__item--list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n  }\n  .contacts__item--list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    max-width: none;\n    width: auto;\n  }\n}\n.contacts-form[_ngcontent-%COMP%] {\n  background-color: rgba(202, 235, 240, 0.2);\n  max-width: 100%;\n  width: 100%;\n}\n.contacts-form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  flex-direction: row;\n  max-width: 1365px;\n  padding: 30px 0;\n}\n@media (max-width: 1440px) {\n  .contacts-form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .contacts-form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  padding: 140px;\n  max-width: 700px;\n  width: 100%;\n}\n@media only screen and (max-width: 1247px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 80px;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 50px 30px 50px 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 30px 0px 0px 0;\n  }\n}\n.title[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n.description[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  color: #A9A9A9;\n  text-align: left;\n}\n@media only screen and (max-width: 767px) {\n  .description[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n.call[_ngcontent-%COMP%] {\n  color: #A9A9A9;\n  margin-top: 30px;\n  text-align: left;\n}\n@media only screen and (max-width: 767px) {\n  .call[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  max-width: 550px;\n  width: 100%;\n  background-color: #fff;\n  padding: 45px;\n  margin-top: -180px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.form__label[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n}\n.form__label[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 15px;\n}\n.form__input[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  height: 60px;\n  background-color: rgba(202, 235, 240, 0.2);\n  padding: 20px;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  margin-top: 0;\n}\n@media only screen and (max-width: 767px) {\n  .form__input[_ngcontent-%COMP%] {\n    height: 45px;\n    padding: 15px;\n  }\n}\n.form__textarea[_ngcontent-%COMP%] {\n  height: 150px;\n  resize: none;\n}\n.form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  max-width: 180px;\n  width: 100%;\n  height: 43px;\n  border: 1px solid #FF3B3F;\n  border-radius: 10px;\n  transition: ease-in-out 0.5s all;\n  background-color: #fff;\n  margin-top: 20px;\n  color: #FF3B3F;\n}\n.form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n    background-color: #FF3B3F;\n    color: #fff;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .form[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .form[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvaG9tZS9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlKQTtFQUNJO0lBQ0ksVUFBQTtFQ3hKTjtFRDJKRTtJQUNJLFVBQUE7RUN6Sk47QUFDRjtBQUpBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTUo7QURlUTtFQ3hCUjtJQUtRLGVBQUE7RUFRTjtBQUNGO0FBTEE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VEeUZJLGNFaEdDO0VGNEdELGtCQ3BHaUQ7QUFTekQ7QUQ2R1E7RUFDSSxlQ3ZIaUI7QUFZN0I7QUQ2R1k7RUFISjtJQUlRLG1EQUFBO0VDMUdkO0FBQ0Y7QUQ0R1k7RUFQSjtJQVFRLGVDOUhtQjtFQXFCakM7QUFDRjtBRFZRO0VDZlI7SUFLUSxjQUFBO0lBQ0EsV0FBQTtFQXdCTjtBQUNGO0FBckJBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBd0JKO0FBdkJJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQ05DO0FEK0JUO0FBeEJRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkNWSDtFRFdHLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ2hDQTtFRGlDQSx3Q0FBQTtFQUNBLGNBQUE7QUEwQlo7QUF2QlE7RURvREEsNEJFbEZFO0VGc0ZGLGNFcEdGO0VEOENNLGlCQUFBO0VBQ0Esa0JBQUE7QUEwQlo7QUR5RFE7RUFDSSxlQ3RGeUI7QUErQnJDO0FEeURZO0VBSEo7SUFJUSxtREFBQTtFQ3REZDtBQUNGO0FEd0RZO0VBUEo7SUFRUSxlQzdGMkI7RUF3Q3pDO0FBQ0Y7QUFwQ1E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFRDRDSiw0QkVsRkU7RUZzRkYsY0VoR0M7RUY0R0Qsa0JDdEQ0RDtBQW1DcEU7QUF4Q1k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTBDaEI7QURnQ1E7RUFDSSxlQ3pFeUI7QUEyQ3JDO0FEZ0NZO0VBSEo7SUFJUSxtREFBQTtFQzdCZDtBQUNGO0FEK0JZO0VBUEo7SUFRUSxlQ2hGMkI7RUFvRHpDO0FBQ0Y7QUFwRFk7RUFDSSxjQ3hEUDtFRHlETyxnQkFBQTtBQXNEaEI7QUQzRlE7RUN5Q1E7SUFDSSxlQUFBO0lBQ0EsdUJBQUE7RUFxRGxCO0VBcERrQjtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQXNEdEI7QUFDRjtBQWxEUTtFRG9CQSw0QkVsRkU7RUZzRkYsY0VoR0M7RUY0R0Qsa0JDbkM0RDtBQXNEcEU7QUREUTtFQUNJLGVDdER5QjtBQXlEckM7QUREWTtFQUhKO0lBSVEsbURBQUE7RUNJZDtBQUNGO0FERlk7RUFQSjtJQVFRLGVDN0QyQjtFQWtFekM7QUFDRjtBRHhIUTtFQ0xSO0lBOERRLGNBQUE7RUFtRU47RUFsRU07SUFDSSxjQUFBO0lBQ0EsYUFBQTtFQW9FVjtBQUNGO0FEaklRO0VDTFI7SUFzRVEsZUFBQTtFQW9FTjtFQW5FTTtJQUNJLGVBQUE7RUFxRVY7RUFwRVU7SUFDSSxnQkFBQTtFQXNFZDtFQW5FYztJQUNJLGlCQUFBO0VBcUVsQjtFQXBFa0I7SUFDSSxlQUFBO0lBQ0EsV0FBQTtFQXNFdEI7QUFDRjtBQS9EQTtFQUNJLDBDQzlHbUI7RUQrR25CLGVBQUE7RUFDQSxXQUFBO0FBa0VKO0FBakVJO0VBQ0ksbUJBQUE7RUFDQSxpQkNoR0k7RURpR0osZUFBQTtBQW1FUjtBQWxFUTtFQUpKO0lBS1EsY0FBQTtFQXFFVjtBQUNGO0FEbktRO0VDd0ZKO0lBUVEsZUFBQTtFQXVFVjtBQUNGO0FBbkVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQXNFSjtBRDlLUTtFQ3FHUjtJQUtRLGFBQUE7RUF3RU47QUFDRjtBRG5MUTtFQ3FHUjtJQVFRLHlCQUFBO0VBMEVOO0FBQ0Y7QUR4TFE7RUNxR1I7SUFXUSx1QkFBQTtFQTRFTjtBQUNGO0FBekVBO0VBQ0ksb0JBQUE7QUE0RUo7QUF6RUE7RUFDSSxnQkFBQTtFQUNBLGNDOUlLO0VEK0lMLGdCQUFBO0FBNEVKO0FEdk1RO0VDd0hSO0lBS1EsZ0JBQUE7RUE4RU47QUFDRjtBQTNFQTtFQUNJLGNDdEpLO0VEdUpMLGdCQUFBO0VBQ0EsZ0JBQUE7QUE4RUo7QURsTlE7RUNpSVI7SUFLUSxnQkFBQTtFQWdGTjtBQUNGO0FBN0VBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JDbEtJO0VEbUtKLGFBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQ2pKSztFRGtKTCxhQUFBO0VBQ0Esc0JBQUE7QUErRUo7QUE5RUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQWdGUjtBQS9FUTtFQUNJLGdCQUFBO0FBaUZaO0FBOUVJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENDeExlO0VEeUxmLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJDbEtDO0VEbUtELGFBQUE7RUFDQSxhQUFBO0FBZ0ZSO0FEcFBRO0VDMkpKO0lBV1EsWUFBQTtJQUNBLGFBQUE7RUFrRlY7QUFDRjtBQWhGSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBa0ZSO0FBL0VJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJDcExDO0VEc0xELGdDQUFBO0VBQ0Esc0JDNU1BO0VENk1BLGdCQUFBO0VBQ0EsY0MxTUk7QUQwUlo7QUQvSlE7RUFDSSxlQzBFcUI7QUF1RmpDO0FEL0pZO0VBSEo7SUFJUSxtREFBQTtFQ2tLZDtBQUNGO0FEaEtZO0VBUEo7SUFRUSxlQ21FdUI7RUFnR3JDO0FBQ0Y7QUR0UlE7RUMyTEk7SUFDSSx5QkM3TUo7SUQ4TUksV0NsTlI7RURnVE47QUFDRjtBRDVSUTtFQzBJUjtJQXdEUSxhQUFBO0VBOEZOO0FBQ0Y7QURqU1E7RUMwSVI7SUEyRFEsZ0JBQUE7SUFDQSxlQUFBO0VBZ0dOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWl4aW4gdHJ1bmNhdGUoJG1heC13aWR0aCkge1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuJGJyZWFrcG9pbnRzOiAoXCJwaG9uZVwiOiA0MDBweCxcclxuICAgIFwicGhvbmUtd2lkZVwiOiA0ODBweCxcclxuICAgIFwicGhhYmxldFwiOiA1NjBweCxcclxuICAgIFwidGFibGV0LXNtYWxsXCI6IDY0MHB4LFxyXG4gICAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgICBcInRhYmxldC1tXCI6IDEwMDBweCxcclxuICAgIFwidGFibGV0LXdpZGVcIjogMTAyNHB4LFxyXG4gICAgXCJkZXNrdG9wXCI6IDEyNDhweCxcclxuICAgIFwiZGVza3RvcC13aWRlXCI6IDE0NDBweCk7XHJcblxyXG5AbWl4aW4gbXEoJHdpZHRoLCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwX2hhc19rZXkoJGJyZWFrcG9pbnRzLCAkd2lkdGgpIHtcclxuICAgICAgICAkd2lkdGg6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkd2lkdGgpO1xyXG5cclxuICAgICAgICBAaWYgJHR5cGU9PW1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoI3skdHlwZX0td2lkdGg6ICR3aWR0aCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiB6KCRuYW1lKSB7XHJcbiAgICBAaWYgaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpIHtcclxuICAgICAgICBAcmV0dXJuIChsZW5ndGgoJHotaW5kZXhlcykgLSBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkpKzE7XHJcbiAgICB9XHJcblxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEB3YXJuICdUaGVyZSBpcyBubyBpdGVtIFwiI3skbmFtZX1cIiBpbiB0aGlzIGxpc3Q7IGNob29zZSBvbmUgb2Y6ICN7JHotaW5kZXhlc30nO1xyXG4gICAgICAgIEByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuJHotaW5kZXhlczogKFwib3V0ZGF0ZWQtYnJvd3NlclwiLCBcIm1vZGFsXCIsIFwic2l0ZS1oZWFkZXJcIiwgXCJwYWdlLXdyYXBwZXJcIiwgXCJzaXRlLWZvb3RlclwiKTtcclxuXHJcbi8vLS0tLWJlZm9yZSBhZnRlclxyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiBcIlwiKSB7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbnRlbnQoJGRpcmVjdGlvbjogZmFsc2UsICRqdXN0aWZ5OiBmYWxzZSwgJGFsaWduOiBmYWxzZSwgJGFsaWduLWNvbnRlbnQ6IGZhbHNlKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBpZiAkZGlyZWN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGp1c3RpZnkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduLWNvbnRlbnQge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICRhbGlnbi1jb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmlndXJlKCR3aWR0aCwgJGhlaWdodDogZmFsc2UpIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csIGNlbnRlciwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAaWYgJGhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9zY2FsYXJlIGZvbnRcclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbHVpZC10eXBlLXNpemUoJG1pbi1mb250LXNpemUsXHJcbiAgICAkbWF4LWZvbnQtc2l6ZSxcclxuICAgICRmZjogZmFsc2UsXHJcbiAgICAkY29sb3VyOiBmYWxzZSxcclxuICAgICRhbGlnbjogZmFsc2UsXHJcbiAgICAkbGg6IGZhbHNlLFxyXG4gICAgJHdlaWdodDogZmFsc2UsXHJcbiAgICAkbWluLXZ3OiAzMjBweCxcclxuICAgICRtYXgtdnc6IDEyMDBweCkge1xyXG4gICAgQGlmICRmZiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmZjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGNvbG91ciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICR3ZWlnaHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkbGgge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGg7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgICR1MTogdW5pdCgkbWluLXZ3KTtcclxuICAgICR1MjogdW5pdCgkbWF4LXZ3KTtcclxuICAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAkdTQ6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gQGlmICRtaW4tZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vIEBpZiAkbWF4LWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuXHJcblxyXG4gICAgQGlmICR1MT09JHUyIGFuZCAkdTE9PSR1MyBhbmQgJHUxPT0kdTQge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHRpbWUpIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAkdGltZSBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBwYWRkaW5nOiA2MHB4IDAgMjYwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgfVxufVxuXG4uZGVzY3JpcHRpb24taGVhZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgY29sb3I6ICNBOUE5QTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kZXNjcmlwdGlvbi1oZWFkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmRlc2NyaXB0aW9uLWhlYWQge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgNCAqICgoMTAwdncgLSAzMjBweCkgLyA4ODApKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5kZXNjcmlwdGlvbi1oZWFkIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmRlc2NyaXB0aW9uLWhlYWQge1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5jb250YWN0cyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5jb250YWN0c19faXRlbSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMzBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNBOUE5QTk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY29udGFjdHNfX2l0ZW0tLWljb24ge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBjb2xvcjogI0ZGM0IzRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDU5LCA2MywgMC40KTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGFjdHNfX2l0ZW0tLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFjdHNfX2l0ZW0tLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmNvbnRhY3RzX19pdGVtLS10aXRsZSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyA0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhY3RzX19pdGVtLS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uY29udGFjdHNfX2l0ZW0tLWxpc3Qge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgY29sb3I6ICNBOUE5QTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWN0c19faXRlbS0tbGlzdCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhY3RzX19pdGVtLS1saXN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmNvbnRhY3RzX19pdGVtLS1saXN0IHtcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFjdHNfX2l0ZW0tLWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLmNvbnRhY3RzX19pdGVtLS1saXN0IGEge1xuICBjb2xvcjogI0E5QTlBOTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTU5cHgpIHtcbiAgLmNvbnRhY3RzX19pdGVtLS1saXN0IGxpIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhY3RzX19pdGVtLS1saXN0IGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhY3RzX19pdGVtLS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGNvbG9yOiAjQTlBOUE5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFjdHNfX2l0ZW0tLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmNvbnRhY3RzX19pdGVtLS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyA0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhY3RzX19pdGVtLS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250YWN0cyB7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gIH1cbiAgLmNvbnRhY3RzX19pdGVtIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gIC5jb250YWN0cyB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5jb250YWN0c19faXRlbSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWN0c19faXRlbTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAuY29udGFjdHNfX2l0ZW0tLWxpc3QgbGkge1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIC5jb250YWN0c19faXRlbS0tbGlzdCBsaSBhIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cblxuLmNvbnRhY3RzLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMiwgMjM1LCAyNDAsIDAuMik7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdHMtZm9ybSAuY29udGFpbmVyIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWF4LXdpZHRoOiAxMzY1cHg7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmNvbnRhY3RzLWZvcm0gLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhY3RzLWZvcm0gLmNvbnRhaW5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMTQwcHg7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjQ3cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDgwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHggNTBweCAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAzMHB4IDBweCAwcHggMDtcbiAgfVxufVxuXG4udGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgY29sb3I6ICNBOUE5QTk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuXG4uY2FsbCB7XG4gIGNvbG9yOiAjQTlBOUE5O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FsbCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG4uZm9ybSB7XG4gIG1heC13aWR0aDogNTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA0NXB4O1xuICBtYXJnaW4tdG9wOiAtMTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9ybV9fbGFiZWwge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm1fX2xhYmVsOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5mb3JtX19pbnB1dCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDIsIDIzNSwgMjQwLCAwLjIpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtX19pbnB1dCB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn1cbi5mb3JtX190ZXh0YXJlYSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5mb3JtIC5idG4ge1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0M3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkYzQjNGO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjVzIGFsbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6ICNGRjNCM0Y7XG59XG4uZm9ybSAuYnRuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmZvcm0gLmJ0biB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyA0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZvcm0gLmJ0biB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuZm9ybSAuYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzQjNGO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuZm9ybSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn0iLCIkcHJpbWFyeTogI0NBRUJGMDtcclxuJHByaW1hcnktc2hhZG93LWRhcms6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1saWdodDogcmdiYSgjQ0FFQkYwLCAwLjIpO1xyXG4kZGFyazojMDAwMDAwO1xyXG4kZGFyay1zaGFkb3ctZGFyazojMDAwMDAwO1xyXG4kZGFyay1zaGFkb3ctbGlnaHQ6IzAwMDAwMDtcclxuJGxpZ2h0OiAjZmZmO1xyXG4kbWVkaXVtOiAjQTlBOUE5O1xyXG4kbWVkaXVtLXNoYWRvdy1kYXJrOiAjZjlmOWY5O1xyXG4kbWVkaXVtLXNoYWRvdy1saWdodDogI0VGRUZFRjtcclxuJHNlY29uZGFyeTogI0ZGM0IzRjtcclxuJHN1Y2Nlc3M6ICMyQUI5MzA7XHJcbi8vICRpbnRlcm1lZGlhdGU6ICM2NTVmNWY7XHJcblxyXG4kYm9sZGVyOiBQb3BwaW5zLUV4dHJhQm9sZDtcclxuJGJvbGQ6IFBvcHBpbnMtQm9sZDtcclxuJGYtbWVkaXVtOiBQb3BwaW5zLVNlbWlCb2xkO1xyXG4kcmVndWxhcjogUG9wcGlucy1SZWd1bGFyO1xyXG4kZi1saWdodDogUG9wcGlucy1MaWdodDtcclxuJGYtaXRhbGljOiBQb3BwaW5zLUl0YWxpYztcclxuXHJcbiRjb250YWluZXI6IDEzNjVweDtcclxuXHJcbiRidG4taGVpZ2h0OiA0MHB4O1xyXG4kZGVmYXVsdC1wYWRkaW5nOiAxNXB4O1xyXG4kaXRlbS1wYWRkaW5nOiA1cHg7XHJcblxyXG4kcmFkaXVzOiAxMHB4O1xyXG5cclxuJG9wYWNpdHk6IHJnYmEoJGRhcmssIDAuMik7XHJcblxyXG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0UzMjAyNCwgI0ZGRDU0Qyk7XHJcbiRzaGFkb3c6IDBweCAycHggMjVweCByZ2JhKDE1LCAyOCwgNzEsIDAuMSk7XHJcbiRzaGFkb3ctYnRuOiAwcHggMjRweCAxNnB4IC0yMnB4ICNmZjNiM2Y7XHJcbiRzaGFkb3ctc3VjY2VzczogMHB4IDI0cHggMTZweCAtMjJweCAkc3VjY2VzcztcclxuXHJcbiRzdWNjZXNzLWNvbG9yOiAjYjdkOGI3O1xyXG4kZXJyb3ItY29sb3I6ICNmOGI3YmQ7XHJcbiR3YXJuLWNvbG9yOiAjZmZlMzk5O1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.scss']
            }]
    }], function () { return [{ type: src_app_services_queries_service__WEBPACK_IMPORTED_MODULE_3__["QueriesService"] }]; }, { contacts1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['contacts1']
        }], contacts2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['contacts2']
        }] }); })();


/***/ }),

/***/ "oUSg":
/*!*********************************************!*\
  !*** ./src/app/home/head/head.component.ts ***!
  \*********************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_services/settings.service */ "f6A8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/search-form/search-form.component */ "DdXh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function HeadComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data && ctx_r0.data.title, " ");
} }
function HeadComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data && ctx_r1.data.search_title);
} }
function HeadComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const test_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](test_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2._settings.getCategory(test_r3.category).name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r2._settings.getTestLevel(test_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2._settings.getNrCompleted(test_r3));
} }
const _c0 = function () { return ["/radio-test/global-search"]; };
class HeadComponent {
    constructor(_settings) {
        this._settings = _settings;
        this.lastTests = [];
    }
    ngOnInit() {
    }
}
HeadComponent.ɵfac = function HeadComponent_Factory(t) { return new (t || HeadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
HeadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadComponent, selectors: [["app-head"]], inputs: { data: ["block1", "data"], lastTests: "lastTests" }, decls: 33, vars: 5, consts: [[1, "head"], [1, "container"], ["class", "caption", 4, "ngIf"], ["class", "sub-caption", 4, "ngIf"], [1, "table"], [1, "sub-caption"], [2, "color", "red"], [1, "table__row"], [1, "wrapper"], ["class", "table__row", 4, "ngFor", "ngForOf"], [1, "wrapper", "show-results"], ["href", "", 1, "result"], ["routerLinkActive", "router-link-active", 1, "result", 3, "routerLink"], [1, "caption"], [1, "table__row--item"]], template: function HeadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeadComponent_h1_2_Template, 2, 1, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeadComponent_p_3_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-search-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "caption", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Monthly savings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Search results for names containing \u201Cdou\":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Radio test level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Number of respondents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeadComponent_tr_24_Template, 10, 6, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Didn\u2019t find your name?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Be the first to radio test it! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Show more...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.search_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lastTests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_3__["SearchFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.head[_ngcontent-%COMP%] {\n  background-image: url('header-bg.png');\n  background-repeat: no-repeat;\n  padding-top: 230px;\n  background-position: right top;\n}\n@media only screen and (max-width: 1023px) {\n  .head[_ngcontent-%COMP%] {\n    background-image: url('1024.png');\n  }\n}\n.container[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.caption[_ngcontent-%COMP%] {\n  font-family: Poppins-ExtraBold;\n  color: #FF3B3F;\n  text-align: left;\n  max-width: 634px;\n  width: 100%;\n}\n.caption[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n@media screen and (min-width: 320px) {\n  .caption[_ngcontent-%COMP%] {\n    font-size: calc(22px + 20 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .caption[_ngcontent-%COMP%] {\n    font-size: 42px;\n  }\n}\n.sub-caption[_ngcontent-%COMP%] {\n  margin: 40px 0;\n  max-width: 634px;\n  width: 100%;\n  font-family: Poppins-SemiBold;\n  color: #000000;\n  text-align: left;\n}\n.sub-caption[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media screen and (min-width: 320px) {\n  .sub-caption[_ngcontent-%COMP%] {\n    font-size: calc(16px + 8 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .sub-caption[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\napp-search-form[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n}\n.table[_ngcontent-%COMP%] {\n  margin-top: 185px;\n  box-shadow: none;\n}\n.table[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  align-items: center;\n  min-width: 100px;\n}\n@media (max-width: 1024px) {\n  .table[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    display: block;\n    overflow-x: auto;\n  }\n  .table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n.table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.show-results[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  max-width: 100%;\n  width: 100%;\n  margin-top: 15px;\n  flex-wrap: wrap;\n}\n.show-results[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n@media screen and (min-width: 320px) {\n  .show-results[_ngcontent-%COMP%] {\n    font-size: calc(10px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .show-results[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.show-results[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: #FF3B3F;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvaG9tZS9oZWFkL2hlYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SkE7RUFDSTtJQUNJLFVBQUE7RUN4Sk47RUQySkU7SUFDSSxVQUFBO0VDekpOO0FBQ0Y7QUFKQTtFQUNFLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBTUY7QURjUTtFQ3hCUjtJQVFJLGlDQUFBO0VBTUY7QUFDRjtBQUhBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQU1GO0FBSEE7RUQrRVEsOEJFckZDO0VGeUZELGNFN0ZJO0VGeUdKLGdCQzlGb0Q7RUFDMUQsZ0JBQUE7RUFDQSxXQUFBO0FBUUY7QURzR1E7RUFDSSxlQ2pIZTtBQWEzQjtBRHNHWTtFQUhKO0lBSVEsb0RBQUE7RUNuR2Q7QUFDRjtBRHFHWTtFQVBKO0lBUVEsZUN4SGlCO0VBc0IvQjtBQUNGO0FBbEJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFRHNFTSw2QkVuRkc7RUZ1RkgsY0VwR0Y7RUZnSEUsZ0JDckZpRDtBQXVCekQ7QURnRlE7RUFDSSxlQ3hHZTtBQTBCM0I7QURnRlk7RUFISjtJQUlRLG1EQUFBO0VDN0VkO0FBQ0Y7QUQrRVk7RUFQSjtJQVFRLGVDL0dpQjtFQW1DL0I7QUFDRjtBQWhDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBbUNGO0FBaENBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQW1DRjtBQWpDRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFtQ0o7QUFoQ0U7RUFURjtJQVVJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VBbUNGO0VBaENFO0lBQ0UsbUJBQUE7RUFrQ0o7QUFDRjtBQS9CRTtFQUNFLDZCQUFBO0FBaUNKO0FBMUJBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTZCRjtBRGdDUTtFQUNJLGVDN0RlO0FBK0IzQjtBRGdDWTtFQUhKO0lBSVEsbURBQUE7RUM3QmQ7QUFDRjtBRCtCWTtFQVBKO0lBUVEsZUNwRWlCO0VBd0MvQjtBQUNGO0FBdkNFO0VBQ0UsaUJBQUE7RUFDQSxjQ25FUTtFRG9FUiwwQkFBQTtBQXlDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaGVhZC9oZWFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWl4aW4gdHJ1bmNhdGUoJG1heC13aWR0aCkge1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuJGJyZWFrcG9pbnRzOiAoXCJwaG9uZVwiOiA0MDBweCxcclxuICAgIFwicGhvbmUtd2lkZVwiOiA0ODBweCxcclxuICAgIFwicGhhYmxldFwiOiA1NjBweCxcclxuICAgIFwidGFibGV0LXNtYWxsXCI6IDY0MHB4LFxyXG4gICAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgICBcInRhYmxldC1tXCI6IDEwMDBweCxcclxuICAgIFwidGFibGV0LXdpZGVcIjogMTAyNHB4LFxyXG4gICAgXCJkZXNrdG9wXCI6IDEyNDhweCxcclxuICAgIFwiZGVza3RvcC13aWRlXCI6IDE0NDBweCk7XHJcblxyXG5AbWl4aW4gbXEoJHdpZHRoLCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwX2hhc19rZXkoJGJyZWFrcG9pbnRzLCAkd2lkdGgpIHtcclxuICAgICAgICAkd2lkdGg6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkd2lkdGgpO1xyXG5cclxuICAgICAgICBAaWYgJHR5cGU9PW1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoI3skdHlwZX0td2lkdGg6ICR3aWR0aCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiB6KCRuYW1lKSB7XHJcbiAgICBAaWYgaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpIHtcclxuICAgICAgICBAcmV0dXJuIChsZW5ndGgoJHotaW5kZXhlcykgLSBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkpKzE7XHJcbiAgICB9XHJcblxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEB3YXJuICdUaGVyZSBpcyBubyBpdGVtIFwiI3skbmFtZX1cIiBpbiB0aGlzIGxpc3Q7IGNob29zZSBvbmUgb2Y6ICN7JHotaW5kZXhlc30nO1xyXG4gICAgICAgIEByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuJHotaW5kZXhlczogKFwib3V0ZGF0ZWQtYnJvd3NlclwiLCBcIm1vZGFsXCIsIFwic2l0ZS1oZWFkZXJcIiwgXCJwYWdlLXdyYXBwZXJcIiwgXCJzaXRlLWZvb3RlclwiKTtcclxuXHJcbi8vLS0tLWJlZm9yZSBhZnRlclxyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiBcIlwiKSB7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbnRlbnQoJGRpcmVjdGlvbjogZmFsc2UsICRqdXN0aWZ5OiBmYWxzZSwgJGFsaWduOiBmYWxzZSwgJGFsaWduLWNvbnRlbnQ6IGZhbHNlKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBpZiAkZGlyZWN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGp1c3RpZnkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduLWNvbnRlbnQge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICRhbGlnbi1jb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmlndXJlKCR3aWR0aCwgJGhlaWdodDogZmFsc2UpIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csIGNlbnRlciwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAaWYgJGhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9zY2FsYXJlIGZvbnRcclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbHVpZC10eXBlLXNpemUoJG1pbi1mb250LXNpemUsXHJcbiAgICAkbWF4LWZvbnQtc2l6ZSxcclxuICAgICRmZjogZmFsc2UsXHJcbiAgICAkY29sb3VyOiBmYWxzZSxcclxuICAgICRhbGlnbjogZmFsc2UsXHJcbiAgICAkbGg6IGZhbHNlLFxyXG4gICAgJHdlaWdodDogZmFsc2UsXHJcbiAgICAkbWluLXZ3OiAzMjBweCxcclxuICAgICRtYXgtdnc6IDEyMDBweCkge1xyXG4gICAgQGlmICRmZiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmZjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGNvbG91ciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICR3ZWlnaHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkbGgge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGg7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgICR1MTogdW5pdCgkbWluLXZ3KTtcclxuICAgICR1MjogdW5pdCgkbWF4LXZ3KTtcclxuICAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAkdTQ6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gQGlmICRtaW4tZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vIEBpZiAkbWF4LWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuXHJcblxyXG4gICAgQGlmICR1MT09JHUyIGFuZCAkdTE9PSR1MyBhbmQgJHUxPT0kdTQge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHRpbWUpIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAkdGltZSBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5oZWFkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItYmcucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZy10b3A6IDIzMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCB0b3A7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuaGVhZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8xMDI0LnBuZyk7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uY2FwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLUV4dHJhQm9sZDtcbiAgY29sb3I6ICNGRjNCM0Y7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1heC13aWR0aDogNjM0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcHRpb24ge1xuICBmb250LXNpemU6IDIycHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuY2FwdGlvbiB7XG4gICAgZm9udC1zaXplOiBjYWxjKDIycHggKyAyMCAqICgoMTAwdncgLSAzMjBweCkgLyA4ODApKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jYXB0aW9uIHtcbiAgICBmb250LXNpemU6IDQycHg7XG4gIH1cbn1cblxuLnN1Yi1jYXB0aW9uIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIG1heC13aWR0aDogNjM0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogUG9wcGlucy1TZW1pQm9sZDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc3ViLWNhcHRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuc3ViLWNhcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgOCAqICgoMTAwdncgLSAzMjBweCkgLyA4ODApKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zdWItY2FwdGlvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5cbmFwcC1zZWFyY2gtZm9ybSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJsZSB7XG4gIG1hcmdpbi10b3A6IDE4NXB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnRhYmxlIC53cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnRhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgLnRhYmxlIGNhcHRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbi50YWJsZSAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zaG93LXJlc3VsdHMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zaG93LXJlc3VsdHMge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuc2hvdy1yZXN1bHRzIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDIgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuc2hvdy1yZXN1bHRzIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbi5zaG93LXJlc3VsdHMgLnJlc3VsdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI0ZGM0IzRjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59IiwiJHByaW1hcnk6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1kYXJrOiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctbGlnaHQ6IHJnYmEoI0NBRUJGMCwgMC4yKTtcclxuJGRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWxpZ2h0OiMwMDAwMDA7XHJcbiRsaWdodDogI2ZmZjtcclxuJG1lZGl1bTogI0E5QTlBOTtcclxuJG1lZGl1bS1zaGFkb3ctZGFyazogI2Y5ZjlmOTtcclxuJG1lZGl1bS1zaGFkb3ctbGlnaHQ6ICNFRkVGRUY7XHJcbiRzZWNvbmRhcnk6ICNGRjNCM0Y7XHJcbiRzdWNjZXNzOiAjMkFCOTMwO1xyXG4vLyAkaW50ZXJtZWRpYXRlOiAjNjU1ZjVmO1xyXG5cclxuJGJvbGRlcjogUG9wcGlucy1FeHRyYUJvbGQ7XHJcbiRib2xkOiBQb3BwaW5zLUJvbGQ7XHJcbiRmLW1lZGl1bTogUG9wcGlucy1TZW1pQm9sZDtcclxuJHJlZ3VsYXI6IFBvcHBpbnMtUmVndWxhcjtcclxuJGYtbGlnaHQ6IFBvcHBpbnMtTGlnaHQ7XHJcbiRmLWl0YWxpYzogUG9wcGlucy1JdGFsaWM7XHJcblxyXG4kY29udGFpbmVyOiAxMzY1cHg7XHJcblxyXG4kYnRuLWhlaWdodDogNDBweDtcclxuJGRlZmF1bHQtcGFkZGluZzogMTVweDtcclxuJGl0ZW0tcGFkZGluZzogNXB4O1xyXG5cclxuJHJhZGl1czogMTBweDtcclxuXHJcbiRvcGFjaXR5OiByZ2JhKCRkYXJrLCAwLjIpO1xyXG5cclxuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMzIwMjQsICNGRkQ1NEMpO1xyXG4kc2hhZG93OiAwcHggMnB4IDI1cHggcmdiYSgxNSwgMjgsIDcxLCAwLjEpO1xyXG4kc2hhZG93LWJ0bjogMHB4IDI0cHggMTZweCAtMjJweCAjZmYzYjNmO1xyXG4kc2hhZG93LXN1Y2Nlc3M6IDBweCAyNHB4IDE2cHggLTIycHggJHN1Y2Nlc3M7XHJcblxyXG4kc3VjY2Vzcy1jb2xvcjogI2I3ZDhiNztcclxuJGVycm9yLWNvbG9yOiAjZjhiN2JkO1xyXG4kd2Fybi1jb2xvcjogI2ZmZTM5OTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-head',
                templateUrl: './head.component.html',
                styleUrls: ['./head.component.scss']
            }]
    }], function () { return [{ type: _services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['block1']
        }], lastTests: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['lastTests']
        }] }); })();


/***/ }),

/***/ "yMNI":
/*!***********************************************!*\
  !*** ./src/app/home/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/settings.service */ "f6A8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AboutComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data && ctx_r0.data.title, "");
} }
function AboutComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.data && ctx_r1.data.text1, "");
} }
function AboutComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.data && ctx_r2.data.text2, "");
} }
function AboutComponent_picture_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.data.image && ctx_r3.data.image.url && ctx_r3._settings.returnImg(ctx_r3.data.image.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r3.data.image && ctx_r3.data.image.alt && ctx_r3.data.image.alt);
} }
class AboutComponent {
    constructor(_settings) {
        this._settings = _settings;
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], inputs: { data: ["block2", "data"] }, decls: 9, vars: 4, consts: [[1, "container"], [1, "content"], ["class", "title", 4, "ngIf"], [1, "about"], ["class", "about__item", 4, "ngIf"], ["href", "", 1, "link"], [4, "ngIf"], [1, "title"], [1, "about__item"], [1, "flaticon-music-note"], [1, "about__item--description"], [1, "flaticon-sound-waves"], [2, "width", "auto", 3, "src", "alt"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AboutComponent_h2_2_Template, 2, 1, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AboutComponent_li_4_Template, 4, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AboutComponent_li_5_Template, 4, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutComponent_picture_8_Template, 2, 2, "picture", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.text1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.text2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.image && ctx.data.image.url);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n@media (max-width: 900px) {\n  .container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 80px 0;\n  }\n}\n@media only screen and (max-width: 559px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 50px 0;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  padding-right: 30px;\n  flex: 1 1 420px;\n}\n@media (max-width: 900px) {\n  .content[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding-right: 0;\n    margin-bottom: 40px;\n  }\n}\n.about[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  padding: 0;\n}\n.about__item[_ngcontent-%COMP%] {\n  display: flex;\n}\n.about__item[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 30px;\n}\n.about__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  min-width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  background-color: #a9a9a934;\n  color: #A9A9A9;\n  display: block;\n  line-height: 42px;\n  text-align: center;\n  margin-right: 25px;\n}\n.about__item[_ngcontent-%COMP%]:first-child   i[_ngcontent-%COMP%] {\n  color: #FF3B3F;\n  background-color: rgba(255, 59, 63, 0.4);\n}\n.about__item--description[_ngcontent-%COMP%] {\n  font-family: Poppins-Regular;\n  color: #A9A9A9;\n  text-align: left;\n}\n.about__item--description[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 320px) {\n  .about__item--description[_ngcontent-%COMP%] {\n    font-size: calc(14px + 10 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .about__item--description[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media only screen and (max-width: 479px) {\n  .about[_ngcontent-%COMP%] {\n    margin: 30px 0;\n  }\n}\npicture[_ngcontent-%COMP%] {\n  flex: 1 1 400px;\n}\npicture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: contain;\n  max-width: 100%;\n}\n@media (max-width: 900px) {\n  picture[_ngcontent-%COMP%] {\n    width: auto;\n    margin: 0 auto;\n    flex: none;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvaG9tZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlKQTtFQUNJO0lBQ0ksVUFBQTtFQ3hKTjtFRDJKRTtJQUNJLFVBQUE7RUN6Sk47QUFDRjtBQUpBO0VBQ0ksZ0JBQUE7QUFNSjtBQUxJO0VBRko7SUFHUSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VBUU47QUFDRjtBRFVRO0VDeEJSO0lBUVEsZUFBQTtFQVVOO0FBQ0Y7QUFQQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBVUo7QUFUSTtFQUpKO0lBS1EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFZTjtBQUNGO0FBUEE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQVVKO0FBUkk7RUFDSSxhQUFBO0FBVVI7QUFUUTtFQUNJLGdCQUFBO0FBV1o7QUFUUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJDYkQ7RURjQywyQkFBQTtFQUNBLGNDbkNEO0VEb0NDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFXVjtBQVJZO0VBQ0ksY0N4Q0o7RUR5Q0ksd0NBQUE7QUFVaEI7QUFQUTtFRDZDQSw0QkVsRkU7RUZzRkYsY0VoR0M7RUY0R0QsZ0JDNUQ0RDtBQVdwRTtBRG1FUTtFQUNJLGVDL0V5QjtBQWNyQztBRG1FWTtFQUhKO0lBSVEsb0RBQUE7RUNoRWQ7QUFDRjtBRGtFWTtFQVBKO0lBUVEsZUN0RjJCO0VBdUJ6QztBQUNGO0FEcERRO0VDQ1I7SUFnQ1EsY0FBQTtFQXVCTjtBQUNGO0FBcEJBO0VBQ0ksZUFBQTtBQXVCSjtBQXRCSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQXdCUjtBQXJCSTtFQVBKO0lBUVEsV0FBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtFQXdCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQG1peGluIHRydW5jYXRlKCRtYXgtd2lkdGgpIHtcclxuICAgIG1heC13aWR0aDogJG1heC13aWR0aDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbiRicmVha3BvaW50czogKFwicGhvbmVcIjogNDAwcHgsXHJcbiAgICBcInBob25lLXdpZGVcIjogNDgwcHgsXHJcbiAgICBcInBoYWJsZXRcIjogNTYwcHgsXHJcbiAgICBcInRhYmxldC1zbWFsbFwiOiA2NDBweCxcclxuICAgIFwidGFibGV0XCI6IDc2OHB4LFxyXG4gICAgXCJ0YWJsZXQtbVwiOiAxMDAwcHgsXHJcbiAgICBcInRhYmxldC13aWRlXCI6IDEwMjRweCxcclxuICAgIFwiZGVza3RvcFwiOiAxMjQ4cHgsXHJcbiAgICBcImRlc2t0b3Atd2lkZVwiOiAxNDQwcHgpO1xyXG5cclxuQG1peGluIG1xKCR3aWR0aCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcF9oYXNfa2V5KCRicmVha3BvaW50cywgJHdpZHRoKSB7XHJcbiAgICAgICAgJHdpZHRoOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJHdpZHRoKTtcclxuXHJcbiAgICAgICAgQGlmICR0eXBlPT1tYXgge1xyXG4gICAgICAgICAgICAkd2lkdGg6ICR3aWR0aCAtIDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCN7JHR5cGV9LXdpZHRoOiAkd2lkdGgpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24geigkbmFtZSkge1xyXG4gICAgQGlmIGluZGV4KCR6LWluZGV4ZXMsICRuYW1lKSB7XHJcbiAgICAgICAgQHJldHVybiAobGVuZ3RoKCR6LWluZGV4ZXMpIC0gaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpKSsxO1xyXG4gICAgfVxyXG5cclxuICAgIEBlbHNlIHtcclxuICAgICAgICBAd2FybiAnVGhlcmUgaXMgbm8gaXRlbSBcIiN7JG5hbWV9XCIgaW4gdGhpcyBsaXN0OyBjaG9vc2Ugb25lIG9mOiAjeyR6LWluZGV4ZXN9JztcclxuICAgICAgICBAcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbiR6LWluZGV4ZXM6IChcIm91dGRhdGVkLWJyb3dzZXJcIiwgXCJtb2RhbFwiLCBcInNpdGUtaGVhZGVyXCIsIFwicGFnZS13cmFwcGVyXCIsIFwic2l0ZS1mb290ZXJcIik7XHJcblxyXG4vLy0tLS1iZWZvcmUgYWZ0ZXJcclxuQG1peGluIHBzZXVkbygkZGlzcGxheTogYmxvY2ssICRwb3M6IGFic29sdXRlLCAkY29udGVudDogXCJcIikge1xyXG4gICAgY29udGVudDogJGNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiAkZGlzcGxheTtcclxuICAgIHBvc2l0aW9uOiAkcG9zO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb250ZW50KCRkaXJlY3Rpb246IGZhbHNlLCAkanVzdGlmeTogZmFsc2UsICRhbGlnbjogZmFsc2UsICRhbGlnbi1jb250ZW50OiBmYWxzZSkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBAaWYgJGRpcmVjdGlvbiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRqdXN0aWZ5IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24ge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbi1jb250ZW50IHtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiAkYWxpZ24tY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZpZ3VyZSgkd2lkdGgsICRoZWlnaHQ6IGZhbHNlKSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRlbnQocm93LCBjZW50ZXIsIGNlbnRlciwgY2VudGVyKTtcclxuICAgIG1heC13aWR0aDogJHdpZHRoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgQGlmICRoZWlnaHQge1xyXG4gICAgICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vc2NhbGFyZSBmb250XHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xyXG4gICAgQHJldHVybiAkdmFsdWUgLyAoJHZhbHVlICogMCArIDEpO1xyXG59XHJcblxyXG5AbWl4aW4gZmx1aWQtdHlwZS1zaXplKCRtaW4tZm9udC1zaXplLFxyXG4gICAgJG1heC1mb250LXNpemUsXHJcbiAgICAkZmY6IGZhbHNlLFxyXG4gICAgJGNvbG91cjogZmFsc2UsXHJcbiAgICAkYWxpZ246IGZhbHNlLFxyXG4gICAgJGxoOiBmYWxzZSxcclxuICAgICR3ZWlnaHQ6IGZhbHNlLFxyXG4gICAgJG1pbi12dzogMzIwcHgsXHJcbiAgICAkbWF4LXZ3OiAxMjAwcHgpIHtcclxuICAgIEBpZiAkZmYge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZmY7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRjb2xvdXIge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkd2VpZ2h0IHtcclxuICAgICAgICBmb250LXdlaWdodDogJHdlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGxoIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogJGxoO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICAkdTE6IHVuaXQoJG1pbi12dyk7XHJcbiAgICAkdTI6IHVuaXQoJG1heC12dyk7XHJcbiAgICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgJHU0OiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIEBpZiAkbWluLWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBAaWYgJG1heC1mb250LXNpemUge1xyXG4gICAgLy8gICAkdTM6IHVuaXQoJG1heC1mb250LXNpemUpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vICR1NDogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcblxyXG5cclxuICAgIEBpZiAkdTE9PSR1MiBhbmQgJHUxPT0kdTMgYW5kICR1MT09JHU0IHtcclxuICAgICAgICAmIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkbWluLWZvbnQtc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygjeyRtaW4tZm9udC1zaXplfSArICN7c3RyaXAtdW5pdCgkbWF4LWZvbnQtc2l6ZSAtICRtaW4tZm9udC1zaXplKX0gKiAoKDEwMHZ3IC0gI3skbWluLXZ3fSkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRtYXgtZm9udC1zaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtaXhpbiBhbmltYXRpb24gKCR0aW1lKSB7XHJcbiAgICBhbmltYXRpb246IGZhZGUgJHRpbWUgYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn0iLCJAa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTIwcHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogODBweCAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1OXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgfVxufVxuXG4uY29udGVudCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGZsZXg6IDEgMSA0MjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxufVxuXG4uYWJvdXQge1xuICBtYXJnaW46IDUwcHggMDtcbiAgcGFkZGluZzogMDtcbn1cbi5hYm91dF9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYWJvdXRfX2l0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmFib3V0X19pdGVtIGkge1xuICBtaW4td2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTM0O1xuICBjb2xvcjogI0E5QTlBOTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5hYm91dF9faXRlbTpmaXJzdC1jaGlsZCBpIHtcbiAgY29sb3I6ICNGRjNCM0Y7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA1OSwgNjMsIDAuNCk7XG59XG4uYWJvdXRfX2l0ZW0tLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgY29sb3I6ICNBOUE5QTk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYWJvdXRfX2l0ZW0tLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmFib3V0X19pdGVtLS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAxMCAqICgoMTAwdncgLSAzMjBweCkgLyA4ODApKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5hYm91dF9faXRlbS0tZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuICAuYWJvdXQge1xuICAgIG1hcmdpbjogMzBweCAwO1xuICB9XG59XG5cbnBpY3R1cmUge1xuICBmbGV4OiAxIDEgNDAwcHg7XG59XG5waWN0dXJlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICBwaWN0dXJlIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmbGV4OiBub25lO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufSIsIiRwcmltYXJ5OiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctZGFyazogI0NBRUJGMDtcclxuJHByaW1hcnktc2hhZG93LWxpZ2h0OiByZ2JhKCNDQUVCRjAsIDAuMik7XHJcbiRkYXJrOiMwMDAwMDA7XHJcbiRkYXJrLXNoYWRvdy1kYXJrOiMwMDAwMDA7XHJcbiRkYXJrLXNoYWRvdy1saWdodDojMDAwMDAwO1xyXG4kbGlnaHQ6ICNmZmY7XHJcbiRtZWRpdW06ICNBOUE5QTk7XHJcbiRtZWRpdW0tc2hhZG93LWRhcms6ICNmOWY5Zjk7XHJcbiRtZWRpdW0tc2hhZG93LWxpZ2h0OiAjRUZFRkVGO1xyXG4kc2Vjb25kYXJ5OiAjRkYzQjNGO1xyXG4kc3VjY2VzczogIzJBQjkzMDtcclxuLy8gJGludGVybWVkaWF0ZTogIzY1NWY1ZjtcclxuXHJcbiRib2xkZXI6IFBvcHBpbnMtRXh0cmFCb2xkO1xyXG4kYm9sZDogUG9wcGlucy1Cb2xkO1xyXG4kZi1tZWRpdW06IFBvcHBpbnMtU2VtaUJvbGQ7XHJcbiRyZWd1bGFyOiBQb3BwaW5zLVJlZ3VsYXI7XHJcbiRmLWxpZ2h0OiBQb3BwaW5zLUxpZ2h0O1xyXG4kZi1pdGFsaWM6IFBvcHBpbnMtSXRhbGljO1xyXG5cclxuJGNvbnRhaW5lcjogMTM2NXB4O1xyXG5cclxuJGJ0bi1oZWlnaHQ6IDQwcHg7XHJcbiRkZWZhdWx0LXBhZGRpbmc6IDE1cHg7XHJcbiRpdGVtLXBhZGRpbmc6IDVweDtcclxuXHJcbiRyYWRpdXM6IDEwcHg7XHJcblxyXG4kb3BhY2l0eTogcmdiYSgkZGFyaywgMC4yKTtcclxuXHJcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRTMyMDI0LCAjRkZENTRDKTtcclxuJHNoYWRvdzogMHB4IDJweCAyNXB4IHJnYmEoMTUsIDI4LCA3MSwgMC4xKTtcclxuJHNoYWRvdy1idG46IDBweCAyNHB4IDE2cHggLTIycHggI2ZmM2IzZjtcclxuJHNoYWRvdy1zdWNjZXNzOiAwcHggMjRweCAxNnB4IC0yMnB4ICRzdWNjZXNzO1xyXG5cclxuJHN1Y2Nlc3MtY29sb3I6ICNiN2Q4Yjc7XHJcbiRlcnJvci1jb2xvcjogI2Y4YjdiZDtcclxuJHdhcm4tY29sb3I6ICNmZmUzOTk7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['block2']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map