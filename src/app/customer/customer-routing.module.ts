import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerOrderComponent } from './customer-order.component';

const routes: Routes = [
	{ path: '', component: CustomerComponent},
	{ path: ':id/details', component: CustomerDetailComponent},
	{ path: ':id/edit', component: CustomerEditComponent},
	{ path: ':id/orders', component: CustomerOrderComponent}
];
 
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CustomerRoutingModule {}