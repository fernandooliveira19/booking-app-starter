import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { TravelersService } from '../travelers.service';


@Component({
  selector: 'bkn-traveler-form',
  templateUrl: './traveler-form.component.html'
})
export class TravelerFormComponent implements OnInit {

  /*
  travelerForm : FormGroup
  travelerService : TravelersService
*/
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    /*
  this.travelerForm = this.formBuilder.group({
    name : this.formBuilder.control(''),
    email : this.formBuilder.control(''),
    document : this.formBuilder.control(''),
    prefixPhone : this.formBuilder.control(''),
    numberPhone : this.formBuilder.control('')

  })
  */
  }

}
