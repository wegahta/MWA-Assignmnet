import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Game } from "./game-list/game-list.component";
import { Student } from './students/students-register/students-register.component';
import { Course } from './students/students-courses/students-courses.component';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl= "http://localhost:3000/api";

  public getGames():Promise<Game[]> {
  
    const url:string= this.apiBaseUrl+"/students";
    return this.http  
            .get(url)  
            .toPromise() 
            .then(response => response as Game[]) 
            .catch(this.handleErrors); 
  }


  public getCourses():Promise<Course[]> {
    
    const url:string= this.apiBaseUrl+"/courses";
    return this.http  
            .get(url)  
            .toPromise() 
            .then(response => response as Course[]) 
            .catch(this.handleErrors); 
  }



  public getOneGame(id: Number): Promise<Game[]>{

  

    const url:string= this.apiBaseUrl+"/students/" +id;
    return this.http
               .get(url)
               .toPromise()
               .then(response => response as Student[])
               .catch(this.handleErrors);
  }

  public addOneStudent(student): Promise<Game[]>{

    const url:string= this.apiBaseUrl+"/attendance/students/register";
    return this.http
               .post(url, student)
               .toPromise()
               .then(response => response as Game[])
               .catch(this.handleErrors);
  }

  public updateOneStudent(id:Number, student): Promise<Game[]>{
    const url:string= this.apiBaseUrl+"/attendance/students/"+ id;
    return this.http
               .put(url,student)
               .toPromise()
               .then(response => response as Game[])
               .catch(this.handleErrors);
  }

  public deleteOneStudent(id:Number): Promise<Game[]>{
    const url:string= this.apiBaseUrl+"/attendance/students/"+ id;
    return this.http
               .delete(url)
               .toPromise()
               .then(response => response as Game[])
               .catch(this.handleErrors);
  }

  

  private handleErrors(error: any):Promise<any> {
    console.log("Soemthing went wrong ", error);
    return Promise.reject(error.message || error);
  }
}
