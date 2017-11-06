import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgConfigureModule, ConfigureOptions } from 'ng4-configure/ng4-configure'
import { AppConfig }  from './app-config'



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    NgConfigureModule.forRoot()
  ],
  declarations: [NavbarComponent],
  providers: [AuthService,{provide: ConfigureOptions, useClass: AppConfig}, DataService],
  exports: [NavbarComponent, RouterModule, HttpModule]
})
export class CoreModule { }
