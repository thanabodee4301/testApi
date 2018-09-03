import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LeagueComponent } from './league/league.component';
import { LeagueListComponent } from './league-list/league-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeagueService} from './league.service';

import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
const router:Routes=[{
  path:'',
  component:AboutComponent
}];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LeagueComponent,
    LeagueListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LeagueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
