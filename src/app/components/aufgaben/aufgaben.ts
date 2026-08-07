import { Component } from '@angular/core';

interface Task {
  number: string;
  title: string;
  description: string;
  tags: string[];
  highlight?: boolean;
}

@Component({
  selector: 'app-aufgaben',
  imports: [],
  templateUrl: './aufgaben.html',
  styleUrl: './aufgaben.css',
})
export class Aufgaben {
  readonly tasks: Task[] = [
    {
      number: '01',
      title: 'Sicherung der Insolvenzmasse',
      description: 'Bestandsaufnahme aller Vermögenswerte, Schließung von Konten, Einziehen offener Forderungen und Verhinderung von Vermögensverschiebungen.',
      tags: ['Vermögensinventur', 'Kontosperrung', 'Forderungseinzug'],
    },
    {
      number: '02',
      title: 'Prüfung und Verwaltung',
      description: 'Feststellung der Forderungen aller Gläubiger, Geltendmachung von Anfechtungsansprüchen und Entscheidung über laufende Verträge.',
      tags: ['Forderungsprüfung', 'Anfechtungsrecht', 'Vertragsmanagement'],
    },
    {
      number: '03',
      title: 'Verwertung oder Sanierung',
      description: 'Verkauf von Gegenständen, Maschinen oder Immobilien bzw. Fortführung des Unternehmens zur Erzielung eines höheren Erlöses.',
      tags: ['Asset-Verkauf', 'Betriebsfortführung', 'Sanierungskonzepte'],
    },
    {
      number: '04',
      title: 'Berichterstattung',
      description: 'Regelmäßige Information des Insolvenzgerichts und der Gläubigerversammlung über den Stand des Verfahrens.',
      tags: ['Gerichtsberichte', 'Gläubigerinformation', 'Transparenz'],
    },
    {
      number: '05',
      title: 'Ausschüttung',
      description: 'Verteilung der Erlöse an die Gläubiger gemäß der gesetzlichen Rangordnung – gleichmäßig und nachvollziehbar.',
      tags: ['Rangordnung beachten', 'Quotenausschüttung', 'Verfahrensabschluss'],
      highlight: true,
    },
  ];
}
