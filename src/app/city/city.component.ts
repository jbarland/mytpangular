import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeptsService} from "../../service/depts.service";
import {CityService} from "../../service/city.service";
import {Department} from "../../modals/regions/department";
import {City} from "../../modals/regions/city";
import {RegionService} from "../../service/region.service";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  filteredCity: Array<City> = [];
  myCodeD!: string;
  myNameD!: string;
  myCodeRegCity!: string;
  myNameRegCity!: string;

  constructor(private attributeActivatedRoute: ActivatedRoute, public myCityService: CityService, public myDeptsService: DeptsService, public myRegionService: RegionService) { }

  ngOnInit(): void {
    this.attributeActivatedRoute.params.subscribe(param => {this.myCodeD = param.codeD;
    });

    this.filteredCity = this.myCityService.getCityByDepts(this.myCodeD);

    this.myNameD = this.myDeptsService.getNameDeptByCode(this.myCodeD);

    this.myCodeRegCity = this.myDeptsService.getCodeRegionWithCodeDept(this.myCodeD);

    this.myNameRegCity = this.myRegionService.getNameByCodeF(this.myCodeRegCity);
  }

}
