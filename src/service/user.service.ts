import { Injectable } from '@angular/core';
import { User } from "../modals/user/user";
import {Region} from "../modals/regions/region";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _myArrayUser: Array<User> = [];

  constructor() {
    //this._myArrayUser = [];

    for (let i = 1; i <= 10; i++) {
      let user = new User();
      user.email = 'email-'+i+'@dom.fr';
      user.nickname = 'SuperDom'+i+'Du63';
      if (i%5 === 0) {
        user.address = (i+12)+" Rue HB";
        user.postalCode = "63000";
        user.lastname = "Dom"+i;
        user.firstname = "Dom"+-i;
        user.city = "Clermont"+i;
      }
      this._myArrayUser.push(user);
    }
  }

  getArrayUser(): Array<User> {
    return this._myArrayUser;
  }

  addUser(myUser: User): void{
    this._myArrayUser.push(myUser);
  }

  modifyUser(myUser: User): void{
    this._myArrayUser = this._myArrayUser.filter(obj => obj !== myUser);
    this._myArrayUser.push(myUser);
  }

  addOrModifyUser(myUser: User): void{
    if(this._myArrayUser.includes(myUser)){
      this._myArrayUser = this._myArrayUser.filter(obj => obj !== myUser);
    }
    this._myArrayUser.push(myUser);
  }

  findByEmail(myEmail: string): User{
    return this._myArrayUser.filter(goodMail => goodMail.email === myEmail)[0];
  }
}
