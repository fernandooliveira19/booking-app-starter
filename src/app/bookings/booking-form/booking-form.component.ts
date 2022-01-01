import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    
    this.createForm = new FormGroup({
      traveler : new FormControl('', [Validators.required]),
      checkIn : new FormControl('', [Validators.required ]),
      checkOut : new FormControl('', [Validators.required ]),
      totalAmount : new FormControl('', [Validators.required]),
      bookingStatus: new FormControl('',[Validators.required]),
      paymentStatus: new FormControl('',[Validators.required]),
      contractType: new FormControl('',[Validators.required]),
      adults: new FormControl('',[Validators.required]),
      children: new FormControl('',[Validators.required]),
      launchs : new FormBuilder().array([
        new FormGroup({
          amount : new FormControl('')
        })
      ])
    });


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
      Object.keys(this.launchs).forEach(key => {
        let control = this.launchFormGroup().get(key)
        if (control){
          control.setValue(this.launchs[key], {onlySelf:true})
        }
      
      })



      this.createForm.controls['launchs'].patchValue({
        amount : new FormControl('123.00')
      })
      console.log(this.createForm.getRawValue())
    });
    
  }
  launchFormGroup(): FormGroup {
    return new FormGroup({
      amount : new FormControl(''),
      paymentDate : new FormControl('')
    })
  }
}

function launchFormGroup(): FormGroup{

  return new FormGroup({
    amount : new FormControl('123.00')
  })
}
function addLaunchInBooking(launchs: Launch[]) {
  return new FormGroup({
    amount : new FormControl(200.00)
  })
}


