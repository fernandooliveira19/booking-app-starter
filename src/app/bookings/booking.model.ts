class Booking{

    constructor(
    public checkIn : string,
    public checkOut: string,
    public travelerName : string,
    public bookingStatus: string, 
    public paymentStatus: string,
    public totalAmount: string,
    public contractType: string,
    public launchs: Launch[] = [],
    public id?: number,
    public paidAmount? : string,
    public pendingAmount? : string,
    public rating? : number
    ){}
}
class Launch{
    constructor(
    public paymentType: string,
    public scheduleDate:string,
    public paymentStatus:string,
    public amount:string,
    public paymentDate?:string){}
}
export {Booking, Launch}