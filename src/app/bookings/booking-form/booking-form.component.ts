import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LaunchFormDialogComponent } from 'app/launchs/launch-form-dialog/launch-form-dialog.component';
import { LaunchService } from 'app/launchs/launch.service';
import { NotificationService } from 'app/shared/messages/notification.service';
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
  launchs : Launch [] = []
  bookingToSave : Booking

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
    private launchService: LaunchService,
    private notificationService: NotificationService) { 
      
    }

  ngOnInit() {

    this.getActiveTravelers()
    
    this.createForm = new FormGroup({
      travelerId : new FormControl('', [Validators.required]),
      checkIn : new FormControl('', [Validators.required ]),
      checkOut : new FormControl('', [Validators.required ]),
      totalAmount : new FormControl('', [Validators.required]),
      bookingStatus: new FormControl('',[Validators.required]),
      paymentStatus: new FormControl('',[Validators.required]),
      contractType: new FormControl('',[Validators.required]),
      adults: new FormControl('',[Validators.required]),
      children: new FormControl('',[Validators.required])
    });


  }
  getActiveTravelers(){
    this.travelerService.getActiveTravelers()
      .subscribe(response => this.travelers = response);
  }

  create(){

    this.bookingToSave = this.createForm.getRawValue()
    this.bookingToSave.launchs = this.launchs

    const requestBody = this.bookingToSave

    this.bookingService.createBooking(requestBody).subscribe(response => this.booking, 
      response => this.notificationService.notify(response.error.message),  
      () =>{
        this.notificationService.notify(`Reserva cadastrada com sucesso`)
      })
  
  }

  openLaunchDialog():void{
   
    const dialogRef = this.launchDialog.open(LaunchFormDialogComponent,{
      width: '600px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.launchs.push(result)
    });
  }
}
