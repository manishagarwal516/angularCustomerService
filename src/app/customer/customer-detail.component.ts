import { Component, OnInit } from '@angular/core';
import { Customer }    from './customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
	customer = {
		firstName: "Ted",
   	lastName: "James",
   	gender: "male",
   	address: "1234 Anywhere St.",
   	city: "Phoenix",
   	state: {
   		id : 10,
   		name : "Arizona"
   	}
	}
  constructor() { }

  ngOnInit() {
  }

}
