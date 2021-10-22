import {Hero} from "./hero";
import {Mage} from "./mage";
import {Rogue} from "./rogue";
import {Warrior} from "./warrior";

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max) + min);
}

export class Battleground {
  private _heroOne: Hero;
  private _heroTwo: Hero;

  constructor(heroOne: string, heroTwo: string) {
    let nb1: number = getRandomInt(1,3);
    if (nb1 == 1){
      this._heroOne = new Rogue(heroOne);
    }
    else if (nb1 == 2){
      this._heroOne = new Mage(heroOne);
    }
    else {
      this._heroOne = new Warrior(heroOne)
    }

    let nb2: number = getRandomInt(1,3);
    if (nb2 == 1){
      this._heroTwo = new Rogue(heroTwo);
    }
    else if (nb2 == 2){
      this._heroTwo = new Mage(heroTwo);
    }
    else {
      this._heroTwo = new Warrior(heroTwo);
    }
  }

  //TESTER AC FUNCTION CREER UN HERO A PARTIR DE TABLEAU [Rogue, Mage, Warrrior]

  set heroOne(value: Hero) {
    this._heroOne = value;
  }

  set heroTwo(value: Hero) {
    this._heroTwo = value;
  }
  get heroOne(): Hero {
    return this._heroOne;
  }

  get heroTwo(): Hero {
    return this._heroTwo;
  }

  fight(): void {
    const heroes: Array<Hero> = [this._heroOne, this._heroTwo];
    while (this._heroOne.isAlive() && this._heroTwo.isAlive()) {
      const index = getRandomInt(0, 1);
      const first: Hero = heroes[index];
      const second: Hero = heroes[Math.abs(index - 1)];
      console.log('Le premier hero à attaquer est ' + first.name);
      first.attack(second);
      if (second.isAlive()) {
        second.attack(first);
      }
    }

  }

}
