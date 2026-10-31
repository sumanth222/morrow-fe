import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { InviteArtComponent } from '../components/invite-art.component';
import { getInvitation, INVITATIONS, PALETTES } from '../data/invitations';
import { InvitationDesign, InvitationPalette } from '../models/invitation.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, InviteArtComponent],
  templateUrl: './preview-page.component.html',
  styleUrl: './preview-page.component.scss',
})
export class PreviewPageComponent implements OnInit {
  invitation: InvitationDesign = INVITATIONS[0];
  readonly palettes = PALETTES;
  previewTitle = '';
  previewDate = '';
  selectedPalette: InvitationPalette = PALETTES[0];
  detailsOpen = false;
  rsvpResponse = '';
  copyMessage = '';

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const found = getInvitation(params.get('slug'));
      if (!found) {
        void this.router.navigateByUrl('/not-found');
        return;
      }
      this.invitation = found;
      this.resetCustomisation();
    });
  }

  selectPalette(palette: InvitationPalette): void {
    this.selectedPalette = palette;
  }

  resetCustomisation(): void {
    this.previewTitle = this.invitation.artTitle;
    this.previewDate = this.invitation.artDate;
    this.selectedPalette = this.invitation.palette;
    this.detailsOpen = false;
    this.rsvpResponse = '';
    this.copyMessage = '';
  }

  respond(response: 'yes' | 'no'): void {
    this.rsvpResponse = response === 'yes'
      ? 'Lovely! In a real invitation, your host would receive this RSVP.'
      : 'No worries. In a real invitation, your host would receive this response.';
  }

  async copyPreviewLink(): Promise<void> {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      this.copyMessage = 'Preview link copied.';
    } catch {
      this.copyMessage = 'Copy the link from your browser address bar to share this preview.';
    }
  }
}
