import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-custormer',
	templateUrl: './custormer.component.html',
	styleUrls: ['./custormer.component.css']
})
export class CustormerComponent implements OnInit {
	totalRecords: number = 0;
	pageSize: number = 10;
	customers = [];
	displayMode: DisplayModeEnum;
  	displayModeEnum = DisplayModeEnum;
	
	pageChanged(page: number) {
		this.getCustomersPage(page);
	}

	constructor() { }

	getCustomersPage(page: number) {
		var sampleData = [{"id":1,"firstName":"ted","lastName":"james","gender":"male","address":"1234 Anywhere St.","city":" Phoenix ","state":{"abbreviation":"AZ","name":"Arizona"},"orders":[{"productName":"Basketball","itemCost":7.99},{"productName":"Shoes","itemCost":199.99}],"latitude":33.299,"longitude":-111.963},{"id":2,"firstName":"Michelle","lastName":"Thompson","gender":"female","address":"345 Cedar Point Ave.","city":"Encinitas ","state":{"abbreviation":"CA","name":"California"},"orders":[{"productName":"Frisbee","itemCost":2.99},{"productName":"Hat","itemCost":5.99}],"latitude":33.037,"longitude":-117.291},{"id":3,"firstName":"Zed","lastName":"Bishop","gender":"male","address":"1822 Long Bay Dr.","city":" Seattle ","state":{"abbreviation":"WA","name":"Washington"},"orders":[{"productName":"Boomerang","itemCost":29.99},{"productName":"Helmet","itemCost":19.99},{"productName":"Kangaroo Saddle","itemCost":179.99}],"latitude":47.596,"longitude":-122.331},{"id":4,"firstName":"Tina","lastName":"Adams","gender":"female","address":"79455 Pinetop Way","city":"Chandler","state":{"abbreviation":"AZ","name":" Arizona "},"orders":[{"productName":"Budgie Smugglers","itemCost":19.99},{"productName":"Swimming Cap","itemCost":5.49}],"latitude":33.299,"longitude":-111.963},{"id":5,"firstName":"Igor","lastName":"Minar","gender":"male","address":"576 Crescent Blvd.","city":" Dallas","state":{"abbreviation":"TX","name":"Texas"},"orders":[{"productName":"Bow","itemCost":399.99},{"productName":"Arrows","itemCost":69.99}],"latitude":32.782927,"longitude":-96.806191},{"id":6,"firstName":"Brad","lastName":"Green","gender":"male","address":"9874 Center St.","city":"Orlando ","state":{"abbreviation":"FL","name":"Florida"},"orders":[{"productName":"Baseball","itemCost":9.99},{"productName":"Bat","itemCost":19.99}],"latitude":28.384238,"longitude":-81.564103},{"id":7,"firstName":"Misko","lastName":"Hevery","gender":"male","address":"9812 Builtway Appt #1","city":"Carey ","state":{"abbreviation":"NC","name":"North Carolina"},"orders":[{"productName":"Surfboard","itemCost":299.99},{"productName":"Wax","itemCost":5.99},{"productName":"Shark Repellent","itemCost":15.99}],"latitude":35.727985,"longitude":-78.797594},{"id":8,"firstName":"Heedy","lastName":"Wahlin","gender":"female","address":"4651 Tuvo St.","city":"Anaheim","state":{"abbreviation":"CA","name":"California"},"orders":[{"productName":"Saddle","itemCost":599.99},{"productName":"Riding cap","itemCost":79.99}],"latitude":33.809898,"longitude":-117.918757},{"id":9,"firstName":"John","lastName":"Papa","gender":"male","address":"66 Ray St.","city":" Orlando","state":{"abbreviation":"FL","name":"Florida"},"orders":[{"productName":"Baseball","itemCost":9.99},{"productName":"Bat","itemCost":19.99}],"latitude":28.384238,"longitude":-81.564103},{"id":10,"firstName":"Tonya","lastName":"Smith","gender":"female","address":"1455 Chandler Blvd.","city":" Atlanta","state":{"abbreviation":"GA","name":"Georgia"},"orders":[{"productName":"Surfboard","itemCost":299.99},{"productName":"Wax","itemCost":5.99},{"productName":"Shark Repellent","itemCost":7.99}],"latitude":33.762297,"longitude":-84.392953}]
    	this.customers = sampleData;
    	this.totalRecords = sampleData.length;
	    // this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
	    //     .subscribe((response: IPagedResults<ICustomer[]>) => {
	    //     },
	    //     (err: any) => console.log(err),
	    //     () => console.log('getCustomersPage() retrieved customers for page: ' + page));
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
