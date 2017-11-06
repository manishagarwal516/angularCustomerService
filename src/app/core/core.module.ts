import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [NavbarComponent],
  providers: [AuthService],
  exports: [NavbarComponent, RouterModule, HttpModule]
})
export class CoreModule { }
