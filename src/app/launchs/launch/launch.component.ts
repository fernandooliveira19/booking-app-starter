import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Launch } from 'app/bookings/booking.model';
import { BookingService } from 'app/bookings/booking.service';

@Component({
  selector: 'bkn-launch',
  templateUrl: './launch.component.html'
})
export class LaunchComponent implements OnInit {

  launchForm : FormGroup;
  launch : Launch;

  paymentTypeList : any = [
    {label: 'Pix', value: 'PIX'},
    {label: 'Site', value: 'SITE'},
    {label: 'Transferência', value: 'TRANSFER'},
    {label: 'Depósito', value: 'CREDIT'},
    {label: 'Local', value: 'LOCAL'}
  ];
  paymentStatusList : any = [
    {label: 'Pago', value: 'PAID'},
    {label: 'Pendente', value: 'PENDING'}
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
      paymentDate: this.formBuilder.control('')
    });
  }else{
     this.launchForm = new FormGroup({
      amount : this.formBuilder.control(this.bookingService.launchs[this.data.launchIndex].amount, {validators: Validators.required}),
      scheduleDate: this.formBuilder.control(this.bookingService.launchs[this.data.launchIndex].scheduleDate,{validators: Validators.required}),
      paymentType: this.formBuilder.control(this.bookingService.launchs[this.data.launchIndex].paymentType,{validators: Validators.required}),
      paymentStatus: this.formBuilder.control(this.bookingService.launchs[this.data.launchIndex].paymentStatus,{validators: Validators.required}),
      paymentDate: this.formBuilder.control(this.bookingService.launchs[this.data.launchIndex].paymentDate)
    }); 
   
  }
    
  }

  onSubmit(launchForm: FormGroup){

    if(this.data.launchIndex == null){
      this.bookingService.launchs.push(launchForm.value);
    }else{
      this.bookingService.launchs[this.data.launchIndex] = launchForm.value;
    }
    this.dialogRef.close();
  }
  removeLaunch(launchId : number,  index: number){
    this.bookingService.launchs.splice(index, 1);

  }

  cancel(){
    this.dialogRef.close()
  }

}
