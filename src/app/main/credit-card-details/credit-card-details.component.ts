import {ICreditCard} from './../credit-card-lists/credit-card-lists.interface';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss'],
})
export class CreditCardDetailsComponent implements OnInit {
  @Input('card') card: ICreditCard;
  constructor() {}

  ngOnInit() {}
}
