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
    'Persönliche Betreuung in jedem Verfahren',
    'Regional verwurzelt im Ruhrgebiet',
  ];
}
