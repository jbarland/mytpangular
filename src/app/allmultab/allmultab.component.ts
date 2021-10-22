import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allmultab',
  templateUrl: './allmultab.component.html',
  styleUrls: ['./allmultab.component.scss']
})
export class AllmultabComponent implements OnInit {
  //myTables: Array<number>;

  constructor() {
    //this.myTables = [0,1,2,3,4,5,6,7,8,9];
  }

  createRange(maxRange: number): Array<number>{
    let myTables = new Array<number>();
    for (let i= 1; i <= maxRange; i++){
      myTables[i-1]= i;
    }
    return myTables;
  }

  ngOnInit(): void {
  }

}
