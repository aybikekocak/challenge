import { Component } from '@angular/core';

@Component({
  selector: 'app-real-time-card',
  templateUrl: './real-time-card.component.html',
  styleUrls: ['./real-time-card.component.css']
})
export class RealTimeCardComponent {
  cards = [
    { title: 'Kart 1', content: 'İçerik 1' },
    { title: 'Kart 2', content: 'İçerik 2' },
    { title: 'Kart 3', content: 'İçerik 3' }
  ];

  addCards(): void {
    this.cards.push({ title: 'Yeni Kart', content: 'Yeni İçerik' });
  }

  deleteCard(card: any): void {
    this.cards = this.cards.filter(item => item !== card);
  }
}
