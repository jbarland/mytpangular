import { Component, OnInit } from '@angular/core';
import {Region} from "../../modals/regions/region";
import {Department} from "../../modals/regions/department";
import {ActivatedRoute} from "@angular/router";
import {DeptsService} from "../../service/depts.service";
import {RegionService} from "../../service/region.service";

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.scss']
})
export class DeptsComponent implements OnInit {

  filteredDepts: Array<Department> = [];
  myCodeR!: string;
  myName!: string;

  constructor(private attributeActivatedRoute: ActivatedRoute, public myDeptsService: DeptsService, public myRegionServiceForDept: RegionService) { }

  ngOnInit(): void {
    this.attributeActivatedRoute.params.subscribe(param => {this.myCodeR = param.codeR;
    });

    this.filteredDepts = this.myDeptsService.getDeptsByRegion(this.myCodeR);

    this.myName = this.myRegionServiceForDept.getNameByCodeF(this.myCodeR);
  }

}

