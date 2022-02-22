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
class Launch{
   
    bookingId?: number;
    paymentType: string;
    scheduleDate:string;
    paymentStatus:string;
    amount:string;
    paymentDate?:string;
}
export {Booking, Launch}