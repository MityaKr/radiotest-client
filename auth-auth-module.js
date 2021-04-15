(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "NEkq":
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = function () { return ["/auth/login"]; };
class ForgotPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 16, vars: 2, consts: [[1, "content", "content-auth"], [1, "btn", "_outline", "close-btn", "flaticon-cancel", 3, "routerLink"], [1, "content__form"], [1, "title"], [1, "description"], [1, "form"], ["for", "", 1, "form__input", "error"], [1, "form__input--label"], ["type", "text", "placeholder", "email"], [1, "error__item"], [1, "btn", "form__btn"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reset password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter your email address to receive an email and reset your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Please enter an email address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Send email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n}\n.content-auth[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  background-color: rgba(255, 59, 63, 0.3);\n  border: none;\n  line-height: 42px;\n  top: 20px;\n  right: 20px;\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 20px auto 40px;\n  font-family: Poppins-Regular;\n  color: #A9A9A9;\n  text-align: center;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 320px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: calc(14px + 6 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUpBO0VBQ0k7SUFDSSxVQUFBO0VDeEpOO0VEMkpFO0lBQ0ksVUFBQTtFQ3pKTjtBQUNGO0FBRkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUlKO0FBQUE7RUFDSSxpQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtBQUVKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUFKO0FBSUE7RUFDSSxrQkFBQTtBQURKO0FBSUE7RUFDSSxzQkFBQTtFRDhESSw0QkVsRkU7RUZzRkYsY0VoR0M7RUY0R0Qsa0JDN0VvRDtBQUM1RDtBRDhGUTtFQUNJLGVDaEdpQjtBQUk3QjtBRDhGWTtFQUhKO0lBSVEsbURBQUE7RUMzRmQ7QUFDRjtBRDZGWTtFQVBKO0lBUVEsZUN2R21CO0VBYWpDO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtaXhpbiB0cnVuY2F0ZSgkbWF4LXdpZHRoKSB7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludHM6IChcInBob25lXCI6IDQwMHB4LFxyXG4gICAgXCJwaG9uZS13aWRlXCI6IDQ4MHB4LFxyXG4gICAgXCJwaGFibGV0XCI6IDU2MHB4LFxyXG4gICAgXCJ0YWJsZXQtc21hbGxcIjogNjQwcHgsXHJcbiAgICBcInRhYmxldFwiOiA3NjhweCxcclxuICAgIFwidGFibGV0LW1cIjogMTAwMHB4LFxyXG4gICAgXCJ0YWJsZXQtd2lkZVwiOiAxMDI0cHgsXHJcbiAgICBcImRlc2t0b3BcIjogMTI0OHB4LFxyXG4gICAgXCJkZXNrdG9wLXdpZGVcIjogMTQ0MHB4KTtcclxuXHJcbkBtaXhpbiBtcSgkd2lkdGgsICR0eXBlOiBtaW4pIHtcclxuICAgIEBpZiBtYXBfaGFzX2tleSgkYnJlYWtwb2ludHMsICR3aWR0aCkge1xyXG4gICAgICAgICR3aWR0aDogbWFwX2dldCgkYnJlYWtwb2ludHMsICR3aWR0aCk7XHJcblxyXG4gICAgICAgIEBpZiAkdHlwZT09bWF4IHtcclxuICAgICAgICAgICAgJHdpZHRoOiAkd2lkdGggLSAxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgjeyR0eXBlfS13aWR0aDogJHdpZHRoKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHooJG5hbWUpIHtcclxuICAgIEBpZiBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkge1xyXG4gICAgICAgIEByZXR1cm4gKGxlbmd0aCgkei1pbmRleGVzKSAtIGluZGV4KCR6LWluZGV4ZXMsICRuYW1lKSkrMTtcclxuICAgIH1cclxuXHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgQHdhcm4gJ1RoZXJlIGlzIG5vIGl0ZW0gXCIjeyRuYW1lfVwiIGluIHRoaXMgbGlzdDsgY2hvb3NlIG9uZSBvZjogI3skei1pbmRleGVzfSc7XHJcbiAgICAgICAgQHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4kei1pbmRleGVzOiAoXCJvdXRkYXRlZC1icm93c2VyXCIsIFwibW9kYWxcIiwgXCJzaXRlLWhlYWRlclwiLCBcInBhZ2Utd3JhcHBlclwiLCBcInNpdGUtZm9vdGVyXCIpO1xyXG5cclxuLy8tLS0tYmVmb3JlIGFmdGVyXHJcbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6IFwiXCIpIHtcclxuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAgICBwb3NpdGlvbjogJHBvcztcclxufVxyXG5cclxuQG1peGluIGZsZXgtY29udGVudCgkZGlyZWN0aW9uOiBmYWxzZSwgJGp1c3RpZnk6IGZhbHNlLCAkYWxpZ246IGZhbHNlLCAkYWxpZ24tY29udGVudDogZmFsc2UpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQGlmICRkaXJlY3Rpb24ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkanVzdGlmeSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24tY29udGVudCB7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogJGFsaWduLWNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmaWd1cmUoJHdpZHRoLCAkaGVpZ2h0OiBmYWxzZSkge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb250ZW50KHJvdywgY2VudGVyLCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIEBpZiAkaGVpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL3NjYWxhcmUgZm9udFxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkdmFsdWUpIHtcclxuICAgIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIGZsdWlkLXR5cGUtc2l6ZSgkbWluLWZvbnQtc2l6ZSxcclxuICAgICRtYXgtZm9udC1zaXplLFxyXG4gICAgJGZmOiBmYWxzZSxcclxuICAgICRjb2xvdXI6IGZhbHNlLFxyXG4gICAgJGFsaWduOiBmYWxzZSxcclxuICAgICRsaDogZmFsc2UsXHJcbiAgICAkd2VpZ2h0OiBmYWxzZSxcclxuICAgICRtaW4tdnc6IDMyMHB4LFxyXG4gICAgJG1heC12dzogMTIwMHB4KSB7XHJcbiAgICBAaWYgJGZmIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZmO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkY29sb3VyIHtcclxuICAgICAgICBjb2xvcjogJGNvbG91cjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJHdlaWdodCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRsaCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaDtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiAkYWxpZ247XHJcbiAgICB9XHJcblxyXG4gICAgJHUxOiB1bml0KCRtaW4tdncpO1xyXG4gICAgJHUyOiB1bml0KCRtYXgtdncpO1xyXG4gICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgICR1NDogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyBAaWYgJG1pbi1mb250LXNpemUge1xyXG4gICAgLy8gICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gQGlmICRtYXgtZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xyXG5cclxuXHJcbiAgICBAaWYgJHUxPT0kdTIgYW5kICR1MT09JHUzIGFuZCAkdTE9PSR1NCB7XHJcbiAgICAgICAgJiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkbWF4LWZvbnQtc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uICgkdGltZSkge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlICR0aW1lIGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59IiwiQGtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudC1hdXRoIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNTksIDYzLCAwLjMpO1xuICBib3JkZXI6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMjBweCBhdXRvIDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGNvbG9yOiAjQTlBOUE5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgNiAqICgoMTAwdncgLSAzMjBweCkgLyA4ODApKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59IiwiJHByaW1hcnk6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1kYXJrOiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctbGlnaHQ6IHJnYmEoI0NBRUJGMCwgMC4yKTtcclxuJGRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWxpZ2h0OiMwMDAwMDA7XHJcbiRsaWdodDogI2ZmZjtcclxuJG1lZGl1bTogI0E5QTlBOTtcclxuJG1lZGl1bS1zaGFkb3ctZGFyazogI2Y5ZjlmOTtcclxuJG1lZGl1bS1zaGFkb3ctbGlnaHQ6ICNFRkVGRUY7XHJcbiRzZWNvbmRhcnk6ICNGRjNCM0Y7XHJcbiRzdWNjZXNzOiAjMkFCOTMwO1xyXG4vLyAkaW50ZXJtZWRpYXRlOiAjNjU1ZjVmO1xyXG5cclxuJGJvbGRlcjogUG9wcGlucy1FeHRyYUJvbGQ7XHJcbiRib2xkOiBQb3BwaW5zLUJvbGQ7XHJcbiRmLW1lZGl1bTogUG9wcGlucy1TZW1pQm9sZDtcclxuJHJlZ3VsYXI6IFBvcHBpbnMtUmVndWxhcjtcclxuJGYtbGlnaHQ6IFBvcHBpbnMtTGlnaHQ7XHJcbiRmLWl0YWxpYzogUG9wcGlucy1JdGFsaWM7XHJcblxyXG4kY29udGFpbmVyOiAxMzY1cHg7XHJcblxyXG4kYnRuLWhlaWdodDogNDBweDtcclxuJGRlZmF1bHQtcGFkZGluZzogMTVweDtcclxuJGl0ZW0tcGFkZGluZzogNXB4O1xyXG5cclxuJHJhZGl1czogMTBweDtcclxuXHJcbiRvcGFjaXR5OiByZ2JhKCRkYXJrLCAwLjIpO1xyXG5cclxuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMzIwMjQsICNGRkQ1NEMpO1xyXG4kc2hhZG93OiAwcHggMnB4IDI1cHggcmdiYSgxNSwgMjgsIDcxLCAwLjEpO1xyXG4kc2hhZG93LWJ0bjogMHB4IDI0cHggMTZweCAtMjJweCAjZmYzYjNmO1xyXG4kc2hhZG93LXN1Y2Nlc3M6IDBweCAyNHB4IDE2cHggLTIycHggJHN1Y2Nlc3M7XHJcblxyXG4kc3VjY2Vzcy1jb2xvcjogI2I3ZDhiNztcclxuJGVycm9yLWNvbG9yOiAjZjhiN2JkO1xyXG4kd2Fybi1jb2xvcjogI2ZmZTM5OTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VFgG":
/*!*********************************************!*\
  !*** ./src/app/auth/auth/auth.component.ts ***!
  \*********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home"]; };
class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 7, vars: 2, consts: [[1, "wrapper", "auth-wrapper"], [1, "content-img", "content"], [1, "logo", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", ""], [1, "auth-img"], ["src", "assets/images/auth.png", "alt", ""]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "picture", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 50%;\n  width: 100%;\n}\n@media only screen and (max-width: 1247px) {\n  .content-img[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .content-img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-wrapper[_ngcontent-%COMP%] {\n  max-width: 1920px;\n  width: 100%;\n  margin: 0 auto;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  max-width: 490px;\n  width: 100%;\n  height: 140px;\n  margin: 25px auto 60px;\n  padding: 0 20px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.auth-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n}\n.auth-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXV0aC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUpBO0VBQ0k7SUFDSSxVQUFBO0VDeEpOO0VEMkpFO0lBQ0ksVUFBQTtFQ3pKTjtBQUNGO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQUNKO0FEZ0JRO0VDZFI7SUFLUSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBRk47QUFDRjtBRE9RO0VDZFI7SUFXUSxhQUFBO0VBQU47QUFDRjtBQUlBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQURKO0FBTUE7RURpQkksYUFBQTtFQUdJLG1CQWlCa0I7RUFibEIsdUJBYXVCO0VBVHZCLG1CQVMrQjtFQUwvQixxQkFLdUM7RUFDM0MsZ0JDckNnQjtFRHNDaEIsV0FBQTtFQUdJLGFDekNtQjtFQUN2QixzQkFBQTtFQUNBLGVBQUE7QUFJSjtBQUhJO0VBQ0ksZUFBQTtBQUtSO0FBREE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUlKO0FBSEk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFLUiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWl4aW4gdHJ1bmNhdGUoJG1heC13aWR0aCkge1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuJGJyZWFrcG9pbnRzOiAoXCJwaG9uZVwiOiA0MDBweCxcclxuICAgIFwicGhvbmUtd2lkZVwiOiA0ODBweCxcclxuICAgIFwicGhhYmxldFwiOiA1NjBweCxcclxuICAgIFwidGFibGV0LXNtYWxsXCI6IDY0MHB4LFxyXG4gICAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgICBcInRhYmxldC1tXCI6IDEwMDBweCxcclxuICAgIFwidGFibGV0LXdpZGVcIjogMTAyNHB4LFxyXG4gICAgXCJkZXNrdG9wXCI6IDEyNDhweCxcclxuICAgIFwiZGVza3RvcC13aWRlXCI6IDE0NDBweCk7XHJcblxyXG5AbWl4aW4gbXEoJHdpZHRoLCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwX2hhc19rZXkoJGJyZWFrcG9pbnRzLCAkd2lkdGgpIHtcclxuICAgICAgICAkd2lkdGg6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkd2lkdGgpO1xyXG5cclxuICAgICAgICBAaWYgJHR5cGU9PW1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoI3skdHlwZX0td2lkdGg6ICR3aWR0aCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiB6KCRuYW1lKSB7XHJcbiAgICBAaWYgaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpIHtcclxuICAgICAgICBAcmV0dXJuIChsZW5ndGgoJHotaW5kZXhlcykgLSBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkpKzE7XHJcbiAgICB9XHJcblxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEB3YXJuICdUaGVyZSBpcyBubyBpdGVtIFwiI3skbmFtZX1cIiBpbiB0aGlzIGxpc3Q7IGNob29zZSBvbmUgb2Y6ICN7JHotaW5kZXhlc30nO1xyXG4gICAgICAgIEByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuJHotaW5kZXhlczogKFwib3V0ZGF0ZWQtYnJvd3NlclwiLCBcIm1vZGFsXCIsIFwic2l0ZS1oZWFkZXJcIiwgXCJwYWdlLXdyYXBwZXJcIiwgXCJzaXRlLWZvb3RlclwiKTtcclxuXHJcbi8vLS0tLWJlZm9yZSBhZnRlclxyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiBcIlwiKSB7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbnRlbnQoJGRpcmVjdGlvbjogZmFsc2UsICRqdXN0aWZ5OiBmYWxzZSwgJGFsaWduOiBmYWxzZSwgJGFsaWduLWNvbnRlbnQ6IGZhbHNlKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBpZiAkZGlyZWN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGp1c3RpZnkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduLWNvbnRlbnQge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICRhbGlnbi1jb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmlndXJlKCR3aWR0aCwgJGhlaWdodDogZmFsc2UpIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csIGNlbnRlciwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAaWYgJGhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9zY2FsYXJlIGZvbnRcclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbHVpZC10eXBlLXNpemUoJG1pbi1mb250LXNpemUsXHJcbiAgICAkbWF4LWZvbnQtc2l6ZSxcclxuICAgICRmZjogZmFsc2UsXHJcbiAgICAkY29sb3VyOiBmYWxzZSxcclxuICAgICRhbGlnbjogZmFsc2UsXHJcbiAgICAkbGg6IGZhbHNlLFxyXG4gICAgJHdlaWdodDogZmFsc2UsXHJcbiAgICAkbWluLXZ3OiAzMjBweCxcclxuICAgICRtYXgtdnc6IDEyMDBweCkge1xyXG4gICAgQGlmICRmZiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmZjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGNvbG91ciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICR3ZWlnaHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkbGgge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGg7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgICR1MTogdW5pdCgkbWluLXZ3KTtcclxuICAgICR1MjogdW5pdCgkbWF4LXZ3KTtcclxuICAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAkdTQ6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gQGlmICRtaW4tZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vIEBpZiAkbWF4LWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuXHJcblxyXG4gICAgQGlmICR1MT09JHUyIGFuZCAkdTE9PSR1MyBhbmQgJHUxPT0kdTQge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHRpbWUpIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAkdGltZSBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNDdweCkge1xuICAuY29udGVudC1pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW50LWltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uYXV0aC13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQ5MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luOiAyNXB4IGF1dG8gNjBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uYXV0aC1pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF1dGgtaW1nIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors_app_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_interceptors/app.interceptor */ "6OAP");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "ZGml");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./success/success.component */ "ukbF");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "NEkq");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "xT/v");
/* harmony import */ var _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-password/new-password.component */ "yUpL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.component */ "VFgG");
















