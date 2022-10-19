import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'bkn-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  datesSelected:NgbDateStruct[]=[];
  change(value:NgbDateStruct[]){
    this.datesSelected=value;
  }

  constructor() {
    this.ngOnInit();
   }

  ngOnInit() {

    this.datesSelected = [
      {
        "year": 2022,
        "month": 10,
        "day": 3
      },
      {
        "year": 2022,
        "month": 10,
        "day": 4
      }
      ,
      {
        "year": 2022,
        "month": 10,
        "day": 8
      },
      {
        "year": 2022,
        "month": 10,
        "day": 5
      },
      {
        "year": 2022,
        "month": 10,
        "day": 18
      },
      {
        "year": 2022,
        "month": 10,
        "day": 6
      },
      {
        "year": 2022,
        "month": 10,
        "day": 7
      },
      {
        "year": 2022,
        "month": 10,
        "day": 17
      },
      {
        "year": 2022,
        "month": 10,
        "day": 18
      },
      {
        "year": 2022,
        "month": 10,
        "day": 19
      },
      {
        "year": 2022,
        "month": 10,
        "day": 20
      },
      {
        "year": 2022,
        "month": 10,
        "day": 21
      }
    ]
  }
 
}
