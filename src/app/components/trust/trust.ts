import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-trust',
  imports: [ScrollRevealDirective],
  templateUrl: './trust.html',
  styleUrl: './trust.css',
})
export class Trust {
  readonly features = [
    'Bewertung, Verwertung & Sicherstellung aus einer Hand',
    'Erfahrung in Unternehmens- und Privatinsolvenz',
    'Diskretion und transparente Kommunikation',
    'Tätig in NRW – speziell im Ruhrgebiet',
  ];
}
