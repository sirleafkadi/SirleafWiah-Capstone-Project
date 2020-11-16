import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Product } from './product_model';
import { Category } from './category.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadService {

  constructor(private http_client: HttpClient) { }

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









}
