import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FeatureComponent } from './feature/feature.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { ReviewComponent } from './review/review.component';
import { RegisterComponent } from './register/register.component';
import { WorkflowPageComponent } from './workflow-page/workflow-page.component';
import { WorkerComponent } from './worker/worker.component';
import { OfficeStaffComponent } from './office-staff/office-staff.component';

const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'feature',component:FeatureComponent},
  {path:'overview',component:OverviewComponent},
  {path:'review',component:ReviewComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'workflow-page',component:WorkflowPageComponent},
  {path:'worker',component:WorkerComponent},
  {path:'office-staff',component:OfficeStaffComponent},
  {path:'review',component:ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
