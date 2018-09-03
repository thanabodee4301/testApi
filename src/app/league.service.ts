import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LeagueService {

  constructor(private http:Http) { }

  findAll(){
    return this.http.get('http:localhost:5000/league')
      .map(res=>res.json());
  }
  findOne(league_slug){
    return this.http.get(`http://localhost:5000/api/heroes/${league_slug}`)
    .map(res=>res.json());
  }
}
