import { Injectable } from '@angular/core';
import {City} from "../modals/regions/city";
import {Department} from "../modals/regions/department";

@Injectable({
  providedIn: 'root'
})
export class CityService {


  private readonly _myArrayCity: Array<City> = [];

  constructor() {
    this._myArrayCity = [
      new City("63001", "Aigueperse", "63", 2720, ["63260"]),
      new City("63113", "Clermont-Fd", "63", 142686, ["63100", "63000"]),
      new City("42218", "St-Etienne", "42", 171924, ["42000", "42100", "42230"])
    ];
  }

  get myArrayCity(): Array<City> {
    return this._myArrayCity;
  }

  getCityByDepts(code: string): Array<City> {
    return this.myArrayCity.filter(goodNum => goodNum.codeDepartment === code);
  }
}
