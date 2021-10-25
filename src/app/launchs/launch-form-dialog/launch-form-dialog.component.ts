import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'bkn-launch-form-dialog',
  templateUrl: './launch-form-dialog.component.html',
  styleUrls: ['./launch-form-dialog.component.css']
})
export class LaunchFormDialogComponent implements OnInit {

  createForm : FormGroup

  constructor(public dialogRef: MatDialogRef<LaunchFormDialogComponent>) { }

  ngOnInit(): void {
    
  }

  close(){
    this.dialogRef.close()
  }

  create(){
    
  }



}
