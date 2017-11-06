import { Component, OnInit } from '@angular/core';
import { Customer }    from './customer';
import { DataService } from '../core/services/data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
	customer = {};
  constructor(private data : DataService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe((params: Params) => {
      console.log(params);
      let id = +params['id'];
      console.log(id);
      this.data.getCustomerOrders(id)
        .subscribe((customerResponse: any) => {
          this.customer = customerResponse.json[0];
        });
    });
  }

}
