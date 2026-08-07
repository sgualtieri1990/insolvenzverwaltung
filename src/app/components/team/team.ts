import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-team',
  imports: [ScrollRevealDirective],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  readonly highlights = [
    'Persönliche Betreuung statt anonymer Massenabfertigung',
    'Verlässlicher Partner für Kanzleien und Wirtschaft',
    'Regional verwurzelt im Ruhrgebiet, tätig in ganz NRW',
  ];
}
