import {Injectable} from '@angular/core';
import {map, catchError, retry} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  constructor(private http: HttpClient) {}

  getCreditCardLists() {
    return this.http.get('/assets/creditCard.json');
  }

  getCreditCardDetails() {
    return this.http.get('/assets/cardDetails.json');
  }
}
