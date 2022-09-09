import { Component, OnInit } from '@angular/core';
import { Database } from '@angular/fire/database';
import { Storage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/page/services/users/users.service';
import { Users } from 'src/app/shared/models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  users!: Users;
  constructor(private router: Router,
              public firebase: Database,
              public storage: Storage,
              private userServices: UsersService) { }

  ngOnInit(): void {
  }
  onSubmit( registerForm: NgForm): any {
    if (registerForm.value.$key == null) {
      this.userServices.insertUser(registerForm.value);
    }else {
      this.userServices.updateUser(registerForm.value);
    }

    // tslint:disable-next-line: no-non-null-assertion
    this.resetForm(registerForm);
    // console.log( this.urlImage);
  }
  resetForm(registerForm?: NgForm): any{
    if (registerForm != null) {
      registerForm.reset();
      this.userServices.users = new Users();

    }
  }
  onGoToBack(): any{
    this.router.navigate(['login']);
  }

}
