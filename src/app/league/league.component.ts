import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LeagueService} from '../league.service';
@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  league: any;
  constructor(private route:ActivatedRoute,private leagueServie:LeagueService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      const league_slug = params['league_slug'];
      this.leagueServie.findOne(league_slug).subscribe(response=>{
        this.league = response.data;
      });
    });
  }
  like(){
    console.log('like')
  }

}
