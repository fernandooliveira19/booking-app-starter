import { Component, Input, OnInit,  ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'bkn-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  input : any
  @Input() label :string
  @Input() errorMessage: string

  @ContentChild(NgModel, /* TODO: add static flag */ {}) model: NgModel
  @ContentChild(FormControlName, /* TODO: add static flag */ {}) control : FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model || this.control
    if(this.input === undefined){
      console.log(this.input)
      throw new Error(`Esse componente dever ser usado com uma diretiva ngModel pu FormControlName: ${this.input}` )
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError() : boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
