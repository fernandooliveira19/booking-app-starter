import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TravelerListComponent } from './travelers/traveler-list/traveler-list.component'
import { registerLocaleData } from '@angular/common';
import locatePt from '@angular/common/locales/pt'
registerLocaleData(locatePt,'pt')

import {ROUTES} from './app.routes';
import { InputComponent } from './shared/input/input.component';
import { TravelerFormComponent } from './travelers/traveler-form/traveler-form.component';
import { LoginComponent } from './login/login.component';
import { TravelersService } from './travelers/travelers.service';
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelerDetailComponent } from './travelers/traveler-detail/traveler-detail.component';
import { TravelerResolverGuard } from './travelers/traveler.resolver.guard';
import { BookingFormComponent } from './bookings/booking-form/booking-form.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';
import { BookingService } from './bookings/booking.service';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SnackbarComponent } from './shared/messages/snackbar/snackbar.component'
import { NotificationService} from './shared/messages/notification.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { MatNativeDateModule} from '@angular/material/core';
import { LaunchService} from './launchs/launch.service';
import { LaunchComponent } from './launchs/launch/launch.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LOCALE_ID } from '@angular/core';
import { BookingResolverGuard } from './bookings/booking.resolver.guard';
import { PaymentStatusPipe } from './shared/pipe/payment-status.pipe';
import { PaymentTypePipe } from './shared/pipe/payment-type.pipe';
import { BookingStatusPipe } from './shared/pipe/booking-status.pipe';
import { LaunchListComponent } from './launchs/launch-list/launch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TravelerListComponent,
    InputComponent,
    TravelerFormComponent,
    LoginComponent,
    TravelerDetailComponent,
    BookingFormComponent,
    BookingListComponent,
    SnackbarComponent,
    LaunchComponent,
    PaymentStatusPipe,
    PaymentTypePipe,
    BookingStatusPipe,
    LaunchListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' }),
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    BrowserAnimationsModule, 
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    CurrencyMaskModule,
    MatDatepickerModule
   
  
  ],
  providers: [
    TravelersService,
    FormBuilder,
    TravelerResolverGuard,
    BookingResolverGuard,
    BookingService,
    NotificationService,
    LaunchService,
    {
      provide:MatDialogRef,
      useValue : {}
    },
    { provide: LOCALE_ID,
      useValue: 'pt-BR'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
