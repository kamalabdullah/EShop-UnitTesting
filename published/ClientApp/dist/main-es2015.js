(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <!-- <app-nav-menu></app-nav-menu> -->\r\n  <div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/log-in/log-in.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/log-in/log-in.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <!-- <app-nav-menu></app-nav-menu> -->\r\n<form [formGroup]=\"angForm\" novalidate>\r\n<div class=\"container-fluid  LogInContainer\">\r\n  <div class=\"row h-100 justify-content-center align-items-center\">\r\n    <div class=\"col-xs-6\">\r\n    <div class='row justify-content-center LogInRow'>\r\n        <div class='col-xs-6'>\r\n        <i class=\"fas fa-shopping-cart\"></i>\r\n        <span class=\"eshopLogInText\">eShop.com</span>\r\n        </div>\r\n    </div>\r\n      <div class='row justify-content-center LogInRow'>\r\n        <div class='col-xs-6'>\r\n          <input type='text' formControlName=\"userName\"class=\"form-control form-control-sm login-input\" placeholder=\"user name\"/>\r\n        </div>\r\n      </div>\r\n      <div class='row justify-content-center LogInRow'>\r\n      <div  *ngIf=\"angForm.controls['userName'].invalid && (angForm.controls['userName'].dirty || angForm.controls['userName'].touched)\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"angForm.controls['userName'].errors.required\">\r\n              User Name is required.\r\n          </div>\r\n          <div *ngIf=\"angForm.controls['userName'].errors.pattern && !angForm.controls['userName'].errors.required\">\r\n              User Name is invalid.\r\n          </div>\r\n      </div>\r\n      <div class=\"alert-danger\" *ngIf=\"errorMessage\">\r\n          {{errorMessage}}\r\n      </div>\r\n      </div>\r\n      <div class='row justify-content-center'>\r\n          <div class='col-xs-6'>\r\n              <button type=\"button\" (click)='getUserByName()' [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary btn-login\">LogIn</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white fixed-top border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n     <a class=\"navbar-brand\" [routerLink]=\"['/cart']\">  \r\n        <div class='col-xs-6 notification'>\r\n         <i class=\"fas fa-shopping-cart\"></i>\r\n          <span class=\"badge badge-danger\" style=\"margin-right: 10px;margin-top: 10px;\">{{ordersCount}}</span>\r\n          <span class=\"eshopLogInText\">eShop.com</span>\r\n          </div>\r\n       </a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\"> \r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink-4\" data-toggle=\"dropdown\"\r\n                  aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <i class=\"fas fa-user\"></i> {{currentUser.name}} </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right dropdown-info\" aria-labelledby=\"navbarDropdownMenuLink-4\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Home</a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/filter']\">Filter</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\" (click)='logOut()'>Log out</a>\r\n                </div>\r\n              </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/cart/cart.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/cart/cart.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='uniqOrderList && uniqOrderList.length'>\r\n<div class='table-responsive'>\r\n        <table class='table table-striped'\r\n               *ngIf='uniqOrderList && uniqOrderList.length'>\r\n          <thead>\r\n            <tr class=\"d-flex bg-primary text-white\">\r\n              <th scope=\"col\" class=\"col-md-3\"></th>\r\n              <th scope=\"col\" class=\"col-md-3\"></th>\r\n              <th scope=\"col\" class=\"col-md-2\">Price</th>\r\n              <th scope=\"col\" class= \"col-md-2\">Quantity</th>\r\n              <th scope=\"col\" class= \"col-md-2\">Total</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor='let product of uniqOrderList' class=\"d-flex\">\r\n              <th class=\"col-md-3\">\r\n                <img [src]='product.imageURL' class='img-responsive col-md-3' \r\n                     [title]='product.name'>\r\n              </th>\r\n              <td class=\"col-md-3\">\r\n                 <div class='container-fluid'>\r\n                    <div class='row justify-content-center'>\r\n                         <div class='col-xs-6'>\r\n                                        <a [routerLink]=\"['/products', product.id]\">\r\n                                            {{ product.name }}\r\n                                        </a>\r\n                          </div>\r\n                     </div>\r\n                     <div class='row justify-content-center'>\r\n                            <div class='col-xs-6'>\r\n                                    <p class=\"text-success\">In Stock</p>\r\n                             </div>\r\n                        </div>\r\n                        <div class='row justify-content-center'>\r\n                                <div class='col-xs-6'>\r\n                                        <button type=\"button\" (click)='deleteItemFromCart(product.id)' class=\"btn btn-link\">\r\n                                                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>  delete\r\n                                        </button>\r\n                            </div>\r\n                        </div>\r\n                 </div>\r\n                </td>\r\n              <th class=\"col-md-2\">{{ product.price | currency:'USD':'symbol':'1.2-2'}}</th>\r\n              <th class=\"col-md-2\">{{ product.count }}</th>\r\n              <th class=\"col-md-2\">{{ product.count * product.price | currency:'USD':'symbol':'1.2-2'}}</th>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"lb-total\">\r\n         <p class=\"font-weight-bold\">Total Amount: {{totalAmount | currency:'USD':'symbol':'1.2-2'}}</p>\r\n     </div>\r\n      <hr>\r\n      <div class=\"row float-right\">\r\n            <button type=\"button\" class=\"float-right btn btn-success btn-lg btn-submit\" (click)=\"submitUserProducts()\">Submit</button>\r\n      </div>\r\n</div>\r\n<div *ngIf='!uniqOrderList || !uniqOrderList.length'>\r\n        <div class=\"alert alert-warning\" role=\"alert\">\r\n                <strong>Warning!</strong> Your cart is empty please go to product list and choose items <a [routerLink]=\"['/products']\" class=\"alert-link\">Go To Product List</a>.\r\n              </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/filter/filter.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/filter/filter.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row h-100 justify-content-center align-items-center\">\r\n        <div class=\"row h-100 justify-content-center align-items-center\">\r\n            <div class=\"col-xs-6 justify-content-center filterRow\">\r\n                 <div class='row justify-content-center'>\r\n                     <div class='col-xs-6'>\r\n                          <span id=\"ex6CurrentSliderValLabel\">Min Price: <span id=\"ex6SliderVal\">{{productFilter.minPrice | currency}}</span></span>\r\n                      </div>\r\n                 </div>\r\n                <div class='row justify-content-center'>\r\n                    <div class='col-xs-6'>\r\n                         <mv-slider [(value)]=\"productFilter.minPrice\" [min]=\"100\" [max]=\"1000\" [enabled]=\"true\" (change)=\"changeMin()\"></mv-slider>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6 justify-content-center filterRow\">\r\n                <div class='row justify-content-center'>\r\n                        <div class='col-xs-6'>\r\n                             <span id=\"ex6CurrentSliderValLabel\">Max Price: <span id=\"ex6SliderVal\">{{productFilter.maxPrice | currency}}</span></span>\r\n                         </div>\r\n                    </div>\r\n                   <div class='row justify-content-center'>\r\n                       <div class='col-xs-6'>\r\n                            <mv-slider [(value)]=\"productFilter.maxPrice\" [min]='100' [max]=\"2000\" [enabled]=\"true\" (change)=\"changeMax()\"></mv-slider>\r\n                       </div>\r\n                   </div>\r\n            </div>\r\n            <div class=\"col-xs-6 justify-content-center filterRow\">\r\n            <div class=\"row float-center\">\r\n                    <button type=\"button\" class=\"float-center btn btn-success btn-lg btn-submit btn-filter\" (click)=\"applyFilter()\">Aplly Filter</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-6 justify-content-center filterRow\">\r\n                    <div class=\"row float-center\">\r\n                            <button type=\"button\" class=\"float-center btn btn-primary btn-lg btn-submit btn-filter\" (click)=\"clearFilter()\">Clear Filter</button>\r\n                      </div>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n       \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/product-details/product-details.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/product-details/product-details.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-menu [orderlist]='orderProduct ? orderProduct : null'></app-nav-menu> \r\n<h2 *ngIf='productDetails'>{{productDetails.name}}</h2>\r\n<div class='row h-100 justify-content-center align-items-center'>\r\n    <div class=\"col-lg-9 align-items-center\" *ngIf='productDetails'>\r\n        <div class=\"card mt-4 justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-9\">\r\n          <!-- <img class=\"card-img-top img-fluid\" [src]=\"productDetails.imageURL\" alt=\"\"> -->\r\n          <div class=\"container\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12 py-3\">\r\n                    <h2 class=\"pb-2\">{{productDetails.name}}</h2>\r\n                    <ngb-carousel *ngIf=\"productDetails.imagesURLList\">\r\n                      <ng-template ngbSlide *ngFor=\"let image of productDetails.imagesURLList\">\r\n                        <img  class=\"card-img-top img-fluid\" [src]=\"image\" alt=\"\">\r\n                      </ng-template>\r\n                    </ngb-carousel>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n        </div>\r\n          <div class=\"card-body\">\r\n            <h4 style=\"color: red;\">{{productDetails.price | currency}}</h4>\r\n            <p class=\"card-text\">{{productDetails.fullDescription}}</p>\r\n          </div>\r\n          <hr>\r\n        <div class='row h-100 justify-content-center align-items-center'>\r\n         <button type=\"button\" [disabled]='disableMinusButton' (click)=\"decrementCounter()\" class=\"col-1 btn btn-danger\" style=\"margin-right: 62px\">-</button>\r\n         <button type=\"button\" (click)=\"incrementCounter()\" class=\"col-1 btn btn-success\" style=\"margin-right: 62px\">+</button>\r\n         <p aria-live=\"polite\"><strong>{{ itemCount }}</strong></p>\r\n        </div>\r\n        <div>\r\n          <button type=\"button\" class=\"float-right btn btn-primary\" (click)=\"addToCart()\" style=\"margin-right: 20px !important\">Add To Cart</button>\r\n        </div>\r\n        <br>\r\n        </div>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/product-list/product-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/product-list/product-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-nav-menu [orderlist]='orderProduct ? orderProduct : null'></app-nav-menu>\r\n\r\n<div class=\"container\" id=\"app\" style=\"margin-top: 70px;\">\r\n        <div class=\"row\">\r\n            <!-- <div *ngFor=\"let item of products  | orderBy: price : true : false\" class=\"col-lg-4 col-sm-6 col-xs-12 my-1\"> -->\r\n                <div *ngFor=\"let item of products\" class=\"col-lg-4 col-sm-6 col-xs-12 my-1\">\r\n                    <a [routerLink]=\"['/products', item.id]\"> \r\n                <div class=\"card h-100\">\r\n                    <img [src]=\"item.imageURL\" class=\"card-img-top\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-title\" style=\"font-weight: bold; color: black;\">{{ item.name }}</div>\r\n                        <div>\r\n                            <span class=\"badge badge-pill badge-danger\" >{{ item.price | currency }}</span>\r\n                        </div>\r\n                        <div class=\"card-title\" style=\"color: black;\">{{ item.description }}</div>\r\n                    </div>\r\n                </div>\r\n            </a> \r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/log-in-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/log-in-service.service.ts ***!
  \****************************************************/
/*! exports provided: LogInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInService", function() { return LogInService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Shared_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/Constants */ "./src/app/Shared/Constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let LogInService = class LogInService {
    constructor(location, http) {
        this.location = location;
        this.http = http;
    }
    getUser(userName) {
        return this.http.get(_Shared_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].getUserUrl + userName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => JSON.stringify(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
LogInService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogInService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogInService);



/***/ }),

