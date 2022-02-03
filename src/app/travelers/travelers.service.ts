import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Traveler} from "./traveler.model" 
import { Observable } from "rxjs";
import { BOOKING_API_GATEWAY, BOOKING_API_LOCAL} from "app/app.api"


@Injectable()
export class TravelersService{
    

    travelerList : Traveler []

    constructor(private http:HttpClient){
        
    }

    createTraveler(requestBody: Traveler):Observable<Traveler>{
      
        return this.http.post<Traveler>(`${BOOKING_API_GATEWAY}/v1/travelers`, requestBody)
           
    }

    findTravelersByName (filter: string) : Observable<Traveler[]>{
        
        return this.http.get<Traveler[]>(`${BOOKING_API_GATEWAY}/v1/travelers/find?name=${filter}`)
            
    }

    findTravelerById (id: number) : Observable<Traveler>{
        
        return this.http.get<Traveler>(`${BOOKING_API_GATEWAY}/v1/travelers/${id}`)
            
    }

    updateTraveler(requestBody: Traveler):Observable<Traveler>{
        return this.http.put<Traveler>(`${BOOKING_API_GATEWAY}/v1/travelers`, requestBody)
        
    }
    getActiveTravelers():Observable<Traveler[]> {
        return this.http.get<Traveler[]>(`${BOOKING_API_GATEWAY}/v1/travelers/actives/`)
       
    }
    
   
}