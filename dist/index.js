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
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var platform_browser_1 = require('@angular/platform-browser');
var ng2_menu_directive_1 = require("./ng2-menu-directive");
exports.Ng2MenuDirective = ng2_menu_directive_1.Ng2MenuDirective;
var Ng2MenuModule = (function () {
    function Ng2MenuModule() {
    }
    Ng2MenuModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [ng2_menu_directive_1.Ng2MenuDirective],
            exports: [ng2_menu_directive_1.Ng2MenuDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2MenuModule);
    return Ng2MenuModule;
}());
exports.Ng2MenuModule = Ng2MenuModule;
//# sourceMappingURL=index.js.map