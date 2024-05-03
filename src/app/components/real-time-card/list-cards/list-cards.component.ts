import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent {
  @Input() title!: string | '';
  @Input() content!: string | '';
  @Output() delete = new EventEmitter<void>();
}
