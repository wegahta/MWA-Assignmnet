import { Component, OnInit } from '@angular/core';
import { GameDataService } from "../../game-data-service.service";


export class Game {
  _id: string;
  firstname: string;
  lastname: String;
  studentid: Number;
  studententry: string;
};

@Component({
  selector: 'app-faculty-homepage',
  templateUrl: './faculty-homepage.component.html',
  styleUrls: ['./faculty-homepage.component.css']
})
export class FacultyHomepageComponent implements OnInit {

  constructor(private gamesDataService : GameDataService) { }

  public games: Game[];

  // TS valid types
  // string, number, boolean, Array, enum, any, void
  private getGames(): void {
    this.gamesDataService.getGames().then(foundGames => this.games= foundGames);
  }
  

  ngOnInit(): void {
    this.getGames();
  }

}
