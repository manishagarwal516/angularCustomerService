import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateGuard } from './can-activate.guard';
 
const routes: Routes = [
  { path: 'customer', loadChildren: 'app/customer/customer.module#CustomerModule',canActivate: [ CanActivateGuard ] },
  { path: 'orders',    loadChildren: 'app/order/order.module#OrderModule',canActivate: [ CanActivateGuard ]},
  { path: 'about',     loadChildren: 'app/about/about.module#AboutModule' },
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [CanActivateGuard]
})
export class AppRoutingModule {}