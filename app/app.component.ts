import { Component } from '@angular/core';
import {ImageData} from './imageService';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>',
  providers: [ImageData]
})

export class AppComponent {
    data: any;
    result: any;
    ImageData: any;

    constructor(private imageService: ImageData) {
        this.data = null;
    }
    changeListener($event): void {
        this.readThis($event.target);
    }
    readThis(inputValue: any): void {
        var file:File = inputValue.files[0];
        var myReader:FileReader = new FileReader();

        myReader.onloadend = function(e) {
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

}
