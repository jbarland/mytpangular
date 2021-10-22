import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {

  constructor(public myUserService: UserService,
              private activatedRoute: ActivatedRoute,
              private myRouter: Router) {}

  ngOnInit(): void {
  }

  routerLinkAccount(email: string): void {
    this.myRouter.navigate(['user/'+email]);
  }

}
