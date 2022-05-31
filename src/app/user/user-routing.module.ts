import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AboutComponent } from './pages/about/about.component';
import { BranchListComponent } from './pages/branch-list/branch-list.component';
import { BranchReportComponent } from './pages/branch-report/branch-report.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventReportComponent } from './pages/event-report/event-report.component';
import { EventsComponent } from './pages/events/events.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NearestBranchComponent } from './pages/nearest-branch/nearest-branch.component';
import { PreviewEventComponent } from './pages/preview-event/preview-event.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { YogaBandhusComponent } from './pages/yoga-bandhus/yoga-bandhus.component';



const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
       {
        path: "events",
        component: EventsComponent
      },
      {
        path: "preview_event",
        component:PreviewEventComponent
      },
      {
        path: "branch-list",
        component: BranchListComponent
      },
      {
        path: "gallery",
        component:GalleryComponent
      },
      {
        path: "login",
        component:LoginComponent
      },
      {
        path: "recover_password",
        component:RecoverPasswordComponent
      },
      {
        path: "signup",
        component:SignupComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "nearest-branch",
        component: NearestBranchComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "branch-report",
        component: BranchReportComponent
      },
      {
        path: "event-report",
        component: EventReportComponent
      },
      {
        path: "yoga-bandhus",
        component: YogaBandhusComponent
      },
      
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
