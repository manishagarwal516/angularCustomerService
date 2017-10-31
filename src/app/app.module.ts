import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomerModule }   from './customer/customer.module';
import { SharedModule }   from './shared/shared.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    AboutComponent, 
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CustomerModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
