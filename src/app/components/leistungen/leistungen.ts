import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface IntroCard {
  title: string;
  description: string;
  icon: 'shield' | 'clipboard' | 'chart';
}

@Component({
  selector: 'app-leistungen',
  imports: [ScrollRevealDirective],
  templateUrl: './leistungen.html',
  styleUrl: './leistungen.css',
})
export class Leistungen {
  readonly cards: IntroCard[] = [
    {
      title: 'Bewertung',
      description: 'Fundierte Wertermittlung von Vermögensgegenständen als belastbare Grundlage für Verfahren und Entscheidungen.',
      icon: 'clipboard',
    },
    {
      title: 'Verwertung',
      description: 'Optimale Realisierung von Assets durch strukturierten Verkauf oder wirtschaftlich sinnvolle Betriebsfortführung.',
      icon: 'chart',
    },
    {
      title: 'Sicherstellung',
      description: 'Schutz und Erhaltung von Vermögenswerten gegen Verluste und unzulässige Vermögensverschiebungen.',
      icon: 'shield',
    },
  ];
}
