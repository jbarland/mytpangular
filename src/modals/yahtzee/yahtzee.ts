import { Dice } from "./dice";



export class Yahtzee {
    public _myThrow: Array<Dice>  = new Array();
    private _mapThrow: Map<number, number> = new Map();

    throwDices() {
        this._myThrow = new Array();
        for (let i = 0; i<=4; i++){
            this._myThrow.push(new Dice());
        }
        this.updateMap();
    }

    updateMap() {
        this._mapThrow.clear();
        for (const dice of this._myThrow) {
            if (!this._mapThrow.has(dice.value)) {
                this._mapThrow.set(dice.value, 1);
            } else {
                let qty: number | undefined = this._mapThrow.get(dice.value);
                if (qty) {
                    qty++;
                    this._mapThrow.set(dice.value, qty);
                }
            }
        }
    }

    public get mapThrow(): Map<number, number> {
        return this._mapThrow;
    }

    public get myThrow(): Array<Dice> {
        return this._myThrow;
    }

    calculPointMap(): string {
        for (const [key, value] of this._mapThrow){
            if (value === 5) {
                return 'yatzee';
            } else if(value === 4) {
                return 'carrée';
            } else if(value === 3) {
                if (this._mapThrow.size === 2) {
                    return 'full';
                } else {
                    return 'brelan';
                }
            }
        }
        return 'Pas de figure';
    }

    rerollSelected(): void {
        //for of renvoie l'objet et ne permet pas de modifier, for in renvoie l'index comme for let i=0 ... ici myDice = i
        for (let myDice in this.myThrow){
          if (this.myThrow[myDice].isSelected){
            this.myThrow[myDice] = new Dice();
          }
        }
        this.updateMap();        
    }
}
