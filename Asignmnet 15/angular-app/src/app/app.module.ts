import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDataService } from "./game-data-service.service";
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { GamesGetOneComponent } from './games-get-one/games-get-one.component';
import { LoginComponent } from './login/login.component';
import { StudentsPageComponent } from './students/students-page/students-page.component';
import { StudentsRegisterComponent } from './students/students-register/students-register.component';
import { StudentsUpdateProfileComponent } from './students/students-update-profile/students-update-profile.component';
import { StudentsQrcodeComponent } from './students/students-qrcode/students-qrcode.component';
import { FacultyLoginComponent } from './faculty/faculty-login/faculty-login.component';
import { FacultyHomepageComponent } from './faculty/faculty-homepage/faculty-homepage.component';
import { FacultyStudentsAttendanceComponent } from './faculty/faculty-students-attendance/faculty-students-attendance.component';
import { StudentsCoursesComponent } from './students/students-courses/students-courses.component';
import { FacultyCoursesComponent } from './faculty/faculty-courses/faculty-courses.component';
import { FacultyEnableQRcodeComponent } from './faculty/faculty-enable-qrcode/faculty-enable-qrcode.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    NavComponent,
    AboutComponent,
    GamesGetOneComponent,
    LoginComponent,
    StudentsPageComponent,
    StudentsRegisterComponent,
    StudentsUpdateProfileComponent,
    StudentsQrcodeComponent,
    FacultyLoginComponent,
    FacultyHomepageComponent,
    FacultyStudentsAttendanceComponent,
    StudentsCoursesComponent,
    FacultyCoursesComponent,
    FacultyEnableQRcodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: LoginComponent
      },
      {
        path: "games",
        component: GameListComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: 'students/getall',
        component: FacultyHomepageComponent
      },
      
      {
        path: 'students/getbyid/:id',
        component: GamesGetOneComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "studentspage",
        component: StudentsPageComponent
      },
      {
        path: "register",
        component: StudentsRegisterComponent
      },
      {
        path: "students/update/:id",
        component: StudentsUpdateProfileComponent
      },
      {
        path: "students/qrcode",
        component: StudentsQrcodeComponent
      }
      ,
      {
        path: "faculty/login",
        component: FacultyLoginComponent
      },
      {
        path: "students/getall",
        component: FacultyHomepageComponent
      },
      {
        path: "students/attendance",
        component: FacultyStudentsAttendanceComponent
      },
      {
        path: "students/courses",
        component: StudentsCoursesComponent
      },
      {
        path: " faculty/qrcode-camera",
        component: FacultyEnableQRcodeComponent
      }

     

    ])
  ],
  providers: [GameDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
