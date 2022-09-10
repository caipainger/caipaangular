import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';
import { finalize } from 'rxjs/operators';
import { UploadImageClass } from 'src/app/shared/models/upload-image-class';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  storageRef = firebase.app().storage().ref();
  public MEDIA_STORAGE_PATH = 'Upload/Products';
  constructor(private storage: AngularFireStorage) {

   }

   private generateFileName(name: string): string{
     let maiz =  Math.random().toString(36).substr(2, 9); ;
     return `${this.MEDIA_STORAGE_PATH+'/'+name}/${new Date().getDate()}_${maiz}`
   }

   

   uploadImage(images: UploadImageClass[]){
    for (const item of images) {
    item.uploading = true;
    item.imageBase64;
    const filepath = this.generateFileName(item.name);
    const fileRef = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, item.name, item.imageBase64);
    item.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      imageFunction(item, fileRef)
    ).subscribe();
    console.log('aqui ta', item.urlImages);
    }

     function imageFunction(this: any, item: UploadImageClass, fileRef: AngularFireStorageReference) {
       return this.urlMethod(item, fileRef);
     }
   }

  private urlMethod(item: UploadImageClass, fileRef: AngularFireStorageReference) {
    return finalize(() => {
      item.urlImages = fileRef.getDownloadURL();
      item.uploading = false;
    });
  }

   async createImage(nombre: string, imageBase64: string | any): Promise<any>{
   try {
    const filepath = this.generateFileName(nombre);
     let respuesta = await this.storageRef.child(filepath).putString(imageBase64,'data_url');
     return await respuesta.ref.getDownloadURL();
   } catch (error) {
     console.log(error);
   } 
  }
}
