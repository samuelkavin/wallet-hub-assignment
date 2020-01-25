import {Component, OnInit} from '@angular/core';
import {ICreditCard} from 'src/app/main/card-list/card-list.interface';
import {CreditCardService} from 'src/app/services/credit-card.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({height: 0, opacity: 0}),
        animate('1s ease-out', style({height: 300, opacity: 1})),
      ]),
      transition(':leave', [
        style({height: 300, opacity: 1}),
        animate('1s ease-in', style({height: 0, opacity: 0})),
      ]),
    ]),
  ],
})
export class CreditCardDetailsComponent implements OnInit {
  cardDetails: ICreditCard;
  name: string;
  form: FormGroup;
  isSuccess: boolean;

  constructor(
    public creditCardService: CreditCardService,
    public activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  onSelect(value: string) {
    // For demo purpose only, suppose to must call api `Get card details by ID`
    (value === '1') ? this.loadCreditCardDetail() : this.loadDiscoverCreditDetail();
  }

  ngOnInit() {
    this.loadCreditCardDetail();
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.form = this.fb.group({
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      terms: ['', [Validators.required]],
    });
  }

  loadDiscoverCreditDetail() {
    this.creditCardService.getDiscoverCardDetails().subscribe(
      (card: ICreditCard) => (this.cardDetails = card),
      (error) => console.log(error),
    );
  }

  loadCreditCardDetail() {
    this.creditCardService.getCreditCardDetails().subscribe(
      (card: ICreditCard) => (this.cardDetails = card),
      (error) => console.log(error),
    );
  }

  onSubmit() {
    this.isSuccess = true;
    console.log(this.form.value);
  }

  get phone() {
    return this.form.get('phone');
  }
  get email() {
    return this.form.get('email');
  }
}
