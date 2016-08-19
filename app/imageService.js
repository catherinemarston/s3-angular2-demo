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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ImageData = (function () {
    function ImageData(http) {
        this.http = http;
        this.data = null;
    }
    ImageData.prototype.storeImage = function (imageData, fileName, imageExt) {
        var imageExtension = imageData.split(';')[0].split('/');
        imageExt = imageExtension[imageExtension.length - 1];
        var newImage = {
            imageName: fileName,
            imageBody: imageData,
            imageExtension: imageExt,
            userEmail: 'cathymarstonang@gmail.com'
        };
        return this.http.post('/api/newimage', newImage);
    };
    ImageData = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ImageData);
    return ImageData;
}());
exports.ImageData = ImageData;
//# sourceMappingURL=imageService.js.map