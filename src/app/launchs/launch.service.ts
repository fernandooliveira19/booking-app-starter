import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Launch } from "./../launchs/launch.model";
import { BOOKING_API_GATEWAY } from "app/app.api";
import { LoginService } from "app/login/login.service";
import { environment } from '../../environments/environment';


@Injectable()
export class LaunchService{

    constructor(private http:HttpClient,
                private loginService:LoginService){

    }

    

    deleteLaunch(id: number): Observable<VoidFunction> {
        return this.http.delete<VoidFunction>(`${environment.GATEWAY}/launches/${id}`);
    }

    findNextLaunchs(): Observable<Launch[]> {
       

        return this.http.get<Launch[]>(`${environment.GATEWAY}/launches/next`)
    
    }
   
}