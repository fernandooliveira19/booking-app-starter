import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Traveler} from "./traveler.model" 
import { Observable } from "rxjs";
import { BOOKING_API_GATEWAY} from "app/app.api"
import { Booking } from "app/bookings/booking.model";


@Injectable()
export class TravelersService{
    

    travelerList : Traveler []

    constructor(private http:HttpClient){
        
    }

    createTraveler(requestBody: Traveler):Observable<Traveler>{
      
        return this.http.post<Traveler>(`${BOOKING_API_GATEWAY}/travelers`, requestBody)
           
    }

    findTravelersByName (filter: string) : Observable<Traveler[]>{
        
        return this.http.get<Traveler[]>(`${BOOKING_API_GATEWAY}/travelers/find?name=${filter}`)
            
    }

    findTravelerById (id: number) : Observable<Traveler>{
        
        return this.http.get<Traveler>(`${BOOKING_API_GATEWAY}/travelers/${id}`)
            
    }

    updateTraveler(requestBody: Traveler):Observable<Traveler>{
        return this.http.put<Traveler>(`${BOOKING_API_GATEWAY}/travelers`, requestBody)
        
    }
    getActiveTravelers():Observable<Traveler[]> {
        return this.http.get<Traveler[]>(`${BOOKING_API_GATEWAY}/travelers/actives/`)
       
    }

    findBookingsByTraveler(id: number):Observable<Booking[]>{
        return this.http.get<Booking[]>(`${BOOKING_API_GATEWAY}/travelers/${id}/bookings`)
    }


    
   
}