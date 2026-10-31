import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InvitationDesign, InvitationPalette } from '../models/invitation.model';

@Component({
  selector: 'ms-invite-art',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invite-art.component.html',
  styleUrl: './invite-art.component.scss',
})
export class InviteArtComponent {
  @Input({ required: true }) invitation!: InvitationDesign;
  @Input() large = false;
  @Input() titleOverride = '';
  @Input() dateOverride = '';
  @Input() customPalette?: InvitationPalette;

  get palette(): InvitationPalette {
    return this.customPalette ?? this.invitation.palette;
  }

  get displayTitle(): string {
    return this.titleOverride.trim() || this.invitation.artTitle;
  }

  get displayDate(): string {
    return this.dateOverride.trim() || this.invitation.artDate;
  }
}