/***/ "./src/app/Services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Shared_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/Constants */ "./src/app/Shared/Constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let ProductService = class ProductService {
    constructor(location, http) {
        this.location = location;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // getProducts(): Observable<IProduct[]> {
    //   return this.http.get<IProduct[]>(this.getProductsUrl)
    //     .pipe(
    //       tap(data => JSON.stringify(data)),
    //       catchError(this.handleError)
    //     );
    // }
    getProducts(filter) {
        return this.http.post(_Shared_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].getProductsUrl, filter, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => JSON.stringify(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getProductById(id) {
        return this.http.get(_Shared_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].getProductByIdUrl + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    submitUserProducts(userId, productIds) {
        return this.http.post(location.origin + _Shared_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].submitUserProductsUrl + userId, productIds, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductService);



/***/ }),

/***/ "./src/app/Shared/Constants.ts":
/*!*************************************!*\
  !*** ./src/app/Shared/Constants.ts ***!
  \*************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
Constants.currentUserSessionKey = 'currentUser';
Constants.orderListSessionKey = 'orderList';
Constants.productFilterSessionKey = 'productFilter';
Constants.getProductsUrl = 'api/Product/GetAllProduct';
Constants.getProductByIdUrl = 'api/Product/';
Constants.submitUserProductsUrl = '/api/Product/SubmitUserProducts?userId=';
Constants.getUserUrl = 'api/User/GetUserByUserName?userName=';


/***/ }),

/***/ "./src/app/Shared/globals.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Shared/globals.service.ts ***!
  \*******************************************/
/*! exports provided: GlobalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalsService", function() { return GlobalsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants */ "./src/app/Shared/Constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let GlobalsService = class GlobalsService {
    constructor(storage) {
        this.storage = storage;
        this.LoggedInUser = null;
    }
    setLoggedInUser(user) {
        this.LoggedInUser = user;
        this.storage.set(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].currentUserSessionKey, this.LoggedInUser);
    }
    getLoggedInUSer() {
        this.LoggedInUser = this.storage.get(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].currentUserSessionKey);
        return this.LoggedInUser;
    }
    getOrderList() {
        this.orderedItemList = this.storage.get(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].orderListSessionKey);
        return this.orderedItemList;
    }
    pushToOrderList(product) {
        if (this.orderedItemList == null) {
            this.orderedItemList = [];
        }
        this.orderedItemList.push(product);
        this.storage.set(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].orderListSessionKey, this.orderedItemList);
    }
    concatToOrderList(productList) {
        if (this.orderedItemList == null) {
            this.orderedItemList = [];
        }
        Array.prototype.push.apply(this.orderedItemList, productList);
        this.storage.set(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].orderListSessionKey, this.orderedItemList);
    }
    clearOrderList() {
        this.storage.set(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].orderListSessionKey, null);
        this.orderedItemList = null;
    }
    setProductFilter(minPrice, maxPrice) {
        this.productFilter = { maxPrice: maxPrice, minPrice: minPrice };
        this.storage.set(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].productFilterSessionKey, this.productFilter);
    }
    getProductFilter() {
        this.productFilter = this.storage.get(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].productFilterSessionKey);
        if (this.productFilter == null || this.productFilter == undefined)
            this.productFilter = { minPrice: 0, maxPrice: 0 };
        return this.productFilter;
    }
    clearProductFilter() {
        this.storage.set(_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].productFilterSessionKey, null);
        this.productFilter = null;
    }
};
GlobalsService.ctorParameters = () => [
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_STORAGE"],] }] }
];
GlobalsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["SESSION_STORAGE"])),
    __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["WebStorageService"]])
], GlobalsService);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _Shared_globals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shared/globals.service */ "./src/app/Shared/globals.service.ts");
/* harmony import */ var _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/product-list/product-list.component */ "./src/app/products/product-list/product-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");
/* harmony import */ var _products_product_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/product.module */ "./src/app/products/product.module.ts");
/* harmony import */ var _nav_menu_menu_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav-menu/menu.module */ "./src/app/nav-menu/menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__["LogInComponent"],
            _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"]
        ],
        imports: [
            _nav_menu_menu_module__WEBPACK_IMPORTED_MODULE_13__["MenuModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_10__["StorageServiceModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__["LogInComponent"], pathMatch: 'full' },
                { path: 'products', component: _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"] },
            ]),
            _products_product_module__WEBPACK_IMPORTED_MODULE_12__["ProductModule"]
        ],
        providers: [_Shared_globals_service__WEBPACK_IMPORTED_MODULE_7__["GlobalsService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/log-in/log-in.component.css":
/*!*********************************************!*\
  !*** ./src/app/log-in/log-in.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".LogInContainer{\r\n    background-color:antiquewhite;\r\n    height: 100vh;\r\n}\r\n.LogInRow{\r\n    margin: 20px 20px 20px 20px;\r\n}\r\n.eshopLogInText{\r\n    margin-left: 10px;\r\n    font-weight: bold;\r\n}\r\n.btn-login{\r\n    width: 150px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Mb2dJbkNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6YW50aXF1ZXdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uTG9nSW5Sb3d7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7XHJcbn1cclxuLmVzaG9wTG9nSW5UZXh0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYnRuLWxvZ2lue1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/log-in/log-in.component.ts":
/*!********************************************!*\
  !*** ./src/app/log-in/log-in.component.ts ***!
  \********************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Services_log_in_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/log-in-service.service */ "./src/app/Services/log-in-service.service.ts");
/* harmony import */ var _Shared_globals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/globals.service */ "./src/app/Shared/globals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let LogInComponent = class LogInComponent {
    constructor(fb, logInService, global, route, router) {
        this.fb = fb;
        this.logInService = logInService;
        this.global = global;
        this.route = route;
        this.router = router;
        this.user = null;
        this.errorMessage = '';
        this.createForm();
    }
    get userName() { return this.angForm.get('userName'); }
    getUserByName() {
        this.logInService.getUser(this.userName.value).subscribe({
            next: userInfo => {
                this.user = userInfo;
                if (this.user != null) {
                    this.errorMessage = '';
                    this.global.setLoggedInUser(this.user);
                    this.global.orderedItemList = [];
                    this.router.navigate(['/products']);
                }
                else {
                    this.errorMessage = 'This user not found';
                }
            },
            error: err => this.errorMessage = err,
        });
    }
    createForm() {
        this.angForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\w\s]+$/)]]
        });
    }
    ngOnInit() {
        this.user = this.global.getLoggedInUSer();
        if (this.user != null) {
            this.router.navigate(['/products']);
        }
    }
};
LogInComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _Services_log_in_service_service__WEBPACK_IMPORTED_MODULE_2__["LogInService"] },
    { type: _Shared_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LogInComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'logIn',
        template: __webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/log-in/log-in.component.html"),
        styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/log-in/log-in.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _Services_log_in_service_service__WEBPACK_IMPORTED_MODULE_2__["LogInService"], _Shared_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LogInComponent);



