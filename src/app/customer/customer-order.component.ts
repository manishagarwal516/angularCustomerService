import { Component, OnInit } from '@angular/core';
import { Customer }    from './customer';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
	customer = {
		firstName : "Ted",
		lastName  : "James",
		address: "1234 Anywhere St.",
		orderTotal: 40,
		orders : [{
			productName : "Basket Ball",
			itemCost: 20,
		}]
	}
  constructor() { }

  ngOnInit() {
  }

}
