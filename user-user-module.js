(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "KX+F");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.component */ "rTL2");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "A9pe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");










const routes = [
    {
        path: "",
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        children: [
            {
                path: "", pathMatch: "full", redirectTo: "settings"
            },
            {
                path: "settings", component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]
            },
            {
                path: "edit", component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"]
            },
        ]
    }
];
class UserModule {
}
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "A9pe":
/*!*******************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.ts ***!
  \*******************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_utils/formValidationUtils */ "npik");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var _services_queries_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_services/queries.service */ "x+J2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_ys_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/ys-toast.service */ "g0ol");
/* harmony import */ var _shared_validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/validation-error-show/validation-error-show.component */ "1dAB");











class EditUserComponent {
    constructor(auth, queries, http, ysToast) {
        this.auth = auth;
        this.queries = queries;
        this.http = http;
        this.ysToast = ysToast;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.auth.user.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__["trimValidator"]]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.auth.user.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__["trimValidator"]])
        });
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
    }
    ngOnInit() {
        this.passwordForm.addControl("repeatPassword", new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__["passwordConfirmValidatorPartPasswordConfirm"].bind(this, this.passwordForm.controls.newPassword)
        ]));
        this.passwordForm.controls.newPassword.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(128), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__["trimValidator"],
            src_app_utils_formValidationUtils__WEBPACK_IMPORTED_MODULE_0__["passwordConfirmValidatorPartPassword"].bind(this, this.passwordForm.controls.repeatPassword)
        ]);
    }
    saveInfo() {
        if (this.userForm.invalid || !this.isChangedInfo())
            return;
        let body = {
            firstName: this.userForm.controls.firstName.value,
            lastName: this.userForm.controls.lastName.value
        };
        this.http.put(this.queries.urls.user, body, { params: { param: 'info' } }).subscribe((data) => {
            if (data) {
                this.userForm.controls.firstName.setValue(data.firstName);
                this.userForm.controls.lastName.setValue(data.lastName);
                this.auth.user.firstName = data.firstName;
                this.auth.user.lastName = data.lastName;
                this.userForm.enable();
                console.log('DATA: ', data);
            }
        });
        this.userForm.disable();
    }
    isChangedInfo() {
        return this.userForm.controls.firstName.value !== this.auth.user.firstName ||
            this.userForm.controls.lastName.value !== this.auth.user.lastName;
    }
    changePassword() {
        if (this.passwordForm.invalid)
            return;
        let body = {
            oldPassword: this.passwordForm.controls.currentPassword.value,
            newPassword: this.passwordForm.controls.newPassword.value
        };
        this.http.post(this.queries.urls.password, body, { params: { param: 'info' } }).subscribe((data) => {
            console.log('DATA: ', data);
            if (data) {
                localStorage.setItem('token', data.token);
                this.passwordForm.enable();
                this.passwordForm.reset();
                this.ysToast.showMessage({
                    title: 'Success',
                    text: 'The password has been successfully changed!',
                    typeToast: 'success',
                    duration: 2000
                });
            }
        }, (error) => {
            this.passwordForm.enable();
            if (error.status == 403) {
                this.ysToast.showMessage({
                    title: 'Error',
                    text: 'The current password was entered incorrectly!',
                    typeToast: 'error',
                    duration: 2000
                });
            }
        });
        this.passwordForm.disable();
    }
}
EditUserComponent.ɵfac = function EditUserComponent_Factory(t) { return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_queries_service__WEBPACK_IMPORTED_MODULE_4__["QueriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_ys_toast_service__WEBPACK_IMPORTED_MODULE_6__["YsToastService"])); };
EditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditUserComponent, selectors: [["app-edit-user"]], decls: 36, vars: 12, consts: [[1, "content", "content-outlet"], [1, "settings__name"], ["novalidate", "", 1, "form", 3, "formGroup", "submit"], ["for", "", 1, "form__input"], [1, "form__input--label"], ["type", "text", "formControlName", "firstName", "placeholder", "First name"], [3, "control"], ["type", "text", "formControlName", "lastName", "placeholder", "Last name"], [1, "btn", "_success", "form__btn", 3, "disabled"], ["formControlName", "currentPassword", "type", "password", "placeholder", "******"], ["formControlName", "newPassword", "type", "password", "placeholder", "******"], ["formControlName", "repeatPassword", "type", "password", "placeholder", "******"]], template: function EditUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function EditUserComponent_Template_form_submit_3_listener() { return ctx.saveInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-validation-error-show", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-validation-error-show", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function EditUserComponent_Template_form_submit_18_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Current password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "app-validation-error-show", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "app-validation-error-show", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Repeat password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "app-validation-error-show", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.userForm.controls.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.userForm.controls.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.userForm.controls.status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.isChangedInfo() || ctx.userForm.invalid || ctx.userForm.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.passwordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.passwordForm.controls.currentPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.passwordForm.controls.newPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.passwordForm.controls.repeatPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.passwordForm.invalid || ctx.passwordForm.disabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_validation_error_show_validation_error_show_component__WEBPACK_IMPORTED_MODULE_7__["ValidationErrorShowComponent"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  margin-top: 30px;\n  margin-left: 30px;\n}\n@media only screen and (max-width: 767px) {\n  .content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 30px;\n  }\n}\n.settings__name[_ngcontent-%COMP%] {\n  font-family: Poppins-Bold;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #f9f9f9;\n}\n.settings__name[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .settings__name[_ngcontent-%COMP%] {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .settings__name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.settings__item[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  text-align: left;\n  font-family: Poppins-Regular;\n  color: #000000;\n}\n.settings__item[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .settings__item[_ngcontent-%COMP%] {\n    font-size: calc(12px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .settings__item[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.settings__item[_ngcontent-%COMP%]:not(:first-child) {\n  border-top: 1px solid #f9f9f9;\n}\n.settings__item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.settings__item--name[_ngcontent-%COMP%] {\n  flex: 0 0 190px;\n}\n.settings__item--value[_ngcontent-%COMP%] {\n  color: #A9A9A9;\n}\n.settings__item[_ngcontent-%COMP%]   .balance[_ngcontent-%COMP%] {\n  color: #FF3B3F;\n  font-family: Poppins-ExtraBold;\n  font-weight: bold;\n}\n.btn[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  margin-top: 20px;\n  max-width: 200px;\n  width: 100%;\n  height: 50px;\n}\n@media only screen and (max-width: 767px) {\n  .btn[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n}\n.form[_ngcontent-%COMP%] {\n  max-width: 460px;\n  width: 100%;\n}\n.form__input[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .form__input[_ngcontent-%COMP%] {\n    font-size: calc(12px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .form__input[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.form__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 50px;\n}\n@media only screen and (max-width: 767px) {\n  .form__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    height: 40px;\n    padding: 15px;\n  }\n}\n.form__btn[_ngcontent-%COMP%] {\n  margin-left: 0;\n  background-color: #2AB930;\n  border-color: #2AB930;\n}\n.form__btn[_ngcontent-%COMP%]:hover {\n  border-color: #2AB930;\n  color: #2AB930;\n  background: #fff;\n}\n@media only screen and (max-width: 767px) {\n  .form[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\nhr[_ngcontent-%COMP%] {\n  margin: 20px 0 5px;\n  border: 1px solid #f9f9f9;\n}\n.error__item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  color: #FF3B3F;\n}\n.error__item[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n@media screen and (min-width: 320px) {\n  .error__item[_ngcontent-%COMP%] {\n    font-size: calc(10px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .error__item[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: #FF3B3F;\n  color: #FF3B3F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvdXNlci9lZGl0LXVzZXIvZWRpdC11c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUpBO0VBQ0k7SUFDSSxVQUFBO0VDeEpOO0VEMkpFO0lBQ0ksVUFBQTtFQ3pKTjtBQUNGO0FBSkE7RUFDRSxzQkNFTTtFREROLGFBQUE7RUFDQSxtQkNxQk87RURwQlAsZ0JBQUE7RUFDQSxpQkFBQTtBQU1GO0FEYVE7RUN4QlI7SUFRSSxjQUFBO0lBQ0EsZ0JBQUE7RUFPRjtBQUNGO0FBSEU7RURrRk0seUJFcEZEO0VESUgsb0JBQUE7RUFDQSxnQ0FBQTtBQU1KO0FEMkdRO0VBQ0ksZUNwSGlCO0FBVzdCO0FEMkdZO0VBSEo7SUFJUSxtREFBQTtFQ3hHZDtBQUNGO0FEMEdZO0VBUEo7SUFRUSxlQzNIbUI7RUFvQmpDO0FBQ0Y7QUFoQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUQwRUksNEJFbEZFO0VGc0ZGLGNFcEdGO0FEMENOO0FEd0ZRO0VBQ0ksZUMzR2lCO0FBcUI3QjtBRHdGWTtFQUhKO0lBSVEsbURBQUE7RUNyRmQ7QUFDRjtBRHVGWTtFQVBKO0lBUVEsZUNsSG1CO0VBOEJqQztBQUNGO0FBN0JJO0VBQ0UsNkJBQUE7QUErQk47QUE1Qkk7RUFDRSxpQkFBQTtBQThCTjtBQTNCSTtFQUNFLGVBQUE7QUE2Qk47QUExQkk7RUFDRSxjQ25DRztBRCtEVDtBQXpCSTtFQUNFLGNDcENNO0VEcUNOLDhCQ2pDRztFRGtDSCxpQkFBQTtBQTJCTjtBQWhCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbUJGO0FEeERRO0VDZ0NSO0lBUUksWUFBQTtFQW9CRjtBQUNGO0FBakJBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBb0JGO0FEd0NRO0VBQ0ksZUMxRGlCO0FBb0I3QjtBRHdDWTtFQUhKO0lBSVEsbURBQUE7RUNyQ2Q7QUFDRjtBRHVDWTtFQVBKO0lBUVEsZUNqRW1CO0VBNkJqQztBQUNGO0FBNUJJO0VBQ0UsWUFBQTtBQThCTjtBRGxGUTtFQ21ESjtJQUlJLFlBQUE7SUFDQSxhQUFBO0VBK0JOO0FBQ0Y7QUEzQkU7RUFDRSxjQUFBO0VBQ0EseUJDL0VNO0VEZ0ZOLHFCQ2hGTTtBRDZHVjtBQTNCSTtFQUNFLHFCQ25GSTtFRG9GSixjQ3BGSTtFRHFGSixnQkMxRkU7QUR1SFI7QURsR1E7RUM0Q1I7SUE4QkksZUFBQTtFQTRCRjtBQUNGO0FBekJBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQTRCRjtBQXhCRTtFQUNFLGVBQUE7RUFDQSxjQ3ZHUTtBRGtJWjtBRFBRO0VBQ0ksZUNwQmlCO0FBNkI3QjtBRFBZO0VBSEo7SUFJUSxtREFBQTtFQ1VkO0FBQ0Y7QURSWTtFQVBKO0lBUVEsZUMzQm1CO0VBc0NqQztBQUNGO0FBcENFO0VBQ0UscUJDNUdRO0VENkdSLGNDN0dRO0FEbUpaIiwiZmlsZSI6InNyYy9hcHAvdXNlci9lZGl0LXVzZXIvZWRpdC11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWl4aW4gdHJ1bmNhdGUoJG1heC13aWR0aCkge1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuJGJyZWFrcG9pbnRzOiAoXCJwaG9uZVwiOiA0MDBweCxcclxuICAgIFwicGhvbmUtd2lkZVwiOiA0ODBweCxcclxuICAgIFwicGhhYmxldFwiOiA1NjBweCxcclxuICAgIFwidGFibGV0LXNtYWxsXCI6IDY0MHB4LFxyXG4gICAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgICBcInRhYmxldC1tXCI6IDEwMDBweCxcclxuICAgIFwidGFibGV0LXdpZGVcIjogMTAyNHB4LFxyXG4gICAgXCJkZXNrdG9wXCI6IDEyNDhweCxcclxuICAgIFwiZGVza3RvcC13aWRlXCI6IDE0NDBweCk7XHJcblxyXG5AbWl4aW4gbXEoJHdpZHRoLCAkdHlwZTogbWluKSB7XHJcbiAgICBAaWYgbWFwX2hhc19rZXkoJGJyZWFrcG9pbnRzLCAkd2lkdGgpIHtcclxuICAgICAgICAkd2lkdGg6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkd2lkdGgpO1xyXG5cclxuICAgICAgICBAaWYgJHR5cGU9PW1heCB7XHJcbiAgICAgICAgICAgICR3aWR0aDogJHdpZHRoIC0gMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoI3skdHlwZX0td2lkdGg6ICR3aWR0aCkge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiB6KCRuYW1lKSB7XHJcbiAgICBAaWYgaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpIHtcclxuICAgICAgICBAcmV0dXJuIChsZW5ndGgoJHotaW5kZXhlcykgLSBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkpKzE7XHJcbiAgICB9XHJcblxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIEB3YXJuICdUaGVyZSBpcyBubyBpdGVtIFwiI3skbmFtZX1cIiBpbiB0aGlzIGxpc3Q7IGNob29zZSBvbmUgb2Y6ICN7JHotaW5kZXhlc30nO1xyXG4gICAgICAgIEByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuJHotaW5kZXhlczogKFwib3V0ZGF0ZWQtYnJvd3NlclwiLCBcIm1vZGFsXCIsIFwic2l0ZS1oZWFkZXJcIiwgXCJwYWdlLXdyYXBwZXJcIiwgXCJzaXRlLWZvb3RlclwiKTtcclxuXHJcbi8vLS0tLWJlZm9yZSBhZnRlclxyXG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiBcIlwiKSB7XHJcbiAgICBjb250ZW50OiAkY29udGVudDtcclxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gICAgcG9zaXRpb246ICRwb3M7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbnRlbnQoJGRpcmVjdGlvbjogZmFsc2UsICRqdXN0aWZ5OiBmYWxzZSwgJGFsaWduOiBmYWxzZSwgJGFsaWduLWNvbnRlbnQ6IGZhbHNlKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBpZiAkZGlyZWN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGp1c3RpZnkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduLWNvbnRlbnQge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICRhbGlnbi1jb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmlndXJlKCR3aWR0aCwgJGhlaWdodDogZmFsc2UpIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29udGVudChyb3csIGNlbnRlciwgY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAaWYgJGhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9zY2FsYXJlIGZvbnRcclxuQGZ1bmN0aW9uIHN0cmlwLXVuaXQoJHZhbHVlKSB7XHJcbiAgICBAcmV0dXJuICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7XHJcbn1cclxuXHJcbkBtaXhpbiBmbHVpZC10eXBlLXNpemUoJG1pbi1mb250LXNpemUsXHJcbiAgICAkbWF4LWZvbnQtc2l6ZSxcclxuICAgICRmZjogZmFsc2UsXHJcbiAgICAkY29sb3VyOiBmYWxzZSxcclxuICAgICRhbGlnbjogZmFsc2UsXHJcbiAgICAkbGg6IGZhbHNlLFxyXG4gICAgJHdlaWdodDogZmFsc2UsXHJcbiAgICAkbWluLXZ3OiAzMjBweCxcclxuICAgICRtYXgtdnc6IDEyMDBweCkge1xyXG4gICAgQGlmICRmZiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmZjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGNvbG91ciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICR3ZWlnaHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkbGgge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGg7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRhbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgICR1MTogdW5pdCgkbWluLXZ3KTtcclxuICAgICR1MjogdW5pdCgkbWF4LXZ3KTtcclxuICAgICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAkdTQ6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gQGlmICRtaW4tZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vIEBpZiAkbWF4LWZvbnQtc2l6ZSB7XHJcbiAgICAvLyAgICR1MzogdW5pdCgkbWF4LWZvbnQtc2l6ZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gJHU0OiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuXHJcblxyXG4gICAgQGlmICR1MT09JHUyIGFuZCAkdTE9PSR1MyBhbmQgJHUxPT0kdTQge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRtaW4tZm9udC1zaXplO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JG1pbi1mb250LXNpemV9ICsgI3tzdHJpcC11bml0KCRtYXgtZm9udC1zaXplIC0gJG1pbi1mb250LXNpemUpfSAqICgoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1heC1mb250LXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1peGluIGFuaW1hdGlvbiAoJHRpbWUpIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAkdGltZSBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG59XG5cbi5zZXR0aW5nc19fbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLUJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y5ZjlmOTtcbn1cbi5zZXR0aW5nc19fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5zZXR0aW5nc19fbmFtZSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyA0ICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNldHRpbmdzX19uYW1lIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi5zZXR0aW5nc19faXRlbSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uc2V0dGluZ3NfX2l0ZW0ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAuc2V0dGluZ3NfX2l0ZW0ge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMiAqICgoMTAwdncgLSAzMjBweCkgLyA4ODApKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zZXR0aW5nc19faXRlbSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uc2V0dGluZ3NfX2l0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y5ZjlmOTtcbn1cbi5zZXR0aW5nc19faXRlbTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uc2V0dGluZ3NfX2l0ZW0tLW5hbWUge1xuICBmbGV4OiAwIDAgMTkwcHg7XG59XG4uc2V0dGluZ3NfX2l0ZW0tLXZhbHVlIHtcbiAgY29sb3I6ICNBOUE5QTk7XG59XG4uc2V0dGluZ3NfX2l0ZW0gLmJhbGFuY2Uge1xuICBjb2xvcjogI0ZGM0IzRjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtRXh0cmFCb2xkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYnRuIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn1cblxuLmZvcm0ge1xuICBtYXgtd2lkdGg6IDQ2MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtX19pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5mb3JtX19pbnB1dCB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAyICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZvcm1fX2lucHV0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5mb3JtX19pbnB1dCBpbnB1dCB7XG4gIGhlaWdodDogNTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm1fX2lucHV0IGlucHV0IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuLmZvcm1fX2J0biB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkFCOTMwO1xuICBib3JkZXItY29sb3I6ICMyQUI5MzA7XG59XG4uZm9ybV9fYnRuOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMkFCOTMwO1xuICBjb2xvcjogIzJBQjkzMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuXG5ociB7XG4gIG1hcmdpbjogMjBweCAwIDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTtcbn1cblxuLmVycm9yX19pdGVtIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogI0ZGM0IzRjtcbn1cbi5lcnJvcl9faXRlbSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5lcnJvcl9faXRlbSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAyICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmVycm9yX19pdGVtIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbi5lcnJvciBpbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogI0ZGM0IzRjtcbiAgY29sb3I6ICNGRjNCM0Y7XG59IiwiJHByaW1hcnk6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1kYXJrOiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctbGlnaHQ6IHJnYmEoI0NBRUJGMCwgMC4yKTtcclxuJGRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWRhcms6IzAwMDAwMDtcclxuJGRhcmstc2hhZG93LWxpZ2h0OiMwMDAwMDA7XHJcbiRsaWdodDogI2ZmZjtcclxuJG1lZGl1bTogI0E5QTlBOTtcclxuJG1lZGl1bS1zaGFkb3ctZGFyazogI2Y5ZjlmOTtcclxuJG1lZGl1bS1zaGFkb3ctbGlnaHQ6ICNFRkVGRUY7XHJcbiRzZWNvbmRhcnk6ICNGRjNCM0Y7XHJcbiRzdWNjZXNzOiAjMkFCOTMwO1xyXG4vLyAkaW50ZXJtZWRpYXRlOiAjNjU1ZjVmO1xyXG5cclxuJGJvbGRlcjogUG9wcGlucy1FeHRyYUJvbGQ7XHJcbiRib2xkOiBQb3BwaW5zLUJvbGQ7XHJcbiRmLW1lZGl1bTogUG9wcGlucy1TZW1pQm9sZDtcclxuJHJlZ3VsYXI6IFBvcHBpbnMtUmVndWxhcjtcclxuJGYtbGlnaHQ6IFBvcHBpbnMtTGlnaHQ7XHJcbiRmLWl0YWxpYzogUG9wcGlucy1JdGFsaWM7XHJcblxyXG4kY29udGFpbmVyOiAxMzY1cHg7XHJcblxyXG4kYnRuLWhlaWdodDogNDBweDtcclxuJGRlZmF1bHQtcGFkZGluZzogMTVweDtcclxuJGl0ZW0tcGFkZGluZzogNXB4O1xyXG5cclxuJHJhZGl1czogMTBweDtcclxuXHJcbiRvcGFjaXR5OiByZ2JhKCRkYXJrLCAwLjIpO1xyXG5cclxuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFMzIwMjQsICNGRkQ1NEMpO1xyXG4kc2hhZG93OiAwcHggMnB4IDI1cHggcmdiYSgxNSwgMjgsIDcxLCAwLjEpO1xyXG4kc2hhZG93LWJ0bjogMHB4IDI0cHggMTZweCAtMjJweCAjZmYzYjNmO1xyXG4kc2hhZG93LXN1Y2Nlc3M6IDBweCAyNHB4IDE2cHggLTIycHggJHN1Y2Nlc3M7XHJcblxyXG4kc3VjY2Vzcy1jb2xvcjogI2I3ZDhiNztcclxuJGVycm9yLWNvbG9yOiAjZjhiN2JkO1xyXG4kd2Fybi1jb2xvcjogI2ZmZTM5OTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-edit-user',
                templateUrl: './edit-user.component.html',
                styleUrls: ['./edit-user.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_queries_service__WEBPACK_IMPORTED_MODULE_4__["QueriesService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: src_app_services_ys_toast_service__WEBPACK_IMPORTED_MODULE_6__["YsToastService"] }]; }, null); })();


/***/ }),

/***/ "KX+F":
/*!*********************************************!*\
  !*** ./src/app/user/user/user.component.ts ***!
  \*********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/settings.service */ "f6A8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/user/settings"]; };
