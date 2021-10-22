import {Component, Input} from '@angular/core';
import {User} from "../../modals/user/user";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent {

  @Input()
  user: User = new User();
  @Input()
  isOnModifyForm: boolean = false;

  minLength: number = 3;

  constructor(public myUserService: UserService) {
  }

  onSubmit(): void {
    // if(this.isOnModifyForm==false){
    //   this.myUserService.addUser(this.user);
    // }
    // else if(this.isOnModifyForm){
    //   this.myUserService.modifyUser(this.user);
    // }
    this.myUserService.addOrModifyUser(this.user);

  }

}
