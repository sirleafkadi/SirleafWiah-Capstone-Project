import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  items=[];
  public total_price;

  constructor() {  }


  addToCart(product):boolean{
    let is_there=false;
    let storage;
    let aray=[];
    storage = localStorage.getItem("cart");
    aray==JSON.parse(storage);
    if(this.items!=null ){
      this.items.forEach((item)=>{
        if(item._id==product._id){ is_there= true; }
       })

       if(!is_there){ 
         this.items.push(product);
        localStorage.setItem("cart", JSON.stringify(this.items) );
         return true;
       }

      else{ return false;}
       
 
     }

      else{

        this.items=product;
        localStorage.setItem("cart", JSON.stringify(this.items) );
        console.log(" Item added Successfully!");
        return true;
       
       }



  }

  getItems(){ 
    let cur_total_price=0;
    this.items.forEach(function(item){
        cur_total_price+= (item.quantity*item.price);
    });
      this.total_price=cur_total_price;
      return this.items;
  }


  update_cart(update_it:any){
    this.items=update_it;
    let cur_total_price=0;
    this.items.forEach(function(item){
        cur_total_price+= (item.quantity*item.price);
    });
      this.total_price=cur_total_price;
      return this.total_price;
  }


  clearCart(){
    this.items=[];
    return this.items;
  }


loadcart(){


}




}
