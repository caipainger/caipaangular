import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from '@angular/fire/storage';
import { ProductcreateComponent } from 'src/app/pages/products/productcreate/productcreate.component';
import { ImageClass } from 'src/app/shared/models/image-class';

@Injectable({
  providedIn: 'root',
})
export class UploadImageService {
  storageRef = ref;
  images!: ProductcreateComponent;
  imag!: ImageClass;
  public MEDIA_STORAGE_PATH = 'Upload/Products';
  filepath: any;
  constructor(private storage: Storage) {}

  public generateFileName(name: string): string {
    let maiz = Math.random().toString(36).substr(2, 9);
    return `${this.MEDIA_STORAGE_PATH + '/' + name}/`;
  }

  uploadImage(nombre: string, imageBase64: any[] | any) {
    // const imagges: UploadImageClass = new UploadImageClass();
    // imagges.uploading = true;
    // imagges.imageBase64 = imageBase64;
    const filepath = nombre;    
    this.filepath = filepath;
    for (const item of imageBase64) {
      const fileRef = ref(this.storage, filepath + '/' + item.name);
      uploadBytes(fileRef, item)
        .then((response) => {
          //this.getImages();
          console.log('la resp :=>  ', response);
        })
        .catch((error) => console.log(error));
    }
  }

  createImage(): void {
      const filepath = this.filepath;
      const fileRef = ref(this.storage, filepath);
      listAll(fileRef)
        .then(async response => {
          this.images.urlImagen = [];
          for (let item of response.items) {
            const respuesta = await getDownloadURL(item);
            this.imag.urlImages = respuesta;
            this.imag.name = item.name;
            this.imag.imageBase64 = item.bucket;
            this.images.urlImagen.push(respuesta);
            console.log('url :=>', respuesta);
          }
        })
        .catch((error) => {
           console.log(error);
        });
  }

  getImages(): string[] {
    const imagesRef = ref(this.storage, this.filepath);
    let url = '';
    let images: string[] = [];
    listAll(imagesRef)
      .then(async (response) => {
        console.log(response);
        this.images.urlImagen = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.urlImagen.push(url);
        }
        images = this.images.urlImagen;
      })
      .catch((error) => console.log(error));
      return images;
  }
}
