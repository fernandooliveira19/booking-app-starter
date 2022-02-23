import {Launch} from 'app/launchs/launch.model';
class Booking{
   travelerId: number;    
   checkIn : string;
   checkOut: string;
   travelerName : string;
   bookingStatus: string; 
   paymentStatus: string;
   totalAmount: string;
   contractType: string;
   children : number;
   adults: number;    
   launchs: Launch[] = [];
   id?: number;
   paidAmount? : string;
   pendingAmount? : string;
   rating? : number;
}

export {Booking}