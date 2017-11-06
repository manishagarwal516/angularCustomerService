import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
	loginLogoutText: string = 'Login';
  showNavLinks : boolean = false;
	sub: Subscription;

  constructor(private authservice: AuthService, private router: Router) { }
	loginOrOut() {
    const isAuthenticated = this.authservice.isAuthenticated;
    if (isAuthenticated) {
      this.authservice.logout();
    }
    this.router.navigate(['/login']);
  }


  ngOnInit() { 
    this.sub = this.authservice.authChanged
        .subscribe((loggedIn: boolean) => {
            this.setLoginLogoutText();
        },
        (err: any) => console.log(err));
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  setLoginLogoutText() {
    this.loginLogoutText = (this.authservice.isAuthenticated) ? 'Logout' : 'Login';
    this.showNavLinks = (this.authservice.isAuthenticated) ? true : false;
  }
}
