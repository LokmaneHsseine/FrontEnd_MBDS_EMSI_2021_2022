import { Component, OnInit } from '@angular/core';
import { Assignement } from '../assignments.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {

  assignment?:Assignement;

  // Champs formulaire
  nomAssignment?:string;
  dateDeRendu?:Date;

  constructor(private activatedRoute:ActivatedRoute,
              private assignmentsService:AssignmentsService,
              private router:Router) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];

    this.assignmentsService.getAssignments(id)
    .subscribe(assignment =>{
      this.assignment = assignment;
      this.nomAssignment = assignment?.nom;
      this.dateDeRendu = assignment?.dateRendu;

    })
  }



  onSaveAssignment() {
      
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, change it!'
}).then((result) => {
  if (result.isConfirmed) {
    if (!this.assignment) return;
 
    if (this.nomAssignment) {
      this.assignment.nom = this.nomAssignment;
    }
 
    if (this.dateDeRendu) {
      this.assignment.dateRendu = this.dateDeRendu;
    }
    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe((message) => {console.log(message)

        // navigation vers la home page
        this.router.navigate(['/home']);
      });
  }
})
 
    
    
  }
 
}