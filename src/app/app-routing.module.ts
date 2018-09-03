import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LeagueComponent} from './league/league.component';
import { LeagueListComponent} from './league-list/league-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
      path:'league',
      component:LeagueListComponent
  },
  {
      path:'league/:league_slug',
      component:LeagueComponent
  },
  {
      path:'',
      component:HomeComponent
  },{
      path:'**',
      redirectTo:'/',
      pathMatch:'full'
  }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}