import { AssignmentsComponent } from "./assignments/assignments.component";
import { RouterModule, Routes } from '@angular/router';
import { AddAssignmentComponent } from "./assignments/add-assignment/add-assignment.component";
import { AssignmentsDetailComponent } from "./assignments/assignments-detail/assignments-detail.component";
import { EditAssignmentComponent } from "./assignments/edit-assignment/edit-assignment.component";
import { AuthGuard } from "./shared/auth.guard";

const routes:Routes = [
    {
      path:"",
      component:AssignmentsComponent
    },
    {
      path:"home",
      component:AssignmentsComponent
    },
    {
      path:"add",
      component:AddAssignmentComponent
    },
    {
      path:"assignment/:id",
      component:AssignmentsDetailComponent
    },
    {
      path:"assignment/:id/edit",
      component:EditAssignmentComponent,
      canActivate:[AuthGuard]
    },

    //En cas d'un lien inexsistant 
    {
      path:'**',
      redirectTo: 'not-found.html'
    },
    
  ]

  export {routes}