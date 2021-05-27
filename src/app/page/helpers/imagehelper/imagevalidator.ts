import { UploadImageClass } from "src/app/shared/models/upload-image-class";


export class Imagevalidator {
    private acceptType = ['image/jpeg', 'image/png', 'image/tiff', 'image/jpg', 'image/ico'];

    validateType(fileType: string): boolean {
      return fileType === '' || fileType === undefined
        ? false
        : this.acceptType.includes(fileType);
    }
  
    checkDropped(fileName: string, files: UploadImageClass[]): boolean {
      for (const file of files) {
        if (file.name === fileName) {
          return true;
        }
      }
      return false;
    }
}
