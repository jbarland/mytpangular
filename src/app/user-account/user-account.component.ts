import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../modals/user/user";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  myEmail!: string;
  isOnModifyAccount: boolean = false;
  theUser!: User;


  constructor(private attributeActivatedRoute: ActivatedRoute, public myUserService: UserService) { }



  ngOnInit(): void {
    this.attributeActivatedRoute.params.subscribe(param => {
      this.myEmail = param.mail;
    });

    this.theUser = this.myUserService.findByEmail(this.myEmail);
  }
}


