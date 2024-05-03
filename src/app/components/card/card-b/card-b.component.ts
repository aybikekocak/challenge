import {Component} from '@angular/core';
import {CardA} from "../../../model/card-a";
import {CardService} from "../../../service/card/card.service";
import {CardB} from "../../../model/card-b";

@Component({
  selector: 'app-card-b',
  templateUrl: './card-b.component.html',
  styleUrls: ['./card-b.component.css']
})
export class CardBComponent {
  cards: CardB[] = [];

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
