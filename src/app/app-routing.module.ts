import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Product } from './product_model';
import { ShopNowComponent} from './shop-now/shop-now.component';
import { ViewProductComponent } from './view-product/view-product.component';
import {CartComponent} from'./cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'view/:id', component:ViewProductComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'shop-now', component:ShopNowComponent},
  {path:'shop-now/:select', component:ShopNowComponent},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



