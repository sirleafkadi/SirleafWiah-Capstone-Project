import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import {MembershipService} from '../membership.service';
import {Router} from '@angular/router';
import {Customer} from '../customer_model';
import {LoadService} from '../load.service';
import {Confirm} from '../confirm_model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private membership_service:MembershipService, private router:Router, private load_service:LoadService) { }
  confirm:Array<Confirm>;
  formFer:FormGroup;
  not_match:boolean;
  extra:any;
  registered:boolean;
  error:boolean;
  customer:Customer;


  ngOnInit(): void {
    this.registered=false;
    this.not_match=false;
    this.error=false;
    
    this.formFer= new FormGroup({
        name : new FormControl("",[
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(13),
       
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

        confirm : new FormControl("",[
          Validators.required,
         
        ])

    })



  }



  async register(){
    let is_registered:any;
 if(this.formFer.value.password == this.formFer.value.confirm){
           this.not_match=false;
           delete this.formFer.value.confirm;
          this.load_service.register(this.formFer.value).subscribe(
          data=>{ is_registered=data;
            
                if(is_registered.registered){console.log("Successfully registered") 
                   this.error=false;
       
                     setTimeout(() => {
        
                     this.router.navigate(['login']);
               }, 5000);

            }else{ console.log("Unable to register") }
            this.registered =true;
            
            }
             
            );
  
             
  }

      else { this.not_match=true; }


  }










}
