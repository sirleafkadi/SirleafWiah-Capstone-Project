import { Component, Input, OnInit} from '@angular/core';
import {MembershipService} from './membership.service';
import {Router} from '@angular/router';
import {LoadService} from './load.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sirleaf-capstone-project';
  @Input() total_items;
  islogin;
constructor(private membership_service: MembershipService, private router:Router, private load_service: LoadService){}
  ngOnInit(): void {
  this.islogin=this.load_service.cur_user;

  


  }




}
