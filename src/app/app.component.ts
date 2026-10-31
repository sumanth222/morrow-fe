import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './components/site-header.component';
import { SiteFooterComponent } from './components/site-footer.component';

@Component({
  selector: 'ms-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  template: `
    <ms-site-header />
    <main id="main-content"><router-outlet /></main>
    <ms-site-footer />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
