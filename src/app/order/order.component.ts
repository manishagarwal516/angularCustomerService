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
    this.data.getOrders()
      .subscribe((response: any) => {
        console.log(response);
      this.customers = response.json;
      this.totalRecords = response.json.length;
    });
  }

}
