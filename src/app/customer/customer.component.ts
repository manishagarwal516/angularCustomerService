import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
	selector: 'app-customer',
	templateUrl: './customer.component.html',
	styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
	title: string = "Customers Info";
	filter: string = "";
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
		this.data.getCustomers(page, this.filter)
      	.subscribe((response: any) => {
	    	this.customers = response.json.records;
	    	this.totalRecords = response.json.count;
	    });
  	}
	ngOnInit() {
		this.displayMode = DisplayModeEnum.Card;
		this.getCustomersPage(1);
	}

	changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  	}

  	filterChanged(){
  		this.getCustomersPage(1);
  	}


}
enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
