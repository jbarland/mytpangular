import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  compteur: number = 0;
  compteurColor: string = "yellow";


  changeCompteur(value: number): void{
    this.compteur += value;
    if (this.compteur == 0){
      this.compteurColor = "yellow";
    }
    else if (this.compteur > 0 && this.compteur <= 15){
      this.compteurColor = "#4af778";
    }
    else if (this.compteur > 15 && this.compteur <= 25){
      this.compteurColor = "#00ff44";
    }
    else if (this.compteur > 25){
      this.compteurColor = "#009c29";
    }
    else if (this.compteur < 0 && this.compteur >= -15){
      this.compteurColor = "#c23844";
    }
    else if (this.compteur < -15 && this.compteur >= -25){
      this.compteurColor = "#ff0016";
    }
    else if (this.compteur < -25){
      this.compteurColor = "#ab000f";
    }
  }

  reset(): void{
    this.compteur = 0;
    this.compteurColor = "yellow";
  }

}
