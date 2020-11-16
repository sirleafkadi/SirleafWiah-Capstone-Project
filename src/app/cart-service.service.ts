import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  items=[];

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
      return this.items;
  }


  clearCart(){
    this.items=[];
    return this.items;
  }


loadcart(){


}




}
