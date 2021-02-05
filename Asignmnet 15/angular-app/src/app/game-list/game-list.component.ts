import { Component, OnInit } from '@angular/core';

import { GameDataService } from "../game-data-service.service";

export class Game {
  _id: string;
  firstname: string;
  lastname: String;
  studentid: Number;
  studententry: string;
};

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor(private gamesDataService : GameDataService) { 
  }

 

  public games: Game[];

  private getGames(): void {
    this.gamesDataService.getGames().then(foundGames => this.games= foundGames);
  }
  

  ngOnInit(): void {
    this.getGames();
  }

}
