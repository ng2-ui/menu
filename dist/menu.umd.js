(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["menu"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
	else
		root["menu"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
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
	var menu_directive_1 = __webpack_require__(1);
	exports.NguiMenuDirective = menu_directive_1.NguiMenuDirective;
	var menu_module_1 = __webpack_require__(3);
	exports.NguiMenuModule = menu_module_1.NguiMenuModule;


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
	var NguiMenuDirective = (function () {
	    function NguiMenuDirective(viewContainerRef) {
	        this.viewContainerRef = viewContainerRef;
	        this.el = this.viewContainerRef.element.nativeElement;
	        this.el.parentElement.style.position = 'relative';
	        this.el.parentElement.className += ' has-ngui-menu';
	    }
	    NguiMenuDirective.prototype.ngAfterViewInit = function () {
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
	    NguiMenuDirective.prototype.setPosition = function () {
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
	    return NguiMenuDirective;
	}());
	__decorate([
	    core_1.Input('ngui-menu'),
	    __metadata("design:type", String)
	], NguiMenuDirective.prototype, "position", void 0);
	NguiMenuDirective = __decorate([
	    core_1.Directive({
	        selector: '[ngui-menu]'
	    }),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef])
	], NguiMenuDirective);
	exports.NguiMenuDirective = NguiMenuDirective;


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
	var menu_directive_1 = __webpack_require__(1);
	var NguiMenuModule = (function () {
	    function NguiMenuModule() {
	    }
	    return NguiMenuModule;
	}());
	NguiMenuModule = __decorate([
	    core_1.NgModule({
	        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
	        declarations: [menu_directive_1.NguiMenuDirective],
	        exports: [menu_directive_1.NguiMenuDirective]
	    }),
	    __metadata("design:paramtypes", [])
	], NguiMenuModule);
	exports.NguiMenuModule = NguiMenuModule;


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
//# sourceMappingURL=menu.umd.js.map