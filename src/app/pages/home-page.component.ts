import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InviteArtComponent } from '../components/invite-art.component';
import { INVITATIONS } from '../data/invitations';

@Component({
  standalone: true,
  imports: [RouterLink, InviteArtComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly heroInvitation = INVITATIONS[0];
}