/***/ }),

/***/ "./src/app/nav-menu/menu.module.ts":
/*!*****************************************!*\
  !*** ./src/app/nav-menu/menu.module.ts ***!
  \*****************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _nav_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let MenuModule = class MenuModule {
};
MenuModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _nav_menu_component__WEBPACK_IMPORTED_MODULE_2__["NavMenuComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ],
        exports: [
            _nav_menu_component__WEBPACK_IMPORTED_MODULE_2__["NavMenuComponent"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]
    })
], MenuModule);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n.notification .badge {\r\n  position: initial;\r\n  top: -10px;\r\n  right: -10px;\r\n  padding: 5px 10px;\r\n  border-radius: 50%;\r\n  background: red;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIC5iYWRnZSB7XHJcbiAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgdG9wOiAtMTBweDtcclxuICByaWdodDogLTEwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Shared_globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/globals.service */ "./src/app/Shared/globals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let NavMenuComponent = class NavMenuComponent {
    constructor(global, router) {
        this.global = global;
        this.router = router;
        this.ordersCount = 0;
        this.isExpanded = false;
    }
    logOut() {
        this.global.setLoggedInUser(null);
        this.global.clearOrderList();
        this.global.clearProductFilter();
        this.router.navigate(['']);
    }
    ngOnChanges() {
        if (this.orderlist != null && this.orderlist != undefined) {
            this.ordersCount = this.orderlist.length;
        }
    }
    ngOnInit() {
        this.currentUser = this.global.getLoggedInUSer();
        this.orderlist = this.global.getOrderList();
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent.ctorParameters = () => [
    { type: _Shared_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], NavMenuComponent.prototype, "orderlist", void 0);
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-menu/nav-menu.component.html"),
        styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")]
    }),
    __metadata("design:paramtypes", [_Shared_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavMenuComponent);



/***/ }),

