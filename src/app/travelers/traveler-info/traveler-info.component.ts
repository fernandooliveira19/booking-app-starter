import { Component, OnInit } from '@angular/core';
import { Traveler } from '../traveler.model';
import { TravelersService } from '../travelers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booking } from 'app/bookings/booking.model';


@Component({
  selector: 'bkn-traveler-info',
  templateUrl: './traveler-info.component.html'
})
export class TravelerInfoComponent implements OnInit {

  bookings: Booking[]
  

  constructor(private travelersService: TravelersService,
            private route : ActivatedRoute,
            private router: Router) { }

  ngOnInit() {
    const traveler = this.route.snapshot.data['travelerSaved'];
    this.findBookingsByTraveler(traveler.id);
    
  }

  findBookingsByTraveler(id:number){
    this.travelersService.findBookingsByTraveler(id)
    .subscribe(response => this.bookings = response);
  }

}
