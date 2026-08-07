import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Leistungen } from '../../components/leistungen/leistungen';
import { Aufgaben } from '../../components/aufgaben/aufgaben';
import { Prozess } from '../../components/prozess/prozess';
import { Trust } from '../../components/trust/trust';
import { Kontakt } from '../../components/kontakt/kontakt';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, Leistungen, Aufgaben, Prozess, Trust, Kontakt, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
