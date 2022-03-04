import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Launch } from "./../launchs/launch.model";
import { BOOKING_API_GATEWAY } from "app/app.api";


@Injectable()
export class LaunchService{

    constructor(private http:HttpClient){

    }

    deleteLaunch(id: number): Observable<VoidFunction> {
        return this.http.delete<VoidFunction>(`${BOOKING_API_GATEWAY}/v1/launchs/${id}`);
    }
   
}