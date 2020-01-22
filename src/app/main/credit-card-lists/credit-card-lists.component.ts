import {ICreditCard} from './credit-card-lists.interface';
import {Component, OnInit} from '@angular/core';

import {CreditCardService} from './../../services/credit-card.service';

@Component({
  selector: 'app-credit-card-lists',
  templateUrl: './credit-card-lists.component.html',
  styleUrls: ['./credit-card-lists.component.scss'],
})
export class CreditCardListsComponent implements OnInit {
  creditCards: ICreditCard;
  constructor(public creditCardService: CreditCardService) {}

  ngOnInit() {
    this.loadCreditCardList();
  }

  loadCreditCardList() {
    this.creditCardService.getCreditCardLists().subscribe(
      (cards: ICreditCard) => (this.creditCards = cards),
      (error) => console.log(error),
    );
  }
}
