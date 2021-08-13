import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { TravelerFormComponent } from './travelers/traveler-form/traveler-form.component'
import { TravelerListComponent } from './travelers/traveler-list/traveler-list.component'
import { TravelerDetailComponent } from './travelers/traveler-detail/traveler-detail.component'
import { TravelerResolverGuard } from './travelers/traveler.resolver.guard'
import { BookingListComponent } from './bookings/booking-list/booking-list.component'
import { BookingFormComponent } from './bookings/booking-form/booking-form.component'
export const ROUTES : Routes = [
    {path : '' ,  component: HomeComponent},
    {path : 'login', component:LoginComponent},
    {path : 'travelers', component:TravelerListComponent,},
    {path : 'travelers/update/:id', component:TravelerDetailComponent,
        resolve:{
            travelerSaved : TravelerResolverGuard
        }
    },
    {path : 'travelers/create', component:TravelerFormComponent},
    {path : 'bookings', component:BookingListComponent },
    {path : 'bookings/create', component:BookingFormComponent}
       
]