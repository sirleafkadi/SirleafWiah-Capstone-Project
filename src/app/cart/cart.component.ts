import { Component, OnInit, ViewChild } from '@angular/core';
import { CartServiceService} from '../cart-service.service';
import * as $ from 'jquery';
import { TestBed } from '@angular/core/testing';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items=[];
  total_price=0;


  constructor(private cart_service: CartServiceService) { }

  ngOnInit(): void {
    this.items= this.cart_service.getItems();
    this.items.forEach((list)=>{
    this.total_price+= list.price;
        });

       let test;
        $(document).ready(function(){

          $("input").change(function(event){
            let quanity = $(this).val();
            test=quanity;
            
          })
    
        
        })


       
    
      


  }


  test(event:any){

      console.log();
  }







}
