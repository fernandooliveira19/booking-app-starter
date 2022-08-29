import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'bkn-booking-list',
  templateUrl: './booking-list.component.html'
})
export class BookingListComponent implements OnInit {

  findForm : FormGroup

  bookings : Booking[]
  
  constructor(private bookingService : BookingService,
              private formBuilder : FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.findForm = this.formBuilder.group({
      bookingDate : this.formBuilder.control(''),
      travelerName : this.formBuilder.control(''),
      paymentStatus : this.formBuilder.control(''),
      bookingStatus : this.formBuilder.control('')
       
    })
  }

  findBookings(){
    this.bookingService.findBookings()
    .subscribe(response => this.bookings = response);
  

  } 

  updateBooking(id: number){
    this.router.navigate(['update', id], {relativeTo: this.route});
  }

  clear(){

  }

}
