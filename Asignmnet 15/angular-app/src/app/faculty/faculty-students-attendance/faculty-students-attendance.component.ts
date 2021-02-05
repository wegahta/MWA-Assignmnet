import { Component, OnInit } from '@angular/core';
import { GameDataService } from "../../game-data-service.service";


export class Game {
  id: string;
  First_name: string;
  Last_name: String;
  // studentid: Number;
  password: string;
};


@Component({
  selector: 'app-faculty-students-attendance',
  templateUrl: './faculty-students-attendance.component.html',
  styleUrls: ['./faculty-students-attendance.component.css']
})
export class FacultyStudentsAttendanceComponent implements OnInit {

  constructor(private gamesDataService : GameDataService) { }

  public game: any;

  // TS valid types
  // string, number, boolean, Array, enum, any, void
  private getGames(): void {
    this.gamesDataService.getGames().then(foundedGames => this.game= foundedGames);
  }
  

  ngOnInit(): void {
    this.getGames();
  }

}
