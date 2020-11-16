import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  formFer:FormGroup;

  ngOnInit(): void {


    this.formFer= new FormGroup({
        username : new FormControl("",[
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
       
        ]),

        email : new FormControl("",[
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")
        ]),


        password : new FormControl("",[
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(12),
        ]),

        comfirm : new FormControl("",[
          Validators.required,
         
        ])

    })



  }














}
