import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardText: string= '';
  @Input() cardHeader: string = '';
  @Input() cardParagraph: string = '';
  @Input() cardLink: string = ''; 
}
