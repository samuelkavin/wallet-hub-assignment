import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardContentComponent } from './credit-card-content.component';

describe('CreditCardContentComponent', () => {
  let component: CreditCardContentComponent;
  let fixture: ComponentFixture<CreditCardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
