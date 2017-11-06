import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
	selector: 'app-customer',
	templateUrl: './customer.component.html',
	styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
	title: string = "Customers Info";
	totalRecords: number = 0;
	pageSize: number = 5;
	customers = [];
	displayMode: DisplayModeEnum;
  	displayModeEnum = DisplayModeEnum;
	
	pageChanged(page: number) {
		this.getCustomersPage(page);
	}

	constructor(private data : DataService) { }

	getCustomersPage(page: number) {

		this.data.getCustomers()
      	.subscribe((response: any) => {
        	console.log(response);
	    	this.customers = response.json;
	    	this.totalRecords = response.json.length;
	    });
  	}
	ngOnInit() {
		this.displayMode = DisplayModeEnum.Card;
		this.getCustomersPage(1);
	}

	changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  	}

}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
