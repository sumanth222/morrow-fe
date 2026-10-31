import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRAND_CONFIG } from '../config/brand-config';

 type WeddingOsView = 'invitation' | 'events' | 'rsvp';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './wedding-os-page.component.html',
  styleUrl: './wedding-os-page.component.scss',
})
export class WeddingOsPageComponent {
  readonly liveDemoUrl = BRAND_CONFIG.weddingOsDemoUrl;
  activeView: WeddingOsView = 'invitation';

  selectView(view: WeddingOsView): void {
    this.activeView = view;
  }
}
