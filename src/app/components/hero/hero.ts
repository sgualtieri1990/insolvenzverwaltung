import { Component } from '@angular/core';

interface HeroStat {
  number: string;
  label: string;
  icon: 'experience' | 'cases' | 'shield' | 'drives' | 'coffee';
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly stats: HeroStat[] = [
    { number: '25+', label: 'Jahre Erfahrung', icon: 'experience' },
    { number: '500+', label: 'Verfahren betreut', icon: 'cases' },
    { number: '100%', label: 'Rechtssicherheit', icon: 'shield' },
    { number: '170', label: 'Fahrten', icon: 'drives' },
    { number: '2.800+', label: 'Kaffees', icon: 'coffee' },
  ];
}