const routes = [
    { path: "success", component: _success_success_component__WEBPACK_IMPORTED_MODULE_8__["SuccessComponent"] },
    { path: "confirm-email", component: _success_success_component__WEBPACK_IMPORTED_MODULE_8__["SuccessComponent"] },
    {
        path: '',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
        children: [
            {
                path: "", redirectTo: 'login', pathMatch: "full"
            },
            {
                path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            },
            {
                path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
            },
            {
                path: "forgot-password", component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"]
            },
            {
                path: "reset-password", component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"]
            },
        ]
    }
];
class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _interceptors_app_interceptor__WEBPACK_IMPORTED_MODULE_1__["AppInterceptor"], multi: true },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _success_success_component__WEBPACK_IMPORTED_MODULE_8__["SuccessComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"], _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_11__["NewPasswordComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _success_success_component__WEBPACK_IMPORTED_MODULE_8__["SuccessComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"], _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_11__["NewPasswordComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _interceptors_app_interceptor__WEBPACK_IMPORTED_MODULE_1__["AppInterceptor"], multi: true },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZGml":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_utils/formValidationUtils */ "npik");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_queries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_services/queries.service */ "x+J2");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/validation-error-show/validation-error-show.component */ "1dAB");











const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/privacy"]; };
const _c2 = function () { return ["/auth/login"]; };
class RegisterComponent {
    constructor(http, query, auth, router) {
        this.http = http;
        this.query = query;
        this.auth = auth;
        this.router = router;
        this.regForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Mitya', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__["trimValidator"]]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Kr', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__["trimValidator"]]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('d.m.i.t.r.i.i10051997@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128), src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__["trimValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('111111', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            acceptTerms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue])
        });
        this.regForm.addControl("repeatPassword", new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('111111', [
            src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__["passwordConfirmValidatorPartPasswordConfirm"].bind(this, this.regForm.controls.password)
        ]));
        this.regForm.controls.password.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__["trimValidator"],
            src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__["passwordConfirmValidatorPartPassword"].bind(this, this.regForm.controls.repeatPassword)
        ]);
    }
    ngOnInit() {
        // this.regForm.controls.repeatPassword.setValidators([
        //   Validators.required,
        //   this.checkPasswords.bind(this.regForm)
        // ]);
    }
    checkPasswords(group) {
        const password = this['controls'].password.value;
        const repeatPassword = this['controls'].repeatPassword.value;
        return password === repeatPassword ? null : { passwordConfirmError: true };
    }
    confirmRegister() {
        console.log('REG: ', this.regForm);
        this.regForm.markAllAsTouched();
        this.regForm.updateValueAndValidity();
        if (this.regForm.valid) {
            console.log('CONGRATULATIONS!');
            this.auth.register({
                email: this.regForm.controls.email.value,
                firstName: this.regForm.controls.firstName.value,
                lastName: this.regForm.controls.lastName.value,
                password: this.regForm.controls.password.value,
            }).then((data) => {
                console.log('D: ', data);
                this.regForm.enable();
                // if (!!data)
                this.router.navigate(['auth', 'confirm-email']);
            });
            this.regForm.disable();
        }
        else
            console.log('ПШЕЛ ВОН, ПЁС!');
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_queries_service__WEBPACK_IMPORTED_MODULE_4__["QueriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 51, vars: 18, consts: [[1, "content", "content-auth"], [1, "btn", "_outline", "close-btn", "flaticon-cancel", 3, "routerLink"], [1, "content__form"], [1, "title"], [1, "description"], ["novalidate", "", 1, "form", 3, "formGroup", "submit"], ["for", "", 1, "form__input"], [1, "form__input--label"], ["type", "text", "formControlName", "firstName", "placeholder", "First name"], [3, "control"], ["type", "text", "formControlName", "lastName", "placeholder", "Last name"], ["type", "email", "formControlName", "email", "placeholder", "email"], ["type", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "password"], ["type", "password", "formControlName", "repeatPassword", "placeholder", "password"], [1, "wrapper"], ["for", "check", 1, "form__checkbox"], ["type", "checkbox", "formControlName", "acceptTerms", "checked", "checked", "id", "check"], [1, "text", "checkmark"], [3, "routerLink"], [1, "btn", "form__btn", 3, "disabled"], [1, "wrapper-navigation"], [1, "form__link", 3, "routerLink"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Welcome to Radio Test!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Register your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_7_listener() { return ctx.confirmRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-validation-error-show", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-validation-error-show", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "app-validation-error-show", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "app-validation-error-show", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Repeat password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "app-validation-error-show", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "By signing up, I agree with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "app-validation-error-show", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Already a member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Sign in!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.regForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.regForm.controls.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.regForm.controls.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.regForm.controls.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.regForm.controls.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.regForm.controls.repeatPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.regForm.controls.acceptTerms);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.regForm.invalid || ctx.regForm.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_7__["ValidationErrorShowComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n}\n.content-auth[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  background-color: rgba(255, 59, 63, 0.3);\n  border: none;\n  line-height: 42px;\n  top: 20px;\n  right: 20px;\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 20px auto 40px;\n  font-family: Poppins-Regular;\n  color: #A9A9A9;\n  text-align: center;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 320px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: calc(14px + 6 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.wrapper[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.form__checkbox[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-width: 100%;\n  width: 100%;\n  color: #A9A9A9;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.form__checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: underline;\n  margin-left: 15px;\n}\n.form__checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .form__checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: calc(12px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .form__checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.form__checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #A9A9A9;\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlKQTtFQUNJO0lBQ0ksVUFBQTtFQ3hKTjtFRDJKRTtJQUNJLFVBQUE7RUN6Sk47QUFDRjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFJSjtBQUNBO0VBQ0ksaUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFESjtBQUtBO0VBQ0ksa0JBQUE7QUFGSjtBQUtBO0VBQ0ksc0JBQUE7RUQ2REksNEJFbEZFO0VGc0ZGLGNFaEdDO0VGNEdELGtCQzVFb0Q7QUFBNUQ7QUQ4RlE7RUFDSSxlQy9GaUI7QUFHN0I7QUQ4Rlk7RUFISjtJQUlRLG1EQUFBO0VDM0ZkO0FBQ0Y7QUQ2Rlk7RUFQSjtJQVFRLGVDdEdtQjtFQVlqQztBQUNGO0FBVEE7RUFDSSwyQkFBQTtBQVlKO0FBVEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0M1Q0s7RUQ2Q0wsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVlKO0FBWEk7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFFQSxpQkFBQTtBQVlSO0FEOERRO0VBQ0ksZUM1RXFCO0FBZ0JqQztBRDhEWTtFQUhKO0lBSVEsbURBQUE7RUMzRGQ7QUFDRjtBRDZEWTtFQVBKO0lBUVEsZUNuRnVCO0VBeUJyQztBQUNGO0FBeEJRO0VBQ0ksY0N0REg7RUR1REcsYUFBQTtBQTBCWiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtaXhpbiB0cnVuY2F0ZSgkbWF4LXdpZHRoKSB7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludHM6IChcInBob25lXCI6IDQwMHB4LFxyXG4gICAgXCJwaG9uZS13aWRlXCI6IDQ4MHB4LFxyXG4gICAgXCJwaGFibGV0XCI6IDU2MHB4LFxyXG4gICAgXCJ0YWJsZXQtc21hbGxcIjogNjQwcHgsXHJcbiAgICBcInRhYmxldFwiOiA3NjhweCxcclxuICAgIFwidGFibGV0LW1cIjogMTAwMHB4LFxyXG4gICAgXCJ0YWJsZXQtd2lkZVwiOiAxMDI0cHgsXHJcbiAgICBcImRlc2t0b3BcIjogMTI0OHB4LFxyXG4gICAgXCJkZXNrdG9wLXdpZGVcIjogMTQ0MHB4KTtcclxuXHJcbkBtaXhpbiBtcSgkd2lkdGgsICR0eXBlOiBtaW4pIHtcclxuICAgIEBpZiBtYXBfaGFzX2tleSgkYnJlYWtwb2ludHMsICR3aWR0aCkge1xyXG4gICAgICAgICR3aWR0aDogbWFwX2dldCgkYnJlYWtwb2ludHMsICR3aWR0aCk7XHJcblxyXG4gICAgICAgIEBpZiAkdHlwZT09bWF4IHtcclxuICAgICAgICAgICAgJHdpZHRoOiAkd2lkdGggLSAxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgjeyR0eXBlfS13aWR0aDogJHdpZHRoKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHooJG5hbWUpIHtcclxuICAgIEBpZiBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkge1xyXG4gICAgICAgIEByZXR1cm4gKGxlbmd0aCgkei1pbmRleGVzKSAtIGluZGV4KCR6LWluZGV4ZXMsICRuYW1lKSkrMTtcclxuICAgIH1cclxuXHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgQHdhcm4gJ1RoZXJlIGlzIG5vIGl0ZW0gXCIjeyRuYW1lfVwiIGluIHRoaXMgbGlzdDsgY2hvb3NlIG9uZSBvZjogI3skei1pbmRleGVzfSc7XHJcbiAgICAgICAgQHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4kei1pbmRleGVzOiAoXCJvdXRkYXRlZC1icm93c2VyXCIsIFwibW9kYWxcIiwgXCJzaXRlLWhlYWRlclwiLCBcInBhZ2Utd3JhcHBlclwiLCBcInNpdGUtZm9vdGVyXCIpO1xyXG5cclxuLy8tLS0tYmVmb3JlIGFmdGVyXHJcbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6IFwiXCIpIHtcclxuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAgICBwb3NpdGlvbjogJHBvcztcclxufVxyXG5cclxuQG1peGluIGZsZXgtY29udGVudCgkZGlyZWN0aW9uOiBmYWxzZSwgJGp1c3RpZnk6IGZhbHNlLCAkYWxpZ246IGZhbHNlLCAkYWxpZ24tY29udGVudDogZmFsc2UpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQGlmICRkaXJlY3Rpb24ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkanVzdGlmeSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24tY29udGVudCB7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogJGFsaWduLWNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmaWd1cmUoJHdpZHRoLCAkaGVpZ2h0OiBmYWxzZSkge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb250ZW50KHJvdywgY2VudGVyLCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIEBpZiAkaGVpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL3NjYWxhcmUgZm9udFxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkdmFsdWUpIHtcclxuICAgIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIGZsdWlkLXR5cGUtc2l6ZSgkbWluLWZvbnQtc2l6ZSxcclxuICAgICRtYXgtZm9udC1zaXplLFxyXG4gICAgJGZmOiBmYWxzZSxcclxuICAgICRjb2xvdXI6IGZhbHNlLFxyXG4gICAgJGFsaWduOiBmYWxzZSxcclxuICAgICRsaDogZmFsc2UsXHJcbiAgICAkd2VpZ2h0OiBmYWxzZSxcclxuICAgICRtaW4tdnc6IDMyMHB4LFxyXG4gICAgJG1heC12dzogMTIwMHB4KSB7XHJcbiAgICBAaWYgJGZmIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZmO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkY29sb3VyIHtcclxuICAgICAgICBjb2xvcjogJGNvbG91cjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJHdlaWdodCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRsaCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaDtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiAkYWxpZ247XHJcbiAgICB9XHJcblxyXG4gICAgJHUxOiB1bml0KCRtaW4tdncpO1xyXG4gICAgJHUyOiB1bml0KCRtYXgtdncpO1xyXG4gICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgICR1NDogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyBAaWYgJG1pbi1mb250LXNpemUge1xyXG4gICAgLy8gICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gQGlmICRtYXgtZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xyXG5cclxuXHJcbiAgICBAaWYgJHUxPT0kdTIgYW5kICR1MT09JHUzIGFuZCAkdTE9PSR1NCB7XHJcbiAgICAgICAgJiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkbWF4LWZvbnQtc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uICgkdGltZSkge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlICR0aW1lIGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59IiwiQGtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudC1hdXRoIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNTksIDYzLCAwLjMpO1xuICBib3JkZXI6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMjBweCBhdXRvIDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGNvbG9yOiAjQTlBOUE5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgNiAqICgoMTAwdncgLSAzMjBweCkgLyA4ODApKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbi53cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uZm9ybV9fY2hlY2tib3gge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI0E5QTlBOTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm1fX2NoZWNrYm94IHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4uZm9ybV9fY2hlY2tib3ggc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5mb3JtX19jaGVja2JveCBzcGFuIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDIgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuZm9ybV9fY2hlY2tib3ggc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uZm9ybV9fY2hlY2tib3ggc3BhbiBhIHtcbiAgY29sb3I6ICNBOUE5QTk7XG4gIG1hcmdpbjogMCA1cHg7XG59IiwiJHByaW1hcnk6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1kYXJrOiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctbGlnaHQ6IHJnYmEoI0NBRUJGMCwgMC4yKTtcclxuJGRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWxpZ2h0OiMwMDAwMDA7XHJcbiRsaWdodDogI2ZmZjtcclxuJG1lZGl1bTogI0E5QTlBOTtcclxuJG1lZGl1bS1zaGFkb3ctZGFyazogI2Y5ZjlmOTtcclxuJG1lZGl1bS1zaGFkb3ctbGlnaHQ6ICNFRkVGRUY7XHJcbiRzZWNvbmRhcnk6ICNGRjNCM0Y7XHJcbiRzdWNjZXNzOiAjMkFCOTMwO1xyXG4vLyAkaW50ZXJtZWRpYXRlOiAjNjU1ZjVmO1xyXG5cclxuJGJvbGRlcjogUG9wcGlucy1FeHRyYUJvbGQ7XHJcbiRib2xkOiBQb3BwaW5zLUJvbGQ7XHJcbiRmLW1lZGl1bTogUG9wcGlucy1TZW1pQm9sZDtcclxuJHJlZ3VsYXI6IFBvcHBpbnMtUmVndWxhcjtcclxuJGYtbGlnaHQ6IFBvcHBpbnMtTGlnaHQ7XHJcbiRmLWl0YWxpYzogUG9wcGlucy1JdGFsaWM7XHJcblxyXG4kY29udGFpbmVyOiAxMzY1cHg7XHJcblxyXG4kYnRuLWhlaWdodDogNDBweDtcclxuJGRlZmF1bHQtcGFkZGluZzogMTVweDtcclxuJGl0ZW0tcGFkZGluZzogNXB4O1xyXG5cclxuJHJhZGl1czogMTBweDtcclxuXHJcbiRvcGFjaXR5OiByZ2JhKCRkYXJrLCAwLjIpO1xyXG5cclxuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMzIwMjQsICNGRkQ1NEMpO1xyXG4kc2hhZG93OiAwcHggMnB4IDI1cHggcmdiYSgxNSwgMjgsIDcxLCAwLjEpO1xyXG4kc2hhZG93LWJ0bjogMHB4IDI0cHggMTZweCAtMjJweCAjZmYzYjNmO1xyXG4kc2hhZG93LXN1Y2Nlc3M6IDBweCAyNHB4IDE2cHggLTIycHggJHN1Y2Nlc3M7XHJcblxyXG4kc3VjY2Vzcy1jb2xvcjogI2I3ZDhiNztcclxuJGVycm9yLWNvbG9yOiAjZjhiN2JkO1xyXG4kd2Fybi1jb2xvcjogI2ZmZTM5OTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _services_queries_service__WEBPACK_IMPORTED_MODULE_4__["QueriesService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_utils/formValidationUtils */ "npik");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_services/auth.service */ "7Vn+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/validation-error-show/validation-error-show.component */ "1dAB");








const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/auth/forgot-password"]; };
const _c2 = function () { return ["/auth/register"]; };
class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('d.m.i.t.r.i.i10051997@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128), src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__["trimValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('111111', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
    }
    ngOnInit() {
    }
    login() {
        console.log('REG: ', this.loginForm);
        this.loginForm.markAllAsTouched();
        this.loginForm.updateValueAndValidity();
        if (this.loginForm.valid) {
            console.log('CONGRATULATIONS!');
            this.auth.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).then((data) => {
                console.log('D: ', data);
                this.loginForm.enable();
                this.router.navigate(['radio-test']);
                // if (!!data)
                // this.router.navigate(['auth', 'confirm-email']);
            });
            this.loginForm.disable();
        }
        else
            console.log('ПШЕЛ ВОН, ПЁС!');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 28, vars: 13, consts: [[1, "content", "content-auth"], [1, "btn", "_outline", "close-btn", "flaticon-cancel", 3, "routerLink"], [1, "content__form"], [1, "title"], [1, "description"], ["novalidate", "", 1, "form", 3, "formGroup", "submit"], ["for", "", 1, "form__input"], [1, "form__input--label"], ["type", "text", "formControlName", "email", "placeholder", "email"], [3, "control"], ["type", "password", "formControlName", "password", "placeholder", "password"], [1, "wrapper"], ["routerLinkActive", "router-link-active", 1, "form__link", 3, "routerLink"], [1, "btn", "form__btn"], [1, "wrapper-navigation"], [1, "form__link", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Welcome to Radio Test!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Log in to your account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_7_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-validation-error-show", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-validation-error-show", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Not a member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Sign up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.loginForm.controls.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.loginForm.controls.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_5__["ValidationErrorShowComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n}\n.content-auth[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  background-color: rgba(255, 59, 63, 0.3);\n  border: none;\n  line-height: 42px;\n  top: 20px;\n  right: 20px;\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 20px auto 40px;\n  font-family: Poppins-Regular;\n  color: #A9A9A9;\n  text-align: center;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 320px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: calc(14px + 6 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlKQTtFQUNJO0lBQ0ksVUFBQTtFQ3hKTjtFRDJKRTtJQUNJLFVBQUE7RUN6Sk47QUFDRjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFJSjtBQUNBO0VBQ0ksaUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFBSjtBQUlBO0VBQ0ksa0JBQUE7QUFESjtBQUlBO0VBQ0ksc0JBQUE7RUQ4REksNEJFbEZFO0VGc0ZGLGNFaEdDO0VGNEdELGtCQzdFb0Q7QUFDNUQ7QUQ4RlE7RUFDSSxlQ2hHaUI7QUFJN0I7QUQ4Rlk7RUFISjtJQUlRLG1EQUFBO0VDM0ZkO0FBQ0Y7QUQ2Rlk7RUFQSjtJQVFRLGVDdkdtQjtFQWFqQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQG1peGluIHRydW5jYXRlKCRtYXgtd2lkdGgpIHtcclxuICAgIG1heC13aWR0aDogJG1heC13aWR0aDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbiRicmVha3BvaW50czogKFwicGhvbmVcIjogNDAwcHgsXHJcbiAgICBcInBob25lLXdpZGVcIjogNDgwcHgsXHJcbiAgICBcInBoYWJsZXRcIjogNTYwcHgsXHJcbiAgICBcInRhYmxldC1zbWFsbFwiOiA2NDBweCxcclxuICAgIFwidGFibGV0XCI6IDc2OHB4LFxyXG4gICAgXCJ0YWJsZXQtbVwiOiAxMDAwcHgsXHJcbiAgICBcInRhYmxldC13aWRlXCI6IDEwMjRweCxcclxuICAgIFwiZGVza3RvcFwiOiAxMjQ4cHgsXHJcbiAgICBcImRlc2t0b3Atd2lkZVwiOiAxNDQwcHgpO1xyXG5cclxuQG1peGluIG1xKCR3aWR0aCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcF9oYXNfa2V5KCRicmVha3BvaW50cywgJHdpZHRoKSB7XHJcbiAgICAgICAgJHdpZHRoOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJHdpZHRoKTtcclxuXHJcbiAgICAgICAgQGlmICR0eXBlPT1tYXgge1xyXG4gICAgICAgICAgICAkd2lkdGg6ICR3aWR0aCAtIDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCN7JHR5cGV9LXdpZHRoOiAkd2lkdGgpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24geigkbmFtZSkge1xyXG4gICAgQGlmIGluZGV4KCR6LWluZGV4ZXMsICRuYW1lKSB7XHJcbiAgICAgICAgQHJldHVybiAobGVuZ3RoKCR6LWluZGV4ZXMpIC0gaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpKSsxO1xyXG4gICAgfVxyXG5cclxuICAgIEBlbHNlIHtcclxuICAgICAgICBAd2FybiAnVGhlcmUgaXMgbm8gaXRlbSBcIiN7JG5hbWV9XCIgaW4gdGhpcyBsaXN0OyBjaG9vc2Ugb25lIG9mOiAjeyR6LWluZGV4ZXN9JztcclxuICAgICAgICBAcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbiR6LWluZGV4ZXM6IChcIm91dGRhdGVkLWJyb3dzZXJcIiwgXCJtb2RhbFwiLCBcInNpdGUtaGVhZGVyXCIsIFwicGFnZS13cmFwcGVyXCIsIFwic2l0ZS1mb290ZXJcIik7XHJcblxyXG4vLy0tLS1iZWZvcmUgYWZ0ZXJcclxuQG1peGluIHBzZXVkbygkZGlzcGxheTogYmxvY2ssICRwb3M6IGFic29sdXRlLCAkY29udGVudDogXCJcIikge1xyXG4gICAgY29udGVudDogJGNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiAkZGlzcGxheTtcclxuICAgIHBvc2l0aW9uOiAkcG9zO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb250ZW50KCRkaXJlY3Rpb246IGZhbHNlLCAkanVzdGlmeTogZmFsc2UsICRhbGlnbjogZmFsc2UsICRhbGlnbi1jb250ZW50OiBmYWxzZSkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBAaWYgJGRpcmVjdGlvbiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRqdXN0aWZ5IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24ge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbi1jb250ZW50IHtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiAkYWxpZ24tY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZpZ3VyZSgkd2lkdGgsICRoZWlnaHQ6IGZhbHNlKSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRlbnQocm93LCBjZW50ZXIsIGNlbnRlciwgY2VudGVyKTtcclxuICAgIG1heC13aWR0aDogJHdpZHRoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgQGlmICRoZWlnaHQge1xyXG4gICAgICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vc2NhbGFyZSBmb250XHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xyXG4gICAgQHJldHVybiAkdmFsdWUgLyAoJHZhbHVlICogMCArIDEpO1xyXG59XHJcblxyXG5AbWl4aW4gZmx1aWQtdHlwZS1zaXplKCRtaW4tZm9udC1zaXplLFxyXG4gICAgJG1heC1mb250LXNpemUsXHJcbiAgICAkZmY6IGZhbHNlLFxyXG4gICAgJGNvbG91cjogZmFsc2UsXHJcbiAgICAkYWxpZ246IGZhbHNlLFxyXG4gICAgJGxoOiBmYWxzZSxcclxuICAgICR3ZWlnaHQ6IGZhbHNlLFxyXG4gICAgJG1pbi12dzogMzIwcHgsXHJcbiAgICAkbWF4LXZ3OiAxMjAwcHgpIHtcclxuICAgIEBpZiAkZmYge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZmY7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRjb2xvdXIge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkd2VpZ2h0IHtcclxuICAgICAgICBmb250LXdlaWdodDogJHdlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGxoIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogJGxoO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICAkdTE6IHVuaXQoJG1pbi12dyk7XHJcbiAgICAkdTI6IHVuaXQoJG1heC12dyk7XHJcbiAgICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgJHU0OiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIEBpZiAkbWluLWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBAaWYgJG1heC1mb250LXNpemUge1xyXG4gICAgLy8gICAkdTM6IHVuaXQoJG1heC1mb250LXNpemUpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vICR1NDogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcblxyXG5cclxuICAgIEBpZiAkdTE9PSR1MiBhbmQgJHUxPT0kdTMgYW5kICR1MT09JHU0IHtcclxuICAgICAgICAmIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkbWluLWZvbnQtc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygjeyRtaW4tZm9udC1zaXplfSArICN7c3RyaXAtdW5pdCgkbWF4LWZvbnQtc2l6ZSAtICRtaW4tZm9udC1zaXplKX0gKiAoKDEwMHZ3IC0gI3skbWluLXZ3fSkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRtYXgtZm9udC1zaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtaXhpbiBhbmltYXRpb24gKCR0aW1lKSB7XHJcbiAgICBhbmltYXRpb246IGZhZGUgJHRpbWUgYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn0iLCJAa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGVudCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50LWF1dGgge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jbG9zZS1idG4ge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA1OSwgNjMsIDAuMyk7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gNDBweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgY29sb3I6ICNBOUE5QTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiBjYWxjKDE0cHggKyA2ICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn0iLCIkcHJpbWFyeTogI0NBRUJGMDtcclxuJHByaW1hcnktc2hhZG93LWRhcms6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1saWdodDogcmdiYSgjQ0FFQkYwLCAwLjIpO1xyXG4kZGFyazojMDAwMDAwO1xyXG4kZGFyay1zaGFkb3ctZGFyazojMDAwMDAwO1xyXG4kZGFyay1zaGFkb3ctbGlnaHQ6IzAwMDAwMDtcclxuJGxpZ2h0OiAjZmZmO1xyXG4kbWVkaXVtOiAjQTlBOUE5O1xyXG4kbWVkaXVtLXNoYWRvdy1kYXJrOiAjZjlmOWY5O1xyXG4kbWVkaXVtLXNoYWRvdy1saWdodDogI0VGRUZFRjtcclxuJHNlY29uZGFyeTogI0ZGM0IzRjtcclxuJHN1Y2Nlc3M6ICMyQUI5MzA7XHJcbi8vICRpbnRlcm1lZGlhdGU6ICM2NTVmNWY7XHJcblxyXG4kYm9sZGVyOiBQb3BwaW5zLUV4dHJhQm9sZDtcclxuJGJvbGQ6IFBvcHBpbnMtQm9sZDtcclxuJGYtbWVkaXVtOiBQb3BwaW5zLVNlbWlCb2xkO1xyXG4kcmVndWxhcjogUG9wcGlucy1SZWd1bGFyO1xyXG4kZi1saWdodDogUG9wcGlucy1MaWdodDtcclxuJGYtaXRhbGljOiBQb3BwaW5zLUl0YWxpYztcclxuXHJcbiRjb250YWluZXI6IDEzNjVweDtcclxuXHJcbiRidG4taGVpZ2h0OiA0MHB4O1xyXG4kZGVmYXVsdC1wYWRkaW5nOiAxNXB4O1xyXG4kaXRlbS1wYWRkaW5nOiA1cHg7XHJcblxyXG4kcmFkaXVzOiAxMHB4O1xyXG5cclxuJG9wYWNpdHk6IHJnYmEoJGRhcmssIDAuMik7XHJcblxyXG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0UzMjAyNCwgI0ZGRDU0Qyk7XHJcbiRzaGFkb3c6IDBweCAycHggMjVweCByZ2JhKDE1LCAyOCwgNzEsIDAuMSk7XHJcbiRzaGFkb3ctYnRuOiAwcHggMjRweCAxNnB4IC0yMnB4ICNmZjNiM2Y7XHJcbiRzaGFkb3ctc3VjY2VzczogMHB4IDI0cHggMTZweCAtMjJweCAkc3VjY2VzcztcclxuXHJcbiRzdWNjZXNzLWNvbG9yOiAjYjdkOGI3O1xyXG4kZXJyb3ItY29sb3I6ICNmOGI3YmQ7XHJcbiR3YXJuLWNvbG9yOiAjZmZlMzk5O1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "ukbF":
/*!***************************************************!*\
  !*** ./src/app/auth/success/success.component.ts ***!
  \***************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SuccessComponent {
    constructor(route) {
        this.route = route;
        this.msg = '';
    }
    ngOnInit() {
        if (location.pathname.includes('confirm-email'))
            this.msg = 'We need you to confirm your email address. An email with verification instructions has been sent to your email address.';
        else if (location.pathname.includes('success'))
            this.msg = 'Congratulations, your email address has been verified, please login using your credentials.';
    }
}
SuccessComponent.ɵfac = function SuccessComponent_Factory(t) { return new (t || SuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
SuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessComponent, selectors: [["app-success"]], decls: 6, vars: 1, consts: [[1, "container"], ["href", "", 1, "logo"], ["src", "assets/images/logo.png", "alt", ""], [1, "description"], [1, "succes-icon", "flaticon-medal"]], template: function SuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg);
    } }, styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  min-height: calc(100vh + 0px);\n  padding-top: 100px;\n  align-content: center;\n  justify-content: center;\n  background-image: url('success-bg.png');\n  background-repeat: no-repeat;\n  background-position: 50% calc(50% - 50px);\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  max-width: 300px;\n  width: 100%;\n  height: 85px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  object-fit: contain;\n}\n.description[_ngcontent-%COMP%] {\n  max-width: 900px;\n  width: 100%;\n  font-family: Poppins-SemiBold;\n  color: #000000;\n  text-align: center;\n  margin-top: 45px;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 320px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: calc(14px + 16 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .description[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n@media only screen and (max-width: 479px) {\n  .description[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n.succes-icon[_ngcontent-%COMP%] {\n  color: #FF3B3F;\n}\n.succes-icon[_ngcontent-%COMP%] {\n  font-size: 120px;\n}\n@media screen and (min-width: 320px) {\n  .succes-icon[_ngcontent-%COMP%] {\n    font-size: calc(120px + 130 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .succes-icon[_ngcontent-%COMP%] {\n    font-size: 250px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .succes-icon[_ngcontent-%COMP%] {\n    line-height: 170px;\n  }\n}\n@media only screen and (max-width: 479px) {\n  .succes-icon[_ngcontent-%COMP%] {\n    line-height: 135px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXV0aC9zdWNjZXNzL3N1Y2Nlc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SkE7RUFDSTtJQUNJLFVBQUE7RUN4Sk47RUQySkU7SUFDSSxVQUFBO0VDekpOO0FBQ0Y7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSx5Q0FBQTtBQU1KO0FBSEE7RUR1Q0ksYUFBQTtFQUdJLG1CQWlCa0I7RUFibEIsdUJBYXVCO0VBVHZCLG1CQVMrQjtFQUwvQixxQkFLdUM7RUFDM0MsZ0JDM0RnQjtFRDREaEIsV0FBQTtFQUdJLFlDL0RtQjtBQWEzQjtBQVpJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBY1I7QUFWQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFRDBFSSw2QkVuRkc7RUZ1RkgsY0VwR0Y7RUZnSEUsa0JDekZtRDtFQUN2RCxnQkFBQTtBQWVKO0FEMkZRO0VBQ0ksZUM1R2lCO0FBbUI3QjtBRDJGWTtFQUhKO0lBSVEsb0RBQUE7RUN4RmQ7QUFDRjtBRDBGWTtFQVBKO0lBUVEsZUNuSG1CO0VBNEJqQztBQUNGO0FENUJRO0VDSlI7SUFNUSxnQkFBQTtFQThCTjtBQUNGO0FEakNRO0VDSlI7SUFTUSxnQkFBQTtFQWdDTjtBQUNGO0FBN0JBO0VEbUVRLGNFN0ZJO0FEMkRaO0FEZ0VRO0VBQ0ksZ0JDaEdpQjtBQWtDN0I7QURnRVk7RUFISjtJQUlRLHNEQUFBO0VDN0RkO0FBQ0Y7QUQrRFk7RUFQSjtJQVFRLGdCQ3ZHb0I7RUEyQ2xDO0FBQ0Y7QUR2RFE7RUNTUjtJQUlRLGtCQUFBO0VBOENOO0FBQ0Y7QUQ1RFE7RUNTUjtJQU9RLGtCQUFBO0VBZ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQG1peGluIHRydW5jYXRlKCRtYXgtd2lkdGgpIHtcclxuICAgIG1heC13aWR0aDogJG1heC13aWR0aDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbiRicmVha3BvaW50czogKFwicGhvbmVcIjogNDAwcHgsXHJcbiAgICBcInBob25lLXdpZGVcIjogNDgwcHgsXHJcbiAgICBcInBoYWJsZXRcIjogNTYwcHgsXHJcbiAgICBcInRhYmxldC1zbWFsbFwiOiA2NDBweCxcclxuICAgIFwidGFibGV0XCI6IDc2OHB4LFxyXG4gICAgXCJ0YWJsZXQtbVwiOiAxMDAwcHgsXHJcbiAgICBcInRhYmxldC13aWRlXCI6IDEwMjRweCxcclxuICAgIFwiZGVza3RvcFwiOiAxMjQ4cHgsXHJcbiAgICBcImRlc2t0b3Atd2lkZVwiOiAxNDQwcHgpO1xyXG5cclxuQG1peGluIG1xKCR3aWR0aCwgJHR5cGU6IG1pbikge1xyXG4gICAgQGlmIG1hcF9oYXNfa2V5KCRicmVha3BvaW50cywgJHdpZHRoKSB7XHJcbiAgICAgICAgJHdpZHRoOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJHdpZHRoKTtcclxuXHJcbiAgICAgICAgQGlmICR0eXBlPT1tYXgge1xyXG4gICAgICAgICAgICAkd2lkdGg6ICR3aWR0aCAtIDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCN7JHR5cGV9LXdpZHRoOiAkd2lkdGgpIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24geigkbmFtZSkge1xyXG4gICAgQGlmIGluZGV4KCR6LWluZGV4ZXMsICRuYW1lKSB7XHJcbiAgICAgICAgQHJldHVybiAobGVuZ3RoKCR6LWluZGV4ZXMpIC0gaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpKSsxO1xyXG4gICAgfVxyXG5cclxuICAgIEBlbHNlIHtcclxuICAgICAgICBAd2FybiAnVGhlcmUgaXMgbm8gaXRlbSBcIiN7JG5hbWV9XCIgaW4gdGhpcyBsaXN0OyBjaG9vc2Ugb25lIG9mOiAjeyR6LWluZGV4ZXN9JztcclxuICAgICAgICBAcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbiR6LWluZGV4ZXM6IChcIm91dGRhdGVkLWJyb3dzZXJcIiwgXCJtb2RhbFwiLCBcInNpdGUtaGVhZGVyXCIsIFwicGFnZS13cmFwcGVyXCIsIFwic2l0ZS1mb290ZXJcIik7XHJcblxyXG4vLy0tLS1iZWZvcmUgYWZ0ZXJcclxuQG1peGluIHBzZXVkbygkZGlzcGxheTogYmxvY2ssICRwb3M6IGFic29sdXRlLCAkY29udGVudDogXCJcIikge1xyXG4gICAgY29udGVudDogJGNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiAkZGlzcGxheTtcclxuICAgIHBvc2l0aW9uOiAkcG9zO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb250ZW50KCRkaXJlY3Rpb246IGZhbHNlLCAkanVzdGlmeTogZmFsc2UsICRhbGlnbjogZmFsc2UsICRhbGlnbi1jb250ZW50OiBmYWxzZSkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBAaWYgJGRpcmVjdGlvbiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRqdXN0aWZ5IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24ge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbi1jb250ZW50IHtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiAkYWxpZ24tY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZpZ3VyZSgkd2lkdGgsICRoZWlnaHQ6IGZhbHNlKSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRlbnQocm93LCBjZW50ZXIsIGNlbnRlciwgY2VudGVyKTtcclxuICAgIG1heC13aWR0aDogJHdpZHRoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgQGlmICRoZWlnaHQge1xyXG4gICAgICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vc2NhbGFyZSBmb250XHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCR2YWx1ZSkge1xyXG4gICAgQHJldHVybiAkdmFsdWUgLyAoJHZhbHVlICogMCArIDEpO1xyXG59XHJcblxyXG5AbWl4aW4gZmx1aWQtdHlwZS1zaXplKCRtaW4tZm9udC1zaXplLFxyXG4gICAgJG1heC1mb250LXNpemUsXHJcbiAgICAkZmY6IGZhbHNlLFxyXG4gICAgJGNvbG91cjogZmFsc2UsXHJcbiAgICAkYWxpZ246IGZhbHNlLFxyXG4gICAgJGxoOiBmYWxzZSxcclxuICAgICR3ZWlnaHQ6IGZhbHNlLFxyXG4gICAgJG1pbi12dzogMzIwcHgsXHJcbiAgICAkbWF4LXZ3OiAxMjAwcHgpIHtcclxuICAgIEBpZiAkZmYge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZmY7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRjb2xvdXIge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkd2VpZ2h0IHtcclxuICAgICAgICBmb250LXdlaWdodDogJHdlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGxoIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogJGxoO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICAkdTE6IHVuaXQoJG1pbi12dyk7XHJcbiAgICAkdTI6IHVuaXQoJG1heC12dyk7XHJcbiAgICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgJHU0OiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIEBpZiAkbWluLWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBAaWYgJG1heC1mb250LXNpemUge1xyXG4gICAgLy8gICAkdTM6IHVuaXQoJG1heC1mb250LXNpemUpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vICR1NDogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcblxyXG5cclxuICAgIEBpZiAkdTE9PSR1MiBhbmQgJHUxPT0kdTMgYW5kICR1MT09JHU0IHtcclxuICAgICAgICAmIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkbWluLWZvbnQtc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygjeyRtaW4tZm9udC1zaXplfSArICN7c3RyaXAtdW5pdCgkbWF4LWZvbnQtc2l6ZSAtICRtaW4tZm9udC1zaXplKX0gKiAoKDEwMHZ3IC0gI3skbWluLXZ3fSkgLyAje3N0cmlwLXVuaXQoJG1heC12dyAtICRtaW4tdncpfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRtYXgtZm9udC1zaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtaXhpbiBhbmltYXRpb24gKCR0aW1lKSB7XHJcbiAgICBhbmltYXRpb246IGZhZGUgJHRpbWUgYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn0iLCJAa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCArIDBweCk7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N1Y2Nlc3MtYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgY2FsYyg1MCUgLSA1MHB4KTtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NXB4O1xufVxuLmxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtU2VtaUJvbGQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMTYgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG59XG5cbi5zdWNjZXMtaWNvbiB7XG4gIGNvbG9yOiAjRkYzQjNGO1xufVxuLnN1Y2Nlcy1pY29uIHtcbiAgZm9udC1zaXplOiAxMjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5zdWNjZXMtaWNvbiB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEyMHB4ICsgMTMwICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnN1Y2Nlcy1pY29uIHtcbiAgICBmb250LXNpemU6IDI1MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zdWNjZXMtaWNvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDE3MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gIC5zdWNjZXMtaWNvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDEzNXB4O1xuICB9XG59IiwiJHByaW1hcnk6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1kYXJrOiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctbGlnaHQ6IHJnYmEoI0NBRUJGMCwgMC4yKTtcclxuJGRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWxpZ2h0OiMwMDAwMDA7XHJcbiRsaWdodDogI2ZmZjtcclxuJG1lZGl1bTogI0E5QTlBOTtcclxuJG1lZGl1bS1zaGFkb3ctZGFyazogI2Y5ZjlmOTtcclxuJG1lZGl1bS1zaGFkb3ctbGlnaHQ6ICNFRkVGRUY7XHJcbiRzZWNvbmRhcnk6ICNGRjNCM0Y7XHJcbiRzdWNjZXNzOiAjMkFCOTMwO1xyXG4vLyAkaW50ZXJtZWRpYXRlOiAjNjU1ZjVmO1xyXG5cclxuJGJvbGRlcjogUG9wcGlucy1FeHRyYUJvbGQ7XHJcbiRib2xkOiBQb3BwaW5zLUJvbGQ7XHJcbiRmLW1lZGl1bTogUG9wcGlucy1TZW1pQm9sZDtcclxuJHJlZ3VsYXI6IFBvcHBpbnMtUmVndWxhcjtcclxuJGYtbGlnaHQ6IFBvcHBpbnMtTGlnaHQ7XHJcbiRmLWl0YWxpYzogUG9wcGlucy1JdGFsaWM7XHJcblxyXG4kY29udGFpbmVyOiAxMzY1cHg7XHJcblxyXG4kYnRuLWhlaWdodDogNDBweDtcclxuJGRlZmF1bHQtcGFkZGluZzogMTVweDtcclxuJGl0ZW0tcGFkZGluZzogNXB4O1xyXG5cclxuJHJhZGl1czogMTBweDtcclxuXHJcbiRvcGFjaXR5OiByZ2JhKCRkYXJrLCAwLjIpO1xyXG5cclxuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMzIwMjQsICNGRkQ1NEMpO1xyXG4kc2hhZG93OiAwcHggMnB4IDI1cHggcmdiYSgxNSwgMjgsIDcxLCAwLjEpO1xyXG4kc2hhZG93LWJ0bjogMHB4IDI0cHggMTZweCAtMjJweCAjZmYzYjNmO1xyXG4kc2hhZG93LXN1Y2Nlc3M6IDBweCAyNHB4IDE2cHggLTIycHggJHN1Y2Nlc3M7XHJcblxyXG4kc3VjY2Vzcy1jb2xvcjogI2I3ZDhiNztcclxuJGVycm9yLWNvbG9yOiAjZjhiN2JkO1xyXG4kd2Fybi1jb2xvcjogI2ZmZTM5OTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success',
                templateUrl: './success.component.html',
                styleUrls: ['./success.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "xT/v":
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = function () { return ["/home"]; };
class ResetPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 18, vars: 2, consts: [[1, "content", "content-auth"], [1, "btn", "_outline", "close-btn", "flaticon-cancel", 3, "routerLink"], [1, "content__form"], [1, "title"], [1, "description"], [1, "form"], ["for", "", 1, "form__input"], [1, "form__input--label"], ["type", "password", "placeholder", "***********"], [1, "btn", "form__btn"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reset password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter the new password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Repeat new password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Save new password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n}\n.content-auth[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  background-color: rgba(255, 59, 63, 0.3);\n  border: none;\n  line-height: 42px;\n  top: 20px;\n  right: 20px;\n}\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 20px auto 40px;\n  font-family: Poppins-Regular;\n  color: #A9A9A9;\n  text-align: center;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 320px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: calc(14px + 6 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvYXV0aC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlKQTtFQUNJO0lBQ0ksVUFBQTtFQ3hKTjtFRDJKRTtJQUNJLFVBQUE7RUN6Sk47QUFDRjtBQUpBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFNSjtBQUhBO0VBQ0ksaUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7QUFLSjtBQUZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFLSjtBQUZBO0VBQ0ksa0JBQUE7QUFLSjtBQUZBO0VBQ0ksc0JBQUE7RURvRUksNEJFbEZFO0VGc0ZGLGNFaEdDO0VGNEdELGtCQ25Gb0Q7QUFPNUQ7QUQ4RlE7RUFDSSxlQ3RHaUI7QUFVN0I7QUQ4Rlk7RUFISjtJQUlRLG1EQUFBO0VDM0ZkO0FBQ0Y7QUQ2Rlk7RUFQSjtJQVFRLGVDN0dtQjtFQW1CakM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtaXhpbiB0cnVuY2F0ZSgkbWF4LXdpZHRoKSB7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludHM6IChcInBob25lXCI6IDQwMHB4LFxyXG4gICAgXCJwaG9uZS13aWRlXCI6IDQ4MHB4LFxyXG4gICAgXCJwaGFibGV0XCI6IDU2MHB4LFxyXG4gICAgXCJ0YWJsZXQtc21hbGxcIjogNjQwcHgsXHJcbiAgICBcInRhYmxldFwiOiA3NjhweCxcclxuICAgIFwidGFibGV0LW1cIjogMTAwMHB4LFxyXG4gICAgXCJ0YWJsZXQtd2lkZVwiOiAxMDI0cHgsXHJcbiAgICBcImRlc2t0b3BcIjogMTI0OHB4LFxyXG4gICAgXCJkZXNrdG9wLXdpZGVcIjogMTQ0MHB4KTtcclxuXHJcbkBtaXhpbiBtcSgkd2lkdGgsICR0eXBlOiBtaW4pIHtcclxuICAgIEBpZiBtYXBfaGFzX2tleSgkYnJlYWtwb2ludHMsICR3aWR0aCkge1xyXG4gICAgICAgICR3aWR0aDogbWFwX2dldCgkYnJlYWtwb2ludHMsICR3aWR0aCk7XHJcblxyXG4gICAgICAgIEBpZiAkdHlwZT09bWF4IHtcclxuICAgICAgICAgICAgJHdpZHRoOiAkd2lkdGggLSAxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgjeyR0eXBlfS13aWR0aDogJHdpZHRoKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHooJG5hbWUpIHtcclxuICAgIEBpZiBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkge1xyXG4gICAgICAgIEByZXR1cm4gKGxlbmd0aCgkei1pbmRleGVzKSAtIGluZGV4KCR6LWluZGV4ZXMsICRuYW1lKSkrMTtcclxuICAgIH1cclxuXHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgQHdhcm4gJ1RoZXJlIGlzIG5vIGl0ZW0gXCIjeyRuYW1lfVwiIGluIHRoaXMgbGlzdDsgY2hvb3NlIG9uZSBvZjogI3skei1pbmRleGVzfSc7XHJcbiAgICAgICAgQHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4kei1pbmRleGVzOiAoXCJvdXRkYXRlZC1icm93c2VyXCIsIFwibW9kYWxcIiwgXCJzaXRlLWhlYWRlclwiLCBcInBhZ2Utd3JhcHBlclwiLCBcInNpdGUtZm9vdGVyXCIpO1xyXG5cclxuLy8tLS0tYmVmb3JlIGFmdGVyXHJcbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6IFwiXCIpIHtcclxuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAgICBwb3NpdGlvbjogJHBvcztcclxufVxyXG5cclxuQG1peGluIGZsZXgtY29udGVudCgkZGlyZWN0aW9uOiBmYWxzZSwgJGp1c3RpZnk6IGZhbHNlLCAkYWxpZ246IGZhbHNlLCAkYWxpZ24tY29udGVudDogZmFsc2UpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQGlmICRkaXJlY3Rpb24ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkanVzdGlmeSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24tY29udGVudCB7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogJGFsaWduLWNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmaWd1cmUoJHdpZHRoLCAkaGVpZ2h0OiBmYWxzZSkge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb250ZW50KHJvdywgY2VudGVyLCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIEBpZiAkaGVpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL3NjYWxhcmUgZm9udFxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkdmFsdWUpIHtcclxuICAgIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIGZsdWlkLXR5cGUtc2l6ZSgkbWluLWZvbnQtc2l6ZSxcclxuICAgICRtYXgtZm9udC1zaXplLFxyXG4gICAgJGZmOiBmYWxzZSxcclxuICAgICRjb2xvdXI6IGZhbHNlLFxyXG4gICAgJGFsaWduOiBmYWxzZSxcclxuICAgICRsaDogZmFsc2UsXHJcbiAgICAkd2VpZ2h0OiBmYWxzZSxcclxuICAgICRtaW4tdnc6IDMyMHB4LFxyXG4gICAgJG1heC12dzogMTIwMHB4KSB7XHJcbiAgICBAaWYgJGZmIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZmO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkY29sb3VyIHtcclxuICAgICAgICBjb2xvcjogJGNvbG91cjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJHdlaWdodCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRsaCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaDtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiAkYWxpZ247XHJcbiAgICB9XHJcblxyXG4gICAgJHUxOiB1bml0KCRtaW4tdncpO1xyXG4gICAgJHUyOiB1bml0KCRtYXgtdncpO1xyXG4gICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgICR1NDogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyBAaWYgJG1pbi1mb250LXNpemUge1xyXG4gICAgLy8gICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gQGlmICRtYXgtZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xyXG5cclxuXHJcbiAgICBAaWYgJHUxPT0kdTIgYW5kICR1MT09JHUzIGFuZCAkdTE9PSR1NCB7XHJcbiAgICAgICAgJiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkbWF4LWZvbnQtc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uICgkdGltZSkge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlICR0aW1lIGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59IiwiQGtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudC1hdXRoIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNTksIDYzLCAwLjMpO1xuICBib3JkZXI6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMjBweCBhdXRvIDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGNvbG9yOiAjQTlBOUE5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgNiAqICgoMTAwdncgLSAzMjBweCkgLyA4ODApKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59IiwiJHByaW1hcnk6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1kYXJrOiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctbGlnaHQ6IHJnYmEoI0NBRUJGMCwgMC4yKTtcclxuJGRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWxpZ2h0OiMwMDAwMDA7XHJcbiRsaWdodDogI2ZmZjtcclxuJG1lZGl1bTogI0E5QTlBOTtcclxuJG1lZGl1bS1zaGFkb3ctZGFyazogI2Y5ZjlmOTtcclxuJG1lZGl1bS1zaGFkb3ctbGlnaHQ6ICNFRkVGRUY7XHJcbiRzZWNvbmRhcnk6ICNGRjNCM0Y7XHJcbiRzdWNjZXNzOiAjMkFCOTMwO1xyXG4vLyAkaW50ZXJtZWRpYXRlOiAjNjU1ZjVmO1xyXG5cclxuJGJvbGRlcjogUG9wcGlucy1FeHRyYUJvbGQ7XHJcbiRib2xkOiBQb3BwaW5zLUJvbGQ7XHJcbiRmLW1lZGl1bTogUG9wcGlucy1TZW1pQm9sZDtcclxuJHJlZ3VsYXI6IFBvcHBpbnMtUmVndWxhcjtcclxuJGYtbGlnaHQ6IFBvcHBpbnMtTGlnaHQ7XHJcbiRmLWl0YWxpYzogUG9wcGlucy1JdGFsaWM7XHJcblxyXG4kY29udGFpbmVyOiAxMzY1cHg7XHJcblxyXG4kYnRuLWhlaWdodDogNDBweDtcclxuJGRlZmF1bHQtcGFkZGluZzogMTVweDtcclxuJGl0ZW0tcGFkZGluZzogNXB4O1xyXG5cclxuJHJhZGl1czogMTBweDtcclxuXHJcbiRvcGFjaXR5OiByZ2JhKCRkYXJrLCAwLjIpO1xyXG5cclxuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMzIwMjQsICNGRkQ1NEMpO1xyXG4kc2hhZG93OiAwcHggMnB4IDI1cHggcmdiYSgxNSwgMjgsIDcxLCAwLjEpO1xyXG4kc2hhZG93LWJ0bjogMHB4IDI0cHggMTZweCAtMjJweCAjZmYzYjNmO1xyXG4kc2hhZG93LXN1Y2Nlc3M6IDBweCAyNHB4IDE2cHggLTIycHggJHN1Y2Nlc3M7XHJcblxyXG4kc3VjY2Vzcy1jb2xvcjogI2I3ZDhiNztcclxuJGVycm9yLWNvbG9yOiAjZjhiN2JkO1xyXG4kd2Fybi1jb2xvcjogI2ZmZTM5OTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password',
                templateUrl: './reset-password.component.html',
                styleUrls: ['./reset-password.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yUpL":
/*!*************************************************************!*\
  !*** ./src/app/auth/new-password/new-password.component.ts ***!
  \*************************************************************/
/*! exports provided: NewPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordComponent", function() { return NewPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NewPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewPasswordComponent.ɵfac = function NewPasswordComponent_Factory(t) { return new (t || NewPasswordComponent)(); };
NewPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewPasswordComponent, selectors: [["app-new-password"]], decls: 2, vars: 0, template: function NewPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "new-password works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbmV3LXBhc3N3b3JkL25ldy1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-password',
                templateUrl: './new-password.component.html',
                styleUrls: ['./new-password.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map