/***/ "./src/app/products/cart/cart.component.css":
/*!**************************************************!*\
  !*** ./src/app/products/cart/cart.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-submit{\r\n    margin-right: 20px !important;\r\n    width: 214px;\r\n    height: 45px;\r\n}\r\n.lb-total{\r\n    margin-left: 30px;\r\n}\r\n#toast-container > div {\r\n    opacity:1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXN1Ym1pdHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDIxNHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcbi5sYi10b3RhbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbiN0b2FzdC1jb250YWluZXIgPiBkaXYge1xyXG4gICAgb3BhY2l0eToxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/products/cart/cart.component.ts":
/*!*************************************************!*\
  !*** ./src/app/products/cart/cart.component.ts ***!
  \*************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Shared_globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Shared/globals.service */ "./src/app/Shared/globals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/product.service */ "./src/app/Services/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let CartComponent = class CartComponent {
    constructor(global, router, productService, toastr) {
        this.global = global;
        this.router = router;
        this.productService = productService;
        this.toastr = toastr;
        this.totalAmount = 0;
    }
    ngOnInit() {
        this.user = this.global.getLoggedInUSer();
        if (this.user == null) {
            this.router.navigate(['']);
        }
        this.orderProduct = this.global.getOrderList();
        if (this.orderProduct && this.orderProduct.length) {
            var groupedArray = lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](this.orderProduct, "id");
            this.orderProduct.forEach(element => {
                element.count = groupedArray[element.id].length;
            });
            this.uniqOrderList = this.orderProduct.filter(function (elem, index, self) {
                return index === self.findIndex((t) => (t.id === elem.id));
            });
            this.uniqOrderList.forEach(element => {
                this.totalAmount += element.price * element.count;
            });
        }
        this.options = this.toastr.toastrConfig;
    }
    deleteItemFromCart(itemId) {
        this.totalAmount = 0;
        this.uniqOrderList = lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.uniqOrderList, function (el) {
            return el.id !== itemId;
        });
        this.global.clearOrderList();
        this.global.concatToOrderList(this.uniqOrderList);
        this.uniqOrderList.forEach(element => {
            this.totalAmount += element.price * element.count;
        });
    }
    submitUserProducts() {
        let productIds = this.uniqOrderList.map(({ id }) => id);
        this.productService.submitUserProducts(this.user.id, productIds).subscribe(() => {
            this.openToast();
            this.global.clearOrderList();
            this.router.navigate(['/products']);
        });
    }
    openToast() {
        this.options.positionClass = 'toast-top-right';
        const opt = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.options);
        this.toastr.show("Your order has been submitted successfully", "success", this.options, this.options.iconClasses["success"]);
    }
};
CartComponent.ctorParameters = () => [
    { type: src_app_Shared_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
CartComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/products/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [src_app_Shared_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], CartComponent);



/***/ }),

