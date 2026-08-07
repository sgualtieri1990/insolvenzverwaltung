import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
  host: {
    '[class.logo--dark]': 'variant() === "dark"',
    '[class.logo--light]': 'variant() === "light"',
  },
})
export class Logo {
  readonly variant = input<'light' | 'dark'>('light');
}
