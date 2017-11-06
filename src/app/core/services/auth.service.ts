import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ConfigureService } from 'ng4-configure/ng4-configure';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
	isAuthenticated: boolean = false;
	authUrl: string = this.configService.config.api_endpoint;

  	constructor(private http: Http, public configService: ConfigureService) { }
	@Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

	login(data: any){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;

  		data.username = data.email;
  		data.grant_type = "password";
  		data.client_id = this.configService.config.client_id;
  		data.client_secret = this.configService.config.client_secret;
  		delete data.email;

		return this.http.post(this.authUrl + '/oauth/token', data, opts)
			.map((response: Response) => {
			   	const loggedIn = response.json();
			   	this.isAuthenticated = true;
				localStorage.setItem('loggedIn', JSON.stringify({ token: loggedIn.access_token }));
				this.authChanged.emit(true);
				return true;
		   	})
		   .catch(this.handleError);
	}

	checkforAuthentication(){
		if (localStorage.getItem('loggedIn')) {
            return true;
        }
        return false;
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
		localStorage.removeItem('loggedIn');
		this.authChanged.emit(false);
	}


}
