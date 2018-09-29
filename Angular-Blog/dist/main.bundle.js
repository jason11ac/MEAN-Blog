webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__["a" /* EditComponent */] },
    { path: 'preview/:id', component: __WEBPACK_IMPORTED_MODULE_3__preview_preview_component__["a" /* PreviewComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-3\"><app-list></app-list></div>\n    <div class=\"col-md-3\"><router-outlet></router-outlet></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Blog Website';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__preview_preview_component__["a" /* PreviewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__blog_service__["a" /* BlogService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* unused harmony export Post */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__("../../../../jsonwebtoken/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var BlogService = /** @class */ (function () {
    function BlogService(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.fetchPosts();
    }
    BlogService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            this.router.navigateByUrl('/');
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            // this.router.navigateByUrl('/');
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
            this.router.navigateByUrl('/');
            // return an ErrorObservable with a user-facing error message
            return new __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]('Something bad happened; please try again later.');
        }
    };
    BlogService.prototype.fetchPosts = function () {
        var _this = this;
        var user = this.getUsername();
        var fetch_posts_url = 'http://localhost:3000/api/' + user;
        this.http.get(fetch_posts_url).subscribe(function (data) {
            _this.posts_db = data;
            for (var i = 0; i < _this.posts_db.length; i++) {
                _this.posts.push(_this.posts_db[i]);
            }
            _this.sortArray();
            _this.maxPostId = 0;
            for (var k = 0; k < _this.posts.length; k++) {
                if (_this.posts[k].postid > _this.maxPostId) {
                    _this.maxPostId = _this.posts[k].postid;
                }
            }
            _this.nextPostId = _this.maxPostId + 1;
        }, function (error) {
            if (error.status === 401) {
                console.log('THIS IS A BAD REQUEST');
                alert('Please login to interact with your posts');
                _this.router.navigateByUrl('/');
            }
        });
    };
    BlogService.prototype.sortArray = function () {
        function compare(a, b) {
            var comparison = 0;
            if (a.postid > b.postid) {
                comparison = 1;
            }
            else if (a.postid < b.postid) {
                comparison = -1;
            }
            return comparison;
        }
        this.posts.sort(compare);
    };
    BlogService.prototype.getNextPostId = function () {
        return this.nextPostId;
    };
    BlogService.prototype.getPosts = function () {
        return this.posts;
    };
    BlogService.prototype.getPost = function (id) {
        for (var k = 0; k < this.posts.length; k++) {
            if (this.posts[k].postid === id) {
                return this.posts[k];
            }
        }
    };
    BlogService.prototype.getUsername = function () {
        var token;
        var name = 'jwt=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                token = c.substring(name.length, c.length);
            }
        }
        if (token == null) {
            return null;
        }
        try {
            if (!__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__["verify"](token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c')) {
                return null;
            }
        }
        catch (err) {
            return null;
        }
        var decoded = __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__["decode"](token, { complete: true });
        return decoded.payload.usr;
    };
    BlogService.prototype.newPost = function () {
        this.maxPostId = this.maxPostId + 1;
        this.nextPostId = this.maxPostId;
        var newPost = new Post();
        newPost.postid = this.maxPostId;
        var username = this.getUsername();
        if (username == null) {
            return null;
        }
        newPost.username = username;
        newPost.created = (new Date).getTime();
        newPost.modified = (new Date).getTime();
        newPost.title = '';
        newPost.body = '';
        this.posts.push(newPost);
        this.addPost(newPost, username).subscribe(function (data) { console.log('VALUE RECEIVED: ' + data); }, function (error) { console.log(error); });
        return newPost;
    };
    BlogService.prototype.addPost = function (post, user) {
        var create_post_url = 'http://localhost:3000/api/' + user + '/' + post.postid;
        return this.http.post(create_post_url, post, httpOptions)
            .catch(this.handleError);
    };
    BlogService.prototype.updatePost = function (post) {
        var updatedPost = new Post();
        var index = this.posts.indexOf(post);
        updatedPost.postid = post.postid;
        updatedPost.created = post.created;
        updatedPost.modified = (new Date).getTime();
        updatedPost.title = post.title;
        updatedPost.body = post.body;
        this.posts[index] = updatedPost;
        this.update_post(updatedPost).subscribe(function (data) { console.log('VALUE RECEIVED: ' + data); }, function (error) { console.log('Post updated successfully'); });
    };
    BlogService.prototype.update_post = function (post) {
        var user = this.getUsername();
        var update_post_url = 'http://localhost:3000/api/' + user + '/' + post.postid;
        return this.http.put(update_post_url, post, httpOptions)
            .catch(this.handleError);
    };
    BlogService.prototype.deletePost = function (id) {
        var user = this.getUsername();
        var delete_post_url = 'http://localhost:3000/api/' + user + '/' + id;
        var deletePost = this.getPost(id);
        var index = this.posts.indexOf(deletePost);
        if (index >= 0) {
            this.posts.splice(index, 1);
        }
        this.http.delete(delete_post_url, httpOptions)
            .subscribe(function (data) { console.log(data); });
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], BlogService);
    return BlogService;
}());

