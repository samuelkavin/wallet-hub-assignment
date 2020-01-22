import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardListsComponent } from './credit-card-lists.component';

describe('CreditCardListsComponent', () => {
  let component: CreditCardListsComponent;
  let fixture: ComponentFixture<CreditCardListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
