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
var ng2TruncatePipe = (function () {
    function ng2TruncatePipe() {
    }
    ng2TruncatePipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '...'; }
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    ng2TruncatePipe = __decorate([
        core_1.Pipe({
            name: 'truncate'
        }), 
        __metadata('design:paramtypes', [])
    ], ng2TruncatePipe);
    return ng2TruncatePipe;
}());
exports.ng2TruncatePipe = ng2TruncatePipe;
//# sourceMappingURL=truncate.js.map