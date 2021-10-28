import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'
import { NotificationService } from 'app/shared/messages/notification.service';
import { Launch } from '../../bookings/booking.model';
import { LaunchService } from '../launch.service';


@Component({
  selector: 'bkn-launch-form-dialog',
  templateUrl: './launch-form-dialog.component.html'
})
export class LaunchFormDialogComponent implements OnInit {

  @Output()
  emitter = new EventEmitter();
  
  createForm : FormGroup
  launch : Launch

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

  constructor(  private formBuilder : FormBuilder,
                public dialogRef: MatDialogRef<LaunchFormDialogComponent>,
                private launchService: LaunchService,
                private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      amount : this.formBuilder.control('', {validators: Validators.required}),
      scheduleDate: this.formBuilder.control('',{validators: Validators.required}),
      paymentType: this.formBuilder.control('',{validators: Validators.required}),
      paymentStatus: this.formBuilder.control('',{validators: Validators.required}),
      paymentDate: this.formBuilder.control('',)
    })
    
  }

  cancel(){
    this.dialogRef.close()
  }

  addLaunch(){

    this.dialogRef.close(this.createForm.getRawValue())
    /** 
    const launchToSave = this.createForm.getRawValue()
    console.log(launchToSave)
    this.emitter.emit(launchToSave);
    */
  }



}
