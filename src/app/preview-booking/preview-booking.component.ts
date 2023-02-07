import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PreviewBookingResponse } from './preview-booking.model.response';
import { PreviewBookingService } from './preview-booking.service';

@Component({
  selector: 'bkn-preview-booking',
  templateUrl: './preview-booking.component.html'
})
export class PreviewBookingComponent implements OnInit {

  previewBookingForm : FormGroup;
  preview : PreviewBookingResponse;

  constructor(private previewBookingService: PreviewBookingService) { }

  ngOnInit(): void {

    this.previewBookingForm = this.previewBookingService.getPreviewBookingForm();
  }

  previewBooking(){
    this.previewBookingService.previewBooking(this.previewBookingForm.value)
    .subscribe(response => this.preview = response);
  
  }
  reset(){
    this.previewBookingForm = this.previewBookingService.getPreviewBookingForm();
    this.preview = undefined;

  }

}
