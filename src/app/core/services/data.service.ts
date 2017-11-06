import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ConfigureService } from 'ng4-configure/ng4-configure';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
	dataurl: string = this.configService.config.api_endpoint;
  	constructor(private http: Http, public configService: ConfigureService) { }

  	getCustomers(){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;

		return this.http.get(this.dataurl + '/customers',opts)
			.map((response: Response) => {
			   	return response.json();
		   	})
		.catch(this.handleError);
	}

	getOrders(){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;

		return this.http.get(this.dataurl + '/orders',opts)
			.map((response: Response) => {
			   	return response.json();
		   	})
		.catch(this.handleError);
	}

	getStates(){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;

		return this.http.get(this.dataurl + '/state',opts)
			.map((response: Response) => {
			   	return response.json();
		   	})
		.catch(this.handleError);
	}

	getCustomerOrders(id){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;

		return this.http.get(this.dataurl + '/customers/' + id + '/orders',opts)
			.map((response: Response) => {
			   	return response.json();
		   	})
		.catch(this.handleError);
	}

	updateCustomer(id, customerData){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;
  		delete customerData.state;
		return this.http.put(this.dataurl + '/customers/' + id,customerData,opts)
			.map((response: Response) => {
			   	return response.json();
		   	})
		.catch(this.handleError);
	}

	createCustomer(customerData){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;
  		delete customerData.state;
  		delete customerData.customer_id;
		return this.http.post(this.dataurl + '/customers' ,customerData,opts)
			.map((response: Response) => {
			   	return response.json();
		   	})
		.catch(this.handleError);
	}

	getCustomer(id: number){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;

		return this.http.get(this.dataurl + '/customers/' + id,opts)
			.map((response: Response) => {
			   	return response.json();
		   	})
		.catch(this.handleError);
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
}
