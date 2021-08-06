import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Traveler } from '../traveler.model';
import { TravelersService } from '../travelers.service';



@Component({
  selector: 'bkn-traveler-form',
  templateUrl: './traveler-form.component.html'
})
export class TravelerFormComponent implements OnInit {


  travelerForm : FormGroup;
 
  traveler : Traveler

  constructor( private formBuilder: FormBuilder,
                private travelersService: TravelersService) { }

  ngOnInit() {
   
  this.travelerForm = this.formBuilder.group({
    name : this.formBuilder.control(''),
    email : this.formBuilder.control(''),
    document : this.formBuilder.control(''),
    prefixPhone : this.formBuilder.control(''),
    numberPhone : this.formBuilder.control('')

  })
  
  }

  create(){

    console.log(this.travelerForm.getRawValue())

    this.travelersService.createTraveler(this.travelerForm.getRawValue())
        .subscribe(response => this.traveler)
    
  }

}
