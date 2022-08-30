import { Injectable, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BOOKING_API_GATEWAY} from "app/app.api";
import { ErrorHandler } from "app/app.error-handler";
import { Observable } from "rxjs";
import { Booking} from "./booking.model";

import { TravelersService } from "app/travelers/travelers.service";
import { Traveler } from 'app/travelers/traveler.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from "app/shared/messages/notification.service";
import { Launch } from "app/launchs/launch.model";
import { map } from 'rxjs/operators';


@Injectable()
export class BookingService {

  booking: Booking;
  travelers: Traveler[];
  launchs: Launch[] = [];
  launch: Launch;

  contractTypeList: any = [
    { label: 'Direto com viajante', value: 'DIRECT' },
    { label: 'Site', value: 'SITE' }
  ];

  bookingStatusList: any = [
    { label: 'Reservado', value: 'RESERVED' },
    { label: 'Pré-Reservado', value: 'PRE_RESERVED' },
    { label: 'Cancelado', value: 'CANCELED'},
    { label: 'Estadia Atual', value: 'CURRENT_BOOKING'},
    { label: 'Finalizado', value: 'FINISHED'}
  ];
  paymentStatusList: any = [
    { label: 'Pago', value: 'PAID' },
    { label: 'Pendente', value: 'PENDING' }
  ];

  constructor(private http: HttpClient,
    public travelerService: TravelersService,
    private notificationService: NotificationService) {

  }
  getCreateBookingForm(): FormGroup {
    return new FormGroup({
      travelerId: new FormControl('', [Validators.required]),
      checkIn: new FormControl('', [Validators.required]),
      checkOut: new FormControl('', [Validators.required]),
      amountTotal: new FormControl('', [Validators.required]),
      bookingStatus: new FormControl('', [Validators.required]),
      paymentStatus: new FormControl('', [Validators.required]),
      contractType: new FormControl('', [Validators.required]),
      adults: new FormControl('', [Validators.required]),
      children: new FormControl('', [Validators.required]),
      observation : new FormControl('')
    });
  }

  getUpdateBookingForm(booking: Booking): FormGroup {
    return new FormGroup({
      travelerId: new FormControl(booking.travelerId, [Validators.required]),
      checkIn: new FormControl(booking.checkIn, [Validators.required]),
      checkOut: new FormControl(booking.checkOut, [Validators.required]),
      amountTotal: new FormControl(booking.amountTotal, [Validators.required]),
      bookingStatus: new FormControl(booking.bookingStatus, [Validators.required]),
      paymentStatus: new FormControl(booking.paymentStatus, [Validators.required]),
      contractType: new FormControl(booking.contractType, [Validators.required]),
      adults: new FormControl(booking.adults, [Validators.required]),
      children: new FormControl(booking.children, [Validators.required]),
      observation : new FormControl(booking.observation),
      id: new FormControl(booking.id)
      
    });
  }

  getActiveTravelers() {
    this.travelerService.getActiveTravelers()
      .subscribe(response => this.travelers = response);
  }



  findBookingById(id: number): Observable<Booking> {

    return this.http
      .get<Booking>(`${BOOKING_API_GATEWAY}/v1/bookings/${id}`)

  }

  findBookings(): Observable<Booking[]> {

    return this.http.get<Booking[]>(`${BOOKING_API_GATEWAY}/v1/bookings`)

  }

  create(booking: FormGroup) {
    
    var body = {
      ...booking.value,
      launchs: this.launchs
    };

    this.createBooking(body).subscribe(response => this.booking,
      response => this.notificationService.notify(response.error.message),
      () => {
        this.notificationService.notify(`Reserva cadastrada com sucesso`)
      });
  }

  createBooking(requestBody: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${BOOKING_API_GATEWAY}/v1/bookings`, requestBody)
  }

  update(booking: FormGroup){
   
    var body = {
      ...booking.value,
      launchs: this.launchs
    };

    this.updateBooking(body).subscribe(response => this.booking,
      response => this.notificationService.notify(response.error.message),
      () => {
        this.notificationService.notify(`Reserva atualizada com sucesso`)
      });
  }

  updateBooking(requestBody: Booking): Observable<Booking> {
   
    
    let bookingId = requestBody.id;
   
    return this.http.put<Booking>(`${BOOKING_API_GATEWAY}/v1/bookings/${bookingId}`, requestBody)
  }

  generateContract(bookingId: number): Observable<Blob>{
    const options = {responseType: 'blob' as 'json'};
    const url = `${BOOKING_API_GATEWAY}/v1/bookings/${bookingId}/contract`;
    
    return this.http.get<Blob>(url, options)
    .pipe(map(res => new Blob([res], {type :'application/pdf'})));
    
  }

  generateAuthorization(bookingId: number): Observable<Blob>{
    const options = {responseType: 'blob' as 'json'};
    const url = `${BOOKING_API_GATEWAY}/v1/bookings/${bookingId}/authorization`;
    
    return this.http.get<Blob>(url, options)
    .pipe(map(res => new Blob([res], {type :'application/pdf'})));
    
  }

  finishBooking(requestBody: Booking): Observable<Booking> {
    let bookingId = requestBody.id;
   
    return this.http.put<Booking>(`${BOOKING_API_GATEWAY}/v1/bookings/finish/${bookingId}`, requestBody)
  }

}