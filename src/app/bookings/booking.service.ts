import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BOOKING_API_GATEWAY, BOOKING_API_LOCAL, BOOKING_MOCKOON } from "app/app.api";
import { ErrorHandler } from "app/app.error-handler";
import { Observable } from "rxjs";
import { Booking} from "./booking.model";

import { TravelersService } from "app/travelers/travelers.service";
import { Traveler } from 'app/travelers/traveler.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from "app/shared/messages/notification.service";
import { Launch } from "app/launchs/launch.model";


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
    { label: 'Pós-Estadia', value: 'AFTER_BOOKING'}
  ];
  paymentStatusList: any = [
    { label: 'Pago', value: 'PAID' },
    { label: 'Pendente', value: 'PENDING' }
  ];

  constructor(private http: HttpClient,
    public travelerService: TravelersService,
    private notificationService: NotificationService) {

  }
  getBookingForm(): FormGroup {
    return new FormGroup({
      travelerId: new FormControl('', [Validators.required]),
      checkIn: new FormControl('', [Validators.required]),
      checkOut: new FormControl('', [Validators.required]),
      totalAmount: new FormControl('', [Validators.required]),
      bookingStatus: new FormControl('', [Validators.required]),
      paymentStatus: new FormControl('', [Validators.required]),
      contractType: new FormControl('', [Validators.required]),
      adults: new FormControl('', [Validators.required]),
      children: new FormControl('', [Validators.required]),
      observation : new FormControl('')
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
    console.log(booking.value)
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

}