import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer_model';
import {Confirm} from './confirm_model';
const httpOptions = { 
  
  headers: new HttpHeaders ({ 'Content-Type': 'application/json'  }) 

};

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  
  private register_url="http://localhost:9090/customer/register";
  private login_url="http://localhost:9090/customer/login";

///////////////////////// POST Request is always returning undefined , therefore I had to use get to for login
  constructor(public http_client: HttpClient) { };

    register(customer:any): Observable<any>{
         return this.http_client.post<any>("http://localhost:9090/customer/register",customer, httpOptions);
    }
  
    login(customer:any): Observable<any> {
      let url ="http://localhost:9090/customer/login/"+customer.email+"/"+customer.password;
  
      return this.http_client.get<any[]> (url);
  }


}
