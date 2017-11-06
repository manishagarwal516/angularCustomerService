import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
	isAuthenticated: boolean = false;
	authUrl: string = 'http://localhost:3000/oauth/token';

  	constructor(private http: Http) { }
	@Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

	login(){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;
		console.log("trest");
		return this.http.post(this.authUrl ,{"grant_type":"password","username":"magarwal516@gmail.com","password":"test123","client_id":"system","client_secret":"f558ba166258089b2ef322c340554c"}, opts)
			.map((response: Response) => {
				console.log(response);
			   	const loggedIn = response.json();
			   	this.isAuthenticated = true;
				this.authChanged.emit(true);
				return true;
		   	})
		   .catch(this.handleError)

		// this.http.get(this.authUrl ,opts)
		// 	.map((response: Response) => {
		// 		console.log(response);
		// 	   	const loggedIn = response.json();
		// 	   	this.isAuthenticated = true;
		// 		this.authChanged.emit(true);
		// 		console.log(this.isAuthenticated);
		//    	})
		//    .catch(this.handleError)
		//    .subscribe();	
		
	}

	handleError(error: any) {
		console.log('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
	}
	
	logout(){
		this.isAuthenticated = false;
		this.authChanged.emit(false);
		console.log(this.isAuthenticated);
	}


}