/***/ "./src/app/products/filter/filter.component.css":
/*!******************************************************!*\
  !*** ./src/app/products/filter/filter.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filterRow{\r\n    margin: 100px 20px 20px 20px;\r\n}\r\n.btn-filter{\r\n  width: 232px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyUm93e1xyXG4gICAgbWFyZ2luOiAxMDBweCAyMHB4IDIwcHggMjBweDtcclxufVxyXG4uYnRuLWZpbHRlcntcclxuICB3aWR0aDogMjMycHg7IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/products/filter/filter.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/filter/filter.component.ts ***!
  \*****************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _Shared_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/globals.service */ "./src/app/Shared/globals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let FilterComponent = class FilterComponent {
    constructor(toastr, global, router) {
        this.toastr = toastr;
        this.global = global;
        this.router = router;
        this.productFilter = { maxPrice: 100, minPrice: 100 };
    }
    ngOnInit() {
        var currentFilter = this.global.getProductFilter();
        if (currentFilter.minPrice > 0 && currentFilter.maxPrice > 0) {
            this.productFilter = { maxPrice: currentFilter.maxPrice, minPrice: currentFilter.minPrice };
        }
    }
    changeMin() {
        return +this.productFilter.minPrice;
    }
    changeMax() {
        return +this.productFilter.maxPrice;
    }
    applyFilter() {
        if (this.productFilter.minPrice > this.productFilter.maxPrice) {
            this.toastr.warning('Can not make min price greater than max', '');
        }
        else {
            this.global.setProductFilter(this.productFilter.minPrice, this.productFilter.maxPrice);
            this.router.navigate(['/products']);
        }
    }
    clearFilter() {
        this.global.clearProductFilter();
        this.router.navigate(['/products']);
    }
};
FilterComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
    { type: _Shared_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FilterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-filter',
        template: __webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/filter/filter.component.html"),
        styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/products/filter/filter.component.css")]
    }),
    __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _Shared_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], FilterComponent);



