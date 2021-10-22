import { Component, OnInit } from '@angular/core';
import {Region} from "../../modals/regions/region";
import {RegionService} from "../../service/region.service";

@Component({
  selector: 'app-cregion',
  templateUrl: './cregion.component.html',
  styleUrls: ['./cregion.component.scss']
})
export class CregionComponent implements OnInit {



  constructor(public myRegionService: RegionService) { }

  ngOnInit(): void {

  }

}


