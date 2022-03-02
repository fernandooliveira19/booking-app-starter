import {Launch} from 'app/launchs/launch.model';
class Booking{
   travelerId: number;    
   checkIn : string;
   checkOut: string;
   travelerName : string;
   bookingStatus: string; 
   paymentStatus: string;
   amountTotal: number;
   contractType: string;
   children : number;
   adults: number;    
   launchs: Launch[] = [];
   id?: number;
   amountPaid? : number;
   amountPending? : number;
   rating? : number;

}

export {Booking}