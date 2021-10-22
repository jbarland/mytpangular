import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursComponent} from "./cours/cours.component";
import {YahtzeeComponent} from "./yahtzee/yahtzee.component";
import {CompteurComponent} from "./compteur/compteur.component";
import {CregionComponent} from "./cregion/cregion.component";

import {MultabComponent} from "./multab/multab.component";
import {AllmultabComponent} from "./allmultab/allmultab.component";
import {DeptsComponent} from "./depts/depts.component";
import {CityComponent} from "./city/city.component";
import {BattlegroundComponent} from "./battleground/battleground.component";
import {UserIndexComponent} from "./user-index/user-index.component";
import {FormUserComponent} from "./form-user/form-user.component";
import {UserAccountComponent} from "./user-account/user-account.component";
import {CardsGameComponent} from "./cards-game/cards-game.component";


const routes: Routes = [
  { path: "angular/cours", component: CoursComponent},
  { path: "angular/compteur", component: CompteurComponent},
  { path: "angular/yahtzee", component: YahtzeeComponent},
  { path: "angular/regions", component: CregionComponent},
  //{ path: "angular/multab/:digit", component: MultabComponent},
  { path: "angular/alltab", component: AllmultabComponent},
  { path: "angular/regions/:codeR/departments", component: DeptsComponent},
  //{ path: "angular/:codeD/villes", component: CityComponent},
  { path: "angular/regions/:codeR/departments/:codeD/villes", component: CityComponent},
  { path: "battleground", component: BattlegroundComponent},
  { path: "userIndex", component: UserIndexComponent},
  { path: "formUser", component: FormUserComponent},
  { path: "user/:mail", component: UserAccountComponent },
  { path: "cardsGame", component: CardsGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
