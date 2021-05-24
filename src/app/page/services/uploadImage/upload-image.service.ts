import { Injectable } from '@angular/core';
import { snapshotChanges } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { UploadImageClass } from 'src/app/shared/models/upload-image-class';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  public MEDIA_STORAGE_PATH = 'Upload';
  constructor(private storage: AngularFireStorage) {

   }

   private generateFileName(name: string): string{
     return `${this.MEDIA_STORAGE_PATH}/${new Date().getUTCDate()}_${name}`
   }

   uploadImage(images: UploadImageClass){
    images.uploading = true;
    const filepath = this.generateFileName(images.name);
    const fileRef = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, images.name);
    images.uploadPercent = task.percentageChanges();
    task.snapshotChanges()
    .pipe(
      finalize(()=> {
        images.urlImages = fileRef.getDownloadURL();
        images.uploading = false;

      })
    ).subscribe();
   }
}
