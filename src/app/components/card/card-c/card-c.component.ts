import {Component} from '@angular/core';
import {CardA} from "../../../model/card-a";
import {CardService} from "../../../service/card/card.service";
import {CardC} from "../../../model/card-c";

@Component({
  selector: 'app-card-c',
  templateUrl: './card-c.component.html',
  styleUrls: ['./card-c.component.css']
})
export class CardCComponent {
  cards: CardC[] = [];

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
