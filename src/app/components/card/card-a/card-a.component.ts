import { Component } from '@angular/core';
import {CardService} from "../../../service/card/card.service";
import {CardA} from "../../../model/card-a";

@Component({
  selector: 'app-card-a',
  templateUrl: './card-a.component.html',
  styleUrls: ['./card-a.component.css']
})
export class CardAComponent {
  cards: CardA[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCardData().subscribe(data => {
      this.cards = data;
    });
  }

  addCard(): void {
    const newCard: CardA = {
      id: this.cards.length + 1,
      content: 'Yeni İçerik'
    };
    this.cards.push(newCard);
  }

  delete(cardId: number): void {
    this.cards = this.cards.filter(card => card.id !== cardId);
  }
}