const _c1 = function () { return ["/user/edit"]; };
class UserComponent {
    constructor(_settings) {
        this._settings = _settings;
    }
    ngOnInit() {
    }
    openModalLogout() {
        this._settings.logout = true;
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 11, vars: 4, consts: [[1, "container"], [1, "menu", "content"], [1, "user__name"], ["routerLinkActive", "router-link-active", 1, "menu__item", "flaticon-settings", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "menu__item", "flaticon-pen", 3, "routerLink"], [1, "menu__item", "flaticon-logout", 3, "click"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Scott Chapman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Account settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_a_click_8_listener() { return ctx.openModalLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  min-height: calc(100vh - 274px);\n  align-items: flex-start;\n  margin-bottom: 30px;\n}\n@media only screen and (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  margin-top: 30px;\n}\n.menu[_ngcontent-%COMP%] {\n  flex: 0 0 250px;\n}\n.menu__item[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  text-align: left;\n  cursor: pointer;\n  font-family: Poppins-Regular;\n  color: #000000;\n}\n.menu__item[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .menu__item[_ngcontent-%COMP%] {\n    font-size: calc(12px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .menu__item[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.menu__item[_ngcontent-%COMP%]::before {\n  margin-right: 10px;\n  color: #A9A9A9;\n}\n.menu__item[_ngcontent-%COMP%]:not(:first-child) {\n  border-top: 1px solid #f9f9f9;\n}\n.menu__item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n@media only screen and (max-width: 767px) {\n  .menu[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    flex: none;\n    margin-top: 0;\n  }\n}\n@media only screen and (max-width: 399px) {\n  .menu[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.content-outlet[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  margin-left: 30px;\n}\n.user__name[_ngcontent-%COMP%] {\n  font-family: Poppins-Bold;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #f9f9f9;\n}\n.user__name[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .user__name[_ngcontent-%COMP%] {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .user__name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .user__name[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n    display: block;\n  }\n}\n.router-link-active[_ngcontent-%COMP%] {\n  color: #FF3B3F;\n  font-weight: bold;\n}\n.router-link-active[_ngcontent-%COMP%]::before {\n  color: #FF3B3F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvdXNlci91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SkE7RUFDSTtJQUNJLFVBQUE7RUN4Sk47RUQySkU7SUFDSSxVQUFBO0VDekpOO0FBQ0Y7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTUo7QURjUTtFQ3hCUjtJQU1RLGVBQUE7RUFRTjtBQUNGO0FBSEE7RUFDSSxzQkNWSTtFRFdKLGFBQUE7RUFDQSxtQkNTSztFRFJMLGdCQUFBO0FBTUo7QUFIQTtFQUNJLGVBQUE7QUFNSjtBQUxJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFRHdFQSw0QkVsRkU7RUZzRkYsY0VwR0Y7QURpQ047QURpR1E7RUFDSSxlQ3pHcUI7QUFVakM7QURpR1k7RUFISjtJQUlRLG1EQUFBO0VDOUZkO0FBQ0Y7QURnR1k7RUFQSjtJQVFRLGVDaEh1QjtFQW1CckM7QUFDRjtBQW5CUTtFQUNJLGtCQUFBO0VBQ0EsY0N6Qkg7QUQ4Q1Q7QUFuQlE7RUFDSSw2QkFBQTtBQXFCWjtBQW5CUTtFQUNJLGlCQUFBO0FBcUJaO0FEaENRO0VDTFI7SUFxQlEsZUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7RUFvQk47QUFDRjtBRDNDUTtFQ0xSO0lBOEJRLHNCQUFBO0VBc0JOO0FBQ0Y7QUFuQkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBc0JKO0FBbEJJO0VEb0NJLHlCRXBGRDtFRGtEQyxvQkFBQTtFQUNBLGdDQUFBO0FBcUJSO0FEOENRO0VBQ0ksZUN0RXFCO0FBMEJqQztBRDhDWTtFQUhKO0lBSVEsbURBQUE7RUMzQ2Q7QUFDRjtBRDZDWTtFQVBKO0lBUVEsZUM3RXVCO0VBbUNyQztBQUNGO0FEekVRO0VDb0NKO0lBS1EsZUFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VBb0NWO0FBQ0Y7QUFoQ0E7RUFDSSxjQ2xFUTtFRG1FUixpQkFBQTtBQW1DSjtBQWxDSTtFQUNJLGNDckVJO0FEeUdaIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtaXhpbiB0cnVuY2F0ZSgkbWF4LXdpZHRoKSB7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludHM6IChcInBob25lXCI6IDQwMHB4LFxyXG4gICAgXCJwaG9uZS13aWRlXCI6IDQ4MHB4LFxyXG4gICAgXCJwaGFibGV0XCI6IDU2MHB4LFxyXG4gICAgXCJ0YWJsZXQtc21hbGxcIjogNjQwcHgsXHJcbiAgICBcInRhYmxldFwiOiA3NjhweCxcclxuICAgIFwidGFibGV0LW1cIjogMTAwMHB4LFxyXG4gICAgXCJ0YWJsZXQtd2lkZVwiOiAxMDI0cHgsXHJcbiAgICBcImRlc2t0b3BcIjogMTI0OHB4LFxyXG4gICAgXCJkZXNrdG9wLXdpZGVcIjogMTQ0MHB4KTtcclxuXHJcbkBtaXhpbiBtcSgkd2lkdGgsICR0eXBlOiBtaW4pIHtcclxuICAgIEBpZiBtYXBfaGFzX2tleSgkYnJlYWtwb2ludHMsICR3aWR0aCkge1xyXG4gICAgICAgICR3aWR0aDogbWFwX2dldCgkYnJlYWtwb2ludHMsICR3aWR0aCk7XHJcblxyXG4gICAgICAgIEBpZiAkdHlwZT09bWF4IHtcclxuICAgICAgICAgICAgJHdpZHRoOiAkd2lkdGggLSAxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgjeyR0eXBlfS13aWR0aDogJHdpZHRoKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHooJG5hbWUpIHtcclxuICAgIEBpZiBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkge1xyXG4gICAgICAgIEByZXR1cm4gKGxlbmd0aCgkei1pbmRleGVzKSAtIGluZGV4KCR6LWluZGV4ZXMsICRuYW1lKSkrMTtcclxuICAgIH1cclxuXHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgQHdhcm4gJ1RoZXJlIGlzIG5vIGl0ZW0gXCIjeyRuYW1lfVwiIGluIHRoaXMgbGlzdDsgY2hvb3NlIG9uZSBvZjogI3skei1pbmRleGVzfSc7XHJcbiAgICAgICAgQHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4kei1pbmRleGVzOiAoXCJvdXRkYXRlZC1icm93c2VyXCIsIFwibW9kYWxcIiwgXCJzaXRlLWhlYWRlclwiLCBcInBhZ2Utd3JhcHBlclwiLCBcInNpdGUtZm9vdGVyXCIpO1xyXG5cclxuLy8tLS0tYmVmb3JlIGFmdGVyXHJcbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6IFwiXCIpIHtcclxuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAgICBwb3NpdGlvbjogJHBvcztcclxufVxyXG5cclxuQG1peGluIGZsZXgtY29udGVudCgkZGlyZWN0aW9uOiBmYWxzZSwgJGp1c3RpZnk6IGZhbHNlLCAkYWxpZ246IGZhbHNlLCAkYWxpZ24tY29udGVudDogZmFsc2UpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQGlmICRkaXJlY3Rpb24ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkanVzdGlmeSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24tY29udGVudCB7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogJGFsaWduLWNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmaWd1cmUoJHdpZHRoLCAkaGVpZ2h0OiBmYWxzZSkge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb250ZW50KHJvdywgY2VudGVyLCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIEBpZiAkaGVpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL3NjYWxhcmUgZm9udFxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkdmFsdWUpIHtcclxuICAgIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIGZsdWlkLXR5cGUtc2l6ZSgkbWluLWZvbnQtc2l6ZSxcclxuICAgICRtYXgtZm9udC1zaXplLFxyXG4gICAgJGZmOiBmYWxzZSxcclxuICAgICRjb2xvdXI6IGZhbHNlLFxyXG4gICAgJGFsaWduOiBmYWxzZSxcclxuICAgICRsaDogZmFsc2UsXHJcbiAgICAkd2VpZ2h0OiBmYWxzZSxcclxuICAgICRtaW4tdnc6IDMyMHB4LFxyXG4gICAgJG1heC12dzogMTIwMHB4KSB7XHJcbiAgICBAaWYgJGZmIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZmO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkY29sb3VyIHtcclxuICAgICAgICBjb2xvcjogJGNvbG91cjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJHdlaWdodCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRsaCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaDtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiAkYWxpZ247XHJcbiAgICB9XHJcblxyXG4gICAgJHUxOiB1bml0KCRtaW4tdncpO1xyXG4gICAgJHUyOiB1bml0KCRtYXgtdncpO1xyXG4gICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgICR1NDogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyBAaWYgJG1pbi1mb250LXNpemUge1xyXG4gICAgLy8gICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gQGlmICRtYXgtZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xyXG5cclxuXHJcbiAgICBAaWYgJHUxPT0kdTIgYW5kICR1MT09JHUzIGFuZCAkdTE9PSR1NCB7XHJcbiAgICAgICAgJiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkbWF4LWZvbnQtc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uICgkdGltZSkge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlICR0aW1lIGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59IiwiQGtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDI3NHB4KTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tZW51IHtcbiAgZmxleDogMCAwIDI1MHB4O1xufVxuLm1lbnVfX2l0ZW0ge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ubWVudV9faXRlbSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5tZW51X19pdGVtIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDIgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubWVudV9faXRlbSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4ubWVudV9faXRlbTo6YmVmb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogI0E5QTlBOTtcbn1cbi5tZW51X19pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmOWY5Zjk7XG59XG4ubWVudV9faXRlbTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5tZW51IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXg6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTlweCkge1xuICAubWVudSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4uY29udGVudC1vdXRsZXQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnVzZXJfX25hbWUge1xuICBmb250LWZhbWlseTogUG9wcGlucy1Cb2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOWY5Zjk7XG59XG4udXNlcl9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC51c2VyX19uYW1lIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudXNlcl9fbmFtZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC51c2VyX19uYW1lIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gIGNvbG9yOiAjRkYzQjNGO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yb3V0ZXItbGluay1hY3RpdmU6OmJlZm9yZSB7XG4gIGNvbG9yOiAjRkYzQjNGO1xufSIsIiRwcmltYXJ5OiAjQ0FFQkYwO1xyXG4kcHJpbWFyeS1zaGFkb3ctZGFyazogI0NBRUJGMDtcclxuJHByaW1hcnktc2hhZG93LWxpZ2h0OiByZ2JhKCNDQUVCRjAsIDAuMik7XHJcbiRkYXJrOiMwMDAwMDA7XHJcbiRkYXJrLXNoYWRvdy1kYXJrOiMwMDAwMDA7XHJcbiRkYXJrLXNoYWRvdy1saWdodDojMDAwMDAwO1xyXG4kbGlnaHQ6ICNmZmY7XHJcbiRtZWRpdW06ICNBOUE5QTk7XHJcbiRtZWRpdW0tc2hhZG93LWRhcms6ICNmOWY5Zjk7XHJcbiRtZWRpdW0tc2hhZG93LWxpZ2h0OiAjRUZFRkVGO1xyXG4kc2Vjb25kYXJ5OiAjRkYzQjNGO1xyXG4kc3VjY2VzczogIzJBQjkzMDtcclxuLy8gJGludGVybWVkaWF0ZTogIzY1NWY1ZjtcclxuXHJcbiRib2xkZXI6IFBvcHBpbnMtRXh0cmFCb2xkO1xyXG4kYm9sZDogUG9wcGlucy1Cb2xkO1xyXG4kZi1tZWRpdW06IFBvcHBpbnMtU2VtaUJvbGQ7XHJcbiRyZWd1bGFyOiBQb3BwaW5zLVJlZ3VsYXI7XHJcbiRmLWxpZ2h0OiBQb3BwaW5zLUxpZ2h0O1xyXG4kZi1pdGFsaWM6IFBvcHBpbnMtSXRhbGljO1xyXG5cclxuJGNvbnRhaW5lcjogMTM2NXB4O1xyXG5cclxuJGJ0bi1oZWlnaHQ6IDQwcHg7XHJcbiRkZWZhdWx0LXBhZGRpbmc6IDE1cHg7XHJcbiRpdGVtLXBhZGRpbmc6IDVweDtcclxuXHJcbiRyYWRpdXM6IDEwcHg7XHJcblxyXG4kb3BhY2l0eTogcmdiYSgkZGFyaywgMC4yKTtcclxuXHJcbiRncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRTMyMDI0LCAjRkZENTRDKTtcclxuJHNoYWRvdzogMHB4IDJweCAyNXB4IHJnYmEoMTUsIDI4LCA3MSwgMC4xKTtcclxuJHNoYWRvdy1idG46IDBweCAyNHB4IDE2cHggLTIycHggI2ZmM2IzZjtcclxuJHNoYWRvdy1zdWNjZXNzOiAwcHggMjRweCAxNnB4IC0yMnB4ICRzdWNjZXNzO1xyXG5cclxuJHN1Y2Nlc3MtY29sb3I6ICNiN2Q4Yjc7XHJcbiRlcnJvci1jb2xvcjogI2Y4YjdiZDtcclxuJHdhcm4tY29sb3I6ICNmZmUzOTk7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            }]
    }], function () { return [{ type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "g0ol":
/*!***********************************************!*\
  !*** ./src/app/_services/ys-toast.service.ts ***!
  \***********************************************/
/*! exports provided: YsToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YsToastService", function() { return YsToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class YsToastService {
    constructor() {
        this.toastContainer = document.createElement('div');
        this.toastContainer.id = 'ys-toasts';
        document.querySelector('body').appendChild(this.toastContainer);
    }
    getToast() {
        let toast = document.createElement('div');
        toast.className = 'ys-toast';
        toast.innerHTML = `
  <i class="toast-icon"></i>
  <div class="toast-content">
      <div class="header">
          <span class="toast-title">Title Toast</span>
          <div class="close-toast-btn">
              <i class="flaticon-cancel"></i>
          </div>
      </div>
      <span class="toast-message">
          Text message for toast
      </span>
  </div>
        `;
        return toast;
    }
    showMessage(config = {
        title: '',
        text: 'Text',
        typeToast: 'success',
        duration: 600
    }) {
        let typesToast = ['success', 'error', 'warn'];
        let toast = this.getToast();
        toast.querySelector('.toast-title').innerHTML = config.title;
        toast.querySelector('.toast-message').innerHTML = config.text;
        if (this.toastContainer) {
            this.toastContainer.style.zIndex = '100000';
            this.toastContainer.appendChild(toast);
        }
        if (typesToast.includes(config.typeToast)) {
            let icon = config.typeToast == 'success' ? 'flaticon-tick' : config.typeToast == 'error' ? 'flaticon-error' : 'flaticon-warning-sign';
            toast.classList.add('toast-' + config.typeToast);
            toast.querySelector('.toast-icon').classList.add(icon);
        }
        else
            toast.classList.add('toast-warn');
        toast.addEventListener('mouseover', () => {
            toast.dataset.isHover = 'true';
        });
        let closeBtn = toast.querySelector('.close-toast-btn');
        if (closeBtn)
            closeBtn.addEventListener("click", () => closeToast(true));
        if (!config.duration)
            config.duration = 2000;
        setTimeout(() => closeToast(), config.duration);
        const closeToast = (hardcore = false) => {
            if (toast.dataset.isHover && !hardcore)
                return;
            toast.style.animationName = 'toast-close';
            setTimeout(() => {
                if (toast && toast.parentElement)
                    toast.parentElement.removeChild(toast);
                if (this.toastContainer.querySelectorAll('.ys-toast').length <= 0)
                    this.toastContainer.style.zIndex = '-1';
                // toast.querySelector('.toast-title').innerHTML = '';
                // toast.querySelector('.toast-message').innerHTML = '';
            }, 600);
        };
    }
}
YsToastService.ɵfac = function YsToastService_Factory(t) { return new (t || YsToastService)(); };
YsToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: YsToastService, factory: YsToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YsToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rTL2":
/*!*****************************************************!*\
  !*** ./src/app/user/settings/settings.component.ts ***!
  \*****************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");



class SettingsComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 25, vars: 4, consts: [[1, "content", "content-outlet"], [1, "settings__name"], [1, "wrapper", "settings__item"], [1, "settings__item--name"], ["href", "", 1, "settings__item--value"], ["href", "", 1, "settings__item--value", "balance"], [1, "btn"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Account balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add funds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.auth.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.auth.user.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.auth.user.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.auth.user.balance ? ctx.auth.user.balance : 0, "$");
    } }, styles: ["@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  margin-top: 30px;\n  margin-left: 30px;\n  overflow: hidden;\n}\n@media only screen and (max-width: 767px) {\n  .content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 30px;\n  }\n}\n.settings__name[_ngcontent-%COMP%] {\n  font-family: Poppins-Bold;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #f9f9f9;\n}\n.settings__name[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .settings__name[_ngcontent-%COMP%] {\n    font-size: calc(12px + 4 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .settings__name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.settings__item[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  text-align: left;\n  font-family: Poppins-Regular;\n  color: #000000;\n}\n.settings__item[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media screen and (min-width: 320px) {\n  .settings__item[_ngcontent-%COMP%] {\n    font-size: calc(12px + 2 * ((100vw - 320px) / 880));\n  }\n}\n@media screen and (min-width: 1200px) {\n  .settings__item[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.settings__item[_ngcontent-%COMP%]:not(:first-child) {\n  border-top: 1px solid #f9f9f9;\n}\n.settings__item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.settings__item--name[_ngcontent-%COMP%] {\n  flex: 0 0 190px;\n}\n@media only screen and (max-width: 1023px) {\n  .settings__item--name[_ngcontent-%COMP%] {\n    flex: 0 0 130px;\n  }\n}\n.settings__item--value[_ngcontent-%COMP%] {\n  color: #A9A9A9;\n}\n.settings__item[_ngcontent-%COMP%]   .balance[_ngcontent-%COMP%] {\n  color: #FF3B3F;\n  font-family: Poppins-ExtraBold;\n  font-weight: bold;\n}\n@media only screen and (max-width: 479px) {\n  .settings__item[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .settings__item--value[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n    margin-top: 10px;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  margin-top: 20px;\n  max-width: 140px;\n  width: 100%;\n  height: 50px;\n}\n@media only screen and (max-width: 767px) {\n  .btn[_ngcontent-%COMP%] {\n    margin-left: 0;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvdXNlci9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlKQTtFQUNJO0lBQ0ksVUFBQTtFQ3hKTjtFRDJKRTtJQUNJLFVBQUE7RUN6Sk47QUFDRjtBQUpBO0VBQ0ksc0JDRUk7RURESixhQUFBO0VBQ0EsbUJDcUJLO0VEcEJMLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU1KO0FEWVE7RUN4QlI7SUFRUSxjQUFBO0lBQ0EsZ0JBQUE7RUFRTjtBQUNGO0FBSkk7RURrRkkseUJFcEZEO0VESUMsb0JBQUE7RUFDQSxnQ0FBQTtBQU9SO0FEMEdRO0VBQ0ksZUNwSHFCO0FBWWpDO0FEMEdZO0VBSEo7SUFJUSxtREFBQTtFQ3ZHZDtBQUNGO0FEeUdZO0VBUEo7SUFRUSxlQzNIdUI7RUFxQnJDO0FBQ0Y7QUFqQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUQwRUEsNEJFbEZFO0VGc0ZGLGNFcEdGO0FEMkNOO0FEdUZRO0VBQ0ksZUMzR3FCO0FBc0JqQztBRHVGWTtFQUhKO0lBSVEsbURBQUE7RUNwRmQ7QUFDRjtBRHNGWTtFQVBKO0lBUVEsZUNsSHVCO0VBK0JyQztBQUNGO0FBOUJRO0VBQ0ksNkJBQUE7QUFnQ1o7QUE5QlE7RUFDSSxpQkFBQTtBQWdDWjtBQTdCUTtFQUNJLGVBQUE7QUErQlo7QUR6Q1E7RUNTQTtJQUdRLGVBQUE7RUFpQ2Q7QUFDRjtBQTlCUTtFQUNJLGNDckNIO0FEcUVUO0FBOUJRO0VBQ0ksY0NyQ0E7RURzQ0EsOEJDbENIO0VEbUNHLGlCQUFBO0FBZ0NaO0FEdERRO0VDSko7SUE4Qk8sZUFBQTtFQWdDVDtFQS9CUztJQUNJLGVBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUFpQ2I7QUFDRjtBQTFCQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBNkJKO0FEeEVRO0VDc0NSO0lBT1EsY0FBQTtJQUNBLFlBQUE7RUErQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtaXhpbiB0cnVuY2F0ZSgkbWF4LXdpZHRoKSB7XHJcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludHM6IChcInBob25lXCI6IDQwMHB4LFxyXG4gICAgXCJwaG9uZS13aWRlXCI6IDQ4MHB4LFxyXG4gICAgXCJwaGFibGV0XCI6IDU2MHB4LFxyXG4gICAgXCJ0YWJsZXQtc21hbGxcIjogNjQwcHgsXHJcbiAgICBcInRhYmxldFwiOiA3NjhweCxcclxuICAgIFwidGFibGV0LW1cIjogMTAwMHB4LFxyXG4gICAgXCJ0YWJsZXQtd2lkZVwiOiAxMDI0cHgsXHJcbiAgICBcImRlc2t0b3BcIjogMTI0OHB4LFxyXG4gICAgXCJkZXNrdG9wLXdpZGVcIjogMTQ0MHB4KTtcclxuXHJcbkBtaXhpbiBtcSgkd2lkdGgsICR0eXBlOiBtaW4pIHtcclxuICAgIEBpZiBtYXBfaGFzX2tleSgkYnJlYWtwb2ludHMsICR3aWR0aCkge1xyXG4gICAgICAgICR3aWR0aDogbWFwX2dldCgkYnJlYWtwb2ludHMsICR3aWR0aCk7XHJcblxyXG4gICAgICAgIEBpZiAkdHlwZT09bWF4IHtcclxuICAgICAgICAgICAgJHdpZHRoOiAkd2lkdGggLSAxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgjeyR0eXBlfS13aWR0aDogJHdpZHRoKSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHooJG5hbWUpIHtcclxuICAgIEBpZiBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkge1xyXG4gICAgICAgIEByZXR1cm4gKGxlbmd0aCgkei1pbmRleGVzKSAtIGluZGV4KCR6LWluZGV4ZXMsICRuYW1lKSkrMTtcclxuICAgIH1cclxuXHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgQHdhcm4gJ1RoZXJlIGlzIG5vIGl0ZW0gXCIjeyRuYW1lfVwiIGluIHRoaXMgbGlzdDsgY2hvb3NlIG9uZSBvZjogI3skei1pbmRleGVzfSc7XHJcbiAgICAgICAgQHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4kei1pbmRleGVzOiAoXCJvdXRkYXRlZC1icm93c2VyXCIsIFwibW9kYWxcIiwgXCJzaXRlLWhlYWRlclwiLCBcInBhZ2Utd3JhcHBlclwiLCBcInNpdGUtZm9vdGVyXCIpO1xyXG5cclxuLy8tLS0tYmVmb3JlIGFmdGVyXHJcbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6IFwiXCIpIHtcclxuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XHJcbiAgICBwb3NpdGlvbjogJHBvcztcclxufVxyXG5cclxuQG1peGluIGZsZXgtY29udGVudCgkZGlyZWN0aW9uOiBmYWxzZSwgJGp1c3RpZnk6IGZhbHNlLCAkYWxpZ246IGZhbHNlLCAkYWxpZ24tY29udGVudDogZmFsc2UpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQGlmICRkaXJlY3Rpb24ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkanVzdGlmeSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkYWxpZ24tY29udGVudCB7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogJGFsaWduLWNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmaWd1cmUoJHdpZHRoLCAkaGVpZ2h0OiBmYWxzZSkge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb250ZW50KHJvdywgY2VudGVyLCBjZW50ZXIsIGNlbnRlcik7XHJcbiAgICBtYXgtd2lkdGg6ICR3aWR0aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIEBpZiAkaGVpZ2h0IHtcclxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL3NjYWxhcmUgZm9udFxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkdmFsdWUpIHtcclxuICAgIEByZXR1cm4gJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTtcclxufVxyXG5cclxuQG1peGluIGZsdWlkLXR5cGUtc2l6ZSgkbWluLWZvbnQtc2l6ZSxcclxuICAgICRtYXgtZm9udC1zaXplLFxyXG4gICAgJGZmOiBmYWxzZSxcclxuICAgICRjb2xvdXI6IGZhbHNlLFxyXG4gICAgJGFsaWduOiBmYWxzZSxcclxuICAgICRsaDogZmFsc2UsXHJcbiAgICAkd2VpZ2h0OiBmYWxzZSxcclxuICAgICRtaW4tdnc6IDMyMHB4LFxyXG4gICAgJG1heC12dzogMTIwMHB4KSB7XHJcbiAgICBAaWYgJGZmIHtcclxuICAgICAgICBmb250LWZhbWlseTogJGZmO1xyXG4gICAgfVxyXG5cclxuICAgIEBpZiAkY29sb3VyIHtcclxuICAgICAgICBjb2xvcjogJGNvbG91cjtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJHdlaWdodCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmICRsaCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaDtcclxuICAgIH1cclxuXHJcbiAgICBAaWYgJGFsaWduIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiAkYWxpZ247XHJcbiAgICB9XHJcblxyXG4gICAgJHUxOiB1bml0KCRtaW4tdncpO1xyXG4gICAgJHUyOiB1bml0KCRtYXgtdncpO1xyXG4gICAgJHUzOiB1bml0KCRtaW4tZm9udC1zaXplKTtcclxuICAgICR1NDogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyBAaWYgJG1pbi1mb250LXNpemUge1xyXG4gICAgLy8gICAkdTM6IHVuaXQoJG1pbi1mb250LXNpemUpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gQGlmICRtYXgtZm9udC1zaXplIHtcclxuICAgIC8vICAgJHUzOiB1bml0KCRtYXgtZm9udC1zaXplKTtcclxuICAgIC8vIH1cclxuICAgIC8vICR1MzogdW5pdCgkbWluLWZvbnQtc2l6ZSk7XHJcbiAgICAvLyAkdTQ6IHVuaXQoJG1heC1mb250LXNpemUpO1xyXG5cclxuXHJcbiAgICBAaWYgJHUxPT0kdTIgYW5kICR1MT09JHUzIGFuZCAkdTE9PSR1NCB7XHJcbiAgICAgICAgJiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1pbi1mb250LXNpemU7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluLXZ3KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoI3skbWluLWZvbnQtc2l6ZX0gKyAje3N0cmlwLXVuaXQoJG1heC1mb250LXNpemUgLSAkbWluLWZvbnQtc2l6ZSl9ICogKCgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1heC12dykge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkbWF4LWZvbnQtc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gYW5pbWF0aW9uICgkdGltZSkge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlICR0aW1lIGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59IiwiQGtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn1cblxuLnNldHRpbmdzX19uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtQm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjlmOWY5O1xufVxuLnNldHRpbmdzX19uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLnNldHRpbmdzX19uYW1lIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDQgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gODgwKSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuc2V0dGluZ3NfX25hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLnNldHRpbmdzX19pdGVtIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5zZXR0aW5nc19faXRlbSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5zZXR0aW5nc19faXRlbSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAyICogKCgxMDB2dyAtIDMyMHB4KSAvIDg4MCkpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNldHRpbmdzX19pdGVtIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5zZXR0aW5nc19faXRlbTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjlmOWY5O1xufVxuLnNldHRpbmdzX19pdGVtOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5zZXR0aW5nc19faXRlbS0tbmFtZSB7XG4gIGZsZXg6IDAgMCAxOTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC5zZXR0aW5nc19faXRlbS0tbmFtZSB7XG4gICAgZmxleDogMCAwIDEzMHB4O1xuICB9XG59XG4uc2V0dGluZ3NfX2l0ZW0tLXZhbHVlIHtcbiAgY29sb3I6ICNBOUE5QTk7XG59XG4uc2V0dGluZ3NfX2l0ZW0gLmJhbGFuY2Uge1xuICBjb2xvcjogI0ZGM0IzRjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtRXh0cmFCb2xkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgLnNldHRpbmdzX19pdGVtIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLnNldHRpbmdzX19pdGVtLS12YWx1ZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cblxuLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXgtd2lkdGg6IDE0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn0iLCIkcHJpbWFyeTogI0NBRUJGMDtcclxuJHByaW1hcnktc2hhZG93LWRhcms6ICNDQUVCRjA7XHJcbiRwcmltYXJ5LXNoYWRvdy1saWdodDogcmdiYSgjQ0FFQkYwLCAwLjIpO1xyXG4kZGFyazojMDAwMDAwO1xyXG4kZGFyay1zaGFkb3ctZGFyazojMDAwMDAwO1xyXG4kZGFyay1zaGFkb3ctbGlnaHQ6IzAwMDAwMDtcclxuJGxpZ2h0OiAjZmZmO1xyXG4kbWVkaXVtOiAjQTlBOUE5O1xyXG4kbWVkaXVtLXNoYWRvdy1kYXJrOiAjZjlmOWY5O1xyXG4kbWVkaXVtLXNoYWRvdy1saWdodDogI0VGRUZFRjtcclxuJHNlY29uZGFyeTogI0ZGM0IzRjtcclxuJHN1Y2Nlc3M6ICMyQUI5MzA7XHJcbi8vICRpbnRlcm1lZGlhdGU6ICM2NTVmNWY7XHJcblxyXG4kYm9sZGVyOiBQb3BwaW5zLUV4dHJhQm9sZDtcclxuJGJvbGQ6IFBvcHBpbnMtQm9sZDtcclxuJGYtbWVkaXVtOiBQb3BwaW5zLVNlbWlCb2xkO1xyXG4kcmVndWxhcjogUG9wcGlucy1SZWd1bGFyO1xyXG4kZi1saWdodDogUG9wcGlucy1MaWdodDtcclxuJGYtaXRhbGljOiBQb3BwaW5zLUl0YWxpYztcclxuXHJcbiRjb250YWluZXI6IDEzNjVweDtcclxuXHJcbiRidG4taGVpZ2h0OiA0MHB4O1xyXG4kZGVmYXVsdC1wYWRkaW5nOiAxNXB4O1xyXG4kaXRlbS1wYWRkaW5nOiA1cHg7XHJcblxyXG4kcmFkaXVzOiAxMHB4O1xyXG5cclxuJG9wYWNpdHk6IHJnYmEoJGRhcmssIDAuMik7XHJcblxyXG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0UzMjAyNCwgI0ZGRDU0Qyk7XHJcbiRzaGFkb3c6IDBweCAycHggMjVweCByZ2JhKDE1LCAyOCwgNzEsIDAuMSk7XHJcbiRzaGFkb3ctYnRuOiAwcHggMjRweCAxNnB4IC0yMnB4ICNmZjNiM2Y7XHJcbiRzaGFkb3ctc3VjY2VzczogMHB4IDI0cHggMTZweCAtMjJweCAkc3VjY2VzcztcclxuXHJcbiRzdWNjZXNzLWNvbG9yOiAjYjdkOGI3O1xyXG4kZXJyb3ItY29sb3I6ICNmOGI3YmQ7XHJcbiR3YXJuLWNvbG9yOiAjZmZlMzk5O1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map