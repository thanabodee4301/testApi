import { Component, OnInit } from '@angular/core';
import {LeagueService} from '../league.service';
@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.css']
})
export class LeagueListComponent implements OnInit {
leagues:any[];
  constructor(private leagueService:LeagueService ) { }

  ngOnInit() {
    this.leagueService.findAll().subscribe(response=>{
      this.leagues = response.data;
    })
  }

}
