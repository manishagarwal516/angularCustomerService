import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({ 
  selector: 'app-customer-grid', 
  templateUrl: './customer-grid.component.html',
  styleUrls: [ './customer-grid.component.css' ],
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CustomerGridComponent implements OnInit {

  @Input() customers: any[] = [];

  constructor() { }
   
  ngOnInit() {

  }

  sort(prop: string) {
      
  }

}
