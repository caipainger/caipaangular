import { Observable } from 'rxjs';

export class UploadImageClass {
  item: any;
  [x: string]: any;
    public name!: string;
    public imageBase64: any;
    public uploading = false;
    public uploadPercent!: any
    public urlImages!: any;

    constructor(public file: File = file){
        this.name = file.name;
    }
}
