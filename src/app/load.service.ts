import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from './product_model';
import { Category } from './category.model';
import { Observable } from 'rxjs';
import{Customer} from './customer_model';
import {Confirm} from './confirm_model';


const httpOptions = { 
  headers: new HttpHeaders ({ 'Content-Type': 'application/json'}) 

};

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  public islogin:boolean;
  public cur_user:String;
  constructor(private http_client: HttpClient) {  this.islogin=false;  this.cur_user="";  }

    ///////Serving Products
    loadproduct_category(): Observable<Category[]>{
      return this.http_client.get <Category[]>("http://localhost:9090/category/all");
    }

  loadproduct_all(): Observable<Product[]>{
      return this.http_client.get  <Product[]>("http://localhost:9090/product/getall");
  }

  loadproduct_type(type:boolean): Observable<Product[]>{
    return this.http_client.get <Product[]>("http://localhost:9090/product/get_type/"+type);
}


loadproduct_byId(id:any): Observable<Product[]>{
  return this.http_client.get <Product[]>("http://localhost:9090/product/get/"+id);
}


register(customer:any): Observable<any>{
       return this.http_client.post<any>("http://localhost:9090/customer/register", customer, httpOptions);
}

login(customer:any): Observable<any>{
  return this.http_client.post<any>("http://localhost:9090/customer/login", customer, httpOptions);
}

// info(customer:any): Observable<Customer[]>{
//   return this.http_client.get<Customer[]>("http://localhost:9090/customer/info/"+customer);
// }


}
