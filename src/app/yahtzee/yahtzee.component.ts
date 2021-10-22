import { Component, OnInit } from '@angular/core';
import {Dice} from "../../modals/yahtzee/dice";
import {Yahtzee} from "../../modals/yahtzee/yahtzee";

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss']
})
export class YahtzeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  uniqueDice: Dice = new Dice();


  rerollDice(): void {
    this.uniqueDice = new Dice();
  }

  yahtzee: Yahtzee = new Yahtzee();

  rerollDices(): void {
    this.yahtzee.throwDices();
    console.log(this.yahtzee.calculPointMap());
  }
}
