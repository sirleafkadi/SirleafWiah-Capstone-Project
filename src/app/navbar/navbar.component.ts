import { Component, OnInit } from '@angular/core';
import {MembershipService} from '../membership.service';
import {LoadService} from '../load.service';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   islogin;
   cur_user:String;
   cart_total:any;

  constructor(private membership_service: MembershipService, private cart_service: CartServiceService,  private load_service:LoadService) {this.islogin=false;  this.cur_user=""; }

  ngOnInit(): void {

    this.islogin=this.load_service.islogin;
    this.cur_user=this.load_service.cur_user;
    this.cart_total=this.cart_service.total_items;
    

  }

}
