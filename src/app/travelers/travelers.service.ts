import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Traveler} from "./traveler.model" 
import { Observable } from "rxjs";
import { BOOKING_API_GATEWAY} from "app/app.api"
import { catchError} from 'rxjs/operators'

import {ErrorHandler} from "app/app.error-handler"

@Injectable()
export class TravelersService{
    

    travelerList : Traveler []

    constructor(private http:HttpClient){
        
    }

    createTraveler(requestBody: Traveler):Observable<Traveler>{
      
        return this.http.post<Traveler>(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/create`, requestBody)
           
    }

    findTravelersByName (filter: string) : Observable<Traveler[]>{
        
        return this.http.get<Traveler[]>(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/find?name=${filter}`)
            
    }

    findTravelerById (id: number) : Observable<Traveler>{
        
        return this.http.get<Traveler>(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/${id}`)
            
    }

    updateTraveler(requestBody: Traveler):Observable<Traveler>{
        console.log(requestBody)
        return this.http.put<Traveler>(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/update`, requestBody)
        
    }
    getActiveTravelers():Observable<Traveler[]> {
        return this.http.get<Traveler[]>(`${BOOKING_API_GATEWAY}/bkn-traveler/v1/travelers/actives/`)
       
    }
    
   
}