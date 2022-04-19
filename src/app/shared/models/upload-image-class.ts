import { Observable } from 'rxjs';

export class UploadImageClass {
    public name!: string;
    public imageBase64: any;
    public uploading = false;
    public uploadPercent!: Observable<any>;
    public urlImages!: Observable<string>;

    constructor(public file: File = file){
        this.name = file.name;
    }
}
