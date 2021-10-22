import { Component, OnInit } from '@angular/core';
import {Battleground} from "../../modals/heroes/battleground";

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  _myBattleground: Battleground;

  constructor() {
    this._myBattleground = new Battleground("Jerem","Dom");
  }

  ngOnInit(): void {
    console.log(this._myBattleground.heroOne);
  }

}
