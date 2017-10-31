import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule }   from './shared/shared.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AboutComponent } from './about/about.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent, 
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
