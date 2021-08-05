import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TravelerListComponent } from './travelers/traveler-list/traveler-list.component'

import {ROUTES} from './app.routes';
import { InputComponent } from './shared/input/input.component';
import { TravelerFormComponent } from './travelers/traveler-form/traveler-form.component';
import { LoginComponent } from './login/login.component';
import { TravelerListItemComponent } from './travelers/traveler-list/traveler-list-item/traveler-list-item.component';
import { TravelersService } from './travelers/travelers.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TravelerListComponent,
    InputComponent,
    TravelerFormComponent,
    LoginComponent,
    TravelerListItemComponent


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    TravelersService,
    FormBuilder 
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
