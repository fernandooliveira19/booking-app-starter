import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {Traveler} from "./traveler.model" 
import { Observable } from "rxjs/Observable";
import { BOOKING_API_GATEWAY} from "app/app.api"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from "app/app.error-handler"

@Injectable()
export class TravelersService{

    travelerList : Traveler []

    constructor(private http:Http){
        
    }

    findTravelersByName () : Observable<Traveler[]>{
        
        return this.http.get(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/find?name=`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
    
   
}