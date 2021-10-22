import { Component, OnInit } from '@angular/core';
import {CardsService} from "../../service/cards.service";

@Component({
  selector: 'app-cards-game',
  templateUrl: './cards-game.component.html',
  styleUrls: ['./cards-game.component.scss']
})
export class CardsGameComponent implements OnInit {

  constructor(public myCardsService: CardsService) { }

  ngOnInit(): void {
  }

}
