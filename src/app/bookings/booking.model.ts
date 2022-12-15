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
   launches: Launch[] = [];
   id?: number;
   amountPaid? : number;
   amountPending? : number;
   rating? : number;
   observation? : string; 
   websiteServiceFee? : number; 

}

export {Booking}