var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-16\">\n    <h1>{{title}}</h1>\n    <form (ngSumbit)=\"onSubmit()\" #edit=\"ngForm\">\n      <div class=\"col-sm-16\">\n        <label for=\"name\">Title</label>\n        <input type=\"text\" placeholder=\"Title\" class=\"form-control\" id=\"title\" \n        [(ngModel)]=\"post.title\" name=\"title\"\n        #spy>\n        <br>\n        <script>\n          var x = document.cookie;\n          \n        </script>\n      </div>\n  \n      <div class=\"col-sm-16\">\n        <label for=\"body\">Body</label>\n        <textarea type=\"text\" class=\"form-control\" id=\"body\" rows=\"5\" \n        [(ngModel)]=\"post.body\" name=\"body\"></textarea>\n      </div>\n      Last Modified: {{post.modified | date:'MM/dd/yyyy h:mm:ss a'}}\n      <br>\n      <br>\n    </form>\n  \n    <a routerLink=\"/\"><button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(); edit.reset()\">Delete</button></a>\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"updatePost(); edit.form.markAsPristine()\" [disabled]=\"!edit.form.dirty\">Save</button>\n    <a routerLink=\"/preview/{{post.postid}}\"><button type=\"button\" class=\"btn btn-default\">Preview</button></a>\n  \n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(activatedRoute, blogService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.router = router;
        this.activatedRoute.params.subscribe(function () { return _this.getPost(); });
    }
    EditComponent.prototype.ngOnInit = function () { };
    EditComponent.prototype.getPost = function () {
        var postid = +this.activatedRoute.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(postid);
    };
    EditComponent.prototype.newPost = function () {
        this.post = this.blogService.newPost();
        if (this.post == null) {
            this.router.navigateByUrl('/');
        }
    };
    EditComponent.prototype.updatePost = function () {
        this.blogService.updatePost(this.post);
    };
    EditComponent.prototype.delete = function () {
        var postid = +this.activatedRoute.snapshot.paramMap.get('id');
        this.blogService.deletePost(postid);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "updatePost", null);
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".posts {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 25em;\n  }\n  .posts li {\n    position: relative;\n    cursor: pointer;\n    background-color: rgb(166, 222, 255);\n    margin: .8em;\n    padding: .3em 0;\n    height: 1.6em;\n    text-align: right;\n    border-radius: 4px;\n  }\n  .posts li a {\n    display: block;\n    width: 800px;\n  }\n  .posts .text {\n    position: absolute;\n    float: left;\n    margin-left: 160px;\n    line-height: 1em;\n    text-align: left;\n    width: 165px;\n  }\n  .posts li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .posts a {\n    color: rgb(39, 39, 39);\n    text-decoration: none;\n    position: relative;\n    display: block;\n    width: 250px;\n  }\n  .posts a:hover {\n    color:#607D8B;\n  }\n  .posts .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: .3em;\n    position: absolute;\n    left: 0px;\n    top: -4px;\n    height: 1.7em;\n    min-width: 16px;\n    text-align: right;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n  .button {\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n    font-family: Arial;\n  }\n  button:hover {\n    background-color: #cfd8dc;\n  }\n  \n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n\n  <a routerLink=\"/edit/{{nextPostId}}\"><button type=\"button\" class=\"btn btn-default\" (click)=\"newPost();\">New Post</button></a>\n<br>\n<br>\n<ul class=\"posts\">\n  <li *ngFor=\"let post of posts\" [class.selected]=\"post === selectedPost\" (click)=\"onSelect(post)\" routerLink=\"/edit/{{post.postid}}\">\n          <a routerLink=\"/edit/{{post.postid}}\"><span class=\"badge\">{{post.created | date:'MM/dd/yyyy h:mm:ss a'}}</span><div class=\"text\">{{post.title}}</div></a>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(blogService) {
        this.blogService = blogService;
        this.posts = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.posts = this.blogService.getPosts();
        this.nextPostId = this.blogService.getNextPostId();
    };
    ListComponent.prototype.onSelect = function (post) {
        this.selectedPost = post;
    };
    ListComponent.prototype.newPost = function () {
        this.selectedPost = this.blogService.newPost();
        this.nextPostId = this.blogService.getNextPostId(); // Added
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/preview/preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Edit</button>\n<br>\n<br>\n<div [innerHTML]=\"this.title\"></div>\n<br>\n<div [innerHTML]=\"this.body\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_commonmark__ = __webpack_require__("../../../../commonmark/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_commonmark___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_commonmark__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(activatedRoute, blogService, location) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.location = location;
        this.activatedRoute.params.subscribe(function () { return _this.getPost(); });
    }
    PreviewComponent.prototype.ngOnInit = function () { };
    PreviewComponent.prototype.getPost = function () {
        var postid = +this.activatedRoute.snapshot.paramMap.get('id');
        this.post = this.blogService.getPost(postid);
        var reader = new __WEBPACK_IMPORTED_MODULE_3_commonmark__["Parser"]();
        var writer = new __WEBPACK_IMPORTED_MODULE_3_commonmark__["HtmlRenderer"]();
        var t = reader.parse(this.post.title);
        this.title = writer.render(t);
        var b = reader.parse(this.post.body);
        this.body = writer.render(b);
    };
    PreviewComponent.prototype.goBack = function () {
        this.location.back();
    };
    PreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-preview',
            template: __webpack_require__("../../../../../src/app/preview/preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map