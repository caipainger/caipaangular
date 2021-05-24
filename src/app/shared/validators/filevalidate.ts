import { UploadImageClass } from "../models/upload-image-class";

export class Filevalidate {
    private aceptType =[
        'image/jpg', 
        'image/png', 
        'image/tiff',    
        'image/ico', 
        'image/jpeg'
    ]
    validateType(fileType: string): boolean{
        return fileType === '' || fileType === undefined
        ? false
        : this.aceptType.includes(fileType);
    }

    checkDropped(fileName: string, files: UploadImageClass): boolean{
       if ( files.name === fileName){
           return true;
       }else {
           return false;
       }
    }
}
