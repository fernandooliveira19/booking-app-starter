import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booking } from '../booking.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'bkn-booking-form',
  templateUrl: './booking-form.component.html'
})
export class BookingFormComponent implements OnInit {

  createForm :FormGroup
  booking: Booking

  items : any[]

  constructor(
    private bookingService: BookingService,
    private formBuilder : FormBuilder) { }

  ngOnInit() {

    this.createForm = this.formBuilder.group({
      traveler : this.formBuilder.control('', [Validators.required]),
      checkIn : this.formBuilder.control('', [Validators.required ]),
      checkOut : this.formBuilder.control('', [Validators.required ]),
      totalAmount : this.formBuilder.control('', [Validators.required]),
      bookingStatus: this.formBuilder.control('',[Validators.required]),
      paymentStatus: this.formBuilder.control('',[Validators.required]),
      contractType: this.formBuilder.control('',[Validators.required]),
      adults: this.formBuilder.control('',[Validators.required]),
      children: this.formBuilder.control('',[Validators.required])});


      this.items = [{
        id: 1,
        label: 'aLabel',
        subItem: { name: 'aSubItem' }
      }, {
        id: 2,
        label: 'bLabel',
        subItem: { name: 'bSubItem' }
      }];

  }

}
