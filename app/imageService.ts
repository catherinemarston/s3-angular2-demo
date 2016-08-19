import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ImageData {
    data: any;

    constructor(private http: Http) {
        this.data = null;
    }

    storeImage(imageData: string, fileName: string, imageExt: any) {
        var imageExtension = imageData.split(';')[0].split('/');
        imageExt = imageExtension[imageExtension.length - 1];
        let newImage = {
            imageName: fileName,
            imageBody: imageData,
            imageExtension: imageExt,
            userEmail: 'cathymarstonang@gmail.com'
        }

        return this.http.post('/api/newimage', newImage);
    }
}
