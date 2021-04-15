(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\RADIO-TEST\radiotest-client\src\main.ts */"zUnb");


/***/ }),

/***/ "0zEo":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ModalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
const _c0 = function (a0) { return { "show": a0 }; };
const _c1 = ["*"];
class ModalComponent {
    constructor() {
        this._showFlag = false;
        this.showFlagChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get showFlag() {
        return this._showFlag;
    }
    set showFlag(value) {
        this._showFlag = value;
        this.showFlagChange.emit(value);
    }
    ;
    ngOnInit() { }
    closeModal() {
        this.showFlag = false;
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { showFlag: "showFlag", title: "title" }, outputs: { showFlagChange: "showFlagChange" }, ngContentSelectors: _c1, decls: 8, vars: 4, consts: [[1, "modal", 3, "ngClass"], [1, "modal__background", 3, "click"], [1, "modal__content", 3, "click"], [1, "modal__head"], ["class", "modal__title", 4, "ngIf"], [1, "flaticon-cancel", "modal__close", 3, "click"], [1, "modal__body"], [1, "modal__title"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_div_click_1_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_div_click_2_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_div_click_5_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.showFlag));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  align-items: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  overflow: hidden;\n  position: fixed;\n  align-items: center;\n  z-index: 50;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n@supports (-ms-ime-align: auto) {\n  .modal[_ngcontent-%COMP%] {\n    background-color: rgba(10, 10, 10, 0.6);\n    height: 100vh;\n    top: 0;\n  }\n}\n.modal__background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.4);\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n@supports (-ms-ime-align: auto) {\n  .modal__background[_ngcontent-%COMP%] {\n    background: none;\n    height: 100vh;\n  }\n}\n.modal__content[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  padding: 25px;\n  box-sizing: border-box;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02);\n  max-width: 540px;\n  width: 100%;\n  border-radius: 10px;\n}\n@media only screen and (min-width: 768px) {\n  .modal__content[_ngcontent-%COMP%] {\n    margin: auto;\n    max-height: calc(100vh - 40px);\n  }\n}\n@media only screen and (max-width: 767px) {\n  .modal__content[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 40px);\n  }\n}\n.modal__close[_ngcontent-%COMP%] {\n  background: 0 0;\n  height: 30px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  border: none;\n  font-size: 16px;\n  color: #000000;\n  font-weight: bold;\n  cursor: pointer;\n  z-index: 5;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-family: Poppins-Bold;\n  color: #000000;\n  text-align: center;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .modal__title[_ngcontent-%COMP%] {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .modal__title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.modal[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: block;\n  padding: 50px;\n  position: relative;\n}\n.show[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUpBO0VBQ0k7SUFDSSxVQUFBO0VDeEpOO0VEMkpFO0lBQ0ksVUFBQTtFQ3pKTjtBQUNGO0FBSkE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FBTUo7QUFMSTtFQWRKO0lBZVEsdUNBQUE7SUFDQSxhQUFBO0lBQ0EsTUFBQTtFQVFOO0FBQ0Y7QUFMSTtFQUNJLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUFPUjtBQU5RO0VBUEo7SUFRUSxnQkFBQTtJQUNBLGFBQUE7RUFTVjtBQUNGO0FBTkk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFHQSxzQkN4Q0E7RUR5Q0Esd0ZBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkN2QkM7QUQ2QlQ7QUQ3QlE7RUNVSjtJQWVRLFlBQUE7SUFDQSw4QkFBQTtFQVFWO0FBQ0Y7QURuQ1E7RUNVSjtJQXNCUSw4QkFBQTtFQU9WO0FBQ0Y7QUFKSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0NwRUY7RURxRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQU1SO0FBSEk7RURzQkkseUJFcEZEO0VGd0ZDLGNFcEdGO0VGZ0hFLGtCQ3JDbUQ7QUFPM0Q7QURnRFE7RUFDSSxlQ3hEcUI7QUFVakM7QURnRFk7RUFISjtJQUlRLG1EQUFBO0VDN0NkO0FBQ0Y7QUQrQ1k7RUFQSjtJQVFRLGVDL0R1QjtFQW1CckM7QUFDRjtBQWpCSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFtQlI7QUFoQkE7RUFDSSxhQUFBO0FBbUJKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWl4aW4gdHJ1bmNhdGUoJG1heC13aWR0aCkge1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuJGJyZWFrcG9pbnRzOiAoXCJwaG9uZVwiOiA0MDBweCxcclxuICAgIFwicGhvbmUtd2lkZVwiOiA0ODBweCxcclxuICAgIFwicGhhYmxldFwiOiA1NjBweCxcclxuICAgIFwidGFibGV0LXNtYWxsXCI6IDY0MHB4LFxyXG4gICAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgICBcInRhYmxldC1tXCI6IDEwMDBweCxcclxuICAgIFwidGFibGV0LXdpZGVcIjogMTAyNHB4LFxyXG4gICAgXCJkZXNrdG9wXCI6IDEyNDhweCxcclxuICAgIFwiZGVza3RvcC13aWRlXCI6IDE0NDBweCk7XHJcblxyXG5AbWl4aW4gbXEoJHdpZHRoLCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwX2hhc19rZXkoJGJyZWFrcG9pbnRzLCAkd2lkdGgpIHtcclxuICAgICAgICAkd2lkdGg6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkd2lkdGgpO1xyXG5cclxuICAgICAgICBAaWYgJHR5cGU9PW1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoI3skdHlwZX0td2lkdGg6ICR3aWR0aCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiB6KCRuYW1lKSB7XHJcbiAgICBAaWYgaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpIHtcclxuICAgICAgICBAcmV0dXJuIChsZW5ndGgoJHotaW5kZXhlcykgLSBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkpKzE7XHJcbiAgICB9XHJcblxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEB3YXJuICdUaGVyZSBpcyBubyBpdGVtIFwiI3skbmFtZX1cIiBpbiB0aGlzIGxpc3Q7IGNob29zZSBvbmUgb2Y6ICN7JHotaW5kZXhlc30nO1xyXG4gICAgICAgIEByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuJHotaW5kZXhlczogKFwib3V0ZGF0ZWQtYnJvd3NlclwiLCBcIm1vZGFsXCIsIFwic2l0ZS1oZWFkZXJcIiwgXCJwYWdlLXdyYXBwZXJcIiwgXCJzaXRlLWZvb3RlclwiKTtcclxuXHJcbi8vLS0tLWJlZm9yZSBhZnRlclxyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiBcIlwiKSB7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbnRlbnQoJGRpcmVjdGlvbjogZmFsc2UsICRqdXN0aWZ5OiBmYWxzZSwgJGFsaWduOiBmYWxzZSwgJGFsaWduLWNvbnRlbnQ6IGZhbHNlKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBpZiAkZGlyZWN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGp1c3RpZnkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduLWNvbnRlbnQge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICRhbGlnbi1jb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmlndXJlKCR3aWR0aCwgJGhlaWdodDogZmFsc2UpIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csIGNlbnRlciwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAaWYgJGhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9zY2FsYXJlIGZvbnRcclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbHVpZC10eXBlLXNpemUoJG1pbi1mb250LXNpemUsXHJcbiAgICAkbWF4LWZvbnQtc2l6ZSxcclxuICAgICRmZjogZmFsc2UsXHJcbiAgICAkY29sb3VyOiBmYWxzZSxcclxuICAgICRhbGlnbjogZmFsc2UsXHJcbiAgICAkbGg6IGZhbHNlLFxyXG4gICAgJHdlaWdodDogZmFsc2UsXHJcbiAgICAkbWluLXZ3OiAzMjBweCxcclxuICAgICRtYXgtdnc6IDEyMDBweCkge1xyXG4gICAgQGlmICRmZiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmZjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGNvbG91ciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICR3ZWlnaHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkbGgge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGg7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgICR1MTogdW5pdCgkbWluLXZ3KTtcclxuICAgICR1MjogdW5pdCgkbWF4LXZ3KTtcclxuICAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAkdTQ6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gQGlmICRtaW4tZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vIEBpZiAkbWF4LWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuXHJcblxyXG4gICAgQGlmICR1MT09JHUyIGFuZCAkdTE9PSR1MyBhbmQgJHUxPT0kdTQge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHRpbWUpIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAkdGltZSBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5tb2RhbCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogNTA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAubW9kYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC42KTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRvcDogMDtcbiAgfVxufVxuLm1vZGFsX19iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAubW9kYWxfX2JhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufVxuLm1vZGFsX19jb250ZW50IHtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMC41ZW0gMWVtIC0wLjEyNWVtIHJnYmEoMTAsIDEwLCAxMCwgMC4xKSwgMCAwIDAgMXB4IHJnYmEoMTAsIDEwLCAxMCwgMC4wMik7XG4gIG1heC13aWR0aDogNTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW9kYWxfX2NvbnRlbnQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm1vZGFsX19jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gIH1cbn1cbi5tb2RhbF9fY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiAwIDA7XG4gIGhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDU7XG59XG4ubW9kYWxfX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtQm9sZDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tb2RhbF9fdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAubW9kYWxfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubW9kYWxfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi5tb2RhbCAuYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBmbGV4O1xufSIsIiRwcmltYXJ5OiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctZGFyazogI0NBRUJGMDtcclxuJHByaW1hcnktc2hhZG93LWxpZ2h0OiByZ2JhKCNDQUVCRjAsIDAuMik7XHJcbiRkYXJrOiMwMDAwMDA7XHJcbiRkYXJrLXNoYWRvdy1kYXJrOiMwMDAwMDA7XHJcbiRkYXJrLXNoYWRvdy1saWdodDojMDAwMDAwO1xyXG4kbGlnaHQ6ICNmZmY7XHJcbiRtZWRpdW06ICNBOUE5QTk7XHJcbiRtZWRpdW0tc2hhZG93LWRhcms6ICNmOWY5Zjk7XHJcbiRtZWRpdW0tc2hhZG93LWxpZ2h0OiAjRUZFRkVGO1xyXG4kc2Vjb25kYXJ5OiAjRkYzQjNGO1xyXG4kc3VjY2VzczogIzJBQjkzMDtcclxuLy8gJGludGVybWVkaWF0ZTogIzY1NWY1ZjtcclxuXHJcbiRib2xkZXI6IFBvcHBpbnMtRXh0cmFCb2xkO1xyXG4kYm9sZDogUG9wcGlucy1Cb2xkO1xyXG4kZi1tZWRpdW06IFBvcHBpbnMtU2VtaUJvbGQ7XHJcbiRyZWd1bGFyOiBQb3BwaW5zLVJlZ3VsYXI7XHJcbiRmLWxpZ2h0OiBQb3BwaW5zLUxpZ2h0O1xyXG4kZi1pdGFsaWM6IFBvcHBpbnMtSXRhbGljO1xyXG5cclxuJGNvbnRhaW5lcjogMTM2NXB4O1xyXG5cclxuJGJ0bi1oZWlnaHQ6IDQwcHg7XHJcbiRkZWZhdWx0LXBhZGRpbmc6IDE1cHg7XHJcbiRpdGVtLXBhZGRpbmc6IDVweDtcclxuXHJcbiRyYWRpdXM6IDEwcHg7XHJcblxyXG4kb3BhY2l0eTogcmdiYSgkZGFyaywgMC4yKTtcclxuXHJcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRTMyMDI0LCAjRkZENTRDKTtcclxuJHNoYWRvdzogMHB4IDJweCAyNXB4IHJnYmEoMTUsIDI4LCA3MSwgMC4xKTtcclxuJHNoYWRvdy1idG46IDBweCAyNHB4IDE2cHggLTIycHggI2ZmM2IzZjtcclxuJHNoYWRvdy1zdWNjZXNzOiAwcHggMjRweCAxNnB4IC0yMnB4ICRzdWNjZXNzO1xyXG5cclxuJHN1Y2Nlc3MtY29sb3I6ICNiN2Q4Yjc7XHJcbiRlcnJvci1jb2xvcjogI2Y4YjdiZDtcclxuJHdhcm4tY29sb3I6ICNmZmUzOTk7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return []; }, { showFlag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showFlagChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "1dAB":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/validation-error-show/validation-error-show.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ValidationErrorShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorShowComponent", function() { return ValidationErrorShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ValidationErrorShowComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getErrorText(ctx_r0.objectKeys(ctx_r0.control.errors)[0]), " ");
} }
function ValidationErrorShowComponent_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.getErrorText(error_r3), " ");
} }
function ValidationErrorShowComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidationErrorShowComponent_ng_container_1_span_1_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.objectKeys(ctx_r1.control.errors));
} }
class ValidationErrorShowComponent {
    constructor() {
        this.showFirstOnly = true;
        this.objectKeys = Object.keys;
        this.standartMessages = {
            min: (errorValue) => {
                return 'The value must be>=' + errorValue.min + '(' + errorValue.actual + '<' + errorValue.min + ').';
                // return this.langS.translate("minNumberError", [errorValue.min, errorValue.actual]);
            },
            max: (errorValue) => {
                return 'The value must be>=' + errorValue.max + '(' + errorValue.actual + '<' + errorValue.max + ').';
                // return this.langS.translate("maxNumberError", [errorValue.max, errorValue.actual]);
            },
            required: () => {
                return 'Required field';
                // return this.langS.translate("requiredError");
            },
            email: () => {
                return 'Invalid email.';
                // return this.langS.translate("invalidEmailError");
            },
            minlength: (errorValue) => {
                return 'Minimum length ' + errorValue.requiredLength + ' characters' + '(entered ' + errorValue.actualLength + ').';
                // return this.langS.translate("minLengthError", [errorValue.requiredLength, errorValue.actualLength]);
            },
            maxlength: (errorValue) => {
                return 'Maximum length ' + errorValue.requiredLength + ' characters (entered ' + errorValue.actualLength + ').';
                // return this.langS.translate("maxLengthError", [errorValue.requiredLength, errorValue.actualLength]);
            },
            pattern: (errorValue) => {
                // if (requiredPattern === ...) return this.langS.translate("...");
                // else if (...) return this.langS.translate("...");
                return "The value must match the regular expression \ " + errorValue.requiredPattern + "\.";
                // return this.langS.translate("patternError", [errorValue.requiredPattern]);
            },
            phoneError: () => {
                return "The phone can only contain numbers, spaces and dashes.";
                // return this.langS.translate("invalidPhoneError");
            },
            passwordConfirmError: () => {
                return "Passwords must match.";
                // return this.langS.translate("passwordConfirmError");
            },
            trimError: () => {
                return "The value must not start or end with whitespace.";
                // return this.langS.translate("trimError");
            },
            emailIsBusy: () => {
                return "Email is busy.";
                // return this.langS.translate("emailIsBusyError");
            },
            unknownError: () => {
                return "Unknown error. The administrator has been notified. Sorry.";
                // return this.langS.translate("unknZownError");
            },
            invalidEmailOrPassword: () => {
                return "Username or password not valid";
                // return this.langS.translate("invalidEmailOrPasswordError");
            },
            userIsBlock: () => {
                return "the user is blocked";
                // return this.langS.translate("userIsBlockError");
            },
            userNotIsActive: () => {
                return "User is not active. To activate your account, follow the link sent to your email. ";
                // return this.langS.translate("userNotIsActiveError");
            },
            messagesLimit: () => {
                return "Sorry, but too many emails have been sent from your account. Try to repeat the action tomorrow.";
                // return this.langS.translate("messagesLimitError");
            },
            invalidPassword: () => {
                return "Incorrect password.";
                // return this.langS.translate("invalidPasswordError");
            }
        };
        this.messages = Object.assign({}, this.standartMessages);
    }
    set customErrorsMessages(customMessages) {
        this.messages = Object.assign(Object.assign({}, this.standartMessages), customMessages);
    }
    getErrorText(errorName) {
        if (!(errorName in this.messages))
            return this.messages.unknownError();
        else
            return this.messages[errorName](this.control.errors[errorName]);
    }
}
ValidationErrorShowComponent.ɵfac = function ValidationErrorShowComponent_Factory(t) { return new (t || ValidationErrorShowComponent)(); };
ValidationErrorShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidationErrorShowComponent, selectors: [["app-validation-error-show"]], inputs: { control: "control", showFirstOnly: "showFirstOnly", customErrorsMessages: "customErrorsMessages" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "error__item"], ["class", "error__item", 4, "ngFor", "ngForOf"]], template: function ValidationErrorShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ValidationErrorShowComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidationErrorShowComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors && ctx.control.touched && ctx.showFirstOnly && ctx.objectKeys(ctx.control.errors).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.errors && ctx.control.touched && !ctx.showFirstOnly);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3ZhbGlkYXRpb24tZXJyb3Itc2hvdy92YWxpZGF0aW9uLWVycm9yLXNob3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdmFsaWRhdGlvbi1lcnJvci1zaG93L3ZhbGlkYXRpb24tZXJyb3Itc2hvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationErrorShowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validation-error-show',
                templateUrl: './validation-error-show.component.html',
                styleUrls: ['./validation-error-show.component.scss']
            }]
    }], function () { return []; }, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showFirstOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customErrorsMessages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_current_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/current-route.service */ "RirG");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/settings.service */ "f6A8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search-form/search-form.component */ "DdXh");








