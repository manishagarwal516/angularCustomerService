import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { SharedModule }   from '../shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule
  ],
  declarations: [
  	OrderComponent
  ]
})
export class OrderModule { }
