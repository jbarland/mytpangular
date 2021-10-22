import { Injectable } from '@angular/core';
import {Region} from "../modals/regions/region";
import {Department} from "../modals/regions/department";

@Injectable({
  providedIn: 'root'
})

export class RegionService {

  private readonly _myArrayRegion: Array<Region> = [];

  constructor() {
    this._myArrayRegion = [
      new Region("84", "Auvergne-Rhône-Alpes"),
      new Region("11", "Île de France"),
      new Region("32", "Hauts-de-France"),
      new Region("44", "Grand Est"),
      new Region("53", "Bretagne"),
    ];
  }

  get myArrayRegion(): Array<Region> {
    return this._myArrayRegion;
  }

  /*
  getNameByCode(code: string): string {
    let myname: string = "";
    for (let i=0; i < this._myArrayRegion.length; i++){
      if (this._myArrayRegion[i].code == code){
        myname = this._myArrayRegion[i].name
      }
    }
    return myname;
  }
  */

   //OU

  getNameByCodeF(code: string): string {
    return this._myArrayRegion.filter(goodName => goodName.code === code)[0].name;
  }

}
