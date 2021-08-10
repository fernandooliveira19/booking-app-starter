import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Traveler } from '../traveler.model';
import { TravelersService } from '../travelers.service';



@Component({
  selector: 'bkn-traveler-form',
  templateUrl: './traveler-form.component.html'
})
export class TravelerFormComponent implements OnInit {


  createForm : FormGroup;
 
  traveler : Traveler

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor( private formBuilder: FormBuilder,
               private travelersService: TravelersService) { }

  ngOnInit() {
  

  this.createForm = this.formBuilder.group({
    name : this.formBuilder.control('', [Validators.required]),
    email : this.formBuilder.control('', [Validators.pattern(this.emailPattern),Validators.required ]),
    document : this.formBuilder.control(''),
    prefixPhone : this.formBuilder.control('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    numberPhone: this.formBuilder.control('',[Validators.required])
  })
    
  }

  create(){

    console.log(this.createForm.getRawValue())

    this.travelersService.createTraveler(this.createForm.getRawValue())
        .subscribe(response => this.traveler)
    
  }
  
}
