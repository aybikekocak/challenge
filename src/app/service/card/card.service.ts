import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Card} from "../../model/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }

  getCardData(): Observable<Card[]> {
    const fakeData: Card[] = [];
    for (let i = 0; i < 5; i++) {
      fakeData.push({
        id: i + 1,
        content: `İçerik ${i + 1}`
      });
    }
    return of(fakeData);
  }

}
