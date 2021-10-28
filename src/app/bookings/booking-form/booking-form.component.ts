import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LaunchFormDialogComponent } from 'app/launchs/launch-form-dialog/launch-form-dialog.component';
import { LaunchService } from 'app/launchs/launch.service';
import { Traveler } from 'app/travelers/traveler.model';
import { TravelersService } from 'app/travelers/travelers.service';
import { Booking, Launch } from '../booking.model';
import { BookingService } from '../booking.service';


@Component({
  selector: 'bkn-booking-form',
  templateUrl: './booking-form.component.html'
})
export class BookingFormComponent implements OnInit {

  createForm :FormGroup
  booking: Booking
  travelers : Traveler[]
  launchs : Launch []

  bookingStatusList : any = [
    {label: 'Reservado', value: 'RESERVED'},
    {label: 'Pré-Reservado', value: 'PRE_RESERVED'}
  ];
  paymentStatusList : any = [
    {label: 'Pago', value: 'PAID'},
    {label: 'Pendente', value: 'PENDING'}
  ];
  contractTypeList : any = [
    {label: 'Direto com viajante', value: 'DIRECT'},
    {label: 'Site', value: 'SITE'}
  ];


  constructor(
    private bookingService: BookingService,
    private formBuilder : FormBuilder,
    private travelerService: TravelersService,
    private launchDialog: MatDialog,
    private launchService: LaunchService) { 
      
    }

  ngOnInit() {

    this.getActiveTravelers()
    
    this.createForm = this.formBuilder.group({
      traveler : this.formBuilder.control('', [Validators.required]),
      checkIn : this.formBuilder.control('', [Validators.required ]),
      checkOut : this.formBuilder.control('', [Validators.required ]),
      totalAmount : this.formBuilder.control('', [Validators.required]),
      bookingStatus: this.formBuilder.control('',[Validators.required]),
      paymentStatus: this.formBuilder.control('',[Validators.required]),
      contractType: this.formBuilder.control('',[Validators.required]),
      adults: this.formBuilder.control('',[Validators.required]),
      children: this.formBuilder.control('',[Validators.required])
    });


  }

  onAddLaunch(launch: Launch){
    console.log(this.booking)
    console.log(launch)

  }
  
  getActiveTravelers(){

    this.travelerService.getActiveTravelers()
      .subscribe(response => this.travelers = response);
  }

  create(){
    const bookingToSave = this.createForm.getRawValue();
    
    this.bookingService.createBooking(bookingToSave);
  }

  openLaunchDialog():void{
   
    const dialogRef = this.launchDialog.open(LaunchFormDialogComponent,{
      width: '600px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.launchs = result
      console.log(this.launchs)
    });
    
  }


 
}
