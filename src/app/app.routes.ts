import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { TravelerComponent } from './travelers/travelers.component'
export const ROUTES : Routes = [
    {path : '' ,  component: HomeComponent},
    {path : 'travelers', component:TravelerComponent}
]