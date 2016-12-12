(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["ng2-menu"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
	else
		root["ng2-menu"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ng2_menu_directive_1 = __webpack_require__(1);
	exports.Ng2MenuDirective = ng2_menu_directive_1.Ng2MenuDirective;
	var ng2_menu_module_1 = __webpack_require__(3);
	exports.Ng2MenuModule = ng2_menu_module_1.Ng2MenuModule;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var Ng2MenuDirective = (function () {
	    function Ng2MenuDirective(viewContainerRef) {
	        this.viewContainerRef = viewContainerRef;
	        this.el = this.viewContainerRef.element.nativeElement;
	        this.el.parentElement.style.position = 'relative';
	        this.el.parentElement.className += ' has-ng2-menu';
	    }
	    Ng2MenuDirective.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        this.el.parentElement.addEventListener('mouseover', function (event) {
	            _this.el.parentElement.className += " active";
	            _this.el.style.position = "absolute";
	            if (_this.el.parentElement.offsetWidth) {
	                _this.setPosition();
	            }
	            else {
	                setTimeout(function () { return _this.setPosition(); });
	            }
	        });
	        this.el.parentElement.addEventListener('mouseout', function (event) {
	            _this.el.parentElement.className = _this.el.parentElement.className.replace(/\s?active/, '');
	        });
	    };
	    Ng2MenuDirective.prototype.setPosition = function () {
	        if (this.position === "bottom") {
	            this.el.style.left = "0";
	            this.el.style.top = this.el.parentElement.offsetHeight - 1 + 'px';
	        }
	        else if (this.position === "top") {
	            this.el.style.left = "0";
	            this.el.style.bottom = this.el.parentElement.offsetHeight - 1 + 'px';
	        }
	        else if (this.position === "right") {
	            this.el.style.left = this.el.parentElement.offsetWidth - 1 + 'px';
	            this.el.style.top = "0";
	        }
	        else if (this.position === "left") {
	            this.el.style.right = this.el.parentElement.offsetWidth - 1 + 'px';
	            this.el.style.top = "0";
	        }
	    };
	    return Ng2MenuDirective;
	}());
	__decorate([
	    core_1.Input('ng2-menu'),
	    __metadata("design:type", String)
	], Ng2MenuDirective.prototype, "position", void 0);
	Ng2MenuDirective = __decorate([
	    core_1.Directive({
	        selector: '[ng2-menu]'
	    }),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef])
	], Ng2MenuDirective);
	exports.Ng2MenuDirective = Ng2MenuDirective;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(5);
	var ng2_menu_directive_1 = __webpack_require__(1);
	var Ng2MenuModule = (function () {
	    function Ng2MenuModule() {
	    }
	    return Ng2MenuModule;
	}());
	Ng2MenuModule = __decorate([
	    core_1.NgModule({
	        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
	        declarations: [ng2_menu_directive_1.Ng2MenuDirective],
	        exports: [ng2_menu_directive_1.Ng2MenuDirective]
	    }),
	    __metadata("design:paramtypes", [])
	], Ng2MenuModule);
	exports.Ng2MenuModule = Ng2MenuModule;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-menu.umd.js.map