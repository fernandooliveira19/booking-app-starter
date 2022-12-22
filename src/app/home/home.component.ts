import { Component, OnInit } from '@angular/core';
import { Home } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'bkn-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  homeDetails : Home

  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.getHomeDetails();
  }

  getHomeDetails(){
   
    this.homeService.getHomeDetails()
    .subscribe(response => this.homeDetails = response);
    console.log(this.homeDetails)

  } 

}
