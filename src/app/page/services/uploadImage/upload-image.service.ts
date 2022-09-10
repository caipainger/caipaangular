import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL, listAll, getBlob } from '@angular/fire/storage';
import firebase from 'firebase/compat/app';
import { finalize } from 'rxjs/operators';
import { UploadImageClass } from 'src/app/shared/models/upload-image-class';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  storageRef = ref;
  public MEDIA_STORAGE_PATH = 'Upload/Products';
  constructor(private storage: Storage) {

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
    const fileRef = ref(this.storage, filepath);
    uploadBytes(fileRef, item.urlImages)
    .then(response => {
      
      console.log(response);
    })
    .catch(error => console.log(error));
    getBlob(fileRef).then(response => {
      
      console.log(response);
    })
    .catch(error => console.log(error));
    // const task = this.storage.upload(filepath, item.name, item.imageBase64);
    // item.uploadPercent = task.percentageChanges();
    // task.snapshotChanges().pipe(
    //   imageFunction(item, fileRef)
    // ).subscribe();
    console.log('aqui ta', item.urlImages);
    }

   }

 

   async createImage(nombre: string, imageBase64: string | any): Promise<any>{
   try {
    const filepath = this.generateFileName(nombre);
    const fileRef = ref(this.storage, filepath);
     let respuesta = await listAll(fileRef).then(response => {console.log(response);
      for (const item of response.items) {
      getDownloadURL(item);
     }})
     .catch(error => console.log(error));
     
   } catch (error) {
     console.log(error);
   } 
  }
}
