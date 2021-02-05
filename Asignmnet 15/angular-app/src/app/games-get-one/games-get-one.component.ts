import { Component, OnInit } from '@angular/core';

import { GameDataService } from "../game-data-service.service"

import { ActivatedRoute } from '@angular/router';

export class Game {
  _id: string;
  firstname: string;
  lastname: String;
  studentid: Number;
  studententry: string;
};

@Component({
  selector: 'app-games-get-one',
  templateUrl: './games-get-one.component.html',
  styleUrls: ['./games-get-one.component.css']
})
export class GamesGetOneComponent implements OnInit {
 
  id:Number = 0;
  constructor(private gameDataService : GameDataService, private route: ActivatedRoute) { }
  
  public games: any;

  // TS valid types
  // string, number, boolean, Array, enum, any, void
  public getOneGame(id: Number): void {
    this.gameDataService.getOneGame(id).then(foundGame => this.games= foundGame);
    console.log(this.games)
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data.id;
      // this.gamesDataService.getOneGame(this.id).then()
    })
    this.getOneGame(this.id)
  }

}
