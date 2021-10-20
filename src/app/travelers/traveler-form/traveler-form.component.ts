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
     
  this.createForm = new FormGroup({
    name : this.formBuilder.control('', {validators: Validators.required, updateOn:"blur"}),
    email : this.formBuilder.control('', {validators: Validators.pattern(this.emailPattern),
       updateOn:"blur"}),
    document : this.formBuilder.control(''),
    prefixPhone : this.formBuilder.control('', {validators: [Validators.required,
                                                       Validators.pattern("^[0-9]*$")],
                                                       updateOn:"blur"}),
    numberPhone: this.formBuilder.control('',{validators: Validators.required, updateOn:"blur"})
  })
    
  }

  create(){

    console.log(this.createForm.getRawValue())

    this.travelersService.createTraveler(this.createForm.getRawValue())
        .subscribe(response => this.traveler)
    
  }
  
}
