import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { TravelerFormComponent } from './travelers/traveler-form/traveler-form.component'
import { TravelerListComponent } from './travelers/traveler-list/traveler-list.component'
export const ROUTES : Routes = [
    {path : '' ,  component: HomeComponent},
    {path : 'traveler-list', component:TravelerListComponent},
    {path : 'traveler-form', component:TravelerFormComponent}
]