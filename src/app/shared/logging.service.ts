import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(nomAssignment:string, action:string){
    //afficher dans la console les actions
    console.log("Logging Service "+ nomAssignment + " "+ action);
  }
}
