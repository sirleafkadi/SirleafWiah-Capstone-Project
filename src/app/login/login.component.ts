import {  Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  formFer: FormGroup;
  ngOnInit(): void {

    this.formFer= new FormGroup({

      username: new FormControl("", [
          Validators.required
        
         
      
      ]),

      password: new FormControl("", [
        Validators.required
       
       
    ])


    });



  }

}
