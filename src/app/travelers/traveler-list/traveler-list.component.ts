import { Component, OnInit } from '@angular/core';
import { Traveler } from '../traveler.model';
import { TravelersService } from '../travelers.service';

@Component({
  selector: 'bkn-traveler',
  templateUrl: './traveler-list.component.html'
})
export class TravelerListComponent implements OnInit {

  travelers: Traveler[]

  filter: string

  constructor(private travelerService: TravelersService) { }

  ngOnInit() {
  }

  findTravelersByName(name: string){
    this.travelerService.findTravelersByName()
    .subscribe(travelers => this.travelers = travelers);

  }

}
