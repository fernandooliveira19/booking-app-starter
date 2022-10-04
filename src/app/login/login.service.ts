import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do'

import { BOOKING_API_GATEWAY} from "../app.api";
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable()
export class LoginService{

    constructor(private http:HttpClient,
                private router:Router){

    }

    user:User

    isLoggedIn(): boolean{
        return this.user !== undefined
    }

    login(username:string, password:string): Observable<User>{

        const payload = new HttpParams()
        .set('username', username)
        .set('password', password)
       
        return this.http.post<User>(`${BOOKING_API_GATEWAY}/login`,payload)
        .do(user => this.user = user)
    }

    handleLogin(path?:string){

        this.router.navigate(['/login',btoa(path)])

    }

    

}