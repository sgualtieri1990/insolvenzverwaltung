import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css',
})
export class WhatsappButton {
  readonly whatsappUrl =
    'https://wa.me/491777939534?text=' +
    encodeURIComponent(
      'Hallo Herr Firenze, ich habe eine Anfrage an die BVS Asset-Dienstleistungen GmbH.',
    );
}
