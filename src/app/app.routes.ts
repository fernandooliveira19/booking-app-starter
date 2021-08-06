import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { TravelerFormComponent } from './travelers/traveler-form/traveler-form.component'
import { TravelerListComponent } from './travelers/traveler-list/traveler-list.component'
export const ROUTES : Routes = [
    {path : '' ,  component: HomeComponent},
    {path : 'login', component:LoginComponent},
    {path : 'travelers', component:TravelerListComponent,
        children:[
            {path:'travelers/:id', component:TravelerFormComponent}
        ]
    },
    {path : 'traveler-form', component:TravelerFormComponent}
       
]