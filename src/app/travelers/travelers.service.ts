import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Traveler} from "./traveler.model" 
import { Observable } from "rxjs";
import { BOOKING_API_GATEWAY} from "app/app.api"
import { environment } from '../../environments/environment';


@Injectable()
export class TravelersService{
    

    travelerList : Traveler []

    constructor(private http:HttpClient){
        
    }

    createTraveler(requestBody: Traveler):Observable<Traveler>{
      
        return this.http.post<Traveler>(`${environment.GATEWAY}/travelers`, requestBody)
           
    }

    findTravelersByName (filter: string) : Observable<Traveler[]>{
        
        return this.http.get<Traveler[]>(`${environment.GATEWAY}/travelers/find?name=${filter}`)
            
    }

    findTravelerById (id: number) : Observable<Traveler>{
        
        return this.http.get<Traveler>(`${environment.GATEWAY}/travelers/${id}`)
            
    }

    updateTraveler(requestBody: Traveler):Observable<Traveler>{
        return this.http.put<Traveler>(`${environment.GATEWAY}/travelers`, requestBody)
        
    }
    getActiveTravelers():Observable<Traveler[]> {
        return this.http.get<Traveler[]>(`${environment.GATEWAY}/travelers/actives/`)
       
    }
    
   
}