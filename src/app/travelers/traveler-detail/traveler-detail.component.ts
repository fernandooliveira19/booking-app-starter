import { Component, OnInit } from '@angular/core';
import { Traveler } from '../traveler.model';
import { TravelersService } from '../travelers.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'bkn-traveler-detail',
  templateUrl: './traveler-detail.component.html'
})
export class TravelerDetailComponent implements OnInit {

  traveler: Traveler
  updateForm : FormGroup;

  constructor(private travelersService: TravelersService,
              private route : ActivatedRoute,
              private formBuilder : FormBuilder) { }

  ngOnInit() {
   
    this.updateForm = this.formBuilder.group({
      id : this.formBuilder.control(''),
      name : this.formBuilder.control(''),
      email : this.formBuilder.control(''),
      document : this.formBuilder.control(''),
      prefixPhone : this.formBuilder.control(''),
      numberPhone : this.formBuilder.control('')
  
    })


    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id)
        this.travelersService
          .findTravelerById(id)
          .subscribe( traveler => this.traveler = traveler);

          console.log(this.traveler)
      }
    )
    
  }
  updateTraveler(){
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
   
    this.travelersService.updateTraveler(this.updateForm.getRawValue(), id)
        .subscribe(response => this.traveler)
      }
    )
    
  }
}
