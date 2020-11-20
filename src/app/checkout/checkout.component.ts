import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { LoadService } from '../load.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
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


submit(){
  if(confirm("Do you want to continue?")){

    alert("Puchase Successfully completed! "+'\n'+ ' select ok to redirecting');
    this.cart_service.clearCart();
    setTimeout(() => {
      this.router.navigate(['shop-now']);
    }, 2000);

}


  

}









}
