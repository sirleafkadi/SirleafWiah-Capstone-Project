import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public items=[];
  public total_price;
  public total_items:any;
  storage:any

  constructor() {
    
    this.storage = localStorage.getItem("cart");
    if(this.storage){
      this.items=JSON.parse(this.storage);
      this.total_items=this.items.length;
    }else{this.total_items=0;}

  
  }


  addToCart(product):boolean{
    let is_there=false;

    let aray=[];
    // this.storage = localStorage.getItem("cart");
    // aray=JSON.parse(this.storage);

    if(this.items!=null ){
      this.items.forEach((item)=>{
        if(item._id==product._id){ is_there= true; }
       })

       if(!is_there){ 
         this.items.push(product);
        localStorage.setItem("cart", JSON.stringify(this.items) );
        this.total_items=this.items.length;
         return true;
       }

      else{ return false;}
       
 
     }

      else{

        this.items=product;
        localStorage.setItem("cart", JSON.stringify(this.items) );
        this.total_items=this.items.length;
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
    localStorage.setItem("cart", JSON.stringify(this.items) );
      this.total_price=cur_total_price;
      this.total_items=this.items.length;
      return this.total_price;
  }


alter_quantity(quantity:any, id:Number){
 let cur_total_price=0;
  this.items.forEach(function(product){
    if(product._id==id){
       product.quantity=quantity;
       cur_total_price= (product.quantity*product.price)-product.price;
    }
});
localStorage.setItem("cart", JSON.stringify(this.items) );
  this.total_price+=cur_total_price;
  return this.items;

}














  clearCart(){
    this.items=[];
    this.total_items=this.items.length;
    return this.items;
  }


loadcart(){


}




}
