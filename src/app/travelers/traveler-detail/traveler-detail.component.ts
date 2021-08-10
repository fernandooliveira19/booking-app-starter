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

   this.updateForm = this.formBuilder.group({

    id : [traveler.id, [Validators.required]],
    name : [traveler.name, [Validators.required]],
    email : [traveler.email, [Validators.pattern(this.emailPattern),Validators.required ]],
    document : [traveler.document],
    prefixPhone : [traveler.prefixPhone, [Validators.required, Validators.pattern("^[0-9]*$")]],
    numberPhone: [traveler.numberPhone,[Validators.required]],
    status: [traveler.status]
   })
    
  }
  updateTraveler() {

    this.travelersService.updateTraveler(this.updateForm.getRawValue())
      .subscribe(response => this.traveler)
  }
   
 
}
