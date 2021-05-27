import { Injectable } from '@angular/core';
import { snapshotChanges } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { UploadImageClass } from 'src/app/shared/models/upload-image-class';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  public MEDIA_STORAGE_PATH = 'Upload/Products';
  constructor(private storage: AngularFireStorage) {

   }

   private generateFileName(name: string): string{
     return `${this.MEDIA_STORAGE_PATH}/${new Date().getUTCDate()}_${name}`
   }

   uploadImage(images: UploadImageClass[]){
    for (const item of images) {
    item.uploading = true;
    const filepath = this.generateFileName(item.name);
    const fileRef = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, item.name);
    item.uploadPercent = task.percentageChanges();
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        item.urlImages = fileRef.getDownloadURL();
        item.uploading = false;

      })
    ).subscribe();
    console.log('aqui ta', item.urlImages);
    }
   }
}
