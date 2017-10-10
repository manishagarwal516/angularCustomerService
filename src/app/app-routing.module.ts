import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CustormerComponent } from './custormer/custormer.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'customers',  component: CustormerComponent },
  { path: 'customers/:id/orders', component: OrderComponent},
  { path: 'customers/:id/edit', component: CustormerComponent},
  { path: 'orders', component: OrderComponent },
  { path: 'about',     component: AboutComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}