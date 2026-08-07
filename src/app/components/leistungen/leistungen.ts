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
      description: 'Wertermittlung von Vermögensgegenständen als belastbare Grundlage für Verfahren.',
      icon: 'clipboard',
    },
    {
      title: 'Verwertung',
      description: 'Realisierung von Assets durch Verkauf oder wirtschaftliche Betriebsfortführung.',
      icon: 'chart',
    },
    {
      title: 'Sicherstellung',
      description: 'Schutz und Erhaltung von Vermögenswerten gegen Verlust und unzulässige Verschiebungen.',
      icon: 'shield',
    },
  ];
}
