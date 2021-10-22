import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursComponent } from './cours/cours.component';
import { YahtzeeComponent } from './yahtzee/yahtzee.component';
import { CompteurComponent } from './compteur/compteur.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MultabComponent } from './multab/multab.component';
import { CregionComponent } from './cregion/cregion.component';
import { DeptsComponent } from './depts/depts.component';
import { CityComponent } from './city/city.component';
import { AllmultabComponent } from './allmultab/allmultab.component';
import { BattlegroundComponent } from './battleground/battleground.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { FormUserComponent } from './form-user/form-user.component';
import { UserIndexComponent } from './user-index/user-index.component';
import {FormsModule} from "@angular/forms";
import { UserAccountComponent } from './user-account/user-account.component';
import { CardsGameComponent } from './cards-game/cards-game.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
    YahtzeeComponent,
    CompteurComponent,
    NavbarComponent,
    MultabComponent,
    CregionComponent,
    DeptsComponent,
    CityComponent,
    AllmultabComponent,
    BattlegroundComponent,
    HeroCardComponent,
    FormUserComponent,
    UserIndexComponent,
    UserAccountComponent,
    CardsGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
