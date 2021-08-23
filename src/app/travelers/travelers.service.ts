import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Traveler} from "./traveler.model" 
import { Observable } from "rxjs/Observable";
import { BOOKING_API_GATEWAY} from "app/app.api"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from "app/app.error-handler"

@Injectable()
export class TravelersService{
    

    travelerList : Traveler []

    constructor(private http:HttpClient){
        
    }

    createTraveler(requestBody: Traveler):Observable<Traveler>{
      
        return this.http.post<Traveler>(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/create`, requestBody)
            .catch(ErrorHandler.handleError)
    }

    findTravelersByName (filter: string) : Observable<Traveler[]>{
        
        return this.http.get<Traveler[]>(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/find?name=${filter}`)
            .catch(ErrorHandler.handleError)
    }

    findTravelerById (id: number) : Observable<Traveler>{
        
        return this.http.get<Traveler>(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/${id}`)
            .catch(ErrorHandler.handleError)
    }

    updateTraveler(requestBody: Traveler):Observable<Traveler>{
        
        return this.http.put<Traveler>(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/update`, requestBody)
        .catch(ErrorHandler.handleError)
    }
    getActiveTravelers():Observable<Traveler[]> {
        return this.http.get<Traveler[]>(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/actives/`)
        .catch(ErrorHandler.handleError)
    }
    
   
}