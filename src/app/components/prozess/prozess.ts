import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface ProcessStep {
  title: string;
  description: string;
  icon: 'clock' | 'check' | 'building' | 'payout';
}

@Component({
  selector: 'app-prozess',
  imports: [ScrollRevealDirective],
  templateUrl: './prozess.html',
  styleUrl: './prozess.css',
})
export class Prozess {
  readonly steps: ProcessStep[] = [
    {
      title: 'Eröffnung',
      description: 'Das Insolvenzgericht eröffnet das Verfahren und bestellt den Insolvenzverwalter.',
      icon: 'clock',
    },
    {
      title: 'Sicherung & Prüfung',
      description: 'Bestandsaufnahme, Sicherung der Masse und Prüfung aller Gläubigerforderungen.',
      icon: 'check',
    },
    {
      title: 'Verwertung',
      description: 'Realisierung der Vermögenswerte oder Fortführung des Unternehmensbetriebs.',
      icon: 'building',
    },
    {
      title: 'Ausschüttung & Abschluss',
      description: 'Verteilung der Erlöse an die Gläubiger und ordnungsgemäßer Abschluss des Verfahrens.',
      icon: 'payout',
    },
  ];
}
