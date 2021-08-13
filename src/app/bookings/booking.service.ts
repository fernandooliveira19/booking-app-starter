import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BOOKING_MOCKOON } from "app/app.api";
import { ErrorHandler } from "app/app.error-handler";
import { Observable } from "rxjs/Observable";
import { Booking } from "./booking.model";


@Injectable()
export class BookingService{

    bookingList : Booking[]

    constructor(private http:Http){

    }

    findBookingById (id: number) : Observable<Booking>{
        
        return this.http.get(`${BOOKING_MOCKOON}/bkn-booking/v1/bookings/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    findBookings() : Observable<Booking[]>{
        
        return this.http.get(`${BOOKING_MOCKOON}/bkn-booking/v1/bookings`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
}