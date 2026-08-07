import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Leistungen } from '../../components/leistungen/leistungen';
import { Aufgaben } from '../../components/aufgaben/aufgaben';
import { Prozess } from '../../components/prozess/prozess';
import { Team } from '../../components/team/team';
import { Kontakt } from '../../components/kontakt/kontakt';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, Leistungen, Aufgaben, Prozess, Team, Kontakt, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
