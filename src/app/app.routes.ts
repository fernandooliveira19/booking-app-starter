import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { TravelerFormComponent } from './travelers/traveler-form/traveler-form.component'
import { TravelerListComponent } from './travelers/traveler-list/traveler-list.component'
import { TravelerDetailComponent } from './travelers/traveler-detail/traveler-detail.component'
import { TravelerResolverGuard } from './travelers/traveler.resolver.guard'
import { BookingResolverGuard} from './bookings/booking.resolver.guard'
import { BookingListComponent } from './bookings/booking-list/booking-list.component'
import { BookingFormComponent } from './bookings/booking-form/booking-form.component'
import { LaunchListComponent } from './launchs/launch-list/launch-list.component'
import { LoggedInGuard } from './security/loggedin.guard'
import { TravelerInfoComponent } from './travelers/traveler-info/traveler-info.component'

export const ROUTES : Routes = [
    {path : '' ,  component: HomeComponent},
    {path : 'login/:to', component:LoginComponent},
    {path : 'login', component:LoginComponent},
    {path : 'home', component:HomeComponent},
    {path : 'travelers', component:TravelerListComponent,canLoad: [LoggedInGuard],canActivate:[LoggedInGuard]},
    {path : 'travelers/detail/:id', component:TravelerDetailComponent,
        resolve:{
            travelerSaved : TravelerResolverGuard
        },canLoad: [LoggedInGuard],canActivate:[LoggedInGuard]
    },
    {path : 'travelers/info/:id', component:TravelerInfoComponent,
        resolve:{
            travelerSaved : TravelerResolverGuard
        },canLoad: [LoggedInGuard],canActivate:[LoggedInGuard]
    },
    {path : 'travelers/create', component:TravelerFormComponent,canLoad: [LoggedInGuard],canActivate:[LoggedInGuard]},
    {path : 'bookings', component:BookingListComponent, canLoad: [LoggedInGuard],canActivate:[LoggedInGuard] },
    {path : 'bookings/detail/:id', component:BookingFormComponent,
        resolve:{
            bookingSaved : BookingResolverGuard
        },canLoad: [LoggedInGuard],canActivate:[LoggedInGuard]
    },
    {path : 'bookings/create', component:BookingFormComponent,canLoad: [LoggedInGuard],canActivate:[LoggedInGuard]},
    {path : 'launchs', component:LaunchListComponent, canLoad: [LoggedInGuard],canActivate:[LoggedInGuard]}
       
]