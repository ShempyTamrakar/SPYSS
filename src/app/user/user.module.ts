import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OwlModule} from 'ngx-owl-carousel';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { PreviewEventComponent } from './pages/preview-event/preview-event.component';
import { TopSliderComponent } from './pages/top-slider/top-slider.component';
import { BranchListComponent } from './pages/branch-list/branch-list.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import {LoginService} from './services/login.service';
import { ContactComponent } from './pages/contact/contact.component';
import { NearestBranchComponent } from './pages/nearest-branch/nearest-branch.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BranchReportComponent } from './pages/branch-report/branch-report.component';
import { EventReportComponent } from './pages/event-report/event-report.component';
import { YogaBandhusComponent } from './pages/yoga-bandhus/yoga-bandhus.component';
import { SideIconComponent } from './shared/side-icon/side-icon.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectFilterModule } from 'mat-select-filter';

@NgModule({
  declarations: [UserComponent, HomeComponent, HeaderComponent, FooterComponent, AboutComponent, EventsComponent, PreviewEventComponent, TopSliderComponent, BranchListComponent, GalleryComponent, LoginComponent, SignupComponent, RecoverPasswordComponent, ContactComponent, NearestBranchComponent, DashboardComponent, BranchReportComponent, EventReportComponent, YogaBandhusComponent,SideIconComponent],
  
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OwlModule,
    Ng2OrderModule,
  MatTableModule,
  MatSortModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectFilterModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers : [LoginService]
 
})
export class UserModule { }
