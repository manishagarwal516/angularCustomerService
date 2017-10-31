import { Component, OnInit } from '@angular/core';
import { Customer }    from './customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
	customer = new Customer('','','','','','',null,null);
  constructor() { }

  ngOnInit() {
  }

}
