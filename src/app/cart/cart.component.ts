import { Component, OnInit, ViewChild } from '@angular/core';
import { CartServiceService} from '../cart-service.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import { TestBed } from '@angular/core/testing';
import{LoadService} from '../load.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Array<any>;
  total_price;
  islogin:boolean;
  
constructor(private cart_service: CartServiceService, private router:Router, private load_service:LoadService) { this.islogin=false; }

  ngOnInit(): void {

    if(this.load_service.islogin) {
         this.items= this.cart_service.getItems();
         this.total_price=this.cart_service.total_price;
       } 
    else this.router.navigate(['login']);


     }

  alter_quantity(quantity:any, id:Number){
      let quan = quantity.value;
      this.items=this.cart_service.alter_quantity(quan, id);
      this.total_price=this.cart_service.total_price; 
  }


  remove(id:number){

      if(confirm('Remove item?')){ 
      for(var i =0; i<this.items.length; i++){
        if(this.items[i]._id==id){
           this.items.splice(i, 1);
          }
        };

        this.total_price=this.cart_service.update_cart(this.items);
     }

}



}