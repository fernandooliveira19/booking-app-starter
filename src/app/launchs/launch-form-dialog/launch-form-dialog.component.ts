import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'bkn-launch-form-dialog',
  templateUrl: './launch-form-dialog.component.html'
})
export class LaunchFormDialogComponent implements OnInit {

  createLaunchForm : FormGroup

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
                public dialogRef: MatDialogRef<LaunchFormDialogComponent>) { }

  ngOnInit(): void {
    this.createLaunchForm = new FormGroup({
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

  create(){

  }



}
