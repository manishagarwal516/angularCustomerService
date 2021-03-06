import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CustomerComponent } from './customer.component';
import { CustomerCardComponent } from './customer-card.component';
import { CustomerGridComponent } from './customer-grid.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerOrderComponent } from './customer-order.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule }   from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerCardComponent,
    CustomerGridComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CustomerRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class CustomerModule { }