const _c0 = function (a0) { return { "active-seach": a0 }; };
function HeaderComponent_ng_container_6_app_search_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search-form", 0);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r10.openSearchElm));
} }
function HeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_6_app_search_form_1_Template, 1, 3, "app-search-form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._currentRoute.url != "/home");
} }
function HeaderComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_20_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.navigateTo("about"); })("click", function HeaderComponent_li_20_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.openMenuElm = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " What is Radio Test?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/radio-test"]; };
function HeaderComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_21_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.openMenuElm = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " My Radio Tests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/auth/register"]; };
function HeaderComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/auth/login"]; };
function HeaderComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
function HeaderComponent_li_24_ul_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_24_ul_10_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.navigatetoUserSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Account settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_24_ul_10_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.userLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_24_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.showSettings = !ctx_r20.showSettings; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_24_ul_10_Template, 7, 0, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r5.auth.user.firstName, " ", ctx_r5.auth.user.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Balance: ", ctx_r5.auth.user.balance ? ctx_r5.auth.user.balance : 0, " $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.auth.user.firstName[0].toUpperCase() + ctx_r5.auth.user.lastName[0].toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showSettings);
} }
function HeaderComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
function HeaderComponent_li_27_ul_10_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_27_ul_10_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.navigatetoUserSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Account settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_27_ul_10_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.userLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Noah Watkins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Balance: 12 $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_27_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.showSettings = !ctx_r26.showSettings; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " NW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_27_ul_10_Template, 7, 0, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.auth.user && ctx_r7.showSettings);
} }
function HeaderComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_28_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.openSearchElm = !ctx_r28.openSearchElm; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_29_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.openSearchElm = !ctx_r30.openSearchElm; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function (a0) { return { "is-scrolling": a0 }; };
const _c5 = function () { return ["/home"]; };
const _c6 = function (a0) { return { "responsive": a0 }; };
const _c7 = function () { return ["/faq"]; };
const _c8 = function (a0) { return { "active-mask": a0 }; };
class HeaderComponent {
    constructor(_currentRoute, _settings, router, auth) {
        this._currentRoute = _currentRoute;
        this._settings = _settings;
        this.router = router;
        this.auth = auth;
        this.openMenuElm = false;
        this.showSettings = false;
        this.currentUrl = '';
        this.openSearchElm = false;
        this.isScrolling = false;
    }
    ngOnInit() {
    }
    onScrollEvent($event) {
        if (window.scrollY > 100) {
            this.isScrolling = true;
        }
        else {
            this.isScrolling = false;
        }
        if (window.innerWidth > 1439) {
            this.openMenuElm = false;
            this.openSearchElm = false;
        }
    }
    navigateTo(route) {
        this._settings.navigate.next(route);
        if (this._currentRoute.url != '/home') {
            this.router.navigate(['/home']);
        }
    }
    userLogout() {
        this.showSettings = false;
        this._settings.logout = true;
    }
    navigatetoUserSettings() {
        this.showSettings = false;
        this.router.navigate(['/user/settings']);
    }
    openMenu() {
        this.openMenuElm = true;
    }
    openSeach() {
        this.openSearchElm = !this.openMenuElm;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_current_route_service__WEBPACK_IMPORTED_MODULE_1__["CurrentRouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("window", function HeaderComponent_window_HostBindingHandler($event) { return ctx.onScrollEvent($event); })("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onScrollEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 31, vars: 25, consts: [[3, "ngClass"], [1, "container"], [1, "wrapper", "wrapper-logo"], [1, "menu-icon", "flaticon-menu", 3, "click"], ["routerLinkActive", "router-link-active", 1, "header__logo", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", ""], [4, "ngIf"], [1, "wrapper", "menu", 3, "ngClass"], [1, "menu__item", "responsive__logo"], ["routerLinkActive", "router-link-active", 1, "logo", 3, "routerLink", "click"], [1, "close", "flaticon-cancel", 3, "click"], [1, "menu__item"], ["routerLinkActive", "router-link-active", 3, "routerLink", "click"], [1, "icon", "flaticon-question"], [3, "click"], [1, "icon", "flaticon-contact-book"], ["class", "menu__item", 4, "ngIf"], ["class", "menu__item sing-up", 4, "ngIf"], ["class", "menu__item sing-in", 4, "ngIf"], ["class", "menu__item is-auth", 4, "ngIf"], [1, "wrapper", "menu-adaptive"], ["class", "menu__item search", 4, "ngIf"], [1, "mask", 3, "ngClass", "click"], [3, "ngClass", 4, "ngIf"], [1, "menu__item", "sing-up"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [1, "menu__item", "sing-in"], [1, "menu__item", "is-auth"], [1, "wrapper"], [1, "user"], [1, "user__name"], [1, "user__balance"], [1, "user-options", 3, "click"], [1, "flaticon-down-arrow-1"], ["class", "settings", 4, "ngIf"], [1, "settings"], [1, "settings__item"], [1, "flaticon-settings", 3, "click"], [1, "flaticon-logout", 3, "click"], [1, "menu__item", "search"], [1, "flaticon-magnifiying-glass", 3, "click"], [1, "flaticon-cancel", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_3_listener() { return ctx.openMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ng_container_6_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() { return ctx.openMenuElm = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.openMenuElm = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_13_listener() { return ctx.openMenuElm = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_17_listener() { return ctx.openMenuElm = false; })("click", function HeaderComponent_Template_a_click_17_listener() { return ctx.navigateTo("contacts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_li_20_Template, 4, 0, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_li_21_Template, 4, 2, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HeaderComponent_li_22_Template, 3, 2, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_li_23_Template, 3, 2, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeaderComponent_li_24_Template, 11, 5, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderComponent_li_26_Template, 3, 2, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderComponent_li_27_Template, 11, 1, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HeaderComponent_li_28_Template, 2, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_li_29_Template, 2, 0, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_30_listener() { return ctx.openMenuElm = !ctx.openMenuElm; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c4, ctx.isScrolling || ctx._currentRoute.url != "/home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._currentRoute.url != "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c6, ctx.openMenuElm));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.openSearchElm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openSearchElm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c8, ctx.openMenuElm));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_6__["SearchFormComponent"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  max-width: 100%;\n  width: 100%;\n  padding: 15px 0;\n  transition: ease-in-out 0.1s all;\n  z-index: 1000;\n}\n.header__logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  max-width: 245px;\n  width: 100%;\n  height: 70px;\n}\n.header__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n@media only screen and (max-width: 1247px) {\n  .header__logo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    max-width: 245px;\n    width: 100%;\n    height: 50px;\n  }\n}\n@media only screen and (max-width: 559px) {\n  .header__logo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    max-width: 120px;\n    width: 100%;\n    height: 35px;\n  }\n}\n.menu[_ngcontent-%COMP%] {\n  max-width: 655px;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0;\n  margin: 0;\n  align-items: center;\n  list-style: none;\n}\n.menu__item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.menu__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000000;\n  cursor: pointer;\n}\n.menu__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 10px;\n  color: #A9A9A9;\n  font-weight: 500;\n}\n@media only screen and (min-width: 1440px) {\n  .menu__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 1439px) {\n  .menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.sing-up[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.sing-in[_ngcontent-%COMP%] {\n  max-width: 105px;\n  width: 100%;\n  background-color: #FF3B3F;\n  padding: 8px;\n  border-radius: 10px;\n}\n.sing-in[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.is-scrolling[_ngcontent-%COMP%], .different[_ngcontent-%COMP%], .different-2[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0px 2px 25px rgba(15, 28, 71, 0.1);\n}\n.router-link-active[_ngcontent-%COMP%] {\n  color: #FF3B3F !important;\n  font-weight: bold;\n}\n.settings[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 180px;\n  top: 75px;\n  z-index: 100;\n  right: 0;\n  background-color: #fff;\n  border-radius: 0 0 10px 10px;\n  padding: 15px;\n  margin: 0;\n  list-style: none;\n}\n.settings[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .settings[_ngcontent-%COMP%] {\n    font-size: calc(12px + 0 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .settings[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.settings__item[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 10px;\n}\n.settings__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: left;\n}\n.settings__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  margin-right: 15px;\n  color: #A9A9A9;\n  font-size: 20px;\n  margin-top: 5px;\n}\n@media only screen and (max-width: 1247px) {\n  .settings[_ngcontent-%COMP%] {\n    top: 64px;\n  }\n}\n@media only screen and (max-width: 559px) {\n  .settings[_ngcontent-%COMP%] {\n    top: 54px;\n  }\n}\n.user[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .user[_ngcontent-%COMP%] {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .user[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.user__name[_ngcontent-%COMP%] {\n  max-width: 100px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.user__balance[_ngcontent-%COMP%] {\n  color: #FF3B3F;\n}\n@media only screen and (max-width: 479px) {\n  .user[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.user-options[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n  border-radius: 10px;\n  background-color: rgba(255, 59, 63, 0.4);\n  padding: 5px;\n  font-family: Poppins-ExtraBold;\n  color: #FF3B3F;\n}\n.user-options[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 320px) {\n  .user-options[_ngcontent-%COMP%] {\n    font-size: calc(14px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .user-options[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.user-options[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-weight: normal;\n  font-size: 14px;\n}\n@media only screen and (max-width: 767px) {\n  app-search-form[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.wrapper-logo[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  color: #FF3B3F;\n  cursor: pointer;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media screen and (min-width: 320px) {\n  .menu-icon[_ngcontent-%COMP%] {\n    font-size: calc(16px + 10 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .menu-icon[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .menu-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.menu-adaptive[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.menu-adaptive[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.menu-adaptive[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FF3B3F;\n}\n.menu-adaptive[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media screen and (min-width: 320px) {\n  .menu-adaptive[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: calc(16px + 10 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .menu-adaptive[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .menu-adaptive[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .menu-adaptive[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.responsive[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 10000;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  min-height: 100vh;\n  background-color: #fff;\n  width: 30%;\n  box-shadow: 0px 2px 25px rgba(15, 28, 71, 0.1);\n  top: 0px;\n  left: 0;\n  padding: 10px 20px;\n}\n@media (max-width: 900px) {\n  .responsive[_ngcontent-%COMP%] {\n    animation: start 0.5s both;\n  }\n}\n.responsive[_ngcontent-%COMP%]   .sing-up[_ngcontent-%COMP%] {\n  display: none;\n}\n.responsive[_ngcontent-%COMP%]   .is-auth[_ngcontent-%COMP%] {\n  display: none;\n}\n.responsive__logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n  width: 100%;\n  align-items: center;\n}\n@media only screen and (min-width: 1440px) {\n  .responsive__logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.responsive__logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  max-width: 180px;\n  width: 100%;\n  height: 50px;\n}\n.responsive__logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n@media only screen and (max-width: 1023px) {\n  .responsive__logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    max-width: 150px;\n    width: 100%;\n    height: 40px;\n  }\n}\n@media only screen and (max-width: 559px) {\n  .responsive__logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    max-width: 120px;\n    width: 100%;\n    height: 35px;\n  }\n}\n.responsive[_ngcontent-%COMP%]   .user-options[_ngcontent-%COMP%] {\n  display: none;\n}\n.responsive[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  display: none;\n}\n.responsive[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  padding: 10px;\n  border-bottom: 1px solid #A9A9A9;\n}\n.responsive[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.responsive[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  color: #FF3B3F;\n  border-radius: 6px;\n  width: 24px;\n  height: 24px;\n  background-color: rgba(255, 59, 63, 0.4);\n  text-align: center !important;\n  line-height: 24px;\n}\n@media only screen and (max-width: 1247px) {\n  .responsive[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .responsive[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media only screen and (max-width: 639px) {\n  .responsive[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n@media only screen and (max-width: 559px) {\n  .responsive[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n@media only screen and (max-width: 399px) {\n  .responsive[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.mask[_ngcontent-%COMP%] {\n  display: none;\n  width: 100vw;\n  height: 100vh;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.2);\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.active-mask[_ngcontent-%COMP%] {\n  display: block;\n}\n@keyframes start {\n  from {\n    transform: translateX(-300px);\n  }\n  to {\n    transform: translateX(0px);\n  }\n}\n.active-seach[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  max-width: calc(90% - 0px);\n  width: 100%;\n  z-index: 5;\n  height: 80px;\n}\n@media only screen and (max-width: 559px) {\n  .active-seach[_ngcontent-%COMP%] {\n    height: 65px;\n    max-width: calc(90% - 5px);\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]     .form {\n    margin: 0 auto;\n    max-width: 100% !important;\n    height: 80px;\n    border-radius: 0px !important;\n    border: none !important;\n    align-items: center;\n  }\n  [_nghost-%COMP%]     .form__input {\n    border-radius: 10px 0 0 10px;\n    border: 1px solid #EFEFEF !important;\n  }\n}\n@media only screen and (max-width: 767px) and (max-width: 559px) {\n  [_nghost-%COMP%]     .form {\n    height: 65px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SkE7RUFDSTtJQUNJLFVBQUE7RUN4Sk47RUQySkU7SUFDSSxVQUFBO0VDekpOO0FBQ0Y7QUFKQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFNRjtBQUVFO0VEcUNFLGFBQUE7RUFHSSxtQkFpQmtCO0VBYmxCLHVCQWF1QjtFQVR2QixtQkFTK0I7RUFML0IscUJBS3VDO0VBQzNDLGdCQ3pEZ0I7RUQwRGhCLFdBQUE7RUFHSSxZQzdEbUI7QUFRM0I7QUFOSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVFOO0FESFE7RUNWTjtJRHFDRSxhQUFBO0lBR0ksbUJBaUJrQjtJQWJsQix1QkFhdUI7SUFUdkIsbUJBUytCO0lBTC9CLHFCQUt1QztJQUMzQyxnQkNqRGtCO0lEa0RsQixXQUFBO0lBR0ksWUNyRHFCO0VBZTNCO0FBQ0Y7QURmUTtFQ1ZOO0lEcUNFLGFBQUE7SUFHSSxtQkFpQmtCO0lBYmxCLHVCQWF1QjtJQVR2QixtQkFTK0I7SUFML0IscUJBS3VDO0lBQzNDLGdCQzdDa0I7SUQ4Q2xCLFdBQUE7SUFHSSxZQ2pEcUI7RUF1QjNCO0FBQ0Y7QUFuQkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXNCRjtBQXBCRTtFQUNFLGtCQUFBO0FBc0JKO0FBcEJJO0VBQ0UsY0M3Q0E7RUQ4Q0EsZUFBQTtBQXNCTjtBQXBCTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQy9DQztFRGdERCxnQkFBQTtBQXNCUjtBRGxEUTtFQ3dCRjtJQU9JLGFBQUE7RUF1QlI7QUFDRjtBRHZEUTtFQ1FSO0lBOEJJLGFBQUE7RUFxQkY7QUFDRjtBQWpCRTtFQUNFLDBCQUFBO0FBb0JKO0FBaEJBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJDcEVVO0VEcUVWLFlBQUE7RUFDQSxtQkNyRE87QUR3RVQ7QUFqQkU7RUFDRSxXQzdFSTtBRGdHUjtBQWZBOzs7RUFHRSxzQkNwRk07RURxRk4sOENDM0RPO0FENkVUO0FBZkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBa0JGO0FBZkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxzQkNuR007RURvR04sNEJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBa0JGO0FETVE7RUFDSSxlQ3hCZTtBQW9CM0I7QURNWTtFQUhKO0lBSVEsbURBQUE7RUNIZDtBQUNGO0FES1k7RUFQSjtJQVFRLGVDL0JpQjtFQTZCL0I7QUFDRjtBQTNCSTtFQUNFLGdCQUFBO0FBNkJOO0FBMUJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUE0Qk47QUExQk07RUFDRSxrQkFBQTtFQUNBLGNDckhDO0VEc0hELGVBQUE7RUFDQSxlQUFBO0FBNEJSO0FEL0hRO0VDd0VSO0lBaUNJLFNBQUE7RUEwQkY7QUFDRjtBRHBJUTtFQ3dFUjtJQXFDSSxTQUFBO0VBMkJGO0FBQ0Y7QUQvQlE7RUFDSSxlQ09lO0FBMkIzQjtBRGhDWTtFQUhKO0lBSVEsbURBQUE7RUNtQ2Q7QUFDRjtBRGpDWTtFQVBKO0lBUVEsZUFBQTtFQ29DZDtBQUNGO0FBbkNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBcUNKO0FBbENFO0VBQ0UsY0M1SVE7QURnTFo7QUQvSlE7RUNpSFI7SUFjSSxhQUFBO0VBb0NGO0FBQ0Y7QUFqQ0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkN4SU87RUR5SVAsd0NBQUE7RUFDQSxZQUFBO0VEbEVNLDhCRXJGQztFRnlGRCxjRTdGSTtBRGlNWjtBRHRFUTtFQUNJLGVDZ0NlO0FBd0MzQjtBRHRFWTtFQUhKO0lBSVEsbURBQUE7RUN5RWQ7QUFDRjtBRHZFWTtFQVBKO0lBUVEsZUN5QmlCO0VBaUQvQjtBQUNGO0FBaERFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFrREo7QURsTVE7RUNvSlI7SUFFSSxhQUFBO0VBaURGO0FBQ0Y7QUE5Q0E7RUFDRSxtQkFBQTtBQWlERjtBQTlDQTtFQUNFLGtCQUFBO0VEbkZNLGNFN0ZJO0VEa0xWLGVBQUE7QUFpREY7QUR4R1E7RUFDSSxlQ3FEZTtBQXFEM0I7QUR4R1k7RUFISjtJQUlRLG9EQUFBO0VDMkdkO0FBQ0Y7QUR6R1k7RUFQSjtJQVFRLGVDOENpQjtFQThEL0I7QUFDRjtBRC9OUTtFQzhKUjtJQU1JLGFBQUE7RUErREY7QUFDRjtBQTVEQTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQStERjtBQTdERTtFQUNFLGlCQUFBO0FBK0RKO0FBN0RJO0VEckdJLGNFN0ZJO0FEa1FaO0FEdklRO0VBQ0ksZUN1RW1CO0FBa0UvQjtBRHZJWTtFQUhKO0lBSVEsb0RBQUE7RUMwSWQ7QUFDRjtBRHhJWTtFQVBKO0lBUVEsZUNnRXFCO0VBMkVuQztBQUNGO0FEOVBRO0VDOEtOO0lBUUksYUFBQTtFQTRFSjtBQUNGO0FEblFRO0VDd0tSO0lBbUJJLGFBQUE7RUE0RUY7QUFDRjtBQXpFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JDNU5NO0VENk5OLFVBQUE7RUFDQSw4Q0NwTU87RURxTVAsUUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQTRFRjtBQTFFRTtFQWZGO0lBZ0JJLDBCQUFBO0VBNkVGO0FBQ0Y7QUEzRUU7RUFDRSxhQUFBO0FBNkVKO0FBMUVFO0VBQ0UsYUFBQTtBQTRFSjtBQXhFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUEwRUo7QUQxU1E7RUMyTk47SUFTSSxhQUFBO0VBMEVKO0FBQ0Y7QUF4RUk7RUQ1TUEsYUFBQTtFQUdJLG1CQWlCa0I7RUFibEIsdUJBYXVCO0VBVHZCLG1CQVMrQjtFQUwvQixxQkFLdUM7RUFDM0MsZ0JDd0xrQjtFRHZMbEIsV0FBQTtFQUdJLFlDb0xxQjtBQWlGN0I7QUEvRU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFpRlI7QUQ3VFE7RUN1T0o7SUQ1TUEsYUFBQTtJQUdJLG1CQWlCa0I7SUFibEIsdUJBYXVCO0lBVHZCLG1CQVMrQjtJQUwvQixxQkFLdUM7SUFDM0MsZ0JDZ01vQjtJRC9McEIsV0FBQTtJQUdJLFlDNEx1QjtFQXdGN0I7QUFDRjtBRHpVUTtFQ3VPSjtJRDVNQSxhQUFBO0lBR0ksbUJBaUJrQjtJQWJsQix1QkFhdUI7SUFUdkIsbUJBUytCO0lBTC9CLHFCQUt1QztJQUMzQyxnQkNvTW9CO0lEbk1wQixXQUFBO0lBR0ksWUNnTXVCO0VBZ0c3QjtBQUNGO0FBNUZFO0VBQ0UsYUFBQTtBQThGSjtBQTNGRTtFQUNFLGFBQUE7QUE2Rko7QUExRkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxnQ0FBQTtBQTJGSjtBQXpGSTtFQUNFLGdCQUFBO0FBMkZOO0FBdkZFO0VBQ0UsY0MvUlE7RURnU1Isa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQXlGSjtBRDdXUTtFQytMUjtJQXlGSSxVQUFBO0VBeUZGO0FBQ0Y7QURsWFE7RUMrTFI7SUE2RkksVUFBQTtFQTBGRjtBQUNGO0FEdlhRO0VDK0xSO0lBaUdJLFVBQUE7RUEyRkY7QUFDRjtBRDVYUTtFQytMUjtJQXFHSSxVQUFBO0VBNEZGO0FBQ0Y7QURqWVE7RUMrTFI7SUF5R0ksVUFBQTtFQTZGRjtBQUNGO0FBMUZBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBNkZGO0FBMUZBO0VBQ0UsY0FBQTtBQTZGRjtBQTFGQTtFQUNFO0lBQ0UsNkJBQUE7RUE2RkY7RUExRkE7SUFDRSwwQkFBQTtFQTRGRjtBQUNGO0FBekZBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQTJGRjtBRHhhUTtFQ3FVUjtJQVdJLFlBQUE7SUFDQSwwQkFBQTtFQTRGRjtBQUNGO0FEOWFRO0VDeVZKO0lBQ0UsY0FBQTtJQUNBLDBCQUFBO0lBQ0EsWUFBQTtJQUNBLDZCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQXdGSjtFQXRGSTtJQUNFLDRCQUFBO0lBQ0Esb0NBQUE7RUF3Rk47QUFDRjtBRDViUTtFQ3lWSjtJQWNJLFlBQUE7RUF5Rk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWl4aW4gdHJ1bmNhdGUoJG1heC13aWR0aCkge1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuJGJyZWFrcG9pbnRzOiAoXCJwaG9uZVwiOiA0MDBweCxcclxuICAgIFwicGhvbmUtd2lkZVwiOiA0ODBweCxcclxuICAgIFwicGhhYmxldFwiOiA1NjBweCxcclxuICAgIFwidGFibGV0LXNtYWxsXCI6IDY0MHB4LFxyXG4gICAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgICBcInRhYmxldC1tXCI6IDEwMDBweCxcclxuICAgIFwidGFibGV0LXdpZGVcIjogMTAyNHB4LFxyXG4gICAgXCJkZXNrdG9wXCI6IDEyNDhweCxcclxuICAgIFwiZGVza3RvcC13aWRlXCI6IDE0NDBweCk7XHJcblxyXG5AbWl4aW4gbXEoJHdpZHRoLCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwX2hhc19rZXkoJGJyZWFrcG9pbnRzLCAkd2lkdGgpIHtcclxuICAgICAgICAkd2lkdGg6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkd2lkdGgpO1xyXG5cclxuICAgICAgICBAaWYgJHR5cGU9PW1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoI3skdHlwZX0td2lkdGg6ICR3aWR0aCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiB6KCRuYW1lKSB7XHJcbiAgICBAaWYgaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpIHtcclxuICAgICAgICBAcmV0dXJuIChsZW5ndGgoJHotaW5kZXhlcykgLSBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkpKzE7XHJcbiAgICB9XHJcblxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEB3YXJuICdUaGVyZSBpcyBubyBpdGVtIFwiI3skbmFtZX1cIiBpbiB0aGlzIGxpc3Q7IGNob29zZSBvbmUgb2Y6ICN7JHotaW5kZXhlc30nO1xyXG4gICAgICAgIEByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuJHotaW5kZXhlczogKFwib3V0ZGF0ZWQtYnJvd3NlclwiLCBcIm1vZGFsXCIsIFwic2l0ZS1oZWFkZXJcIiwgXCJwYWdlLXdyYXBwZXJcIiwgXCJzaXRlLWZvb3RlclwiKTtcclxuXHJcbi8vLS0tLWJlZm9yZSBhZnRlclxyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiBcIlwiKSB7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbnRlbnQoJGRpcmVjdGlvbjogZmFsc2UsICRqdXN0aWZ5OiBmYWxzZSwgJGFsaWduOiBmYWxzZSwgJGFsaWduLWNvbnRlbnQ6IGZhbHNlKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBpZiAkZGlyZWN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGp1c3RpZnkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduLWNvbnRlbnQge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICRhbGlnbi1jb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmlndXJlKCR3aWR0aCwgJGhlaWdodDogZmFsc2UpIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csIGNlbnRlciwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAaWYgJGhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9zY2FsYXJlIGZvbnRcclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbHVpZC10eXBlLXNpemUoJG1pbi1mb250LXNpemUsXHJcbiAgICAkbWF4LWZvbnQtc2l6ZSxcclxuICAgICRmZjogZmFsc2UsXHJcbiAgICAkY29sb3VyOiBmYWxzZSxcclxuICAgICRhbGlnbjogZmFsc2UsXHJcbiAgICAkbGg6IGZhbHNlLFxyXG4gICAgJHdlaWdodDogZmFsc2UsXHJcbiAgICAkbWluLXZ3OiAzMjBweCxcclxuICAgICRtYXgtdnc6IDEyMDBweCkge1xyXG4gICAgQGlmICRmZiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmZjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGNvbG91ciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICR3ZWlnaHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkbGgge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGg7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgICR1MTogdW5pdCgkbWluLXZ3KTtcclxuICAgICR1MjogdW5pdCgkbWF4LXZ3KTtcclxuICAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAkdTQ6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gQGlmICRtaW4tZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vIEBpZiAkbWF4LWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuXHJcblxyXG4gICAgQGlmICR1MT09JHUyIGFuZCAkdTE9PSR1MyBhbmQgJHUxPT0kdTQge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHRpbWUpIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAkdGltZSBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAwO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjFzIGFsbDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmhlYWRlcl9fbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogMjQ1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG59XG4uaGVhZGVyX19sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI0N3B4KSB7XG4gIC5oZWFkZXJfX2xvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDI0NXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTlweCkge1xuICAuaGVhZGVyX19sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbn1cblxuLm1lbnUge1xuICBtYXgtd2lkdGg6IDY1NXB4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubWVudV9faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZW51X19pdGVtIGEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1lbnVfX2l0ZW0gYSAuaWNvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjQTlBOUE5O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLm1lbnVfX2l0ZW0gYSAuaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDM5cHgpIHtcbiAgLm1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnNpbmctdXAgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc2luZy1pbiB7XG4gIG1heC13aWR0aDogMTA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzQjNGO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2luZy1pbiBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5pcy1zY3JvbGxpbmcsXG4uZGlmZmVyZW50LFxuLmRpZmZlcmVudC0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAyNXB4IHJnYmEoMTUsIDI4LCA3MSwgMC4xKTtcbn1cblxuLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gIGNvbG9yOiAjRkYzQjNGICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2V0dGluZ3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxODBweDtcbiAgdG9wOiA3NXB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uc2V0dGluZ3Mge1xuICBmb250LXNpemU6IDEycHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuc2V0dGluZ3Mge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMCAqICgoMTAwdncgLSAzMjBweCkgLyA4ODApKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zZXR0aW5ncyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG4uc2V0dGluZ3NfX2l0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNldHRpbmdzX19pdGVtIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnNldHRpbmdzX19pdGVtIGE6OmJlZm9yZSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY29sb3I6ICNBOUE5QTk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjQ3cHgpIHtcbiAgLnNldHRpbmdzIHtcbiAgICB0b3A6IDY0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTU5cHgpIHtcbiAgLnNldHRpbmdzIHtcbiAgICB0b3A6IDU0cHg7XG4gIH1cbn1cblxuLnVzZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAudXNlciB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyA0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnVzZXIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLnVzZXJfX25hbWUge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVzZXJfX2JhbGFuY2Uge1xuICBjb2xvcjogI0ZGM0IzRjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgLnVzZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnVzZXItb3B0aW9ucyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA1OSwgNjMsIDAuNCk7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtRXh0cmFCb2xkO1xuICBjb2xvcjogI0ZGM0IzRjtcbn1cbi51c2VyLW9wdGlvbnMge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAudXNlci1vcHRpb25zIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTRweCArIDQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudXNlci1vcHRpb25zIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi51c2VyLW9wdGlvbnMgaSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBhcHAtc2VhcmNoLWZvcm0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLndyYXBwZXItbG9nbyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjRkYzQjNGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudS1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLm1lbnUtaWNvbiB7XG4gICAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAxMCAqICgoMTAwdncgLSAzMjBweCkgLyA4ODApKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5tZW51LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLm1lbnUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ubWVudS1hZGFwdGl2ZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5tZW51LWFkYXB0aXZlIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tZW51LWFkYXB0aXZlIC5zZWFyY2ggYSB7XG4gIGNvbG9yOiAjRkYzQjNGO1xufVxuLm1lbnUtYWRhcHRpdmUgLnNlYXJjaCBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLm1lbnUtYWRhcHRpdmUgLnNlYXJjaCBhIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTZweCArIDEwICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1lbnUtYWRhcHRpdmUgLnNlYXJjaCBhIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1lbnUtYWRhcHRpdmUgLnNlYXJjaCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLm1lbnUtYWRhcHRpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnJlc3BvbnNpdmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDMwJTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAyNXB4IHJnYmEoMTUsIDI4LCA3MSwgMC4xKTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucmVzcG9uc2l2ZSB7XG4gICAgYW5pbWF0aW9uOiBzdGFydCAwLjVzIGJvdGg7XG4gIH1cbn1cbi5yZXNwb25zaXZlIC5zaW5nLXVwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yZXNwb25zaXZlIC5pcy1hdXRoIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yZXNwb25zaXZlX19sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLnJlc3BvbnNpdmVfX2xvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5yZXNwb25zaXZlX19sb2dvIC5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbn1cbi5yZXNwb25zaXZlX19sb2dvIC5sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC5yZXNwb25zaXZlX19sb2dvIC5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTU5cHgpIHtcbiAgLnJlc3BvbnNpdmVfX2xvZ28gLmxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxufVxuLnJlc3BvbnNpdmUgLnVzZXItb3B0aW9ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucmVzcG9uc2l2ZSAudXNlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucmVzcG9uc2l2ZSAubWVudV9faXRlbSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTlBOUE5O1xufVxuLnJlc3BvbnNpdmUgLm1lbnVfX2l0ZW0gYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucmVzcG9uc2l2ZSAuY2xvc2Uge1xuICBjb2xvcjogI0ZGM0IzRjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNTksIDYzLCAwLjQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNDdweCkge1xuICAucmVzcG9uc2l2ZSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLnJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgLnJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTU5cHgpIHtcbiAgLnJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgLnJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLm1hc2sge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmFjdGl2ZS1tYXNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBrZXlmcmFtZXMgc3RhcnQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIH1cbn1cbi5hY3RpdmUtc2VhY2gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1heC13aWR0aDogY2FsYyg5MCUgLSAwcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogNTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTlweCkge1xuICAuYWN0aXZlLXNlYWNoIHtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDkwJSAtIDVweCk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5mb3JtIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLmZvcm1fX2lucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFRkVGRUYgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDU1OXB4KSB7XG4gIDpob3N0IDo6bmctZGVlcCAuZm9ybSB7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICB9XG59IiwiJHByaW1hcnk6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1kYXJrOiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctbGlnaHQ6IHJnYmEoI0NBRUJGMCwgMC4yKTtcclxuJGRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWxpZ2h0OiMwMDAwMDA7XHJcbiRsaWdodDogI2ZmZjtcclxuJG1lZGl1bTogI0E5QTlBOTtcclxuJG1lZGl1bS1zaGFkb3ctZGFyazogI2Y5ZjlmOTtcclxuJG1lZGl1bS1zaGFkb3ctbGlnaHQ6ICNFRkVGRUY7XHJcbiRzZWNvbmRhcnk6ICNGRjNCM0Y7XHJcbiRzdWNjZXNzOiAjMkFCOTMwO1xyXG4vLyAkaW50ZXJtZWRpYXRlOiAjNjU1ZjVmO1xyXG5cclxuJGJvbGRlcjogUG9wcGlucy1FeHRyYUJvbGQ7XHJcbiRib2xkOiBQb3BwaW5zLUJvbGQ7XHJcbiRmLW1lZGl1bTogUG9wcGlucy1TZW1pQm9sZDtcclxuJHJlZ3VsYXI6IFBvcHBpbnMtUmVndWxhcjtcclxuJGYtbGlnaHQ6IFBvcHBpbnMtTGlnaHQ7XHJcbiRmLWl0YWxpYzogUG9wcGlucy1JdGFsaWM7XHJcblxyXG4kY29udGFpbmVyOiAxMzY1cHg7XHJcblxyXG4kYnRuLWhlaWdodDogNDBweDtcclxuJGRlZmF1bHQtcGFkZGluZzogMTVweDtcclxuJGl0ZW0tcGFkZGluZzogNXB4O1xyXG5cclxuJHJhZGl1czogMTBweDtcclxuXHJcbiRvcGFjaXR5OiByZ2JhKCRkYXJrLCAwLjIpO1xyXG5cclxuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMzIwMjQsICNGRkQ1NEMpO1xyXG4kc2hhZG93OiAwcHggMnB4IDI1cHggcmdiYSgxNSwgMjgsIDcxLCAwLjEpO1xyXG4kc2hhZG93LWJ0bjogMHB4IDI0cHggMTZweCAtMjJweCAjZmYzYjNmO1xyXG4kc2hhZG93LXN1Y2Nlc3M6IDBweCAyNHB4IDE2cHggLTIycHggJHN1Y2Nlc3M7XHJcblxyXG4kc3VjY2Vzcy1jb2xvcjogI2I3ZDhiNztcclxuJGVycm9yLWNvbG9yOiAjZjhiN2JkO1xyXG4kd2Fybi1jb2xvcjogI2ZmZTM5OTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: src_app_services_current_route_service__WEBPACK_IMPORTED_MODULE_1__["CurrentRouteService"] }, { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, { onScrollEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "6OAP":
