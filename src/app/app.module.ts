import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { RestService } from './user/services/rest.service';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,

  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
