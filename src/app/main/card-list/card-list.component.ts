import {Component, OnInit} from '@angular/core';
import {CreditCardService} from 'src/app/services/credit-card.service';
import {ICreditCard} from './card-list.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
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
