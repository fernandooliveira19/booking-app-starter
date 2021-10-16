import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TravelerListComponent } from './travelers/traveler-list/traveler-list.component'
import { LocationStrategy, HashLocationStrategy,registerLocaleData } from '@angular/common';
import locatePt from '@angular/common/locales/pt'
registerLocaleData(locatePt,'pt')

import {ROUTES} from './app.routes';
import { InputComponent } from './shared/input/input.component';
import { TravelerFormComponent } from './travelers/traveler-form/traveler-form.component';
import { LoginComponent } from './login/login.component';
import { TravelerListItemComponent } from './travelers/traveler-list/traveler-list-item/traveler-list-item.component';
import { TravelersService } from './travelers/travelers.service';
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelerDetailComponent } from './travelers/traveler-detail/traveler-detail.component';
import { TravelerResolverGuard } from './travelers/traveler.resolver.guard';
import { BookingFormComponent } from './bookings/booking-form/booking-form.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';
import { BookingService } from './bookings/booking.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TravelerListComponent,
    InputComponent,
    TravelerFormComponent,
    LoginComponent,
    TravelerListItemComponent,
    TravelerDetailComponent,
    BookingFormComponent,
    BookingListComponent


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    TravelersService,
    FormBuilder,
    TravelerResolverGuard,
    BookingService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
