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
var imageService_1 = require('./imageService');
var AppComponent = (function () {
    function AppComponent(imageService) {
        this.imageService = imageService;
        this.data = null;
    }
    AppComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    AppComponent.prototype.readThis = function (inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            var fileread = e.target;
            this.imageService.storeImage(fileread, 'test');
            // you can perform an action with readed data here
            // console.log(myReader.result);
            // var fileread = e.target.result;
            // this.imageService.storeImage(fileread, 'test').then((data) => {
            //   console.log(data);
            //     });
        };
        // this.imageService.storeImage(fileread, 'test');
        myReader.readAsDataURL(file);
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>My First Angular 2 App</h1>',
            providers: [imageService_1.ImageData]
        }), 
        __metadata('design:paramtypes', [imageService_1.ImageData])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map