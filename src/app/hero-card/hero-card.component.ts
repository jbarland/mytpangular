import {Component, Input} from '@angular/core';
import {Hero} from "../../modals/heroes/hero";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent  {

  @Input()
  myHero!: Hero;


  constructor() {
  }


}
