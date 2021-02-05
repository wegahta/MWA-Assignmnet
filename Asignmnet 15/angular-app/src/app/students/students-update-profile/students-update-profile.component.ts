import { Component, OnInit } from '@angular/core';
import { GameDataService } from "../../game-data-service.service"
import { ActivatedRoute } from '@angular/router';
import { Student } from '../students-register/students-register.component';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-students-update-profile',
  templateUrl: './students-update-profile.component.html',
  styleUrls: ['./students-update-profile.component.css']
})
export class StudentsUpdateProfileComponent implements OnInit {

  id: Number;

  constructor(private gamesDataService : GameDataService, private route : ActivatedRoute) { }

  public updateOneStudent(form: NgForm): void {

    let student: Student = {
      firstname : form.value.firstname,
      lastname : form.value.lastname,
      email : form.value.email,
      confirmpassword: form.value.confirmpassword,
      password: form.value.password,
      img : form.value.img
    }
    
    console.log(form.value + "=====")
  }

  ngOnInit(): void {
    // this.route.snapshot.paramMap.get('id');
    // this.updateOneStudent(this.id);

    this.route.params.subscribe(data => {
      this.id = data.id;
      // this.gamesDataService.getOneGame(this.id).then()
    })
  }

}
