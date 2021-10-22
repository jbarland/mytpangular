import { Injectable } from '@angular/core';
import {Card} from "../modals/card/card";

@Injectable({
  providedIn: 'root'
})
export class CardsService {


  private readonly _cardsGame: Array<Card> = [];

  constructor() {
    //this._cardsGame = cardsGame;
    let arrayValue: Array<string> = ["2","3","4","4","5","6","7","8","9","10","J","Q","K","A"];
    let arrayColor: Array<string> = ["c","d","h","s"];


    for (let i: number = 0; i < arrayValue.length; i++){
      for (let j: number = 0; j < arrayColor.length; j++ ) {
        let myCard = new Card(arrayValue[i],arrayColor[j]);
        this._cardsGame.push(myCard);
      }
    }
  }

  get cardsGame(): Array<Card> {
    return this._cardsGame;
  }

  shuffle(): void {
    let currentIndex: number = this._cardsGame.length;
    let randomIndex: number;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [this._cardsGame[currentIndex], this._cardsGame[randomIndex]] = [
        this._cardsGame[randomIndex], this._cardsGame[currentIndex]];
    }
  }
}
