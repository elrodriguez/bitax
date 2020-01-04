(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-system-role-role-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/system/role/role.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/system/role/role.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Roles\" backIcon=\"yes\"></app-header>\n\n<ion-content fullscreen>\n  <ion-toolbar>\n    <ion-searchbar pleaceholder=\"Buscar\"></ion-searchbar>\n  </ion-toolbar>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of roles\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"presentAlertConfirm(item)\">\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n        <ion-item-option color=\"secondary\" (click)=\"modalRole(item.key)\">\n          <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <ion-item>\n        <ion-label>\n          <h2>{{ item.name }}</h2>\n        </ion-label>\n        <div *ngIf=\"item.state; else templateRole\">\n          <ion-chip color=\"success\" >\n            <ion-label>Activo</ion-label>\n          </ion-chip>\n        </div>\n        <ng-template #templateRole>\n          <ion-chip color=\"danger\">\n            <ion-label>Inactivo</ion-label>\n          </ion-chip>\n        </ng-template>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n<ion-footer class=\"ion-padding\">\n  <ion-button color=\"warning\"  size=\"default\" expand=\"block\" (click)=\"modalRole(null)\">\n      <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n      Nuevo\n  </ion-button>\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/pages/system/role/role-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/system/role/role-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: RolePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePageRoutingModule", function() { return RolePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _role_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role.page */ "./src/app/pages/system/role/role.page.ts");




var routes = [
    {
        path: '',
        component: _role_page__WEBPACK_IMPORTED_MODULE_3__["RolePage"]
    }
];
var RolePageRoutingModule = /** @class */ (function () {
    function RolePageRoutingModule() {
    }
    RolePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RolePageRoutingModule);
    return RolePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/system/role/role.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/system/role/role.module.ts ***!
  \**************************************************/
/*! exports provided: RolePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePageModule", function() { return RolePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _role_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-routing.module */ "./src/app/pages/system/role/role-routing.module.ts");
/* harmony import */ var _role_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./role.page */ "./src/app/pages/system/role/role.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var RolePageModule = /** @class */ (function () {
    function RolePageModule() {
    }
    RolePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _role_routing_module__WEBPACK_IMPORTED_MODULE_5__["RolePageRoutingModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]
            ],
            declarations: [_role_page__WEBPACK_IMPORTED_MODULE_6__["RolePage"]]
        })
    ], RolePageModule);
    return RolePageModule;
}());



/***/ }),

/***/ "./src/app/pages/system/role/role.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/system/role/role.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N5c3RlbS9yb2xlL3JvbGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/system/role/role.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/system/role/role.page.ts ***!
  \************************************************/
/*! exports provided: RolePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePage", function() { return RolePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_system_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/system/role.service */ "./src/app/services/api/system/role.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_system_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/system/role-form/role-form.component */ "./src/app/components/system/role-form/role-form.component.ts");





var RolePage = /** @class */ (function () {
    function RolePage(roleService, loadingCtrl, alertCtrl, modalCtrl) {
        this.roleService = roleService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
    }
    RolePage.prototype.ngOnInit = function () {
        this.rolesList();
    };
    RolePage.prototype.rolesList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Espere'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        this.roleService.getRoles().valueChanges().subscribe(function (data) {
                            _this.roles = data;
                            _this.loading.dismiss();
                        }, function (err) {
                            console.log(err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RolePage.prototype.modalRole = function (key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_components_system_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_4__["RoleFormComponent"],
                            componentProps: {
                                'key': key,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RolePage.prototype.presentAlertConfirm = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirmar!',
                            message: 'Seguro que desea eliminar: ' + item.name,
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Continuar',
                                    handler: function () {
                                        _this.destroyRole(item.key);
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RolePage.prototype.destroyRole = function (key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Espere'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        this.roleService.deleteRole(key).then(function () {
                            _this.alertCtrl.create({
                                header: 'Enhorabuena',
                                message: 'Se Elimino correctamente.',
                                buttons: ['OK']
                            }).then(function (alert) {
                                alert.present();
                            });
                            _this.loading.dismiss();
                        }).catch(function (error) {
                            console.log(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RolePage.ctorParameters = function () { return [
        { type: src_app_services_api_system_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    RolePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! raw-loader!./role.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/system/role/role.page.html"),
            styles: [__webpack_require__(/*! ./role.page.scss */ "./src/app/pages/system/role/role.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_system_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], RolePage);
    return RolePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-system-role-role-module-es5.js.map