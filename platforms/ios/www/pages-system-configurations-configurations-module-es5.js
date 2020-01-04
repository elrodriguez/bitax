(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-system-configurations-configurations-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/system/configurations/configurations.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/system/configurations/configurations.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Configuraciones\" backIcon=\"yes\"></app-header>\n\n<ion-content fullscreen>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/system/configurations/configurations-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/system/configurations/configurations-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ConfigurationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationsPageRoutingModule", function() { return ConfigurationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configurations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configurations.page */ "./src/app/pages/system/configurations/configurations.page.ts");




var routes = [
    {
        path: '',
        component: _configurations_page__WEBPACK_IMPORTED_MODULE_3__["ConfigurationsPage"]
    }
];
var ConfigurationsPageRoutingModule = /** @class */ (function () {
    function ConfigurationsPageRoutingModule() {
    }
    ConfigurationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ConfigurationsPageRoutingModule);
    return ConfigurationsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/system/configurations/configurations.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/system/configurations/configurations.module.ts ***!
  \**********************************************************************/
/*! exports provided: ConfigurationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationsPageModule", function() { return ConfigurationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configurations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configurations-routing.module */ "./src/app/pages/system/configurations/configurations-routing.module.ts");
/* harmony import */ var _configurations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configurations.page */ "./src/app/pages/system/configurations/configurations.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var ConfigurationsPageModule = /** @class */ (function () {
    function ConfigurationsPageModule() {
    }
    ConfigurationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _configurations_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfigurationsPageRoutingModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]
            ],
            declarations: [_configurations_page__WEBPACK_IMPORTED_MODULE_6__["ConfigurationsPage"]]
        })
    ], ConfigurationsPageModule);
    return ConfigurationsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/system/configurations/configurations.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/system/configurations/configurations.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3lzdGVtL2NvbmZpZ3VyYXRpb25zL0M6XFx4YW1wcFxcaHRkb2NzXFxiaXRheC9zcmNcXGFwcFxccGFnZXNcXHN5c3RlbVxcY29uZmlndXJhdGlvbnNcXGNvbmZpZ3VyYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3lzdGVtL2NvbmZpZ3VyYXRpb25zL2NvbmZpZ3VyYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQ0NKOztBRENFOztFQUVFLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N5c3RlbS9jb25maWd1cmF0aW9ucy9jb25maWd1cmF0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xyXG4gIH1cclxuICBzZWN0aW9uOm5vdCguZnVsbC13aWR0aCksXHJcbiAgLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIH0iLCJzZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbn1cblxuc2VjdGlvbjpub3QoLmZ1bGwtd2lkdGgpLFxuLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/system/configurations/configurations.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/system/configurations/configurations.page.ts ***!
  \********************************************************************/
/*! exports provided: ConfigurationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationsPage", function() { return ConfigurationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigurationsPage = /** @class */ (function () {
    function ConfigurationsPage() {
        this.dateNac = new Date();
        this.monthShortNames = ["Ene", "Feb", "Mar", "May", "Jun", "Ago", "Sep", "Oct", "Nov", "Dic"];
    }
    ConfigurationsPage.prototype.ngOnInit = function () {
    };
    ConfigurationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configurations',
            template: __webpack_require__(/*! raw-loader!./configurations.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/system/configurations/configurations.page.html"),
            styles: [__webpack_require__(/*! ./configurations.page.scss */ "./src/app/pages/system/configurations/configurations.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigurationsPage);
    return ConfigurationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-system-configurations-configurations-module-es5.js.map