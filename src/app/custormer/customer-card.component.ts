import { Component, Input, OnInit, ChangeDetectionStrategy,
         trigger, state, style, transition, animate } from '@angular/core';

@Component({ 
  selector: 'app-customer-card', 
  templateUrl: './customer-card.component.html',
  styleUrls: [ './customer-card.component.css' ],
  //Add [@flyInOut]="'in'" into template on card
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({transform: 'translateX(0)', opacity: 1})),
  //     transition('void => *', [
  //       style({transform: 'translateX(25%)', opacity: 0}),
  //       animate(300)
  //     ]),
  //     transition('* => void', [
  //       animate(300, style({transform: 'translateX(-25%)', opacity: 1}))
  //     ])
  //   ])
  // ],
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CustomerCardComponent implements OnInit {

  @Input() customers = [];
  
  constructor() { }
  
  ngOnInit() {

  }

}

