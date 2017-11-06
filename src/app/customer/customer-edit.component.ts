import { Component, OnInit } from '@angular/core';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Customer }    from './customer';
import { DataService } from '../core/services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  title: string;
  customer : any;
  states: any;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private data : DataService) { }

  ngOnInit() {
  	this.route.params.subscribe((params: Params) => {
        let id = +params['id'];
        this.getCustomer(id);   
    });
    this.data.getStates()
      .subscribe((stateResponse: any) => {
       this.states = stateResponse.json;
    });
  }

  saveCustomer(){
    if(this.customer.customer_id){
      this.data.updateCustomer(this.customer.customer_id, this.customer)
        .subscribe((customerResponse: any) => {
          console.log(customerResponse);
      });
    }else{
      this.data.createCustomer(this.customer)
        .subscribe((customerResponse: any) => {
          console.log(customerResponse);
      });
    }
  }

  getCustomer(id){
  	if (id !== 0) {
      this.title = "Update Customer"
      this.data.getCustomer(id)
        .subscribe((customerResponse: any) => {
          let customerInfo = customerResponse.json[0];
          this.customer = new Customer(customerInfo.customer_id, customerInfo.first_name,customerInfo.last_name, customerInfo.gender,customerInfo.address, customerInfo.city,'Arizona');
      });
    }else{
      this.title = "Add Customer"
      this.customer = new Customer(0, '','', '','', '','Arizona');
    }
  }

}