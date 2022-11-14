import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Launch } from 'app/launchs/launch.model';
import { BookingService } from 'app/bookings/booking.service';

@Component({
  selector: 'bkn-launch',
  templateUrl: './launch.component.html'
})
export class LaunchComponent implements OnInit {

  launchForm : FormGroup;
  launch : Launch;
  showPaymentDateField : boolean;
  
  paymentTypeList : any = [
    {label: 'Pix', value: 'PIX'},
    {label: 'Site', value: 'SITE'},
    {label: 'Transferência', value: 'TRANSFER'},
    {label: 'Depósito', value: 'DEPOSIT'},
    {label: 'Local', value: 'LOCAL'}
  ];
  paymentStatusList : any = [
    {label: 'Pago', value: 'PAID'},
    {label: 'Pendente', value: 'PENDING'},
    {label: 'Cancelado', value:'CANCELED'},
    {label: 'A receber pelo site', value:'TO_RECEIVE'}
  ];

  constructor(  @Inject(MAT_DIALOG_DATA) public data,
                private formBuilder : FormBuilder,
                public dialogRef: MatDialogRef<LaunchComponent>,
                private bookingService: BookingService
                ) { }

  ngOnInit(): void {
    if(this.data.launchIndex == null){
    this.launchForm = new FormGroup({
      amount : this.formBuilder.control('', {validators: Validators.required}),
      scheduleDate: this.formBuilder.control('',{validators: Validators.required}),
      paymentType: this.formBuilder.control('',{validators: Validators.required}),
      paymentStatus: this.formBuilder.control('',{validators: Validators.required}),
      paymentDate: this.formBuilder.control(''),
      id: this.formBuilder.control(null)
    });
  }else{
     this.launchForm = new FormGroup({
      id: this.formBuilder.control(this.bookingService.launches[this.data.launchIndex].id ), 
      amount : this.formBuilder.control(this.bookingService.launches[this.data.launchIndex].amount, {validators: Validators.required}),
      scheduleDate: this.formBuilder.control(this.bookingService.launches[this.data.launchIndex].scheduleDate,{validators: Validators.required}),
      paymentType: this.formBuilder.control(this.bookingService.launches[this.data.launchIndex].paymentType,{validators: Validators.required}),
      paymentStatus: this.formBuilder.control(this.bookingService.launches[this.data.launchIndex].paymentStatus,{validators: Validators.required}),
      paymentDate: this.formBuilder.control(this.bookingService.launches[this.data.launchIndex].paymentDate)
    }); 

     const paymentStatus = this.launchForm.get('paymentStatus').value;
     if(paymentStatus =='PAID'){
      this.showPaymentDateField = true;
     }else{
      this.showPaymentDateField=false;
     }
    
  }
    
  }

  onSubmit(launchForm: FormGroup){

    if(this.data.launchIndex == null){
      this.bookingService.launches.push(launchForm.value);
    }else{
      this.bookingService.launches[this.data.launchIndex] = launchForm.value;
    }
    this.dialogRef.close();
  }
  removeLaunch(launchId : number,  index: number){
    this.bookingService.launches.splice(index, 1);

  }

  cancel(){
    this.dialogRef.close()
  }

  showPaymentDate(ctrl){
   
    if(ctrl.value == '1: PAID'){
      this.showPaymentDateField = true;
    }else{
      this.showPaymentDateField = false;
      this.launchForm.get('paymentDate').setValue('');
      
    }
    
  }

}
