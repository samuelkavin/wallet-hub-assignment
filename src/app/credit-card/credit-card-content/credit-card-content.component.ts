import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ICreditCard, ITypeOfCard} from 'src/app/main/card-list/card-list.interface';

@Component({
  selector: 'app-credit-card-content',
  templateUrl: './credit-card-content.component.html',
  styleUrls: ['./credit-card-content.component.scss'],
})
export class CreditCardContentComponent implements OnInit {
  @Input() cardDetails: ICreditCard;
  @Output() selectedCard = new EventEmitter<string>();

  typeOfCards: ITypeOfCard[] = [
    {id: '1', name: 'Barclaycard CashForward'},
    {id: '2', name: 'Discover it'}
  ]

  constructor() {}

  onChange(value: string) {
    this.selectedCard.emit(value);
  }

  ngOnInit() {}
}
