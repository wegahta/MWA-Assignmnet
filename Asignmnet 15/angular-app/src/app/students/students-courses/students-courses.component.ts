import { Component, OnInit } from '@angular/core';
import { GameDataService } from "../../game-data-service.service";


export class Course {
  id: string;
  title: string;
  credit: String;

};

@Component({
  selector: 'app-students-courses',
  templateUrl: './students-courses.component.html',
  styleUrls: ['./students-courses.component.css']
})
export class StudentsCoursesComponent implements OnInit {

  constructor(private gamesDataService : GameDataService) { }

  public course: Course[];


  private getCourses(): void {
    this.gamesDataService.getCourses().then(foundGames => this.course= foundGames);
  }
  

  ngOnInit(): void {
    this.getCourses();
  }

}
