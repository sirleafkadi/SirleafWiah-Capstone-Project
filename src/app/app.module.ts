import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {applicationRoutes} from './app-routing-module'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
