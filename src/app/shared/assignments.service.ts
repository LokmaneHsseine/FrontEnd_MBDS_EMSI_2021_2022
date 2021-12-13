import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignement } from '../assignments/assignments.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {


  assignments:Assignement[] = [];

  url = 'https://api-mbds-2021-lokmane.herokuapp.com/api/assignments';

  constructor(private loggingService:LoggingService,
              private http:HttpClient) { }

  getAssignment():Observable< Assignement[]>{
    //return of (this.assignments);
    return this.http.get<Assignement[]>(this.url);
  }

  getAssignments(id:number):Observable< Assignement|undefined>{
    //let a = this.assignments.find(elm => elm.id ===id);
    //return of(a);

    return this.http.get<Assignement>(this.url + "/"+id);
  }



  addAssignment(assignment:Assignement) : Observable<any>{
    //l'ajout 
    //this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "Ajouté");
    //return of("Assignement ajouté");
    return this.http.post(this.url, assignment);
  }



  updateAssignment(assignment:Assignement|undefined):Observable<any>{
    // la modification ici
    if(assignment)
    this.loggingService.log(assignment.nom, "Modifié");
    //return of("Assignement modifié");
    return this.http.put<Assignement>(this.url, assignment);
  }



  deleteAssignment(assignment:Assignement):Observable<any>{
    // la suppression
  
    this.loggingService.log(assignment.nom, "Supprimé");

    return this.http.delete(this.url + "/" + assignment._id);
  }
}
