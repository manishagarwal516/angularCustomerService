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
  title: string = "Add Customer";
  buttonText: string = "Add";
  customerInfo: any;
  customer = {
    customer_id: 0,
    first_name: '',
    last_name: '',
    gender: 'male',
    address: '',
    city: '',
    state_id : 1
  }
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
          if(customerResponse.status === "success"){
            alert("User Updated Successfully");
            this.router.navigate(['/customer']);
          }else{
            alert("Error in updating the User");
          }
      });
    }else{
      this.data.createCustomer(this.customer)
        .subscribe((customerResponse: any) => {
          console.log(customerResponse);
      });
    }
  }
  reset(id){
    if (id !== 0) 
      this.customer = new Customer(this.customerInfo.customer_id, this.customerInfo.first_name,this.customerInfo.last_name, this.customerInfo.gender,this.customerInfo.address, this.customerInfo.city,this.customerInfo.state_id);
    else
      this.customer = new Customer(0, '','','male','','', 1);
  }
  getCustomer(id){
  	if (id !== 0) {
      this.title = "Update Customer";
      this.buttonText = "Update";
      this.data.getCustomer(id)
        .subscribe((customerResponse: any) => {
          this.customerInfo = customerResponse.json[0];
          this.customer = new Customer(this.customerInfo.customer_id, this.customerInfo.first_name,this.customerInfo.last_name, this.customerInfo.gender,this.customerInfo.address, this.customerInfo.city,this.customerInfo.state_id);
      });
    }
  }

}