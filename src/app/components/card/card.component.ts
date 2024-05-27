import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/characters';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() character?: Character;

  ngOnInit(): void {}
}
