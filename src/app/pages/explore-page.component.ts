import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InviteArtComponent } from '../components/invite-art.component';
import { INVITATIONS, OCCASION_FILTERS, formatPrice } from '../data/invitations';
import { InvitationDesign, OccasionCategory, OccasionFilter } from '../models/invitation.model';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, InviteArtComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class ExplorePageComponent implements OnInit {
  readonly allInvitations = INVITATIONS;
  readonly occasionFilters = OCCASION_FILTERS;
  readonly heroInvitation = INVITATIONS[0];
  readonly birthdayInvitation = INVITATIONS[1];
  readonly babyInvitation = INVITATIONS[2];
  readonly homeInvitation = INVITATIONS[3];
  readonly formatPrice = formatPrice;
  selectedFilter: OccasionFilter['value'] = 'all';

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const occasion = params.get('occasion');
      if (occasion && this.occasionFilters.some((filter) => filter.value === occasion)) {
        this.selectedFilter = occasion as OccasionFilter['value'];
        requestAnimationFrame(() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      }
    });
  }

  get filteredInvitations(): InvitationDesign[] {
    return this.selectedFilter === 'all'
      ? this.allInvitations
      : this.allInvitations.filter((item) => item.category === this.selectedFilter);
  }

  chooseOccasion(category: OccasionCategory | 'all'): void {
    this.selectedFilter = category;
    document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  trackInvitation(_index: number, invitation: InvitationDesign): string {
    return invitation.slug;
  }
}
