import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-multab',
  templateUrl: './multab.component.html',
  styleUrls: ['./multab.component.scss']
})
export class MultabComponent {

  @Input()
  myDigit!: number;

  constructor() { }



  multipleTab(limit: number = 12): Array<string>{
    let myTab = new Array<string>();
    for(let i: number = 0; i <= limit; i++){
      myTab[i]=`${i} x ${this.myDigit} = ${i*this.myDigit}`;
    }

    return myTab;
  }

}
