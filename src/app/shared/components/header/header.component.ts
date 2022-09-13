//
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/page/services/users/users.service';
import { Users } from '../../models/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  users!: Users;
  constructor( public userService: UsersService ) {
   }

  ngOnInit(): void {
  }
  onLogout(): void{

  }

  OnNavbar(): any{}

}
