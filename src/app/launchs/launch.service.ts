import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Launch } from "./../bookings/booking.model";


@Injectable()
export class LaunchService{

    createLaunch = new EventEmitter<any>();

    constructor(private http:HttpClient){

    }
   
    addLaunch(launch: Launch){
        this.createLaunch.emit(launch)
    }
   
}