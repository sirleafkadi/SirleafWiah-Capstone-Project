import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{LoadService} from '../load.service';
import{Product} from '../product_model';
import { CartServiceService} from '../cart-service.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product:Array<Product>;
  id:any;
  add:boolean;
  msg="";
  color;
  islogin:boolean;
  constructor(private activated_route: ActivatedRoute, private load_service: LoadService, private cart_service: CartServiceService ) { this.islogin=false; }

  ngOnInit(): void {
    this.islogin=this.load_service.islogin;
   this.id= this.activated_route.snapshot.paramMap.get("id");
   this.load_service.loadproduct_byId(this.id).subscribe( (data)=>{this.product=data}, (err)=>{console.log("Error getting data from Database")} );
  
  }


  addToCart(product:any){

       if(this.cart_service.addToCart(product)){
            this.msg="Successfully added"
            this.color="added"
       }
       else{
         this.msg="already in cart"
         this.color="is_there";
       }



  }


  





}
