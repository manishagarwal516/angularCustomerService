import { Component, OnInit } from '@angular/core';
import { Customer }    from './customer';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  title: string;
  customer : any;
  constructor(private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe((params: Params) => {
        let id = +params['id'];
        this.getCustomer(id);   
    });
  }

  getCustomer(id){
  	console.log(id);
  	if (id !== 0) {
      this.title = "Update Customer"
      this.customer = new Customer('Ted','James','male','1234 Anywhere St.','Phoenix','Arizona');
    }else{
      this.title = "Add Customer"
      this.customer = new Customer('','','','','','');
    }
  }

}