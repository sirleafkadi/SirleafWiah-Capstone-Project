import { Component, OnInit } from '@angular/core';
import{LoadService} from '../load.service';
import{Product} from '../product_model';
import { Category } from '../category.model';
import { CartServiceService} from '../cart-service.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'shop-now',
  templateUrl: './shop-now.component.html',
  styleUrls: ['./shop-now.component.css']
})
export class ShopNowComponent implements OnInit {

  
  Product:Array<Product>;
  Reserved_Product:Array<Product>;
  Category:Array<Product>;
  islogin:boolean;
  add:boolean;
  msg="";
  color;
  cur_product:Number;
  start:any;


  constructor(private load_service:LoadService, private cart_service:CartServiceService, private activated_route:ActivatedRoute) {}

  ngOnInit(): void {

      this.start=this.activated_route.snapshot.paramMap.get("type");

      // if(this.start!=null || this.start!=""){
      //   this.get_type(this.start);
      // }

    
    this.load_service.loadproduct_all().subscribe( (data)=>{this.Product=data;     Object.entries(this.Product); this.Reserved_Product=this.Product;}, (err)=>{console.log("Error getting data from Database")} );
    this.load_service.loadproduct_category().subscribe( (data)=>{this.Category=data}, (err)=>{console.log("Error getting Category from Database")});
    this.islogin=this.load_service.islogin;
  }


  get_all(){
    this.load_service.loadproduct_all().subscribe( (data)=>{this.Product=data}, (err)=>{console.log("Error getting data from Database")}   )
  }


get_type(type:boolean){
  this.load_service.loadproduct_type(type).subscribe( (data)=>{this.Product=data}, (err)=>{console.log("Error getting data from Database")}   )
}




get_bybrand(id:number){
  this.Product=[];
    this.Reserved_Product.forEach((product)=>{
        if(product.category._id==id){
          this.Product.push(product);
        }
    })

  }



  buy(product:Number){
    if(this.cart_service.addToCart(product)){
      this.msg="Successfully added"
      this.color="added"
      this.cur_product=product;
    
 }
 else{
   this.msg="already in cart"
   this.color="is_there";
 }
  }



}
