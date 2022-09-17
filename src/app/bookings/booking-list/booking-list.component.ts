import { HttpParams } from '@angular/common/http';
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
  
  constructor(public bookingService : BookingService,
              private formBuilder : FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.findForm = this.formBuilder.group({
      paymentStatus : this.formBuilder.control(''),
      bookingStatus : this.formBuilder.control(''),
      contractType : this.formBuilder.control('')
       
    });
    this.searchBookings();
  }


  updateBooking(id: number){
    this.router.navigate(['detail', id], {relativeTo: this.route});
  }

  clear(){

  }

  searchBookings(){

    const params = new HttpParams()
    .append('bookingStatus',this.findForm.get('bookingStatus').value)
    .append('paymentStatus', this.findForm.get('paymentStatus').value)
    .append('contractType',this.findForm.get('contractType').value);

  this.bookingService
        .searchBookings(params)
        .subscribe(response => this.bookings = response);
  }

}
