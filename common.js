(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "npik":
/*!***********************************************!*\
  !*** ./src/app/_utils/formValidationUtils.ts ***!
  \***********************************************/
/*! exports provided: setServerValidationError, passwordConfirmValidatorPartPassword, passwordConfirmValidatorPartPasswordConfirm, phoneValidator, trimValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setServerValidationError", function() { return setServerValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordConfirmValidatorPartPassword", function() { return passwordConfirmValidatorPartPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordConfirmValidatorPartPasswordConfirm", function() { return passwordConfirmValidatorPartPasswordConfirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneValidator", function() { return phoneValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimValidator", function() { return trimValidator; });
function setServerValidationError(form, error) {
    if (!error.type)
        error = { type: "unknownError" };
    if (!error.field)
        form.setErrors(Object.assign(Object.assign({}, form.errors), { [error.type]: "value" in error ? error.value : true }));
    else
        form.get(error.field).setErrors(Object.assign(Object.assign({}, form.get(error.field).errors), { [error.type]: "value" in error ? error.value : true }));
}
function passwordConfirmValidatorPartPassword(passwordConfirm, password) {
    passwordConfirm.updateValueAndValidity({ onlySelf: true });
    passwordConfirm.markAsTouched({ onlySelf: true });
    return null;
}
function passwordConfirmValidatorPartPasswordConfirm(password, passwordConfirm) {
    if (password.value !== passwordConfirm.value)
        return { 'passwordConfirmError': true };
    return null;
}
function phoneValidator(control) {
    if (testFull(control.value, /[\d- ]+/))
        return null;
    return { 'phoneError': true };
}
function trimValidator(control) {
    if (control.value && control.value.match(/^\s|\s$/))
        return { 'trimError': true };
    return null;
}
function testFull(str, regExp) {
    const rez = str.match(regExp);
    return rez && rez[0].length === str.length;
}


/***/ })

}]);
//# sourceMappingURL=common.js.map