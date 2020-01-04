(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-system-personal-information-personal-information-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/system/personal-information/personal-information.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/system/personal-information/personal-information.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Información Personal\" backIcon=\"yes\"></app-header>\n\n<ion-content fullscreen>\n  <form class=\"form\" [formGroup]=\"validations_form\"  (ngSubmit)=\"saveChanges(validations_form.value)\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col offset-xl=\"5\" size-xl=\"2\" class=\"ion-no-padding\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"stacked\">Nombres</ion-label>\n              <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validation_messages.name\">\n                <div class=\"error-message ion-padding\" *ngIf=\"validations_form.get('name').hasError(validation.type) && (validations_form.get('name').dirty || validations_form.get('name').touched)\">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div >\n            <ion-item>\n              <ion-label position=\"stacked\">Apellidos</ion-label>\n              <ion-input type=\"text\" formControlName=\"last_name\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validation_messages.last_name\">\n                <div class=\"error-message ion-padding\" *ngIf=\"validations_form.get('last_name').hasError(validation.type) && (validations_form.get('last_name').dirty || validations_form.get('last_name').touched)\">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label position=\"stacked\">Email</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validation_messages.email\">\n                <div class=\"error-message ion-padding\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label position=\"stacked\" >Fecha de Nacimiento</ion-label>\n              <ion-datetime displayFormat=\"DD/MM/YYYY\" \n                cancelText=\"Cancelar\"\n                doneText=\"Seleccionar\"\n                formControlName=\"dateNac\"\n              ></ion-datetime>\n            </ion-item>\n            <ion-radio-group formControlName=\"sex\">\n              <ion-list-header>\n                <ion-label>Sexo</ion-label>\n              </ion-list-header>\n              <ion-item>\n                <ion-label>Masculino</ion-label>\n                <ion-radio slot=\"start\" value=\"1\" color=\"primary\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Femenino</ion-label>\n                <ion-radio slot=\"start\" value=\"0\" color=\"primary\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col offset-xl=\"5\" size-xl=\"2\">\n          <section>\n            <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!validations_form.valid\">Guardar</ion-button>\n          </section>\n          <section>\n            <label class=\"error-message\">{{ errorMessage }}</label>\n            <label class=\"success-message\">{{ successMessage }}</label>\n          </section>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/system/personal-information/personal-information-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/system/personal-information/personal-information-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: PersonalInformationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformationPageRoutingModule", function() { return PersonalInformationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _personal_information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-information.page */ "./src/app/pages/system/personal-information/personal-information.page.ts");




var routes = [
    {
        path: '',
        component: _personal_information_page__WEBPACK_IMPORTED_MODULE_3__["PersonalInformationPage"]
    }
];
var PersonalInformationPageRoutingModule = /** @class */ (function () {
    function PersonalInformationPageRoutingModule() {
    }
    PersonalInformationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PersonalInformationPageRoutingModule);
    return PersonalInformationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/system/personal-information/personal-information.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/system/personal-information/personal-information.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PersonalInformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformationPageModule", function() { return PersonalInformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _personal_information_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-information-routing.module */ "./src/app/pages/system/personal-information/personal-information-routing.module.ts");
/* harmony import */ var _personal_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-information.page */ "./src/app/pages/system/personal-information/personal-information.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var PersonalInformationPageModule = /** @class */ (function () {
    function PersonalInformationPageModule() {
    }
    PersonalInformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _personal_information_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalInformationPageRoutingModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_personal_information_page__WEBPACK_IMPORTED_MODULE_6__["PersonalInformationPage"]]
        })
    ], PersonalInformationPageModule);
    return PersonalInformationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/system/personal-information/personal-information.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/system/personal-information/personal-information.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3lzdGVtL3BlcnNvbmFsLWluZm9ybWF0aW9uL0M6XFx4YW1wcFxcaHRkb2NzXFxiaXRheC9zcmNcXGFwcFxccGFnZXNcXHN5c3RlbVxccGVyc29uYWwtaW5mb3JtYXRpb25cXHBlcnNvbmFsLWluZm9ybWF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3lzdGVtL3BlcnNvbmFsLWluZm9ybWF0aW9uL3BlcnNvbmFsLWluZm9ybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQ0NKOztBRENBOztFQUVJLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N5c3RlbS9wZXJzb25hbC1pbmZvcm1hdGlvbi9wZXJzb25hbC1pbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xyXG59XHJcbnNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcclxuLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59Iiwic2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG59XG5cbnNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcbi5mdWxsLXdpZHRoID4gaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/system/personal-information/personal-information.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/system/personal-information/personal-information.page.ts ***!
  \********************************************************************************/
/*! exports provided: PersonalInformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformationPage", function() { return PersonalInformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_system_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/system/user.service */ "./src/app/services/api/system/user.service.ts");
/* harmony import */ var src_app_services_components_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/components/loading.service */ "./src/app/services/components/loading.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_components_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/components/alert.service */ "./src/app/services/components/alert.service.ts");






var PersonalInformationPage = /** @class */ (function () {
    function PersonalInformationPage(userService, loadingService, alertService) {
        this.userService = userService;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.sexo = '1';
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email es requerido.' },
                { type: 'pattern', message: 'Introduzca un correo electrónico válido.' }
            ],
            'name': [
                { type: 'required', message: 'Nombres es requerido.' }
            ],
            'last_name': [
                { type: 'required', message: 'Apellidos es requerido.' }
            ],
            'dateNac': [
                { type: 'required', message: 'Fecha Nacimiento es requerido.' }
            ]
        };
    }
    PersonalInformationPage.prototype.ngOnInit = function () {
        this.validations_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            dateNac: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.getUser();
    };
    PersonalInformationPage.prototype.saveChanges = function (values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.dataUser = {
                    uid: this.sessionUser.uid,
                    email: values.email,
                    name: values.name,
                    last_name: values.last_name,
                    dateNac: values.dateNac,
                    sex: values.sex
                };
                this.userService.updateUser(this.dataUser).then(function () {
                    _this.alertService.presentAlert('Enhorabuena', 'Mensaje de confirmación', 'Los datos se actualizaron correctamente.');
                    _this.errorMessage = "";
                }).catch(function (error) {
                    _this.errorMessage = error.message;
                    _this.successMessage = "";
                });
                return [2 /*return*/];
            });
        });
    };
    PersonalInformationPage.prototype.getUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.sessionUser = JSON.parse(localStorage.getItem('user'));
                this.userService.getUserById(this.sessionUser.uid).valueChanges().subscribe(function (data) {
                    _this.validations_form.setValue({
                        email: data.email,
                        name: data.name,
                        last_name: data.last_name,
                        dateNac: data.dateNac,
                        sex: data.sex
                    });
                }, function (error2) {
                    console.log(error2);
                });
                return [2 /*return*/];
            });
        });
    };
    PersonalInformationPage.ctorParameters = function () { return [
        { type: src_app_services_api_system_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_components_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] },
        { type: src_app_services_components_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    PersonalInformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personal-information',
            template: __webpack_require__(/*! raw-loader!./personal-information.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/system/personal-information/personal-information.page.html"),
            styles: [__webpack_require__(/*! ./personal-information.page.scss */ "./src/app/pages/system/personal-information/personal-information.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_system_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_components_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            src_app_services_components_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], PersonalInformationPage);
    return PersonalInformationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-system-personal-information-personal-information-module-es5.js.map