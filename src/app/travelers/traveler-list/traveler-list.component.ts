import { Component, OnInit } from '@angular/core';
import { Traveler } from '../traveler.model';
import { TravelersService } from '../travelers.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bkn-traveler',
  templateUrl: './traveler-list.component.html'
})
export class TravelerListComponent implements OnInit {

  travelers: Traveler[]

  findForm : FormGroup


  constructor(private travelerService: TravelersService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {


    this.findForm = this.formBuilder.group({
      name : this.formBuilder.control('')
    })

  }

  findTravelersByName(){

    this.travelerService.findTravelersByName(this.findForm.get('name').value)
    .subscribe(response => this.travelers = response);

  }
  clear(){
    this.findForm = this.formBuilder.group({
      name : this.formBuilder.control('')
    })
    this.travelers = []
  }

  updateTraveler(id: number){
    this.router.navigate(['detail', id], {relativeTo: this.route});
  }
  bookingsByTraveler(id:number){

    this.router.navigate(['info',id], {relativeTo: this.route})
  }

}
