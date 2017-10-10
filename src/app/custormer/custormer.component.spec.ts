import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustormerComponent } from './custormer.component';

describe('CustormerComponent', () => {
  let component: CustormerComponent;
  let fixture: ComponentFixture<CustormerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustormerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
