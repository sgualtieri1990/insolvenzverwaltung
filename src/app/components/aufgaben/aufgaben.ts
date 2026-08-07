import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Task {
  number: string;
  title: string;
  description: string;
  tags: string[];
  highlight?: boolean;
}

@Component({
  selector: 'app-aufgaben',
  imports: [ScrollRevealDirective],
  templateUrl: './aufgaben.html',
  styleUrl: './aufgaben.css',
})
export class Aufgaben {
  readonly tasks: Task[] = [
    {
      number: '01',
      title: 'Sicherung der Insolvenzmasse',
      description: 'Bestandsaufnahme, Kontosperrung und Schutz der Insolvenzmasse.',
      tags: ['Vermögensinventur', 'Kontosperrung', 'Forderungseinzug'],
    },
    {
      number: '02',
      title: 'Prüfung und Verwaltung',
      description: 'Prüfung der Gläubigerforderungen, Anfechtung und Vertragsmanagement.',
      tags: ['Forderungsprüfung', 'Anfechtungsrecht', 'Vertragsmanagement'],
    },
    {
      number: '03',
      title: 'Verwertung oder Sanierung',
      description: 'Verkauf von Assets oder Betriebsfortführung zur Erlösmaximierung.',
      tags: ['Asset-Verkauf', 'Betriebsfortführung', 'Sanierungskonzepte'],
    },
    {
      number: '04',
      title: 'Berichterstattung',
      description: 'Information von Gericht und Gläubigern über den Verfahrensstand.',
      tags: ['Gerichtsberichte', 'Gläubigerinformation', 'Transparenz'],
    },
    {
      number: '05',
      title: 'Ausschüttung',
      description: 'Ausschüttung der Erlöse gemäß gesetzlicher Rangordnung.',
      tags: ['Rangordnung beachten', 'Quotenausschüttung', 'Verfahrensabschluss'],
      highlight: true,
    },
  ];
}
