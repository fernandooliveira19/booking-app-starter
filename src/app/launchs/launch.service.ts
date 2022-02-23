import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Launch } from "./../bookings/booking.model";


@Injectable()
export class LaunchService{

    constructor(private http:HttpClient){

    }
   
}