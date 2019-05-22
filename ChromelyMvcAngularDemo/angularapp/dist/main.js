(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app-routes.ts":
/*!*******************************!*\
  !*** ./src/app/app-routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutes, AppRoutedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutedComponents", function() { return AppRoutedComponents; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");


var AppRoutes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: "demo", component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_1__["DemoComponent"] },
    { path: "**", redirectTo: "", pathMatch: 'full' }
];
var AppRoutedComponents = [
    _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    _demo_demo_component__WEBPACK_IMPORTED_MODULE_1__["DemoComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container centerBlock'>\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routes */ "./src/app/app-routes.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_registered_js_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/registered-js-object.service */ "./src/app/services/registered-js-object.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["AppRoutedComponents"],
                _demo_demo_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"])
            ],
            providers: [
                _services_registered_js_object_service__WEBPACK_IMPORTED_MODULE_8__["RegisteredJsObjectService"],
                _services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/demo/demo.component.css":
/*!*****************************************!*\
  !*** ./src/app/demo/demo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGVtby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/demo.component.html":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"col-12\">\n    <div class=\"centerBlock\">\n      <span class=\"text-primary text-center\"><h2>demo panel</h2></span>\n      <p class=\"text-muted text-center\">demo of chromely angular 2+ integration</p>\n    </div>\n  </div>\n\n  <div class=\"col-12\">\n    <div>\n      <button type=\"button\" class=\"btn btn-link\" (click)=\"goBack()\">Back</button>\n    </div>\n    <div class=\"centerBlock\">\n      <button type=\"button\" class=\"btn btn-light\" data-toggle=\"modal\" data-target=\"#boundJsObjectModal\" style='margin: 5px;'>RegisterAsyncJsObject Demo</button>\n      <button type=\"button\" class=\"btn btn-light\" data-toggle=\"modal\" data-target=\"#httpModal\" style='margin: 5px;'>Http Demo</button>\n      <a href=\"https://github.com/mattkol/Chromely\" class=\"btn btn-default\" role=\"button\" style='margin: 5px;'>more info</a>\n    </div>\n  </div>\n\n  <br>\n\n  <div id=\"infoPanel\" class=\"col-12 centerBlock\">\n\n    <div>\n      <div class=\"card-header card bg-primary text-white\">Chromely Main objective</div>\n      <div class=\"card-body\"> {{ info.Objective }} </div>\n    </div>\n    <br>\n\n    <div>\n      <div class=\"card-header card bg-primary text-white\">Platforms</div>\n      <div class=\"card-body\"> {{ info.Platform }}</div>\n    </div>\n    <br>\n\n    <div>\n      <div class=\"card-header card bg-primary text-white\">Current CefSharp/Chromium Version</div>\n      <div class=\"card-body\">{{ info.Version }}</div>\n    </div>\n    <br>\n\n  </div>\n\n  <!-- The Modal RegisterAsyncJsObject Modal -->\n  <div class=\"modal fade\" id=\"boundJsObjectModal\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">.NET/JavaScript Integration Demo (RegisterAsyncJsObject)</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <!-- Nav pills -->\n          <ul class=\"nav nav-pills\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#sectionA\">Get 1</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"pill\" href=\"#sectionB\">Get 2</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"pill\" href=\"#sectionC\">Post</a>\n            </li>\n          </ul>\n\n          <!-- Tab panes -->\n          <div class=\"tab-content\">\n            <div id=\"sectionA\" class=\"container tab-pane active\">\n              <br>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  Route Path:&ensp;/demo/movies &ensp; (Restful Service in Local Assembly)&ensp;<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"getMovies()\">Run</button>\n                </div>\n                <br><br>\n                <div class=\"col-12\">\n                  <div class='table-responsive'>\n                    <table class='table'>\n                      <thead>\n                        <tr>\n                          <th>Id</th>\n                          <th>Title</th>\n                          <th>Year</th>\n                          <th>Votes</th>\n                          <th>Rating</th>\n                          <th>Date</th>\n                          <th>RestfulAssembly</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor='let movie of movies'>\n                          <td>{{ movie.Id }}</td>\n                          <td>{{ movie.Title }}</td>\n                          <td>{{ movie.Year }}</td>\n                          <td>{{ movie.Votes }}</td>\n                          <td>{{ movie.Rating }}</td>\n                          <td>{{ movie.Date }}</td>\n                          <td>{{ movie.RestfulAssembly }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"sectionB\" class=\"container tab-pane fade\">\n              <br>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  Route Path:&ensp;/external/movies &ensp;(Restful Service in External Assembly)&ensp;<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"getExternalMovies()\">Run</button>\n                </div>\n                <br><br>\n                <div class=\"col-12\">\n                  <div class='table-responsive'>\n                    <table class='table'>\n                      <thead>\n                        <tr>\n                          <th>Id</th>\n                          <th>Title</th>\n                          <th>Year</th>\n                          <th>Votes</th>\n                          <th>Rating</th>\n                          <th>Date</th>\n                          <th>RestfulAssembly</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor='let movie of externalMovies'>\n                          <td>{{ movie.Id }}</td>\n                          <td>{{ movie.Title }}</td>\n                          <td>{{ movie.Year }}</td>\n                          <td>{{ movie.Votes }}</td>\n                          <td>{{ movie.Rating }}</td>\n                          <td>{{ movie.Date }}</td>\n                          <td>{{ movie.RestfulAssembly }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"sectionC\" class=\"container tab-pane fade\">\n              <br>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  Route Path:&ensp;/demo/savemovies&ensp;(Restful Service in Local Assembly)&ensp;<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"saveMovies()\">Run</button>\n                </div>\n                <br><br>\n                <div class=\"col-12\">\n                  <div>{{ postResult }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <!-- The Modal Http Requests -->\n  <div class=\"modal fade\" id=\"httpModal\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Http Requests</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <!-- Nav pills -->\n          <ul class=\"nav nav-pills\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#sectionI\">Get 1</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"pill\" href=\"#sectionJ\">Get 2</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"pill\" href=\"#sectionK\">Post</a>\n            </li>\n          </ul>\n\n          <!-- Tab panes -->\n          <div class=\"tab-content\">\n            <div id=\"sectionI\" class=\"container tab-pane active\">\n              <br>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  Route Path:&ensp;/democontroller/movies &ensp; (Restful Service in Local Assembly&ensp;<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"httpRequest('getlocal', 'http://chromely.com/democontroller/movies')\">Run</button>\n                </div>\n                <br><br>\n                <div class=\"col-12\">\n                  <div class='table-responsive'>\n                    <table class='table'>\n                      <thead>\n                        <tr>\n                          <th>Id</th>\n                          <th>Title</th>\n                          <th>Year</th>\n                          <th>Votes</th>\n                          <th>Rating</th>\n                          <th>Date</th>\n                          <th>RestfulAssembly</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor='let movie of httpMovies'>\n                          <td>{{ movie.Id }}</td>\n                          <td>{{ movie.Title }}</td>\n                          <td>{{ movie.Year }}</td>\n                          <td>{{ movie.Votes }}</td>\n                          <td>{{ movie.Rating }}</td>\n                          <td>{{ movie.Date }}</td>\n                          <td>{{ movie.RestfulAssembly }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"sectionJ\" class=\"container tab-pane fade\">\n              <br>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  Route Path:&ensp;/externalcontroller/movies &ensp; (Restful Service in External Assembly)&ensp;<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"httpRequest('getexternal', 'http://chromely.com/externalcontroller/movies')\">Run</button>\n                </div>\n                <br><br>\n                <div class=\"col-12\">\n                  <div class='table-responsive'>\n                    <table class='table'>\n                      <thead>\n                        <tr>\n                          <th>Id</th>\n                          <th>Title</th>\n                          <th>Year</th>\n                          <th>Votes</th>\n                          <th>Rating</th>\n                          <th>Date</th>\n                          <th>RestfulAssembly</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor='let movie of httpExternalMovies'>\n                          <td>{{ movie.Id }}</td>\n                          <td>{{ movie.Title }}</td>\n                          <td>{{ movie.Year }}</td>\n                          <td>{{ movie.Votes }}</td>\n                          <td>{{ movie.Rating }}</td>\n                          <td>{{ movie.Date }}</td>\n                          <td>{{ movie.RestfulAssembly }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"sectionK\" class=\"container tab-pane fade\">\n              <br>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  Route Path:&ensp;/democontroller/savemovies &ensp;(Restful Service in Local Assembly)&ensp;<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"httpRequest('post', 'http://chromely.com/democontroller/savemovies')\">Run</button>\n                </div>\n                <br><br>\n                <div class=\"col-12\">\n                  <div>{{ postHttpResult }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_registered_js_object_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/registered-js-object.service */ "./src/app/services/registered-js-object.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DemoComponent = /** @class */ (function () {
    function DemoComponent(_registeredJsObjectService, _httpService, _zone, _location) {
        this._registeredJsObjectService = _registeredJsObjectService;
        this._httpService = _httpService;
        this._zone = _zone;
        this._location = _location;
        this.info = {};
        // Initialize info
        this.info.Objective = 'Chromely Main Objectives';
        this.info.Platform = 'Platforms';
        this.info.Version = 'Version';
    }
    /*
    * Navigate back to home page
    */
    DemoComponent.prototype.goBack = function () {
        this._location.back();
    };
    DemoComponent.prototype.getInfo = function () {
        var _this = this;
        this._registeredJsObjectService.get('/info', null).subscribe(function (data) {
            _this._zone.run(function () {
                _this.info = data;
            });
        });
    };
    DemoComponent.prototype.getMovies = function () {
        var _this = this;
        this._registeredJsObjectService.get('/demo/getmovies', null).subscribe(function (data) {
            _this._zone.run(function () {
                _this.movies = data;
            });
        });
    };
    DemoComponent.prototype.saveMovies = function () {
        var _this = this;
        this._registeredJsObjectService.post('/demo/savemovies', null, this.postData).subscribe(function (data) {
            _this._zone.run(function () {
                _this.postResult = data;
            });
        });
    };
    /*
       * Http Requests
       */
    DemoComponent.prototype.httpRequest = function (type, url) {
        var _this = this;
        switch (type) {
            case "getlocal":
                this._httpService.getMovies(url).subscribe(function (data) {
                    _this.httpMovies = data;
                });
                break;
            case "getexternal":
                this._httpService.getMovies(url).subscribe(function (data) {
                    _this.httpExternalMovies = data;
                });
                break;
            case "post":
                this._httpService.postMovies(url, this.postData)
                    .subscribe(function (result) {
                    _this.httpPostResult = result['Data'];
                });
                break;
            default:
                console.log('No valid http request found');
        }
    };
    DemoComponent.prototype.ngOnInit = function () {
        this.postData = [
            {
                "Id": 1,
                "Title": "The Shawshank Redemption",
                "Year": 1994,
                "Votes": 678790,
                "Rating": 9.2
            },
            {
                "Id": 2,
                "Title": "The Godfather",
                "Year": 1972,
                "votes": 511495,
                "Rating": 9.2
            },
            {
                "Id": 3,
                "Title": "The Godfather: Part II",
                "Year": 1974,
                "Votes": 319352,
                "Rating": 9.0
            },
            {
                "Id": 4,
                "Title": "The Good, the Bad and the Ugly",
                "Year": 1966,
                "Votes": 213030,
                "Rating": 8.9
            },
            {
                "Id": 5,
                "Title": "My Fair Lady",
                "Year": 1964,
                "Votes": 533848,
                "Rating": 8.9
            },
            {
                "Id": 6,
                "Title": "12 Angry Men",
                "Year": 1957,
                "Votes": 164558,
                "Rating": 8.9
            }
        ];
        //this._httpService.getData().subscribe(data => {
        //    this.postData = data;
        //});
        //this._httpService.getInfo('http://chromely.com/info').subscribe(data => {
        //    this.info.objective = data['divObjective'];
        //    this.info.platform = data['divPlatform'];
        //    this.info.version = data['divVersion'];
        //});
        this.getInfo();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DemoComponent.prototype, "info", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Array)
    ], DemoComponent.prototype, "movies", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Array)
    ], DemoComponent.prototype, "extenalMovies", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", String)
    ], DemoComponent.prototype, "postResult", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Array)
    ], DemoComponent.prototype, "httpMovies", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Array)
    ], DemoComponent.prototype, "httpExternalMovies", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", String)
    ], DemoComponent.prototype, "httpPostResult", void 0);
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.css */ "./src/app/demo/demo.component.css")]
        }),
        __metadata("design:paramtypes", [_services_registered_js_object_service__WEBPACK_IMPORTED_MODULE_3__["RegisteredJsObjectService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"col-12\">\n    <div class=\"centerBlock\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <img src=\"assets/img/chromely.png\" class=\"img-rounded\" alt=\"Chromely Logo\" width=\"200\" height=\"200\" style='margin-top: 20px;' />\n        </div>\n        <div class=\"col\">\n          <img width=\"240\" height=\"240\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\" />\n        </div>\n      </div>\n\n      <span class=\"text-primary text-center\"><h2>chromely + angular</h2></span>\n      <p class=\"text-muted text-center\">Build .NET/.NET CORE HTML5 Desktop Apps</p>\n    </div>\n  </div>\n\n  <div class=\"col-12\" style='padding:20px;'>\n    <div id=\"runButton\" class=\"centerBlock\">\n      <form class=\"form-inline\">\n        <div class=\"form-group\">\n          <label for=\"info\">RegisterAsyncJsObject/Http Demos:</label>\n        </div>\n        <button id=\"buttonDemoRun\" type=\"button\" class=\"btn btn-primary\" (click)=\"showDemo()\" style='margin: 5px;'>Run</button>\n      </form>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, actRouter) {
        this.router = router;
        this.actRouter = actRouter;
    }
    HomeComponent.prototype.showDemo = function () {
        this.router.navigateByUrl("/demo");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this._dataUrl = './data/movies.json';
    }
    HttpService.prototype.getData = function () {
        return this._http.get(this._dataUrl)
            .catch(this.handleError);
    };
    HttpService.prototype.getInfo = function (url) {
        return this._http.get(url)
            .catch(this.handleError);
    };
    /*
     * Http Get Request
     */
    HttpService.prototype.getMovies = function (url) {
        return this._http.get(url)
            .catch(this.handleError);
    };
    HttpService.prototype.postMovies = function (url, postData) {
        return this._http.post(url, postData)
            .catch(this.handleError);
    };
    HttpService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Chromely returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/registered-js-object.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/registered-js-object.service.ts ***!
  \**********************************************************/
/*! exports provided: RegisteredJsObjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredJsObjectService", function() { return RegisteredJsObjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RegisteredJsObjectService = /** @class */ (function () {
    function RegisteredJsObjectService() {
    }
    RegisteredJsObjectService.prototype.get = function (url, parameters) {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        boundControllerAsync.getJson(url, parameters, function (response) {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
            if (response.ReadyState === 4 && response.Status === 200) {
                subject.next(response.Data);
            }
            else {
                subject.error(response);
            }
        });
        return subject;
    };
    RegisteredJsObjectService.prototype.post = function (url, parameters, postData) {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        boundControllerAsync.postJson(url, parameters, postData, function (response) {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
            if (response.ReadyState === 4 && response.Status === 200) {
                subject.next(response.Data);
            }
            else {
                subject.error(response);
            }
        });
        return subject;
    };
    RegisteredJsObjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], RegisteredJsObjectService);
    return RegisteredJsObjectService;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GitProjects\Chromely.Mvc.Demos\ChromelyMvcAngularDemo\angularapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map