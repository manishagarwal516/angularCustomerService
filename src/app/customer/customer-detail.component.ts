import { Component, OnInit } from '@angular/core';
import { Customer }    from './customer';
import { DataService } from '../core/services/data.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
	customer = {};
  customerInfoForMap = [];
  constructor(private data : DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      let id = +params['id'];
      console.log(id);
      this.data.getCustomer(id)
        .subscribe((customerResponse: any) => {
          this.customerInfoForMap = customerResponse.json;
          this.customer = this.customerInfoForMap[0];
        });
    });
  }

}