/*!**************************************************!*\
  !*** ./src/app/_interceptors/app.interceptor.ts ***!
  \**************************************************/
/*! exports provided: AppInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInterceptor", function() { return AppInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _services_ssr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/ssr.service */ "pn+j");





class AppInterceptor {
    constructor(authS, ssrS) {
        this.authS = authS;
        this.ssrS = ssrS;
    }
    intercept(req, next) {
        // console.log(req.url);
        let headers = {};
        let url = req.url;
        if (req.url.startsWith("/")) {
            if (!req.headers.get("Content-Type") && (this.ssrS.isBrowser && !(req.body instanceof FormData) || !this.ssrS.isBrowser)) {
                headers["Content-Type"] = "application/json"; // FormData - передаём файлы
            }
            headers["Authorization"] = this.authS.getToken() || "";
            headers["Language"] = 'en';
            url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + req.url;
        }
        return next.handle(req.clone({ setHeaders: headers, url }));
    }
}
AppInterceptor.ɵfac = function AppInterceptor_Factory(t) { return new (t || AppInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_ssr_service__WEBPACK_IMPORTED_MODULE_3__["SsrService"])); };
AppInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppInterceptor, factory: AppInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _services_ssr_service__WEBPACK_IMPORTED_MODULE_3__["SsrService"] }]; }, null); })();


/***/ }),

/***/ "7Vn+":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utils_cookieUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_utils/cookieUtils */ "ZwT2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ssr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ssr.service */ "pn+j");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/settings.service */ "f6A8");








