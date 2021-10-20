import { Component, OnInit } from '@angular/core';
import { Traveler } from '../traveler.model';
import { TravelersService } from '../travelers.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bkn-traveler-detail',
  templateUrl: './traveler-detail.component.html'
})
export class TravelerDetailComponent implements OnInit {

  traveler: Traveler
  updateForm : FormGroup;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(private travelersService: TravelersService,
              private route : ActivatedRoute,
              private formBuilder : FormBuilder) { }

  ngOnInit() {
   
   const traveler = this.route.snapshot.data['travelerSaved'];
   console.log(traveler)

   this.updateForm =  new FormGroup({
    id : this.formBuilder.control(traveler.id, [Validators.required]), 
    name : this.formBuilder.control(traveler.name, {validators: Validators.required, updateOn:"blur"}),
    email : this.formBuilder.control(traveler.email, {validators: Validators.pattern(this.emailPattern),
       updateOn:"blur"}),
    document : this.formBuilder.control(traveler.document),
    prefixPhone : this.formBuilder.control(traveler.prefixPhone, {validators: [Validators.required,
                                                       Validators.pattern("^[0-9]*$")],
                                                       updateOn:"blur"}),
    numberPhone: this.formBuilder.control(traveler.numberPhone,{validators: Validators.required, updateOn:"blur"}),
    status: this.formBuilder.control(traveler.status)  
  })
    
  }
  updateTraveler() {
    
    this.travelersService.updateTraveler(this.updateForm.getRawValue())
      .subscribe(response => this.traveler)
  }
   
 
}
