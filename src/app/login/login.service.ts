import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'

import { BOOKING_API_GATEWAY} from "../app.api";
import { User } from './user.model';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService{

    constructor(private http:HttpClient,
                private router:Router){
        this.router.events
        .filter(e => e instanceof NavigationEnd)
        .subscribe( (e: NavigationEnd) => this.lastUrl = e.url)                
    }

    user:User
    lastUrl : string

    isLoggedIn(): boolean{
        return this.user !== undefined
    }

    login(username:string, password:string): Observable<User>{

        const payload = new HttpParams()
        .set('username', username)
        .set('password', password)
       
        return this.http.post<User>(`${environment.GATEWAY}/login`,payload)
        .do(user => this.user = user)
    }

    handleLogin(path:string = this.lastUrl){

        this.router.navigate(['/login',btoa(path)])

    }

    logout(){
        this.user = undefined
        this.router.navigate(['/login'])
    }

    

}