class AuthService {
    constructor(httpClient, router, ssrS, _settings) {
        this.httpClient = httpClient;
        this.router = router;
        this.ssrS = ssrS;
        this._settings = _settings;
        // user: User = null;
        this.user = {
            firstName: 'Aaaaa',
            lastName: 'Bbbbbb',
            balance: 23,
            email: 'ddd@ffff'
        };
        this.onUserDataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.resources = {
            login: "/client/login",
            logout: "/client/logout",
            checkToken: "/client/check-token",
            registerStep1: "/client/register-step-1",
            registerStep2: "/client/register-step-2",
            forgotPasswordStep1: "/client/forgot-password-step-1",
            forgotPasswordStep2: "/client/forgot-password-step-2",
            forgotPasswordStep3: "/client/forgot-password-step-3",
            changePassword: "/client/change-password"
        };
    }
    get isAuth() {
        return !!this.user;
    }
    login(email, password, remember = true) {
        return new Promise((resolve, reject) => {
            this.httpClient.post(this.resources.login, { email, password }).subscribe((data) => {
                this.user = data.user;
                if (remember) {
                    localStorage.setItem("token", data.token);
                    Object(_utils_cookieUtils__WEBPACK_IMPORTED_MODULE_2__["deleteCookie"])("token");
                }
                else {
                    localStorage.removeItem("token");
                    Object(_utils_cookieUtils__WEBPACK_IMPORTED_MODULE_2__["setCookie"])("token", data.token);
                }
                this.onUserDataChanged.emit();
                resolve();
            }, (error) => {
                reject(error.error);
            });
        });
    }
    logout() {
        this.httpClient.get(this.resources.logout).subscribe(() => { });
        this.user = null;
        localStorage.removeItem("token");
        Object(_utils_cookieUtils__WEBPACK_IMPORTED_MODULE_2__["deleteCookie"])("token");
        this._settings.logout = false;
        this.router.navigate(['home']);
        this.onUserDataChanged.emit();
    }
    register(body) {
        console.log('B: ', body);
        return new Promise((resolve, reject) => {
            this.httpClient.post(this.resources.registerStep1, body).subscribe(() => {
                console.log('AAAA');
                resolve();
            }, (error) => {
                console.log('BBBBB');
                reject(error.error);
            });
        });
    }
    getToken() {
        return this.ssrS.isBrowser ? Object(_utils_cookieUtils__WEBPACK_IMPORTED_MODULE_2__["getCookie"])("token") || localStorage.getItem("token") : "";
    }
    startChangeForgotPassword(email) {
        return new Promise((resolve, reject) => {
            this.httpClient.post(this.resources.forgotPasswordStep1, { email }).subscribe(() => {
                resolve();
            }, (error) => {
                reject(error.error);
            });
        });
    }
    endChangeForgotPassword(password) {
        return new Promise((resolve, reject) => {
            this.httpClient.post(this.resources.forgotPasswordStep3, { password }, {
                params: this.router.parseUrl(this.router.url).queryParams
            }).subscribe(() => {
                resolve();
            }, (error) => {
                reject(error.error);
            });
        });
    }
    changePassword(oldPassword, newPassword) {
        return new Promise((resolve, reject) => {
            this.httpClient.post(this.resources.changePassword, { oldPassword, newPassword }).subscribe(() => {
                this.user = null;
                this.onUserDataChanged.emit();
                resolve();
            }, (error) => {
                reject(error.error);
            });
        });
    }
    checkTokenAndGetUser(blockPage = true) {
        return new Promise((resolve) => {
            // console.log('START');
            if (!this.getToken()) {
                if (blockPage)
                    this._blockPage();
                return resolve(false);
            }
            this.httpClient.get(this.resources.checkToken).subscribe((data) => {
                this.user = data;
                // console.log('USER: ', this.user);
                this.onUserDataChanged.emit();
                resolve(true);
            }, () => {
                console.log('FALSE');
                if (blockPage)
                    this._blockPage();
                resolve(false);
            });
        });
    }
    _blockPage() {
        this.user = null;
        if (this.ssrS.isBrowser) {
            localStorage.removeItem("token");
            Object(_utils_cookieUtils__WEBPACK_IMPORTED_MODULE_2__["deleteCookie"])("token");
        }
        this.onUserDataChanged.emit();
        this.router.navigateByUrl(`/home`);
    }
    loginFromGoogle(remember) {
        return new Promise((resolve, reject) => {
            const onMessage = (event) => {
                if (event.origin === src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url) {
                    const data = JSON.parse(event.data);
                    this.user = data.user;
                    if (data.remember) {
                        localStorage.setItem("token", data.token);
                        Object(_utils_cookieUtils__WEBPACK_IMPORTED_MODULE_2__["deleteCookie"])("token");
                    }
                    else {
                        localStorage.removeItem("token");
                        Object(_utils_cookieUtils__WEBPACK_IMPORTED_MODULE_2__["setCookie"])("token", data.token);
                    }
                    this.onUserDataChanged.emit();
                    resolve();
                }
            };
            let width = Math.min(window.outerWidth, 500);
            let height = Math.min(window.outerHeight, 500);
            let authWindow = open(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + `/client/login_from_google_1?remember=${remember}`, "", `width=${width},height=${height}`);
            authWindow.moveTo((window.outerWidth - width) / 2, (window.outerHeight - height) / 2);
            window.addEventListener('message', onMessage);
            const timer = setInterval(() => {
                if (authWindow.closed) {
                    window.removeEventListener("message", onMessage);
                    clearInterval(timer);
                    reject();
                }
            }, 100);
        });
    }
    loginFromFacebook(remember) {
        return new Promise((resolve, reject) => {
            const onMessage = (event) => {
                if (event.origin === src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url) {
                    const data = JSON.parse(event.data);
                    this.user = data.user;
                    if (data.remember) {
                        localStorage.setItem("token", data.token);
                        Object(_utils_cookieUtils__WEBPACK_IMPORTED_MODULE_2__["deleteCookie"])("token");
                    }
                    else {
                        localStorage.removeItem("token");
                        Object(_utils_cookieUtils__WEBPACK_IMPORTED_MODULE_2__["setCookie"])("token", data.token);
                    }
                    this.onUserDataChanged.emit();
                    resolve();
                }
            };
            let width = Math.min(window.outerWidth, 500);
            let height = Math.min(window.outerHeight, 500);
            let authWindow = open(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + `/client/login_from_facebook_1?remember=${remember}`, "", `width=${width},height=${height}`);
            authWindow.moveTo((window.outerWidth - width) / 2, (window.outerHeight - height) / 2);
            window.addEventListener('message', onMessage);
            const timer = setInterval(() => {
                if (authWindow.closed) {
                    window.removeEventListener("message", onMessage);
                    clearInterval(timer);
                    reject();
                }
            }, 100);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ssr_service__WEBPACK_IMPORTED_MODULE_5__["SsrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ssr_service__WEBPACK_IMPORTED_MODULE_5__["SsrService"] }, { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // url: 'http://localhost:5000'
    url: 'http://192.168.42.60:5000'
    // url: 'http://192.168.0.12:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BsnK":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_queries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/queries.service */ "x+J2");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AboutUsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.about.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.about.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class AboutUsComponent {
    constructor(query, sanitizer) {
        this.query = query;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.query.getAbout().subscribe((data) => {
            data.text = this.sanitizer.bypassSecurityTrustHtml(data.text);
            console.log(data);
            this.about = data;
        });
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_queries_service__WEBPACK_IMPORTED_MODULE_1__["QueriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 2, vars: 1, consts: [[1, "wrapper-container"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "title"], [1, "quil", 3, "innerHTML"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutUsComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.about);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding: 50px 0;\n}\n@media only screen and (max-width: 559px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n}\n.quil[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n@media only screen and (max-width: 767px) {\n  .quil[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n}\n@media only screen and (max-width: 559px) {\n  .quil[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUpBO0VBQ0k7SUFDSSxVQUFBO0VDeEpOO0VEMkpFO0lBQ0ksVUFBQTtFQ3pKTjtBQUNGO0FBSkE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUFNSjtBRGdCUTtFQ3hCUjtJQUlRLGVBQUE7RUFRTjtBQUNGO0FBTEE7RUFDSSxnQkFBQTtBQVFKO0FET1E7RUNoQlI7SUFHUSxnQkFBQTtFQVVOO0FBQ0Y7QURFUTtFQ2hCUjtJQU1RLGdCQUFBO0VBWU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWl4aW4gdHJ1bmNhdGUoJG1heC13aWR0aCkge1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuJGJyZWFrcG9pbnRzOiAoXCJwaG9uZVwiOiA0MDBweCxcclxuICAgIFwicGhvbmUtd2lkZVwiOiA0ODBweCxcclxuICAgIFwicGhhYmxldFwiOiA1NjBweCxcclxuICAgIFwidGFibGV0LXNtYWxsXCI6IDY0MHB4LFxyXG4gICAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgICBcInRhYmxldC1tXCI6IDEwMDBweCxcclxuICAgIFwidGFibGV0LXdpZGVcIjogMTAyNHB4LFxyXG4gICAgXCJkZXNrdG9wXCI6IDEyNDhweCxcclxuICAgIFwiZGVza3RvcC13aWRlXCI6IDE0NDBweCk7XHJcblxyXG5AbWl4aW4gbXEoJHdpZHRoLCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwX2hhc19rZXkoJGJyZWFrcG9pbnRzLCAkd2lkdGgpIHtcclxuICAgICAgICAkd2lkdGg6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkd2lkdGgpO1xyXG5cclxuICAgICAgICBAaWYgJHR5cGU9PW1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoI3skdHlwZX0td2lkdGg6ICR3aWR0aCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiB6KCRuYW1lKSB7XHJcbiAgICBAaWYgaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpIHtcclxuICAgICAgICBAcmV0dXJuIChsZW5ndGgoJHotaW5kZXhlcykgLSBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkpKzE7XHJcbiAgICB9XHJcblxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEB3YXJuICdUaGVyZSBpcyBubyBpdGVtIFwiI3skbmFtZX1cIiBpbiB0aGlzIGxpc3Q7IGNob29zZSBvbmUgb2Y6ICN7JHotaW5kZXhlc30nO1xyXG4gICAgICAgIEByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuJHotaW5kZXhlczogKFwib3V0ZGF0ZWQtYnJvd3NlclwiLCBcIm1vZGFsXCIsIFwic2l0ZS1oZWFkZXJcIiwgXCJwYWdlLXdyYXBwZXJcIiwgXCJzaXRlLWZvb3RlclwiKTtcclxuXHJcbi8vLS0tLWJlZm9yZSBhZnRlclxyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiBcIlwiKSB7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbnRlbnQoJGRpcmVjdGlvbjogZmFsc2UsICRqdXN0aWZ5OiBmYWxzZSwgJGFsaWduOiBmYWxzZSwgJGFsaWduLWNvbnRlbnQ6IGZhbHNlKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBpZiAkZGlyZWN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGp1c3RpZnkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduLWNvbnRlbnQge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICRhbGlnbi1jb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmlndXJlKCR3aWR0aCwgJGhlaWdodDogZmFsc2UpIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csIGNlbnRlciwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAaWYgJGhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9zY2FsYXJlIGZvbnRcclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbHVpZC10eXBlLXNpemUoJG1pbi1mb250LXNpemUsXHJcbiAgICAkbWF4LWZvbnQtc2l6ZSxcclxuICAgICRmZjogZmFsc2UsXHJcbiAgICAkY29sb3VyOiBmYWxzZSxcclxuICAgICRhbGlnbjogZmFsc2UsXHJcbiAgICAkbGg6IGZhbHNlLFxyXG4gICAgJHdlaWdodDogZmFsc2UsXHJcbiAgICAkbWluLXZ3OiAzMjBweCxcclxuICAgICRtYXgtdnc6IDEyMDBweCkge1xyXG4gICAgQGlmICRmZiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmZjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGNvbG91ciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICR3ZWlnaHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkbGgge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGg7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgICR1MTogdW5pdCgkbWluLXZ3KTtcclxuICAgICR1MjogdW5pdCgkbWF4LXZ3KTtcclxuICAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAkdTQ6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gQGlmICRtaW4tZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vIEBpZiAkbWF4LWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuXHJcblxyXG4gICAgQGlmICR1MT09JHUyIGFuZCAkdTE9PSR1MyBhbmQgJHUxPT0kdTQge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHRpbWUpIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAkdGltZSBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1OXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgfVxufVxuXG4ucXVpbCB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5xdWlsIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1OXB4KSB7XG4gIC5xdWlsIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.scss']
            }]
    }], function () { return [{ type: _services_queries_service__WEBPACK_IMPORTED_MODULE_1__["QueriesService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "DdXh":
/*!*************************************************************!*\
  !*** ./src/app/shared/search-form/search-form.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class SearchFormComponent {
    constructor() {
        this.value = '';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    changeValue(event) {
        console.log('AA: ', event.target.value);
        this.value = event.target.value;
        this.valueChange.emit(event.target.value);
    }
}
SearchFormComponent.ɵfac = function SearchFormComponent_Factory(t) { return new (t || SearchFormComponent)(); };
SearchFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchFormComponent, selectors: [["app-search-form"]], inputs: { value: "value" }, outputs: { valueChange: "valueChange" }, decls: 3, vars: 1, consts: [[1, "form"], ["type", "text", "placeholder", "Dou I", 1, "form__input", 3, "ngModel", "input"], ["type", "submit", 1, "btn", "form__btn", "flaticon-magnifiying-glass"]], template: function SearchFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SearchFormComponent_Template_input_input_1_listener($event) { return ctx.changeValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 5px;\n  background-color: #fff;\n  display: flex;\n  max-width: 560px;\n  width: 100%;\n  border: 1px solid #EFEFEF;\n}\n.form__btn[_ngcontent-%COMP%] {\n  background-color: #FF3B3F;\n  width: 45px;\n  height: 40px;\n  border-radius: 0 10px 10px 0;\n  border: none;\n  outline: none;\n  font-size: 20px;\n  color: #fff;\n  font-weight: bold;\n  transition: 0.5s ease-in-out all;\n  border: 2px solid #FF3B3F;\n  margin-top: 0;\n}\n@media only screen and (min-width: 1024px) {\n  .form__btn[_ngcontent-%COMP%]:hover {\n    background-color: #fff;\n    color: #FF3B3F;\n  }\n}\n.form__input[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  border: none;\n  outline: none;\n  height: 40px;\n  padding: 0 15px;\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NlYXJjaC1mb3JtL3NlYXJjaC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUpBO0VBQ0k7SUFDSSxVQUFBO0VDeEpOO0VEMkpFO0lBQ0ksVUFBQTtFQ3pKTjtBQUNGO0FBSkE7RUFDRSxtQkN1Qk87RUR0QlAsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBTUY7QUFIRTtFQUNFLHlCQ0pRO0VES1IsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdDZkk7RURnQkosaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUtKO0FESFE7RUNDRjtJQUNFLHNCQ3ZCQTtJRHdCQSxjQ3BCSTtFRHlCVjtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtaXhpbiB0cnVuY2F0ZSgkbWF4LXdpZHRoKSB7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludHM6IChcInBob25lXCI6IDQwMHB4LFxyXG4gICAgXCJwaG9uZS13aWRlXCI6IDQ4MHB4LFxyXG4gICAgXCJwaGFibGV0XCI6IDU2MHB4LFxyXG4gICAgXCJ0YWJsZXQtc21hbGxcIjogNjQwcHgsXHJcbiAgICBcInRhYmxldFwiOiA3NjhweCxcclxuICAgIFwidGFibGV0LW1cIjogMTAwMHB4LFxyXG4gICAgXCJ0YWJsZXQtd2lkZVwiOiAxMDI0cHgsXHJcbiAgICBcImRlc2t0b3BcIjogMTI0OHB4LFxyXG4gICAgXCJkZXNrdG9wLXdpZGVcIjogMTQ0MHB4KTtcclxuXHJcbkBtaXhpbiBtcSgkd2lkdGgsICR0eXBlOiBtaW4pIHtcclxuICAgIEBpZiBtYXBfaGFzX2tleSgkYnJlYWtwb2ludHMsICR3aWR0aCkge1xyXG4gICAgICAgICR3aWR0aDogbWFwX2dldCgkYnJlYWtwb2ludHMsICR3aWR0aCk7XHJcblxyXG4gICAgICAgIEBpZiAkdHlwZT09bWF4IHtcclxuICAgICAgICAgICAgJHdpZHRoOiAkd2lkdGggLSAxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgjeyR0eXBlfS13aWR0aDogJHdpZHRoKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHooJG5hbWUpIHtcclxuICAgIEBpZiBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkge1xyXG4gICAgICAgIEByZXR1cm4gKGxlbmd0aCgkei1pbmRleGVzKSAtIGluZGV4KCR6LWluZGV4ZXMsICRuYW1lKSkrMTtcclxuICAgIH1cclxuXHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgQHdhcm4gJ1RoZXJlIGlzIG5vIGl0ZW0gXCIjeyRuYW1lfVwiIGluIHRoaXMgbGlzdDsgY2hvb3NlIG9uZSBvZjogI3skei1pbmRleGVzfSc7XHJcbiAgICAgICAgQHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4kei1pbmRleGVzOiAoXCJvdXRkYXRlZC1icm93c2VyXCIsIFwibW9kYWxcIiwgXCJzaXRlLWhlYWRlclwiLCBcInBhZ2Utd3JhcHBlclwiLCBcInNpdGUtZm9vdGVyXCIpO1xyXG5cclxuLy8tLS0tYmVmb3JlIGFmdGVyXHJcbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6IFwiXCIpIHtcclxuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAgICBwb3NpdGlvbjogJHBvcztcclxufVxyXG5cclxuQG1peGluIGZsZXgtY29udGVudCgkZGlyZWN0aW9uOiBmYWxzZSwgJGp1c3RpZnk6IGZhbHNlLCAkYWxpZ246IGZhbHNlLCAkYWxpZ24tY29udGVudDogZmFsc2UpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQGlmICRkaXJlY3Rpb24ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkanVzdGlmeSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24tY29udGVudCB7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogJGFsaWduLWNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmaWd1cmUoJHdpZHRoLCAkaGVpZ2h0OiBmYWxzZSkge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb250ZW50KHJvdywgY2VudGVyLCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIEBpZiAkaGVpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL3NjYWxhcmUgZm9udFxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkdmFsdWUpIHtcclxuICAgIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIGZsdWlkLXR5cGUtc2l6ZSgkbWluLWZvbnQtc2l6ZSxcclxuICAgICRtYXgtZm9udC1zaXplLFxyXG4gICAgJGZmOiBmYWxzZSxcclxuICAgICRjb2xvdXI6IGZhbHNlLFxyXG4gICAgJGFsaWduOiBmYWxzZSxcclxuICAgICRsaDogZmFsc2UsXHJcbiAgICAkd2VpZ2h0OiBmYWxzZSxcclxuICAgICRtaW4tdnc6IDMyMHB4LFxyXG4gICAgJG1heC12dzogMTIwMHB4KSB7XHJcbiAgICBAaWYgJGZmIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZmO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkY29sb3VyIHtcclxuICAgICAgICBjb2xvcjogJGNvbG91cjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJHdlaWdodCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRsaCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaDtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiAkYWxpZ247XHJcbiAgICB9XHJcblxyXG4gICAgJHUxOiB1bml0KCRtaW4tdncpO1xyXG4gICAgJHUyOiB1bml0KCRtYXgtdncpO1xyXG4gICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgICR1NDogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyBAaWYgJG1pbi1mb250LXNpemUge1xyXG4gICAgLy8gICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gQGlmICRtYXgtZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xyXG5cclxuXHJcbiAgICBAaWYgJHUxPT0kdTIgYW5kICR1MT09JHUzIGFuZCAkdTE9PSR1NCB7XHJcbiAgICAgICAgJiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkbWF4LWZvbnQtc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uICgkdGltZSkge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlICR0aW1lIGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59IiwiQGtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmZvcm0ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogNTYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUZFRkVGO1xufVxuLmZvcm1fX2J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjNCM0Y7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQgYWxsO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkYzQjNGO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmZvcm1fX2J0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogI0ZGM0IzRjtcbiAgfVxufVxuLmZvcm1fX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xufSIsIiRwcmltYXJ5OiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctZGFyazogI0NBRUJGMDtcclxuJHByaW1hcnktc2hhZG93LWxpZ2h0OiByZ2JhKCNDQUVCRjAsIDAuMik7XHJcbiRkYXJrOiMwMDAwMDA7XHJcbiRkYXJrLXNoYWRvdy1kYXJrOiMwMDAwMDA7XHJcbiRkYXJrLXNoYWRvdy1saWdodDojMDAwMDAwO1xyXG4kbGlnaHQ6ICNmZmY7XHJcbiRtZWRpdW06ICNBOUE5QTk7XHJcbiRtZWRpdW0tc2hhZG93LWRhcms6ICNmOWY5Zjk7XHJcbiRtZWRpdW0tc2hhZG93LWxpZ2h0OiAjRUZFRkVGO1xyXG4kc2Vjb25kYXJ5OiAjRkYzQjNGO1xyXG4kc3VjY2VzczogIzJBQjkzMDtcclxuLy8gJGludGVybWVkaWF0ZTogIzY1NWY1ZjtcclxuXHJcbiRib2xkZXI6IFBvcHBpbnMtRXh0cmFCb2xkO1xyXG4kYm9sZDogUG9wcGlucy1Cb2xkO1xyXG4kZi1tZWRpdW06IFBvcHBpbnMtU2VtaUJvbGQ7XHJcbiRyZWd1bGFyOiBQb3BwaW5zLVJlZ3VsYXI7XHJcbiRmLWxpZ2h0OiBQb3BwaW5zLUxpZ2h0O1xyXG4kZi1pdGFsaWM6IFBvcHBpbnMtSXRhbGljO1xyXG5cclxuJGNvbnRhaW5lcjogMTM2NXB4O1xyXG5cclxuJGJ0bi1oZWlnaHQ6IDQwcHg7XHJcbiRkZWZhdWx0LXBhZGRpbmc6IDE1cHg7XHJcbiRpdGVtLXBhZGRpbmc6IDVweDtcclxuXHJcbiRyYWRpdXM6IDEwcHg7XHJcblxyXG4kb3BhY2l0eTogcmdiYSgkZGFyaywgMC4yKTtcclxuXHJcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRTMyMDI0LCAjRkZENTRDKTtcclxuJHNoYWRvdzogMHB4IDJweCAyNXB4IHJnYmEoMTUsIDI4LCA3MSwgMC4xKTtcclxuJHNoYWRvdy1idG46IDBweCAyNHB4IDE2cHggLTIycHggI2ZmM2IzZjtcclxuJHNoYWRvdy1zdWNjZXNzOiAwcHggMjRweCAxNnB4IC0yMnB4ICRzdWNjZXNzO1xyXG5cclxuJHN1Y2Nlc3MtY29sb3I6ICNiN2Q4Yjc7XHJcbiRlcnJvci1jb2xvcjogI2Y4YjdiZDtcclxuJHdhcm4tY29sb3I6ICNmZmUzOTk7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-form',
                templateUrl: './search-form.component.html',
                styleUrls: ['./search-form.component.scss']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-form/search-form.component */ "DdXh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/modal.component */ "0zEo");
/* harmony import */ var _validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation-error-show/validation-error-show.component */ "1dAB");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_5__["SearchFormComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"],
        _validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_8__["ValidationErrorShowComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_5__["SearchFormComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"],
        _validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_8__["ValidationErrorShowComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_5__["SearchFormComponent"],
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"],
                    _validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_8__["ValidationErrorShowComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_5__["SearchFormComponent"],
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"],
                    _validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_8__["ValidationErrorShowComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "PSoG":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");



class AuthGuard {
    constructor(authS) {
        this.authS = authS;
    }
    canActivate(route, state) {
        // console.log('AAAAA');
        return this.authS.checkTokenAndGetUser();
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "RirG":
/*!****************************************************!*\
  !*** ./src/app/_services/current-route.service.ts ***!
  \****************************************************/
/*! exports provided: CurrentRouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentRouteService", function() { return CurrentRouteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




class CurrentRouteService {
    constructor(router) {
        this.router = router;
        this.url = '';
        this.getRouter();
    }
    getRouter() {
        this.router.events.subscribe((url) => {
            if (url instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.url = url.urlAfterRedirects;
                // console.log(url, this.url)
            }
            if (url instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                // console.log(url);
            }
        });
    }
}
CurrentRouteService.ɵfac = function CurrentRouteService_Factory(t) { return new (t || CurrentRouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CurrentRouteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrentRouteService, factory: CurrentRouteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentRouteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_current_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/current-route.service */ "RirG");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/settings.service */ "f6A8");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/modal/modal.component */ "0zEo");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");










function AppComponent_app_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
} }
function AppComponent_app_footer_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
const _c0 = function () { return ["/home"]; };
class AppComponent {
    constructor(_currentRoute, _settings, auth) {
        this._currentRoute = _currentRoute;
        this._settings = _settings;
        this.auth = auth;
        this.title = 'radio-test-client';
    }
    ngOnInit() {
        this.auth.checkTokenAndGetUser(false);
    }
    show(type) {
        if ((type == 'footer') && ((this._currentRoute.url == '/auth/success') || (this._currentRoute.url == '/auth/login') || (this._currentRoute.url == '/auth/register') || (this._currentRoute.url == '/auth/forgot-password') || (this._currentRoute.url == '/auth/reset-password'))) {
            return false;
        }
        if ((type == 'header') && ((this._currentRoute.url == '/auth/login') || (this._currentRoute.url == '/auth/register') || (this._currentRoute.url == '/auth/forgot-password') || (this._currentRoute.url == '/auth/reset-password'))) {
            return false;
        }
        else {
            return true;
        }
    }
    closeLogoutModal() {
        this._settings.logout = false;
    }
    logOut() {
        this.auth.logout();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_route_service__WEBPACK_IMPORTED_MODULE_1__["CurrentRouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 5, consts: [[4, "ngIf"], [3, "showFlag", "showFlagChange"], [1, "change__password"], [1, "logo", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", ""], [1, "modal__description"], [1, "wrapper", "modal__btns"], [1, "btn", 3, "click"], [1, "btn", "_outline", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_header_0_Template, 1, 0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_footer_2_Template, 1, 0, "app-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showFlagChange", function AppComponent_Template_app_modal_showFlagChange_3_listener($event) { return ctx._settings.logout = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Are you leaving us?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.closeLogoutModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show("header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show("footer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showFlag", ctx._settings.logout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  max-width: 175px;\n  width: 100%;\n  height: 50px;\n  margin: 0 auto;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.modal__description[_ngcontent-%COMP%] {\n  font-family: Poppins-Regular;\n  color: #A9A9A9;\n  text-align: center;\n  margin: 15px auto 25px;\n}\n.modal__description[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .modal__description[_ngcontent-%COMP%] {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .modal__description[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.modal__btns[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n@media only screen and (max-width: 479px) {\n  .modal__btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    max-width: 120px;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  max-width: 140px;\n  width: 100%;\n  height: 50px;\n}\n@media only screen and (max-width: 767px) {\n  .btn[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  max-width: 550px;\n  width: 100%;\n  background-color: #fff;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.form__label[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n}\n.form__label[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 15px;\n}\n.form__input[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  height: 50px;\n  background-color: rgba(202, 235, 240, 0.2);\n  padding: 15px;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  margin-top: 0;\n}\n.form__textarea[_ngcontent-%COMP%] {\n  height: 150px;\n  resize: none;\n}\n.form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  max-width: 160px;\n  width: 100%;\n  height: 50px;\n  margin-top: 25px;\n}\n@media only screen and (max-width: 767px) {\n  .form__input[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n  .form__textarea[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n  .form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    height: 40px;\n    max-width: 110px;\n  }\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@media screen and (min-width: 320px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: calc(16px + 6 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 10px auto 10px;\n  font-family: Poppins-SemiBold;\n  color: #A9A9A9;\n  text-align: center;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 320px) {\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: calc(14px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUpBO0VBQ0k7SUFDSSxVQUFBO0VDeEpOO0VEMkpFO0lBQ0ksVUFBQTtFQ3pKTjtBQUNGO0FBSkE7RURtREksYUFBQTtFQUdJLG1CQWlCa0I7RUFibEIsdUJBYXVCO0VBVHZCLG1CQVMrQjtFQUwvQixxQkFLdUM7RUFDM0MsZ0JDdkVnQjtFRHdFaEIsV0FBQTtFQUdJLFlDM0VtQjtFQUN2QixjQUFBO0FBYUo7QUFaSTtFQUNJLGVBQUE7QUFjUjtBQVRJO0VEdUZJLDRCRWxGRTtFRnNGRixjRWhHQztFRjRHRCxrQkN0R3dEO0VBQ3hELHNCQUFBO0FBY1I7QUR5R1E7RUFDSSxlQ3pIcUI7QUFrQmpDO0FEeUdZO0VBSEo7SUFJUSxtREFBQTtFQ3RHZDtBQUNGO0FEd0dZO0VBUEo7SUFRUSxlQ2hJdUI7RUEyQnJDO0FBQ0Y7QUF6Qkk7RUFDSSw2QkFBQTtBQTJCUjtBRGpCUTtFQ1RBO0lBRVEsZ0JBQUE7RUE0QmQ7QUFDRjtBQXhCQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEyQko7QUQ1QlE7RUNGUjtJQUtRLFlBQUE7RUE2Qk47QUFDRjtBQTFCQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQy9CSTtFRGdDSixtQkNYSztFRFlMLGFBQUE7RUFDQSxzQkFBQTtBQTZCSjtBQTVCSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBOEJSO0FBN0JRO0VBQ0ksZ0JBQUE7QUErQlo7QUE1Qkk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0NsRGU7RURtRGYsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkM1QkM7RUQ2QkQsYUFBQTtFQUNBLGFBQUE7QUE4QlI7QUE1Qkk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQThCUjtBQTNCSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTZCUjtBRHRFUTtFQzBEQTtJQUNJLFlBQUE7RUFlVjtFQWJNO0lBQ0ksYUFBQTtFQWVWO0VBYk07SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7RUFlVjtBQUNGO0FBWEE7RUFDSSxrQkFBQTtBQWNKO0FEb0JRO0VBQ0ksZUNsQ2lCO0FBZ0I3QjtBRG9CWTtFQUhKO0lBSVEsbURBQUE7RUNqQmQ7QUFDRjtBRG1CWTtFQVBKO0lBUVEsZUN6Q21CO0VBeUJqQztBQUNGO0FBdkJBO0VBQ0ksc0JBQUE7RURMSSw2QkVuRkc7RUZ1RkgsY0VoR0M7RUY0R0Qsa0JDVnFEO0FBNEI3RDtBREFRO0VBQ0ksZUM3QmlCO0FBK0I3QjtBREFZO0VBSEo7SUFJUSxtREFBQTtFQ0dkO0FBQ0Y7QUREWTtFQVBKO0lBUVEsZUNwQ21CO0VBd0NqQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWl4aW4gdHJ1bmNhdGUoJG1heC13aWR0aCkge1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuJGJyZWFrcG9pbnRzOiAoXCJwaG9uZVwiOiA0MDBweCxcclxuICAgIFwicGhvbmUtd2lkZVwiOiA0ODBweCxcclxuICAgIFwicGhhYmxldFwiOiA1NjBweCxcclxuICAgIFwidGFibGV0LXNtYWxsXCI6IDY0MHB4LFxyXG4gICAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgICBcInRhYmxldC1tXCI6IDEwMDBweCxcclxuICAgIFwidGFibGV0LXdpZGVcIjogMTAyNHB4LFxyXG4gICAgXCJkZXNrdG9wXCI6IDEyNDhweCxcclxuICAgIFwiZGVza3RvcC13aWRlXCI6IDE0NDBweCk7XHJcblxyXG5AbWl4aW4gbXEoJHdpZHRoLCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwX2hhc19rZXkoJGJyZWFrcG9pbnRzLCAkd2lkdGgpIHtcclxuICAgICAgICAkd2lkdGg6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkd2lkdGgpO1xyXG5cclxuICAgICAgICBAaWYgJHR5cGU9PW1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoI3skdHlwZX0td2lkdGg6ICR3aWR0aCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiB6KCRuYW1lKSB7XHJcbiAgICBAaWYgaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpIHtcclxuICAgICAgICBAcmV0dXJuIChsZW5ndGgoJHotaW5kZXhlcykgLSBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkpKzE7XHJcbiAgICB9XHJcblxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEB3YXJuICdUaGVyZSBpcyBubyBpdGVtIFwiI3skbmFtZX1cIiBpbiB0aGlzIGxpc3Q7IGNob29zZSBvbmUgb2Y6ICN7JHotaW5kZXhlc30nO1xyXG4gICAgICAgIEByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuJHotaW5kZXhlczogKFwib3V0ZGF0ZWQtYnJvd3NlclwiLCBcIm1vZGFsXCIsIFwic2l0ZS1oZWFkZXJcIiwgXCJwYWdlLXdyYXBwZXJcIiwgXCJzaXRlLWZvb3RlclwiKTtcclxuXHJcbi8vLS0tLWJlZm9yZSBhZnRlclxyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiBcIlwiKSB7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbnRlbnQoJGRpcmVjdGlvbjogZmFsc2UsICRqdXN0aWZ5OiBmYWxzZSwgJGFsaWduOiBmYWxzZSwgJGFsaWduLWNvbnRlbnQ6IGZhbHNlKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBpZiAkZGlyZWN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGp1c3RpZnkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduLWNvbnRlbnQge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICRhbGlnbi1jb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmlndXJlKCR3aWR0aCwgJGhlaWdodDogZmFsc2UpIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csIGNlbnRlciwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAaWYgJGhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9zY2FsYXJlIGZvbnRcclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbHVpZC10eXBlLXNpemUoJG1pbi1mb250LXNpemUsXHJcbiAgICAkbWF4LWZvbnQtc2l6ZSxcclxuICAgICRmZjogZmFsc2UsXHJcbiAgICAkY29sb3VyOiBmYWxzZSxcclxuICAgICRhbGlnbjogZmFsc2UsXHJcbiAgICAkbGg6IGZhbHNlLFxyXG4gICAgJHdlaWdodDogZmFsc2UsXHJcbiAgICAkbWluLXZ3OiAzMjBweCxcclxuICAgICRtYXgtdnc6IDEyMDBweCkge1xyXG4gICAgQGlmICRmZiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmZjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGNvbG91ciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICR3ZWlnaHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkbGgge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGg7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgICR1MTogdW5pdCgkbWluLXZ3KTtcclxuICAgICR1MjogdW5pdCgkbWF4LXZ3KTtcclxuICAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAkdTQ6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gQGlmICRtaW4tZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vIEBpZiAkbWF4LWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuXHJcblxyXG4gICAgQGlmICR1MT09JHUyIGFuZCAkdTE9PSR1MyBhbmQgJHUxPT0kdTQge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHRpbWUpIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAkdGltZSBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5tb2RhbF9fZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBjb2xvcjogI0E5QTlBOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1cHggYXV0byAyNXB4O1xufVxuLm1vZGFsX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5tb2RhbF9fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgNCAqICgoMTAwdncgLSAzMjBweCkgLyA4ODApKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5tb2RhbF9fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLm1vZGFsX19idG5zIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gIC5tb2RhbF9fYnRucyAuYnRuIHtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICB9XG59XG5cbi5idG4ge1xuICBtYXgtd2lkdGg6IDE0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYnRuIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn1cblxuLmZvcm0ge1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb3JtX19sYWJlbCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybV9fbGFiZWw6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmZvcm1fX2lucHV0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMiwgMjM1LCAyNDAsIDAuMik7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5mb3JtX190ZXh0YXJlYSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbi5mb3JtIC5idG4ge1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybV9faW5wdXQge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICAuZm9ybV9fdGV4dGFyZWEge1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbiAgLmZvcm0gLmJ0biB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1heC13aWR0aDogMTEwcHg7XG4gIH1cbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTZweCArIDYgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuXG4uc3VidGl0bGUge1xuICBtYXJnaW46IDEwcHggYXV0byAxMHB4O1xuICBmb250LWZhbWlseTogUG9wcGlucy1TZW1pQm9sZDtcbiAgY29sb3I6ICNBOUE5QTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDE0cHggKyA0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn0iLCIkcHJpbWFyeTogI0NBRUJGMDtcclxuJHByaW1hcnktc2hhZG93LWRhcms6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1saWdodDogcmdiYSgjQ0FFQkYwLCAwLjIpO1xyXG4kZGFyazojMDAwMDAwO1xyXG4kZGFyay1zaGFkb3ctZGFyazojMDAwMDAwO1xyXG4kZGFyay1zaGFkb3ctbGlnaHQ6IzAwMDAwMDtcclxuJGxpZ2h0OiAjZmZmO1xyXG4kbWVkaXVtOiAjQTlBOUE5O1xyXG4kbWVkaXVtLXNoYWRvdy1kYXJrOiAjZjlmOWY5O1xyXG4kbWVkaXVtLXNoYWRvdy1saWdodDogI0VGRUZFRjtcclxuJHNlY29uZGFyeTogI0ZGM0IzRjtcclxuJHN1Y2Nlc3M6ICMyQUI5MzA7XHJcbi8vICRpbnRlcm1lZGlhdGU6ICM2NTVmNWY7XHJcblxyXG4kYm9sZGVyOiBQb3BwaW5zLUV4dHJhQm9sZDtcclxuJGJvbGQ6IFBvcHBpbnMtQm9sZDtcclxuJGYtbWVkaXVtOiBQb3BwaW5zLVNlbWlCb2xkO1xyXG4kcmVndWxhcjogUG9wcGlucy1SZWd1bGFyO1xyXG4kZi1saWdodDogUG9wcGlucy1MaWdodDtcclxuJGYtaXRhbGljOiBQb3BwaW5zLUl0YWxpYztcclxuXHJcbiRjb250YWluZXI6IDEzNjVweDtcclxuXHJcbiRidG4taGVpZ2h0OiA0MHB4O1xyXG4kZGVmYXVsdC1wYWRkaW5nOiAxNXB4O1xyXG4kaXRlbS1wYWRkaW5nOiA1cHg7XHJcblxyXG4kcmFkaXVzOiAxMHB4O1xyXG5cclxuJG9wYWNpdHk6IHJnYmEoJGRhcmssIDAuMik7XHJcblxyXG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0UzMjAyNCwgI0ZGRDU0Qyk7XHJcbiRzaGFkb3c6IDBweCAycHggMjVweCByZ2JhKDE1LCAyOCwgNzEsIDAuMSk7XHJcbiRzaGFkb3ctYnRuOiAwcHggMjRweCAxNnB4IC0yMnB4ICNmZjNiM2Y7XHJcbiRzaGFkb3ctc3VjY2VzczogMHB4IDI0cHggMTZweCAtMjJweCAkc3VjY2VzcztcclxuXHJcbiRzdWNjZXNzLWNvbG9yOiAjYjdkOGI3O1xyXG4kZXJyb3ItY29sb3I6ICNmOGI3YmQ7XHJcbiR3YXJuLWNvbG9yOiAjZmZlMzk5O1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_current_route_service__WEBPACK_IMPORTED_MODULE_1__["CurrentRouteService"] }, { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "TsVY":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_queries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/queries.service */ "x+J2");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PrivacyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.data.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class PrivacyComponent {
    constructor(query, sanitizer) {
        this.query = query;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.query.getPolicy().subscribe((data) => {
            data.text = this.sanitizer.bypassSecurityTrustHtml(data.text);
            console.log(data);
            this.data = data;
        });
    }
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_queries_service__WEBPACK_IMPORTED_MODULE_1__["QueriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 2, vars: 1, consts: [[1, "wrapper-container"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "flaticon-compliant", "privacy-icon"], [1, "title"], [1, "quil", 3, "innerHTML"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrivacyComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding: 50px 0;\n}\n@media only screen and (max-width: 559px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n}\n.quil[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n@media only screen and (max-width: 767px) {\n  .quil[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n}\n@media only screen and (max-width: 559px) {\n  .quil[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n.privacy-icon[_ngcontent-%COMP%] {\n  color: #FF3B3F;\n  line-height: 170px;\n  margin-bottom: 30px;\n}\n.privacy-icon[_ngcontent-%COMP%] {\n  font-size: 80px;\n}\n@media screen and (min-width: 320px) {\n  .privacy-icon[_ngcontent-%COMP%] {\n    font-size: calc(80px + 90 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .privacy-icon[_ngcontent-%COMP%] {\n    font-size: 170px;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .privacy-icon[_ngcontent-%COMP%] {\n    line-height: normal;\n  }\n}\n@media only screen and (max-width: 559px) {\n  .privacy-icon[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUpBO0VBQ0k7SUFDSSxVQUFBO0VDeEpOO0VEMkpFO0lBQ0ksVUFBQTtFQ3pKTjtBQUNGO0FBSkE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUFNSjtBRGdCUTtFQ3hCUjtJQUlRLGVBQUE7RUFRTjtBQUNGO0FBTEE7RUFDSSxnQkFBQTtBQVFKO0FET1E7RUNoQlI7SUFHUSxnQkFBQTtFQVVOO0FBQ0Y7QURFUTtFQ2hCUjtJQU1RLGdCQUFBO0VBWU47QUFDRjtBQVRBO0VEa0ZRLGNFN0ZJO0VEYVIsa0JBQUE7RUFDQSxtQkFBQTtBQVlKO0FEaUdRO0VBQ0ksZUNoSGlCO0FBaUI3QjtBRGlHWTtFQUhKO0lBSVEsb0RBQUE7RUM5RmQ7QUFDRjtBRGdHWTtFQVBKO0lBUVEsZ0JDdkhtQjtFQTBCakM7QUFDRjtBRHRCUTtFQ05SO0lBS1EsbUJBQUE7RUEyQk47QUFDRjtBRDNCUTtFQ05SO0lBUVEsbUJBQUE7RUE2Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQG1peGluIHRydW5jYXRlKCRtYXgtd2lkdGgpIHtcclxuICAgIG1heC13aWR0aDogJG1heC13aWR0aDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbiRicmVha3BvaW50czogKFwicGhvbmVcIjogNDAwcHgsXHJcbiAgICBcInBob25lLXdpZGVcIjogNDgwcHgsXHJcbiAgICBcInBoYWJsZXRcIjogNTYwcHgsXHJcbiAgICBcInRhYmxldC1zbWFsbFwiOiA2NDBweCxcclxuICAgIFwidGFibGV0XCI6IDc2OHB4LFxyXG4gICAgXCJ0YWJsZXQtbVwiOiAxMDAwcHgsXHJcbiAgICBcInRhYmxldC13aWRlXCI6IDEwMjRweCxcclxuICAgIFwiZGVza3RvcFwiOiAxMjQ4cHgsXHJcbiAgICBcImRlc2t0b3Atd2lkZVwiOiAxNDQwcHgpO1xyXG5cclxuQG1peGluIG1xKCR3aWR0aCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcF9oYXNfa2V5KCRicmVha3BvaW50cywgJHdpZHRoKSB7XHJcbiAgICAgICAgJHdpZHRoOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJHdpZHRoKTtcclxuXHJcbiAgICAgICAgQGlmICR0eXBlPT1tYXgge1xyXG4gICAgICAgICAgICAkd2lkdGg6ICR3aWR0aCAtIDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCN7JHR5cGV9LXdpZHRoOiAkd2lkdGgpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24geigkbmFtZSkge1xyXG4gICAgQGlmIGluZGV4KCR6LWluZGV4ZXMsICRuYW1lKSB7XHJcbiAgICAgICAgQHJldHVybiAobGVuZ3RoKCR6LWluZGV4ZXMpIC0gaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpKSsxO1xyXG4gICAgfVxyXG5cclxuICAgIEBlbHNlIHtcclxuICAgICAgICBAd2FybiAnVGhlcmUgaXMgbm8gaXRlbSBcIiN7JG5hbWV9XCIgaW4gdGhpcyBsaXN0OyBjaG9vc2Ugb25lIG9mOiAjeyR6LWluZGV4ZXN9JztcclxuICAgICAgICBAcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbiR6LWluZGV4ZXM6IChcIm91dGRhdGVkLWJyb3dzZXJcIiwgXCJtb2RhbFwiLCBcInNpdGUtaGVhZGVyXCIsIFwicGFnZS13cmFwcGVyXCIsIFwic2l0ZS1mb290ZXJcIik7XHJcblxyXG4vLy0tLS1iZWZvcmUgYWZ0ZXJcclxuQG1peGluIHBzZXVkbygkZGlzcGxheTogYmxvY2ssICRwb3M6IGFic29sdXRlLCAkY29udGVudDogXCJcIikge1xyXG4gICAgY29udGVudDogJGNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiAkZGlzcGxheTtcclxuICAgIHBvc2l0aW9uOiAkcG9zO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb250ZW50KCRkaXJlY3Rpb246IGZhbHNlLCAkanVzdGlmeTogZmFsc2UsICRhbGlnbjogZmFsc2UsICRhbGlnbi1jb250ZW50OiBmYWxzZSkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBAaWYgJGRpcmVjdGlvbiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRqdXN0aWZ5IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24ge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbi1jb250ZW50IHtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiAkYWxpZ24tY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZpZ3VyZSgkd2lkdGgsICRoZWlnaHQ6IGZhbHNlKSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRlbnQocm93LCBjZW50ZXIsIGNlbnRlciwgY2VudGVyKTtcclxuICAgIG1heC13aWR0aDogJHdpZHRoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgQGlmICRoZWlnaHQge1xyXG4gICAgICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vc2NhbGFyZSBmb250XHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xyXG4gICAgQHJldHVybiAkdmFsdWUgLyAoJHZhbHVlICogMCArIDEpO1xyXG59XHJcblxyXG5AbWl4aW4gZmx1aWQtdHlwZS1zaXplKCRtaW4tZm9udC1zaXplLFxyXG4gICAgJG1heC1mb250LXNpemUsXHJcbiAgICAkZmY6IGZhbHNlLFxyXG4gICAgJGNvbG91cjogZmFsc2UsXHJcbiAgICAkYWxpZ246IGZhbHNlLFxyXG4gICAgJGxoOiBmYWxzZSxcclxuICAgICR3ZWlnaHQ6IGZhbHNlLFxyXG4gICAgJG1pbi12dzogMzIwcHgsXHJcbiAgICAkbWF4LXZ3OiAxMjAwcHgpIHtcclxuICAgIEBpZiAkZmYge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZmY7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRjb2xvdXIge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkd2VpZ2h0IHtcclxuICAgICAgICBmb250LXdlaWdodDogJHdlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGxoIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogJGxoO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICAkdTE6IHVuaXQoJG1pbi12dyk7XHJcbiAgICAkdTI6IHVuaXQoJG1heC12dyk7XHJcbiAgICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgJHU0OiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIEBpZiAkbWluLWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBAaWYgJG1heC1mb250LXNpemUge1xyXG4gICAgLy8gICAkdTM6IHVuaXQoJG1heC1mb250LXNpemUpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vICR1NDogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcblxyXG5cclxuICAgIEBpZiAkdTE9PSR1MiBhbmQgJHUxPT0kdTMgYW5kICR1MT09JHU0IHtcclxuICAgICAgICAmIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkbWluLWZvbnQtc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygjeyRtaW4tZm9udC1zaXplfSArICN7c3RyaXAtdW5pdCgkbWF4LWZvbnQtc2l6ZSAtICRtaW4tZm9udC1zaXplKX0gKiAoKDEwMHZ3IC0gI3skbWluLXZ3fSkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRtYXgtZm9udC1zaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtaXhpbiBhbmltYXRpb24gKCR0aW1lKSB7XHJcbiAgICBhbmltYXRpb246IGZhZGUgJHRpbWUgYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn0iLCJAa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTlweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA0MHB4IDA7XG4gIH1cbn1cblxuLnF1aWwge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucXVpbCB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTlweCkge1xuICAucXVpbCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuXG4ucHJpdmFjeS1pY29uIHtcbiAgY29sb3I6ICNGRjNCM0Y7XG4gIGxpbmUtaGVpZ2h0OiAxNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5wcml2YWN5LWljb24ge1xuICBmb250LXNpemU6IDgwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAucHJpdmFjeS1pY29uIHtcbiAgICBmb250LXNpemU6IGNhbGMoODBweCArIDkwICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnByaXZhY3ktaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNzBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLnByaXZhY3ktaWNvbiB7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTlweCkge1xuICAucHJpdmFjeS1pY29uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59IiwiJHByaW1hcnk6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1kYXJrOiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctbGlnaHQ6IHJnYmEoI0NBRUJGMCwgMC4yKTtcclxuJGRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWxpZ2h0OiMwMDAwMDA7XHJcbiRsaWdodDogI2ZmZjtcclxuJG1lZGl1bTogI0E5QTlBOTtcclxuJG1lZGl1bS1zaGFkb3ctZGFyazogI2Y5ZjlmOTtcclxuJG1lZGl1bS1zaGFkb3ctbGlnaHQ6ICNFRkVGRUY7XHJcbiRzZWNvbmRhcnk6ICNGRjNCM0Y7XHJcbiRzdWNjZXNzOiAjMkFCOTMwO1xyXG4vLyAkaW50ZXJtZWRpYXRlOiAjNjU1ZjVmO1xyXG5cclxuJGJvbGRlcjogUG9wcGlucy1FeHRyYUJvbGQ7XHJcbiRib2xkOiBQb3BwaW5zLUJvbGQ7XHJcbiRmLW1lZGl1bTogUG9wcGlucy1TZW1pQm9sZDtcclxuJHJlZ3VsYXI6IFBvcHBpbnMtUmVndWxhcjtcclxuJGYtbGlnaHQ6IFBvcHBpbnMtTGlnaHQ7XHJcbiRmLWl0YWxpYzogUG9wcGlucy1JdGFsaWM7XHJcblxyXG4kY29udGFpbmVyOiAxMzY1cHg7XHJcblxyXG4kYnRuLWhlaWdodDogNDBweDtcclxuJGRlZmF1bHQtcGFkZGluZzogMTVweDtcclxuJGl0ZW0tcGFkZGluZzogNXB4O1xyXG5cclxuJHJhZGl1czogMTBweDtcclxuXHJcbiRvcGFjaXR5OiByZ2JhKCRkYXJrLCAwLjIpO1xyXG5cclxuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMzIwMjQsICNGRkQ1NEMpO1xyXG4kc2hhZG93OiAwcHggMnB4IDI1cHggcmdiYSgxNSwgMjgsIDcxLCAwLjEpO1xyXG4kc2hhZG93LWJ0bjogMHB4IDI0cHggMTZweCAtMjJweCAjZmYzYjNmO1xyXG4kc2hhZG93LXN1Y2Nlc3M6IDBweCAyNHB4IDE2cHggLTIycHggJHN1Y2Nlc3M7XHJcblxyXG4kc3VjY2Vzcy1jb2xvcjogI2I3ZDhiNztcclxuJGVycm9yLWNvbG9yOiAjZjhiN2JkO1xyXG4kd2Fybi1jb2xvcjogI2ZmZTM5OTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy',
                templateUrl: './privacy.component.html',
                styleUrls: ['./privacy.component.scss']
            }]
    }], function () { return [{ type: _services_queries_service__WEBPACK_IMPORTED_MODULE_1__["QueriesService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq/faq.component */ "gN+M");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms/terms.component */ "eIz4");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./privacy/privacy.component */ "TsVY");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-us/about-us.component */ "BsnK");
/* harmony import */ var _services_current_route_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services/current-route.service */ "RirG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors_app_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_interceptors/app.interceptor */ "6OAP");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_current_route_service__WEBPACK_IMPORTED_MODULE_9__["CurrentRouteService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _interceptors_app_interceptor__WEBPACK_IMPORTED_MODULE_11__["AppInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"],
        _terms_terms_component__WEBPACK_IMPORTED_MODULE_6__["TermsComponent"],
        _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyComponent"],
        _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"],
                    _terms_terms_component__WEBPACK_IMPORTED_MODULE_6__["TermsComponent"],
                    _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyComponent"],
                    _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ],
                providers: [
                    _services_current_route_service__WEBPACK_IMPORTED_MODULE_9__["CurrentRouteService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _interceptors_app_interceptor__WEBPACK_IMPORTED_MODULE_11__["AppInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZwT2":
/*!***************************************!*\
  !*** ./src/app/_utils/cookieUtils.ts ***!
  \***************************************/
/*! exports provided: getCookie, deleteCookie, setCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCookie", function() { return deleteCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : null;
}
function deleteCookie(name, options) {
    setCookie(name, "", Object.assign({ 'max-age': -1 }, options));
}
function setCookie(name, value, options) {
    options = Object.assign({ path: '/', samesite: "lax" }, options);
    if (location.protocol === "https:")
        options["secure"] = true; // ставить везде вручную проблематично
    if (options["eternal"])
        options["max-age"] = 315360000; // на 10 лет
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        if (optionKey === "eternal")
            continue;
        updatedCookie += "; " + optionKey;
        if (optionKey !== "secure") {
            updatedCookie += "=" + options[optionKey];
        }
    }
    document.cookie = updatedCookie;
}


/***/ }),

/***/ "eIz4":
/*!******************************************!*\
  !*** ./src/app/terms/terms.component.ts ***!
  \******************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_queries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/queries.service */ "x+J2");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TermsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.data.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class TermsComponent {
    constructor(query, sanitizer) {
        this.query = query;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.query.getTerms().subscribe((data) => {
            data.text = this.sanitizer.bypassSecurityTrustHtml(data.text);
            console.log(data);
            this.data = data;
        });
    }
}
TermsComponent.ɵfac = function TermsComponent_Factory(t) { return new (t || TermsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_queries_service__WEBPACK_IMPORTED_MODULE_1__["QueriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
TermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsComponent, selectors: [["app-terms"]], decls: 2, vars: 1, consts: [[1, "wrapper-container"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "title"], [1, "quil", 3, "innerHTML"]], template: function TermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermsComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding: 50px 0;\n}\n@media only screen and (max-width: 559px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n}\n.quil[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n@media only screen and (max-width: 767px) {\n  .quil[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n}\n@media only screen and (max-width: 559px) {\n  .quil[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvdGVybXMvdGVybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUpBO0VBQ0k7SUFDSSxVQUFBO0VDeEpOO0VEMkpFO0lBQ0ksVUFBQTtFQ3pKTjtBQUNGO0FBSkE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUFNSjtBRGdCUTtFQ3hCUjtJQUlRLGVBQUE7RUFRTjtBQUNGO0FBTEE7RUFDSSxnQkFBQTtBQVFKO0FET1E7RUNoQlI7SUFHUSxnQkFBQTtFQVVOO0FBQ0Y7QURFUTtFQ2hCUjtJQU1RLGdCQUFBO0VBWU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWl4aW4gdHJ1bmNhdGUoJG1heC13aWR0aCkge1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuJGJyZWFrcG9pbnRzOiAoXCJwaG9uZVwiOiA0MDBweCxcclxuICAgIFwicGhvbmUtd2lkZVwiOiA0ODBweCxcclxuICAgIFwicGhhYmxldFwiOiA1NjBweCxcclxuICAgIFwidGFibGV0LXNtYWxsXCI6IDY0MHB4LFxyXG4gICAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgICBcInRhYmxldC1tXCI6IDEwMDBweCxcclxuICAgIFwidGFibGV0LXdpZGVcIjogMTAyNHB4LFxyXG4gICAgXCJkZXNrdG9wXCI6IDEyNDhweCxcclxuICAgIFwiZGVza3RvcC13aWRlXCI6IDE0NDBweCk7XHJcblxyXG5AbWl4aW4gbXEoJHdpZHRoLCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwX2hhc19rZXkoJGJyZWFrcG9pbnRzLCAkd2lkdGgpIHtcclxuICAgICAgICAkd2lkdGg6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkd2lkdGgpO1xyXG5cclxuICAgICAgICBAaWYgJHR5cGU9PW1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoI3skdHlwZX0td2lkdGg6ICR3aWR0aCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiB6KCRuYW1lKSB7XHJcbiAgICBAaWYgaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpIHtcclxuICAgICAgICBAcmV0dXJuIChsZW5ndGgoJHotaW5kZXhlcykgLSBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkpKzE7XHJcbiAgICB9XHJcblxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEB3YXJuICdUaGVyZSBpcyBubyBpdGVtIFwiI3skbmFtZX1cIiBpbiB0aGlzIGxpc3Q7IGNob29zZSBvbmUgb2Y6ICN7JHotaW5kZXhlc30nO1xyXG4gICAgICAgIEByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuJHotaW5kZXhlczogKFwib3V0ZGF0ZWQtYnJvd3NlclwiLCBcIm1vZGFsXCIsIFwic2l0ZS1oZWFkZXJcIiwgXCJwYWdlLXdyYXBwZXJcIiwgXCJzaXRlLWZvb3RlclwiKTtcclxuXHJcbi8vLS0tLWJlZm9yZSBhZnRlclxyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiBcIlwiKSB7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbnRlbnQoJGRpcmVjdGlvbjogZmFsc2UsICRqdXN0aWZ5OiBmYWxzZSwgJGFsaWduOiBmYWxzZSwgJGFsaWduLWNvbnRlbnQ6IGZhbHNlKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBpZiAkZGlyZWN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGp1c3RpZnkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduLWNvbnRlbnQge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICRhbGlnbi1jb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmlndXJlKCR3aWR0aCwgJGhlaWdodDogZmFsc2UpIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csIGNlbnRlciwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAaWYgJGhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9zY2FsYXJlIGZvbnRcclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbHVpZC10eXBlLXNpemUoJG1pbi1mb250LXNpemUsXHJcbiAgICAkbWF4LWZvbnQtc2l6ZSxcclxuICAgICRmZjogZmFsc2UsXHJcbiAgICAkY29sb3VyOiBmYWxzZSxcclxuICAgICRhbGlnbjogZmFsc2UsXHJcbiAgICAkbGg6IGZhbHNlLFxyXG4gICAgJHdlaWdodDogZmFsc2UsXHJcbiAgICAkbWluLXZ3OiAzMjBweCxcclxuICAgICRtYXgtdnc6IDEyMDBweCkge1xyXG4gICAgQGlmICRmZiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmZjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGNvbG91ciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICR3ZWlnaHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkbGgge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGg7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgICR1MTogdW5pdCgkbWluLXZ3KTtcclxuICAgICR1MjogdW5pdCgkbWF4LXZ3KTtcclxuICAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAkdTQ6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gQGlmICRtaW4tZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vIEBpZiAkbWF4LWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuXHJcblxyXG4gICAgQGlmICR1MT09JHUyIGFuZCAkdTE9PSR1MyBhbmQgJHUxPT0kdTQge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHRpbWUpIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAkdGltZSBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1OXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgfVxufVxuXG4ucXVpbCB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5xdWlsIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1OXB4KSB7XG4gIC5xdWlsIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms',
                templateUrl: './terms.component.html',
                styleUrls: ['./terms.component.scss']
            }]
    }], function () { return [{ type: _services_queries_service__WEBPACK_IMPORTED_MODULE_1__["QueriesService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "f6A8":
/*!***********************************************!*\
  !*** ./src/app/_services/settings.service.ts ***!
  \***********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");




class SettingsService {
    constructor() {
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.roundValue = 1;
        this.categories = [
            {
                name: 'Domain name',
                value: 'domain'
            },
            {
                name: 'Business name',
                value: 'business'
            }
        ];
        this.maxRecordTime = 15500; // milliseconds
        this.logout = false;
        this.deleteRadio = false;
        this.navigate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.colorsPallette = [
            "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177", "#0d5ac1",
            "#f205e6", "#1c0365", "#14a9ad", "#4ca2f9", "#a4e43f", "#d298e2", "#6119d0",
            "#d2737d", "#c0a43c", "#f2510e", "#651be6", "#79806e", "#61da5e", "#cd2f00",
            "#9348af", "#01ac53", "#c5a4fb", "#996635", "#b11573", "#4bb473", "#75d89e",
            "#2f3f94", "#2f7b99", "#da967d", "#34891f", "#b0d87b", "#ca4751", "#7e50a8",
            "#c4d647", "#e0eeb8", "#11dec1", "#289812", "#566ca0", "#ffdbe1", "#2f1179",
            "#935b6d", "#916988", "#513d98", "#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
            "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
            "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
            "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
            "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
            "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
            "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
            "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
            "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
            "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647",
            "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
            "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
            "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7",
            "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8",
            "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16",
            "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce",
            "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997",
            "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be",
            "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",
            "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
            "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56",
            "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
            "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
            "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
            "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
            "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
            "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a",
            "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065",
            "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35",
            "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44",
            "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67",
            "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
            "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6",
            "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"
        ];
    }
    defaultImg() {
        return 'assets/images/noig.png';
    }
    returnImg(route) {
        return this.url + route;
    }
    getCategory(cat) {
        return this.categories.find(c => c.value == cat);
    }
    getNrCompleted(test) {
        let sum = 0;
        test.variants.map((v) => {
            sum += v.count;
        });
        return sum;
    }
    getNrVariants(test) {
        return test.variants.length == 0 ? '-' : test.variants.length;
    }
    getTestScore(test) {
        let initial = test.variants.find(v => v.name == test.name);
        let trueVariants = initial ? initial.count : 0;
        let result = (trueVariants * 100) / this.getNrCompleted(test);
        return result ? result.toFixed(this.roundValue) : 0;
    }
    getTestLevel(test) {
        let score = this.getTestScore(test);
        if (score >= 90)
            return 'a';
        else if (score >= 80)
            return 'b';
        else if (score >= 70)
            return 'c';
        else if (score >= 60)
            return 'd';
        else
            return 'f';
    }
    getStatusLabel(test) {
        let capitalize = (name) => name[0].toUpperCase() + name.slice(1);
        if (test.statuses.length == 1)
            return capitalize(test.statuses[0]);
        if (test.statuses.length == 2 && test.statuses.includes('draft'))
            return capitalize(test.statuses.filter(s => s !== 'draft')[0]) + '/Draft';
        if (test.statuses.length == 3)
            return 'Running/Draft';
        if (test.statuses.includes('running'))
            return 'Running';
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gN+M":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_queries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/queries.service */ "x+J2");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FaqComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Open All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FaqComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Close All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FaqComponent_article_8_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 14);
} }
function FaqComponent_article_8_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 15);
} }
function FaqComponent_article_8_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r3.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FaqComponent_article_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FaqComponent_article_8_ng_container_6_div_1_Template, 1, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isOpened == item_r3.id || ctx_r6.openAll == true);
} }
const _c0 = function (a0) { return { "closed-accordeon": a0 }; };
function FaqComponent_article_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_article_8_Template_header_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r3 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openAccordeon(item_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FaqComponent_article_8_button_4_Template, 1, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FaqComponent_article_8_button_5_Template, 1, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FaqComponent_article_8_ng_container_6_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r2.isOpened != item_r3.id || ctx_r2.openAll == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isOpened != item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isOpened == item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.description);
} }
class FaqComponent {
    constructor(query, sanitizer) {
        this.query = query;
        this.sanitizer = sanitizer;
        this.isOpened = null;
        this.faq = [];
    }
    ngOnInit() {
        this.getFaq();
    }
    openAccordeon(id) {
        if (this.isOpened == id) {
            this.isOpened = undefined;
            this.openAll = false;
        }
        else {
            this.isOpened = id;
            this.openAll = false;
        }
    }
    openAllAccordeons() {
        this.isOpened = undefined;
        this.openAll = !this.openAll;
    }
    getFaq() {
        this.query.getFaq()
            .subscribe((data) => {
            this.faq = data.map(e => {
                this.sanitizer.bypassSecurityTrustHtml(e.description);
                return e;
            });
        });
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_queries_service__WEBPACK_IMPORTED_MODULE_1__["QueriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 9, vars: 3, consts: [[1, "wrapper-container"], [1, "container"], [1, "title"], [1, "btn", "_outline", 3, "click"], [4, "ngIf"], [1, "wrapper-accordeon"], ["class", "accordeon", 4, "ngFor", "ngForOf"], [1, "flaticon-add"], [1, "flaticon-minus"], [1, "accordeon"], [1, "accordeon__head", 3, "ngClass", "click"], [1, "accordeon__head--title"], ["class", "accordeon__head--btn flaticon-add", 4, "ngIf"], ["class", "accordeon__head--btn flaticon-minus", 4, "ngIf"], [1, "accordeon__head--btn", "flaticon-add"], [1, "accordeon__head--btn", "flaticon-minus"], ["class", "accordeon__content quil", 3, "innerHTML", 4, "ngIf"], [1, "accordeon__content", "quil", 3, "innerHTML"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_Template_button_click_4_listener() { return ctx.openAllAccordeons(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FaqComponent_div_5_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FaqComponent_div_6_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FaqComponent_article_8_Template, 7, 7, "article", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.openAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.faq);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding: 50px 0;\n}\n@media only screen and (max-width: 559px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n}\n.wrapper-accordeon[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n}\n.accordeon[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 2px 25px rgba(15, 28, 71, 0.1);\n  margin-top: 20px;\n  padding: 20px;\n}\n.accordeon__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #EFEFEF;\n  cursor: pointer;\n}\n.accordeon__head--title[_ngcontent-%COMP%] {\n  font-family: Poppins-Bold;\n  margin-right: 15px;\n}\n.accordeon__head--title[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 320px) {\n  .accordeon__head--title[_ngcontent-%COMP%] {\n    font-size: calc(14px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .accordeon__head--title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.accordeon__head--btn[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  font-size: 20px;\n  margin-left: 20px;\n}\n.accordeon__content[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.accordeon__content[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .accordeon__content[_ngcontent-%COMP%] {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .accordeon__content[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  height: 50px;\n  max-width: 145px;\n  width: 100%;\n  margin-top: 30px;\n  background-color: transparent;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n@media only screen and (max-width: 559px) {\n  .btn[_ngcontent-%COMP%] {\n    height: 40px;\n    max-width: 110px;\n    margin-top: 20px;\n  }\n}\n.closed-accordeon[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlKQTtFQUNJO0lBQ0ksVUFBQTtFQ3hKTjtFRDJKRTtJQUNJLFVBQUE7RUN6Sk47QUFDRjtBQUpBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FBTUo7QURnQlE7RUN4QlI7SUFJUSxlQUFBO0VBUU47QUFDRjtBQU5BO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFTSjtBQU5BO0VBQ0ksc0JDVkk7RURXSixtQkNVSztFRFRMLDhDQ2NLO0VEYkwsZ0JBQUE7RUFDQSxhQUFBO0FBU0o7QUFSSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFVUjtBQVJRO0VEc0VBLHlCRXBGRDtFRGdCSSxrQkFBQTtBQVVYO0FENEZRO0VBQ0ksZUN4R3dCO0FBY3BDO0FENEZZO0VBSEo7SUFJUSxtREFBQTtFQ3pGZDtBQUNGO0FEMkZZO0VBUEo7SUFRUSxlQy9HMEI7RUF1QnhDO0FBQ0Y7QUFyQlE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBdUJaO0FBcEJJO0VBQ0ksZ0JBQUE7QUFzQlI7QURxRVE7RUFDSSxlQzNGcUI7QUF3QmpDO0FEcUVZO0VBSEo7SUFJUSxtREFBQTtFQ2xFZDtBQUNGO0FEb0VZO0VBUEo7SUFRUSxlQ2xHdUI7RUFpQ3JDO0FBQ0Y7QUE5QkE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBaUNKO0FBaENJO0VBQ0ksaUJBQUE7QUFrQ1I7QUQ5RFE7RUNvQlI7SUFZUSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQWtDTjtBQUNGO0FBL0JBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFrQ0oiLCJmaWxlIjoic3JjL2FwcC9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWl4aW4gdHJ1bmNhdGUoJG1heC13aWR0aCkge1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuJGJyZWFrcG9pbnRzOiAoXCJwaG9uZVwiOiA0MDBweCxcclxuICAgIFwicGhvbmUtd2lkZVwiOiA0ODBweCxcclxuICAgIFwicGhhYmxldFwiOiA1NjBweCxcclxuICAgIFwidGFibGV0LXNtYWxsXCI6IDY0MHB4LFxyXG4gICAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgICBcInRhYmxldC1tXCI6IDEwMDBweCxcclxuICAgIFwidGFibGV0LXdpZGVcIjogMTAyNHB4LFxyXG4gICAgXCJkZXNrdG9wXCI6IDEyNDhweCxcclxuICAgIFwiZGVza3RvcC13aWRlXCI6IDE0NDBweCk7XHJcblxyXG5AbWl4aW4gbXEoJHdpZHRoLCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwX2hhc19rZXkoJGJyZWFrcG9pbnRzLCAkd2lkdGgpIHtcclxuICAgICAgICAkd2lkdGg6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkd2lkdGgpO1xyXG5cclxuICAgICAgICBAaWYgJHR5cGU9PW1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoI3skdHlwZX0td2lkdGg6ICR3aWR0aCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiB6KCRuYW1lKSB7XHJcbiAgICBAaWYgaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpIHtcclxuICAgICAgICBAcmV0dXJuIChsZW5ndGgoJHotaW5kZXhlcykgLSBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkpKzE7XHJcbiAgICB9XHJcblxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEB3YXJuICdUaGVyZSBpcyBubyBpdGVtIFwiI3skbmFtZX1cIiBpbiB0aGlzIGxpc3Q7IGNob29zZSBvbmUgb2Y6ICN7JHotaW5kZXhlc30nO1xyXG4gICAgICAgIEByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuJHotaW5kZXhlczogKFwib3V0ZGF0ZWQtYnJvd3NlclwiLCBcIm1vZGFsXCIsIFwic2l0ZS1oZWFkZXJcIiwgXCJwYWdlLXdyYXBwZXJcIiwgXCJzaXRlLWZvb3RlclwiKTtcclxuXHJcbi8vLS0tLWJlZm9yZSBhZnRlclxyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiBcIlwiKSB7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbnRlbnQoJGRpcmVjdGlvbjogZmFsc2UsICRqdXN0aWZ5OiBmYWxzZSwgJGFsaWduOiBmYWxzZSwgJGFsaWduLWNvbnRlbnQ6IGZhbHNlKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBpZiAkZGlyZWN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGp1c3RpZnkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduLWNvbnRlbnQge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICRhbGlnbi1jb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmlndXJlKCR3aWR0aCwgJGhlaWdodDogZmFsc2UpIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csIGNlbnRlciwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAaWYgJGhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9zY2FsYXJlIGZvbnRcclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbHVpZC10eXBlLXNpemUoJG1pbi1mb250LXNpemUsXHJcbiAgICAkbWF4LWZvbnQtc2l6ZSxcclxuICAgICRmZjogZmFsc2UsXHJcbiAgICAkY29sb3VyOiBmYWxzZSxcclxuICAgICRhbGlnbjogZmFsc2UsXHJcbiAgICAkbGg6IGZhbHNlLFxyXG4gICAgJHdlaWdodDogZmFsc2UsXHJcbiAgICAkbWluLXZ3OiAzMjBweCxcclxuICAgICRtYXgtdnc6IDEyMDBweCkge1xyXG4gICAgQGlmICRmZiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmZjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGNvbG91ciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICR3ZWlnaHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkbGgge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGg7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgICR1MTogdW5pdCgkbWluLXZ3KTtcclxuICAgICR1MjogdW5pdCgkbWF4LXZ3KTtcclxuICAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAkdTQ6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gQGlmICRtaW4tZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vIEBpZiAkbWF4LWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuXHJcblxyXG4gICAgQGlmICR1MT09JHUyIGFuZCAkdTE9PSR1MyBhbmQgJHUxPT0kdTQge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHRpbWUpIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAkdGltZSBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1OXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgfVxufVxuXG4ud3JhcHBlci1hY2NvcmRlb24ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWNjb3JkZW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAyNXB4IHJnYmEoMTUsIDI4LCA3MSwgMC4xKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5hY2NvcmRlb25fX2hlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRUZFRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFjY29yZGVvbl9faGVhZC0tdGl0bGUge1xuICBmb250LWZhbWlseTogUG9wcGlucy1Cb2xkO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uYWNjb3JkZW9uX19oZWFkLS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5hY2NvcmRlb25fX2hlYWQtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTRweCArIDQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuYWNjb3JkZW9uX19oZWFkLS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4uYWNjb3JkZW9uX19oZWFkLS1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmFjY29yZGVvbl9fY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYWNjb3JkZW9uX19jb250ZW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmFjY29yZGVvbl9fY29udGVudCB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyA0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFjY29yZGVvbl9fY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5idG4ge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXgtd2lkdGg6IDE0NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uYnRuIGkge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTU5cHgpIHtcbiAgLmJ0biB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1heC13aWR0aDogMTEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuXG4uY2xvc2VkLWFjY29yZGVvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbn0iLCIkcHJpbWFyeTogI0NBRUJGMDtcclxuJHByaW1hcnktc2hhZG93LWRhcms6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1saWdodDogcmdiYSgjQ0FFQkYwLCAwLjIpO1xyXG4kZGFyazojMDAwMDAwO1xyXG4kZGFyay1zaGFkb3ctZGFyazojMDAwMDAwO1xyXG4kZGFyay1zaGFkb3ctbGlnaHQ6IzAwMDAwMDtcclxuJGxpZ2h0OiAjZmZmO1xyXG4kbWVkaXVtOiAjQTlBOUE5O1xyXG4kbWVkaXVtLXNoYWRvdy1kYXJrOiAjZjlmOWY5O1xyXG4kbWVkaXVtLXNoYWRvdy1saWdodDogI0VGRUZFRjtcclxuJHNlY29uZGFyeTogI0ZGM0IzRjtcclxuJHN1Y2Nlc3M6ICMyQUI5MzA7XHJcbi8vICRpbnRlcm1lZGlhdGU6ICM2NTVmNWY7XHJcblxyXG4kYm9sZGVyOiBQb3BwaW5zLUV4dHJhQm9sZDtcclxuJGJvbGQ6IFBvcHBpbnMtQm9sZDtcclxuJGYtbWVkaXVtOiBQb3BwaW5zLVNlbWlCb2xkO1xyXG4kcmVndWxhcjogUG9wcGlucy1SZWd1bGFyO1xyXG4kZi1saWdodDogUG9wcGlucy1MaWdodDtcclxuJGYtaXRhbGljOiBQb3BwaW5zLUl0YWxpYztcclxuXHJcbiRjb250YWluZXI6IDEzNjVweDtcclxuXHJcbiRidG4taGVpZ2h0OiA0MHB4O1xyXG4kZGVmYXVsdC1wYWRkaW5nOiAxNXB4O1xyXG4kaXRlbS1wYWRkaW5nOiA1cHg7XHJcblxyXG4kcmFkaXVzOiAxMHB4O1xyXG5cclxuJG9wYWNpdHk6IHJnYmEoJGRhcmssIDAuMik7XHJcblxyXG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0UzMjAyNCwgI0ZGRDU0Qyk7XHJcbiRzaGFkb3c6IDBweCAycHggMjVweCByZ2JhKDE1LCAyOCwgNzEsIDAuMSk7XHJcbiRzaGFkb3ctYnRuOiAwcHggMjRweCAxNnB4IC0yMnB4ICNmZjNiM2Y7XHJcbiRzaGFkb3ctc3VjY2VzczogMHB4IDI0cHggMTZweCAtMjJweCAkc3VjY2VzcztcclxuXHJcbiRzdWNjZXNzLWNvbG9yOiAjYjdkOGI3O1xyXG4kZXJyb3ItY29sb3I6ICNmOGI3YmQ7XHJcbiR3YXJuLWNvbG9yOiAjZmZlMzk5O1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.scss']
            }]
    }], function () { return [{ type: _services_queries_service__WEBPACK_IMPORTED_MODULE_1__["QueriesService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/auth/login"]; };
const _c1 = function () { return ["/auth/register"]; };
const _c2 = function () { return ["/faq"]; };
const _c3 = function () { return ["/about"]; };
const _c4 = function () { return ["/home"]; };
const _c5 = function () { return ["/terms"]; };
const _c6 = function () { return ["/privacy"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 52, vars: 14, consts: [[1, "container"], [1, "footer__item"], [1, "footer__item--title"], [1, "footer__item--menu"], [3, "routerLink"], ["href", ""], [1, "wrapper", "socials"], ["href", "", 1, "flaticon-facebook", "socials__item"], ["href", "", 1, "flaticon-instagram", "socials__item"], [1, "footer__bottom"], [1, "logo", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", ""], [1, "wrapper"], [1, "terms", 3, "routerLink"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Authorization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "What is Radio Test?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Suport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Find us here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Copyright \u00A9 2021 - Radio Test. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c6));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nfooter[_ngcontent-%COMP%] {\n  background-color: rgba(202, 235, 240, 0.2);\n}\n.container[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  padding: 25px 0;\n}\n@media only screen and (max-width: 479px) {\n  .container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.footer__item--title[_ngcontent-%COMP%] {\n  font-family: Poppins-Regular;\n  color: #000000;\n}\n.footer__item--title[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 320px) {\n  .footer__item--title[_ngcontent-%COMP%] {\n    font-size: calc(14px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .footer__item--title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.footer__item--menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.footer__item--menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.footer__item--menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Poppins-Regular;\n  color: #A9A9A9;\n  text-align: left;\n}\n.footer__item--menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .footer__item--menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: calc(12px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .footer__item--menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media only screen and (max-width: 479px) {\n  .footer__item[_ngcontent-%COMP%] {\n    flex: 1 1 120px;\n    width: 100%;\n    margin-top: 20px;\n  }\n  .footer__item[_ngcontent-%COMP%]:nth-child(3) {\n    width: auto;\n    flex: 1 1 auto;\n    min-width: 90px;\n    padding-left: 20px;\n  }\n}\n@media (max-width: 366px) {\n  .footer__item[_ngcontent-%COMP%]:nth-child(3) {\n    max-width: 50%;\n    width: 100%;\n    padding: 0;\n  }\n}\n.footer__bottom[_ngcontent-%COMP%] {\n  background-color: #A9A9A9;\n  max-width: 100%;\n  width: 100%;\n  padding: 15px 0;\n}\n.footer__bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 0;\n}\n@media only screen and (max-width: 767px) {\n  .footer__bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: center;\n  }\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  max-width: 160px;\n  width: 100%;\n  height: 45px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.copyright[_ngcontent-%COMP%] {\n  font-family: Poppins-Regular;\n  color: #fff;\n  opacity: 0.6;\n}\n.copyright[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n@media screen and (min-width: 320px) {\n  .copyright[_ngcontent-%COMP%] {\n    font-size: calc(10px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .copyright[_ngcontent-%COMP%] {\n    font-size: 12;\n  }\n}\n.terms[_ngcontent-%COMP%] {\n  font-family: Poppins-Regular;\n  color: #fff;\n  margin: 0 15px;\n}\n.terms[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n@media screen and (min-width: 320px) {\n  .terms[_ngcontent-%COMP%] {\n    font-size: calc(10px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .terms[_ngcontent-%COMP%] {\n    font-size: 12;\n  }\n}\n.socials[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.socials__item[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  background-color: transparent;\n  border-radius: 10px;\n  color: #000000;\n  text-align: center;\n  margin-left: 15px;\n  font-weight: bold;\n}\n.socials__item[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n@media screen and (min-width: 320px) {\n  .socials__item[_ngcontent-%COMP%] {\n    font-size: calc(18px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .socials__item[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 15px auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SkE7RUFDSTtJQUNJLFVBQUE7RUN4Sk47RUQySkU7SUFDSSxVQUFBO0VDekpOO0FBQ0Y7QUFKQTtFQUNJLDBDQ0ZtQjtBRFF2QjtBQUhBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0FBTUo7QURZUTtFQ3BCUjtJQUlRLGVBQUE7RUFRTjtBQUNGO0FBSlE7RURtRkEsNEJFbEZFO0VGc0ZGLGNFcEdGO0FEc0JOO0FENEdRO0VBQ0ksZUNySHlCO0FBV3JDO0FENEdZO0VBSEo7SUFJUSxtREFBQTtFQ3pHZDtBQUNGO0FEMkdZO0VBUEo7SUFRUSxlQzVIMkI7RUFvQnpDO0FBQ0Y7QUFuQlE7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBcUJaO0FBcEJZO0VBQ0ksZ0JBQUE7QUFzQmhCO0FBcEJZO0VEeUVKLDRCRWxGRTtFRnNGRixjRWhHQztFRjRHRCxnQkN4RmdFO0FBd0J4RTtBRGtGUTtFQUNJLGVDM0c2QjtBQTJCekM7QURrRlk7RUFISjtJQUlRLG1EQUFBO0VDL0VkO0FBQ0Y7QURpRlk7RUFQSjtJQVFRLGVDbEgrQjtFQW9DN0M7QUFDRjtBRHJDUTtFQ1pKO0lBa0JRLGVBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUFtQ1Y7RUFsQ1U7SUFDSSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQW9DZDtBQUNGO0FBbENRO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUFvQ2Q7QUFDRjtBQS9CQTtFQUNJLHlCQy9DSztFRGdETCxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFrQ0o7QUFoQ0k7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUFrQ1I7QURwRVE7RUNnQ0o7SUFJUSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtFQW9DVjtBQUNGO0FBaENBO0VEaEJJLGFBQUE7RUFHSSxtQkFpQmtCO0VBYmxCLHVCQWF1QjtFQVR2QixtQkFTK0I7RUFML0IscUJBS3VDO0VBQzNDLGdCQ0pnQjtFREtoQixXQUFBO0VBR0ksWUNSbUI7QUEwQzNCO0FBekNJO0VBQ0ksZUFBQTtBQTJDUjtBQXZDQTtFRHNCUSw0QkVsRkU7RUZzRkYsV0VqR0E7RUR5RUosWUFBQTtBQTJDSjtBRFdRO0VBQ0ksZUN4RGlCO0FBK0M3QjtBRFdZO0VBSEo7SUFJUSxtREFBQTtFQ1JkO0FBQ0Y7QURVWTtFQVBKO0lBUVEsYUMvRG1CO0VBd0RqQztBQUNGO0FBckRBO0VEaUJRLDRCRWxGRTtFRnNGRixXRWpHQTtFRDhFSixjQUFBO0FBeURKO0FEUlE7RUFDSSxlQ25EaUI7QUE2RDdCO0FEUlk7RUFISjtJQUlRLG1EQUFBO0VDV2Q7QUFDRjtBRFRZO0VBUEo7SUFRUSxhQzFEbUI7RUFzRWpDO0FBQ0Y7QUFuRUE7RUFDRyxnQkFBQTtBQXNFSDtBQXJFRztFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQ25FRTtFRjRFRCxjRXBHRjtFRmdIRSxrQkNwQmtEO0VBQ25ELGlCQUFBO0VBQ0EsaUJBQUE7QUF3RVA7QURwQ1E7RUFDSSxlQ3ZDb0I7QUE2RWhDO0FEcENZO0VBSEo7SUFJUSxtREFBQTtFQ3VDZDtBQUNGO0FEckNZO0VBUEo7SUFRUSxlQzlDc0I7RUFzRnBDO0FBQ0Y7QUQzSlE7RUMwRVI7SUFFUSxpQkFBQTtFQW9GTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtaXhpbiB0cnVuY2F0ZSgkbWF4LXdpZHRoKSB7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludHM6IChcInBob25lXCI6IDQwMHB4LFxyXG4gICAgXCJwaG9uZS13aWRlXCI6IDQ4MHB4LFxyXG4gICAgXCJwaGFibGV0XCI6IDU2MHB4LFxyXG4gICAgXCJ0YWJsZXQtc21hbGxcIjogNjQwcHgsXHJcbiAgICBcInRhYmxldFwiOiA3NjhweCxcclxuICAgIFwidGFibGV0LW1cIjogMTAwMHB4LFxyXG4gICAgXCJ0YWJsZXQtd2lkZVwiOiAxMDI0cHgsXHJcbiAgICBcImRlc2t0b3BcIjogMTI0OHB4LFxyXG4gICAgXCJkZXNrdG9wLXdpZGVcIjogMTQ0MHB4KTtcclxuXHJcbkBtaXhpbiBtcSgkd2lkdGgsICR0eXBlOiBtaW4pIHtcclxuICAgIEBpZiBtYXBfaGFzX2tleSgkYnJlYWtwb2ludHMsICR3aWR0aCkge1xyXG4gICAgICAgICR3aWR0aDogbWFwX2dldCgkYnJlYWtwb2ludHMsICR3aWR0aCk7XHJcblxyXG4gICAgICAgIEBpZiAkdHlwZT09bWF4IHtcclxuICAgICAgICAgICAgJHdpZHRoOiAkd2lkdGggLSAxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgjeyR0eXBlfS13aWR0aDogJHdpZHRoKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHooJG5hbWUpIHtcclxuICAgIEBpZiBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkge1xyXG4gICAgICAgIEByZXR1cm4gKGxlbmd0aCgkei1pbmRleGVzKSAtIGluZGV4KCR6LWluZGV4ZXMsICRuYW1lKSkrMTtcclxuICAgIH1cclxuXHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgQHdhcm4gJ1RoZXJlIGlzIG5vIGl0ZW0gXCIjeyRuYW1lfVwiIGluIHRoaXMgbGlzdDsgY2hvb3NlIG9uZSBvZjogI3skei1pbmRleGVzfSc7XHJcbiAgICAgICAgQHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4kei1pbmRleGVzOiAoXCJvdXRkYXRlZC1icm93c2VyXCIsIFwibW9kYWxcIiwgXCJzaXRlLWhlYWRlclwiLCBcInBhZ2Utd3JhcHBlclwiLCBcInNpdGUtZm9vdGVyXCIpO1xyXG5cclxuLy8tLS0tYmVmb3JlIGFmdGVyXHJcbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6IFwiXCIpIHtcclxuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAgICBwb3NpdGlvbjogJHBvcztcclxufVxyXG5cclxuQG1peGluIGZsZXgtY29udGVudCgkZGlyZWN0aW9uOiBmYWxzZSwgJGp1c3RpZnk6IGZhbHNlLCAkYWxpZ246IGZhbHNlLCAkYWxpZ24tY29udGVudDogZmFsc2UpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQGlmICRkaXJlY3Rpb24ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkanVzdGlmeSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24tY29udGVudCB7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogJGFsaWduLWNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmaWd1cmUoJHdpZHRoLCAkaGVpZ2h0OiBmYWxzZSkge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb250ZW50KHJvdywgY2VudGVyLCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIEBpZiAkaGVpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL3NjYWxhcmUgZm9udFxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkdmFsdWUpIHtcclxuICAgIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIGZsdWlkLXR5cGUtc2l6ZSgkbWluLWZvbnQtc2l6ZSxcclxuICAgICRtYXgtZm9udC1zaXplLFxyXG4gICAgJGZmOiBmYWxzZSxcclxuICAgICRjb2xvdXI6IGZhbHNlLFxyXG4gICAgJGFsaWduOiBmYWxzZSxcclxuICAgICRsaDogZmFsc2UsXHJcbiAgICAkd2VpZ2h0OiBmYWxzZSxcclxuICAgICRtaW4tdnc6IDMyMHB4LFxyXG4gICAgJG1heC12dzogMTIwMHB4KSB7XHJcbiAgICBAaWYgJGZmIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZmO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkY29sb3VyIHtcclxuICAgICAgICBjb2xvcjogJGNvbG91cjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJHdlaWdodCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRsaCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaDtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiAkYWxpZ247XHJcbiAgICB9XHJcblxyXG4gICAgJHUxOiB1bml0KCRtaW4tdncpO1xyXG4gICAgJHUyOiB1bml0KCRtYXgtdncpO1xyXG4gICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgICR1NDogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyBAaWYgJG1pbi1mb250LXNpemUge1xyXG4gICAgLy8gICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gQGlmICRtYXgtZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xyXG5cclxuXHJcbiAgICBAaWYgJHUxPT0kdTIgYW5kICR1MT09JHUzIGFuZCAkdTE9PSR1NCB7XHJcbiAgICAgICAgJiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkbWF4LWZvbnQtc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uICgkdGltZSkge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlICR0aW1lIGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59IiwiQGtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDIsIDIzNSwgMjQwLCAwLjIpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDI1cHggMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5cbi5mb290ZXJfX2l0ZW0tLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZm9vdGVyX19pdGVtLS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5mb290ZXJfX2l0ZW0tLXRpdGxlIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTRweCArIDIgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuZm9vdGVyX19pdGVtLS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uZm9vdGVyX19pdGVtLS1tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmZvb3Rlcl9faXRlbS0tbWVudSBsaSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZm9vdGVyX19pdGVtLS1tZW51IGEge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBjb2xvcjogI0E5QTlBOTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb290ZXJfX2l0ZW0tLW1lbnUgYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5mb290ZXJfX2l0ZW0tLW1lbnUgYSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAyICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZvb3Rlcl9faXRlbS0tbWVudSBhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgLmZvb3Rlcl9faXRlbSB7XG4gICAgZmxleDogMSAxIDEyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLmZvb3Rlcl9faXRlbTpudGgtY2hpbGQoMykge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG1pbi13aWR0aDogOTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNjZweCkge1xuICAuZm9vdGVyX19pdGVtOm50aC1jaGlsZCgzKSB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4uZm9vdGVyX19ib3R0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlBOUE5O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uZm9vdGVyX19ib3R0b20gLmNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb290ZXJfX2JvdHRvbSAuY29udGFpbmVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4ubG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBjb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMC42O1xufVxuLmNvcHlyaWdodCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5jb3B5cmlnaHQge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMiAqICgoMTAwdncgLSAzMjBweCkgLyA4ODApKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb3B5cmlnaHQge1xuICAgIGZvbnQtc2l6ZTogMTI7XG4gIH1cbn1cblxuLnRlcm1zIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuLnRlcm1zIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLnRlcm1zIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDIgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudGVybXMge1xuICAgIGZvbnQtc2l6ZTogMTI7XG4gIH1cbn1cblxuLnNvY2lhbHMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNvY2lhbHNfX2l0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc29jaWFsc19faXRlbSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5zb2NpYWxzX19pdGVtIHtcbiAgICBmb250LXNpemU6IGNhbGMoMThweCArIDIgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuc29jaWFsc19faXRlbSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICB9XG59IiwiJHByaW1hcnk6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1kYXJrOiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctbGlnaHQ6IHJnYmEoI0NBRUJGMCwgMC4yKTtcclxuJGRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWxpZ2h0OiMwMDAwMDA7XHJcbiRsaWdodDogI2ZmZjtcclxuJG1lZGl1bTogI0E5QTlBOTtcclxuJG1lZGl1bS1zaGFkb3ctZGFyazogI2Y5ZjlmOTtcclxuJG1lZGl1bS1zaGFkb3ctbGlnaHQ6ICNFRkVGRUY7XHJcbiRzZWNvbmRhcnk6ICNGRjNCM0Y7XHJcbiRzdWNjZXNzOiAjMkFCOTMwO1xyXG4vLyAkaW50ZXJtZWRpYXRlOiAjNjU1ZjVmO1xyXG5cclxuJGJvbGRlcjogUG9wcGlucy1FeHRyYUJvbGQ7XHJcbiRib2xkOiBQb3BwaW5zLUJvbGQ7XHJcbiRmLW1lZGl1bTogUG9wcGlucy1TZW1pQm9sZDtcclxuJHJlZ3VsYXI6IFBvcHBpbnMtUmVndWxhcjtcclxuJGYtbGlnaHQ6IFBvcHBpbnMtTGlnaHQ7XHJcbiRmLWl0YWxpYzogUG9wcGlucy1JdGFsaWM7XHJcblxyXG4kY29udGFpbmVyOiAxMzY1cHg7XHJcblxyXG4kYnRuLWhlaWdodDogNDBweDtcclxuJGRlZmF1bHQtcGFkZGluZzogMTVweDtcclxuJGl0ZW0tcGFkZGluZzogNXB4O1xyXG5cclxuJHJhZGl1czogMTBweDtcclxuXHJcbiRvcGFjaXR5OiByZ2JhKCRkYXJrLCAwLjIpO1xyXG5cclxuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMzIwMjQsICNGRkQ1NEMpO1xyXG4kc2hhZG93OiAwcHggMnB4IDI1cHggcmdiYSgxNSwgMjgsIDcxLCAwLjEpO1xyXG4kc2hhZG93LWJ0bjogMHB4IDI0cHggMTZweCAtMjJweCAjZmYzYjNmO1xyXG4kc2hhZG93LXN1Y2Nlc3M6IDBweCAyNHB4IDE2cHggLTIycHggJHN1Y2Nlc3M7XHJcblxyXG4kc3VjY2Vzcy1jb2xvcjogI2I3ZDhiNztcclxuJGVycm9yLWNvbG9yOiAjZjhiN2JkO1xyXG4kd2Fybi1jb2xvcjogI2ZmZTM5OTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pn+j":
/*!******************************************!*\
  !*** ./src/app/_services/ssr.service.ts ***!
  \******************************************/
/*! exports provided: SsrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsrService", function() { return SsrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class SsrService {
    constructor(platformId) {
        this.platformId = platformId;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId);
    }
}
SsrService.ɵfac = function SsrService_Factory(t) { return new (t || SsrService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
SsrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SsrService, factory: SsrService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SsrService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_guards/auth.guard */ "PSoG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us/about-us.component */ "BsnK");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq/faq.component */ "gN+M");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacy/privacy.component */ "TsVY");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms/terms.component */ "eIz4");









const routes = [
    {
        path: "home", loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule),
    },
    {
        path: "auth", loadChildren: () => Promise.all(/*! import() | auth-auth-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule)
    },
    {
        path: "user", loadChildren: () => Promise.all(/*! import() | user-user-module */[__webpack_require__.e("common"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null, /*! ./user/user.module */ "7UCR")).then(m => m.UserModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: "faq", component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"]
    },
    {
        path: "terms", component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_6__["TermsComponent"]
    },
    {
        path: "privacy", component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_5__["PrivacyComponent"]
    },
    {
        path: "about", component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]
    },
    {
        path: 'payments', loadChildren: () => __webpack_require__.e(/*! import() | payments-payments-module */ "payments-payments-module").then(__webpack_require__.bind(null, /*! ./payments/payments.module */ "T9EB")).then(m => m.PaymentsModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'radio-test', loadChildren: () => Promise.all(/*! import() | radio-test-radio-test-module */[__webpack_require__.e("common"), __webpack_require__.e("radio-test-radio-test-module")]).then(__webpack_require__.bind(null, /*! ./radio-test/radio-test.module */ "qj09")).then(m => m.RadioTestModule),
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    { path: '*', redirectTo: 'home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x+J2":
/*!**********************************************!*\
  !*** ./src/app/_services/queries.service.ts ***!
  \**********************************************/
/*! exports provided: QueriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueriesService", function() { return QueriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class QueriesService {
    constructor(http) {
        this.http = http;
        this.urls = {
            "faq": '/client/faq',
            "terms": '/client/terms',
            "policy": '/client/policy',
            "about": '/client/about',
            "home": '/client/homePage',
            "radioTest": '/client/radioTest',
            "request": '/client/request',
            "user": '/client/user',
            "password": '/client/change-password',
        };
    }
    getFaq() {
        return this.http.get(this.urls.faq);
    }
    getTerms() {
        return this.http.get(this.urls.terms);
    }
    getPolicy() {
        return this.http.get(this.urls.policy);
    }
    getAbout() {
        return this.http.get(this.urls.about);
    }
    getHome() {
        return this.http.get(this.urls.home);
    }
    postRequest(body) {
        return this.http.post(this.urls.request, body);
    }
}
QueriesService.ɵfac = function QueriesService_Factory(t) { return new (t || QueriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
QueriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QueriesService, factory: QueriesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map