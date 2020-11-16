import { Component, OnInit } from '@angular/core';
import{LoadService} from '../load.service';
import{Product} from '../product_model';
import { Category } from '../category.model';


@Component({
  selector: 'shop-now',
  templateUrl: './shop-now.component.html',
  styleUrls: ['./shop-now.component.css']
})
export class ShopNowComponent implements OnInit {

  
  Product:Array<Product>;
  Reserved_Product:Array<Product>;
  Category:Array<Product>;


  constructor(private load_service:LoadService) {}

  ngOnInit(): void {
    this.load_service.loadproduct_all().subscribe( (data)=>{this.Product=data; this.Reserved_Product=this.Product;}, (err)=>{console.log("Error getting data from Database")} );
    
    this.load_service.loadproduct_category().subscribe( (data)=>{this.Category=data}, (err)=>{console.log("Error getting Category from Database")});

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





}
