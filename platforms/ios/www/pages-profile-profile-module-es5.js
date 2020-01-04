(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header title=\"Mi Perfil\" backIcon=\"yes\"></app-header>\n<ion-content class=\"ion-no-padding\">\n  <ion-segment>\n    <ion-segment-button (click)=\"takePhoto()\">\n      <ion-icon name=\"camera\"></ion-icon>\n      <ion-label>Camara</ion-label>\n    </ion-segment-button>\n    <ion-segment-button (click)=\"searchInGallery()\">\n      <ion-icon name=\"images\"></ion-icon>\n      <ion-label>Galeria</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-card class=\"ion-no-margin\">\n      <img src=\"{{ userAvatar }}\" *ngIf=\"userAvatar\" style=\"width: 100%;\" />\n      <ion-card-header>\n        <ion-card-subtitle>{{ dataUser.email }}</ion-card-subtitle>\n        <ion-card-title>{{ dataUser.last_name }} {{ dataUser.name }}</ion-card-title>\n      </ion-card-header>\n      <ion-item href=\"#\" class=\"activated\">\n        <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n        <ion-label>Card Link Item 1 .activated</ion-label>\n      </ion-item>\n      <ion-item href=\"#\">\n        <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n        <ion-label>Card Link Item 2</ion-label>\n      </ion-item>\n      <ion-item class=\"activated\">\n        <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n        <ion-label>Card Button Item 1 .activated</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n        <ion-label>Card Button Item 2</ion-label>\n      </ion-item>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_system_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/system/user.service */ "./src/app/services/api/system/user.service.ts");
/* harmony import */ var src_app_services_components_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/components/loading.service */ "./src/app/services/components/loading.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");





var ProfilePage = /** @class */ (function () {
    function ProfilePage(userService, loadingService, camera) {
        this.userService = userService;
        this.loadingService = loadingService;
        this.camera = camera;
        this.dataUser = {};
        this.sessionUser = {};
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.getData();
        this.userAvatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTDL4Cw8qGMQhaV7DSI6lBXergjv2nhPFEf5Q-r-g0K25Kn9G7Q&s";
    };
    ProfilePage.prototype.getData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.sessionUser = JSON.parse(localStorage.getItem('user'));
                this.userService.getUserById(this.sessionUser.uid).valueChanges().subscribe(function (data) {
                    _this.dataUser = data;
                }, function (error2) {
                    console.log(error2);
                });
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.takePhoto = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false,
            targetHeight: 1024,
            targetWidth: 1024,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            var userAvatar = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.searchInGallery = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false,
            targetHeight: 1024,
            targetWidth: 1024,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            var userAvatar = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: src_app_services_api_system_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_components_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_system_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_components_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map