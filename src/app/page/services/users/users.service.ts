import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { Users } from 'src/app/shared/models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Users = new Users();
  Userstlist!: AngularFireList<any>;

  constructor( private firebase: AngularFireDatabase) { }

  insertUser(users: Users){
    this.Userstlist.push({
      fname: users.fname,
      lname: users.lname,
      email: users.email,
      phonenumber: users.phonenumber,
      password: users.password,
      role: users.role

    });
  }
  updateUser(users: Users): void{
    this.Userstlist.update( users.$key, {
      fname: users.fname,
      lname: users.lname,
      email: users.email,
      phonenumber: users.phonenumber,
      password: users.password,
      role: users.role

    });
  }
  removeUser($key: string){
    this.Userstlist.remove($key);
  }
  getUsers(){
    return this.Userstlist = this.firebase.list('users');
  }
}
