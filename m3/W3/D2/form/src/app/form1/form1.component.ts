import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  @ViewChild('f', {static:true}) form!:NgForm;
  //Selezione l'elemento identificativo con #f all'interno del template
  //lo affido alla proprietà del form del
  //serve a far si che la proprietà venga valorizzata
  constructor() { }

  email:string= "";
  password:string= "";
  city:string= "";


  ngOnInit(): void {
    this.form.status
  }

  submit(form:any){
    console.log(form)
  }

}
