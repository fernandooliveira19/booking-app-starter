import { Component, OnInit } from '@angular/core';
import { Traveler } from '../traveler.model';
import { TravelersService } from '../travelers.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'bkn-traveler',
  templateUrl: './traveler-list.component.html'
})
export class TravelerListComponent implements OnInit {

  travelers: Traveler[]

  findForm : FormGroup

  constructor(private travelerService: TravelersService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    
    this.findForm = this.formBuilder.group({
      name : this.formBuilder.control('')  
    })
   
  }

  findTravelersByName(){

    this.travelerService.findTravelersByName(this.findForm.get('name').value)
    .subscribe(response => this.travelers = response);

  }

}
