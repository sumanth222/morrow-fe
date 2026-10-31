import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ms-site-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  menuOpen = false;

  closeMenu(): void {
    this.menuOpen = false;
  }
}
