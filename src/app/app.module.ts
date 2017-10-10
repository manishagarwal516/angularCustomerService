import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustormerComponent } from './custormer/custormer.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { CustomerCardComponent } from './custormer/customer-card.component';
import { CustomerGridComponent } from './custormer/customer-grid.component';
import { CapitalizePipe } from './shared/pipe/capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustormerComponent,
    OrderComponent,
    AboutComponent,
    PaginationComponent,
    CustomerCardComponent,
    CapitalizePipe,
    CustomerGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
