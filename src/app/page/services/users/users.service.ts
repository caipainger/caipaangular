import { Quote } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Users } from 'src/app/shared/models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  users: Users = new Users();
  productlist!: AngularFireList<any>;

  constructor( private firebase: AngularFireDatabase) { }

  insertUser(users: Users){

  }
  updateUser(users: Users){

  }
  removeUser($key: string){

  }
}
