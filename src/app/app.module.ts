import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './overview/overview.component';
import { FeatureComponent } from './feature/feature.component';
import { ReviewComponent } from './review/review.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { WorkflowPageComponent } from './workflow-page/workflow-page.component';
import { WorkerComponent } from './worker/worker.component';
import { OfficeStaffComponent } from './office-staff/office-staff.component';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    FeatureComponent,
    ReviewComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    WorkflowPageComponent,
    WorkerComponent,
    OfficeStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
