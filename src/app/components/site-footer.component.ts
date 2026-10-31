import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRAND_CONFIG } from '../config/brand-config';

@Component({
  selector: 'ms-site-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  readonly year = new Date().getFullYear();
  readonly contactEmail = BRAND_CONFIG.contactEmail;
}
