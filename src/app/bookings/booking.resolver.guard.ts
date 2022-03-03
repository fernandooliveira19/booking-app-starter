import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from "@angular/router";
import { Observable } from "rxjs";
import { Booking } from "./booking.model";
import { BookingService } from "./booking.service";

@Injectable()
export class BookingResolverGuard implements Resolve<Booking>{

    constructor (private bookingService : BookingService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Booking | Observable<Booking> | Promise<Booking>{
        if(route.params && route.params['id']){
            return this.bookingService.findBookingById(route.params['id']);
        }
    }

}

