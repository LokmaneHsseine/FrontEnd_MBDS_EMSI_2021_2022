import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignement } from './assignments.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {


  assignments:Assignement[] = [];

  displayedColumns: string[] = ['id', 'nom', 'dateRendu', 'rendu', 'action'];
  dataSource = this.assignments;

  constructor(private assignmentService:AssignmentsService) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment(){
    this.assignmentService.getAssignment()
    .subscribe(assignments=>{
      this.assignments = assignments;
    });
  }

}
