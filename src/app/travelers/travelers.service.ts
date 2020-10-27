import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {Traveler} from "./traveler.model" 
import { Observable } from "rxjs/Observable";
import { BOOKING_API} from "app/app.api"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from "app/app.error-handler"

@Injectable()
export class TravelersService{

    travelerList : Traveler []

    constructor(private http:Http){
        
    }

    travelers () : Observable<Traveler[]>{
        
        return this.http.get(`${BOOKING_API}/travelers`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError)
    }
}