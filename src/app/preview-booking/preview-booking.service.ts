import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BOOKING_API_GATEWAY} from "./../app.api";
import { Observable } from "rxjs";


import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from "./../shared/messages/notification.service";

import { PreviewBookingRequest } from "./preview-booking.model.request";
import { PreviewBookingResponse } from "./preview-booking.model.response";


@Injectable()
export class PreviewBookingService {

  previewBookingForm: FormGroup;

  
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService) {

  }
  getPreviewBookingForm(): FormGroup {
    return new FormGroup({
      checkIn: new FormControl('', [Validators.required]),
      checkOut: new FormControl('', [Validators.required]),
      dailyRate: new FormControl('', [Validators.required]),
      cleaningFee: new FormControl('')
    });
  }

  /*

  preview(previewBookingForm: FormGroup): Observable<PreviewBookingResponse[]>  {

    return this.previewBooking(this.previewBookingForm.value).subscribe(response => this.previewBookingResponse,
      response => this.notificationService.notify(response.error.message),
      () => {
        this.notificationService.notify(`Calculo de reserva efetuado com sucesso`)
      });
  }
  */

  previewBooking(requestBody: PreviewBookingRequest): Observable<PreviewBookingResponse> {
    return this.http.post<PreviewBookingResponse>(`${BOOKING_API_GATEWAY}/tools/bookings/preview`, requestBody)
  }
  
}