import { analyzeAndValidateNgModules } from '@angular/compiler';
import {  Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import{MembershipService} from '../membership.service';
import {Customer} from '../customer_model';
import {LoadService} from '../load.service';
import {Confirm} from '../confirm_model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private membership_service:MembershipService, private load_service: LoadService, private router:Router) { }
  formFer: FormGroup;

  success:boolean=false;
  error:boolean=false;
  ngOnInit(): void {
 
    this.formFer= new FormGroup({

      email: new FormControl("", [
          Validators.required
         ]),

      password: new FormControl("", [
        Validators.required
       ])
    
      });
}

async login(){
    let is_login:any;

    console.log("Raw form data"+ this.formFer.value);

   this.load_service.login(this.formFer.value).subscribe(
            data=>{ is_login=data;

                 

                  if(is_login.logged_in){console.log("Successfully registered") 
                     this.load_service.islogin=true;
                     this.success=true;
                     this.load_service.cur_user= this.formFer.value.email;
                     
                     setTimeout(() => {
                     
                       this.router.navigate(['home']);
                 }, 2000);
  
              }else if(is_login.logged_in==false){  this.error=true; console.log("Unable to register"); }
                     
                       
                  }
                  
              );
    
   
             

            }



      // cus_info(email:any):void{
      //   this.load_service.info(this.formFer.value.email).subscribe(
      //     data=>this.info=data
      //   );
      // }

        


}
