import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
	totalRecords: number = 0;
  pageSize: number = 5;
  customers = [];
  constructor(private data : DataService) { }

  ngOnInit() {
    this.getOrderPage(1);
  }

  getOrderPage(page: number){
    this.data.getOrders(page)
      .subscribe((response: any) => {
        console.log(response);
      this.customers = response.json.records;
      this.totalRecords = response.json.count;
    });
  }

  pageChanged(page: number) {
    this.getOrderPage(page);
  }
}
