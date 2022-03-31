import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FeatureComponent } from './feature/feature.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'feature',component:FeatureComponent},
  {path:'overview',component:OverviewComponent},
  {path:'review',component:ReviewComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
