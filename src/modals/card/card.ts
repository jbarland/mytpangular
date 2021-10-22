export class Card {
  _value: string;
  _color: string;
  _name: string;
  _imagePath: string;

  constructor(value: string, color: string) {
    this._value = value;
    this._color = color;
    let colorFullName: string = "";
    if(this._color == "c"){
      colorFullName = "trèfle"
    }
    else if(this._color == "d"){
      colorFullName = "carreau"
    }
    else if(this._color == "h"){
      colorFullName = "coeur"
    }
    else if(this._color == "s"){
      colorFullName = "pique"
    }
    this._name = this._value + " de " + colorFullName;
    this._imagePath = "../../assets/cards/classic/" + this._value + this._color + ".gif";
  }
}
