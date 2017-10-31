import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
 
const routes: Routes = [
  { path: 'customers/:id/orders', component: OrderComponent},
  { path: 'orders', component: OrderComponent },
  { path: 'about',     component: AboutComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}