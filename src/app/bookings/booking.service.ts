import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BOOKING_MOCKOON } from "app/app.api";
import { ErrorHandler } from "app/app.error-handler";
import { Observable } from "rxjs";
import { Booking } from "./booking.model";


@Injectable()
export class BookingService{

    bookingList : Booking[]

    constructor(private http:HttpClient){

    }

    findBookingById (id: number) : Observable<Booking>{
        
        return this.http
            .get<Booking>(`${BOOKING_MOCKOON}/bkn-booking/v1/bookings/${id}`)
         
    }

    findBookings() : Observable<Booking[]>{
        
        return this.http.get<Booking[]>(`${BOOKING_MOCKOON}/bkn-booking/v1/bookings`)
       
    }

    createBooking(booking: Booking): Observable<Booking>{
        console.log(booking)
        return this.http.post<Booking>(`${BOOKING_MOCKOON}/bkn-booking/v1/bookings`, booking)
    }
}