/***/ }),

/***/ "./src/app/products/product-details/product-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/products/product-details/product-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/products/product-details/product-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-details/product-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/product.service */ "./src/app/Services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Shared_globals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/globals.service */ "./src/app/Shared/globals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(productService, route, global, router) {
        this.productService = productService;
        this.route = route;
        this.global = global;
        this.router = router;
        this.itemCount = 1;
        this.disableMinusButton = true;
        this.oredersDetailsList = [];
    }
    ngOnInit() {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getProduct(id);
            this.orderProduct = this.global.getOrderList();
        }
    }
    getProduct(id) {
        this.productService.getProductById(id).subscribe({
            next: producInfo => {
                this.productDetails = producInfo;
                this.oredersDetailsList.push(this.productDetails);
            },
            error: err => this.errorMessage = err
        });
    }
    incrementCounter() {
        this.itemCount++;
        this.disableMinusButton = false;
        this.oredersDetailsList.push(this.productDetails);
    }
    decrementCounter() {
        if (this.itemCount > 1) {
            this.itemCount--;
            this.oredersDetailsList.pop();
        }
        if (this.itemCount <= 1)
            this.disableMinusButton = true;
    }
    addToCart() {
        this.global.concatToOrderList(this.oredersDetailsList);
        this.orderProduct = this.global.getOrderList();
        this.router.navigate(['/products']);
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_Shared_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-product-details',
        template: __webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/product-details/product-details.component.html"),
        styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/products/product-details/product-details.component.css")]
    }),
    __metadata("design:paramtypes", [src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_Shared_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/products/product-list/product-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/product.service */ "./src/app/Services/product.service.ts");
/* harmony import */ var _Shared_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/globals.service */ "./src/app/Shared/globals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ProductListComponent = class ProductListComponent {
    constructor(productService, global, router) {
        this.productService = productService;
        this.global = global;
        this.router = router;
        this.products = [];
        this.errorMessage = '';
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        this.user = this.global.getLoggedInUSer();
        this.productFilter = this.global.getProductFilter();
        if (this.user == null) {
            this.router.navigate(['']);
        }
        this.subscription = this.productService.getProducts(this.productFilter).subscribe({
            next: products => {
                this.products = products;
            },
            error: err => this.errorMessage = err
        });
        this.orderProduct = this.global.getOrderList();
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: _Shared_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProductListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/product-list/product-list.component.html"),
        styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _Shared_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProductListComponent);



/***/ }),

/***/ "./src/app/products/product.module.ts":
/*!********************************************!*\
  !*** ./src/app/products/product.module.ts ***!
  \********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/products/product-list/product-list.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/products/product-details/product-details.component.ts");
/* harmony import */ var _nav_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nav-menu/menu.module */ "./src/app/nav-menu/menu.module.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/products/cart/cart.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/products/filter/filter.component.ts");
/* harmony import */ var ngx_bootstrap_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap-slider */ "./node_modules/ngx-bootstrap-slider/fesm2015/ngx-bootstrap-slider.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _nav_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_bootstrap_slider__WEBPACK_IMPORTED_MODULE_10__["NgxBootstrapSliderModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                timeOut: 5000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: 'products', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"] },
                {
                    path: 'products/:id',
                    component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"]
                },
                { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] },
                { path: 'filter', component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"] }
            ])
        ],
        declarations: [_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"]]
    })
], ProductModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kamal.abdullah\source\repos\Integrant.EShop\Integrant.EShop.Frontend\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map