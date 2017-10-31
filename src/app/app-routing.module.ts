import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateGuard } from './can-activate.guard';
import { AboutComponent } from './about/about.component';
 
const routes: Routes = [
  { path: 'customer', loadChildren: 'app/customer/customer.module#CustomerModule', canActivate: [ CanActivateGuard ]},
  { path: 'orders',    loadChildren: 'app/order/order.module#OrderModule', canActivate: [ CanActivateGuard ]},
  { path: 'about',     component: AboutComponent},
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [CanActivateGuard]
})
export class AppRoutingModule {}