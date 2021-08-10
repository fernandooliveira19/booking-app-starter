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

    createTraveler(requestBody: Traveler):Observable<Traveler>{
      
        return this.http.post(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/create`, requestBody)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    findTravelersByName (filter: string) : Observable<Traveler[]>{
        
        return this.http.get(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/find?name=${filter}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    findTravelerById (id: number) : Observable<Traveler>{
        
        return this.http.get(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    updateTraveler(requestBody: Traveler):Observable<Traveler>{
        console.log(requestBody)
        return this.http.put(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/update`, requestBody)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
    
   
}