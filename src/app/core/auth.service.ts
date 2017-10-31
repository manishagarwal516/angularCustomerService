import { Injectable, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
	isAuthenticated: boolean = false;
	@Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

	login(){
        this.isAuthenticated = true;
        this.authChanged.emit(true);
        console.log(this.isAuthenticated);
    }

    logout(){
        this.isAuthenticated = false;
        this.authChanged.emit(false);
        console.log(this.isAuthenticated);
    }

  constructor() { }

}
