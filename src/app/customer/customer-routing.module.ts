import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';
 
const routes: Routes = [
  { path: 'customers',  component: CustomerComponent },
  { path: 'customers/:id/edit', component: CustomerDetailComponent},
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class CustomerRoutingModule {}