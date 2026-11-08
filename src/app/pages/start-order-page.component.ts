import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InviteArtComponent } from '../components/invite-art.component';
import { INVITATIONS, OCCASION_FILTERS } from '../data/invitations';
import { InquiryApiService } from '../services/inquiry-api.service';

interface InvitationBrief {
  name: string;
  email: string;
  phoneNumber: string;
  occasion: string;
  eventDate: string;
  package: string;
  design: string;
  styleNotes: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, InviteArtComponent],
  templateUrl: './start-order-page.component.html',
  styleUrl: './start-order-page.component.scss',
})
export class StartOrderPageComponent implements OnInit {
  readonly sideInvitation = INVITATIONS[2];
  readonly occasionOptions = OCCASION_FILTERS.filter((item) => item.value !== 'all');
  readonly packageOptions = [
    { value: 'little-note', label: 'The Little Note · from ₹599' },
    { value: 'celebration-page', label: 'The Celebration Page · from ₹999' },
    { value: 'full-story', label: 'The Full Story · from ₹1,599' },
    { value: 'not-sure', label: 'Not sure yet · help me choose' },
  ];

  brief: InvitationBrief = this.emptyBrief();
  isSubmitting = false;
  submissionSuccess = false;
  submittedInquiryId: number | null = null;
  apiError = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly inquiryApi: InquiryApiService,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const packageValue = params.get('package');
      const design = params.get('design');
      const occasion = params.get('occasion');

      if (packageValue && this.packageOptions.some((item) => item.value === packageValue)) {
        this.brief.package = packageValue;
      }

      if (design) {
        this.brief.design = design;
      }

      if (occasion) {
        const matched = this.occasionOptions.find((item) =>
          item.label.toLowerCase() === occasion.toLowerCase() ||
          item.value === occasion.toLowerCase(),
        );
        this.brief.occasion = matched?.label ?? occasion;
      }
    });
  }

  submitBrief(form: NgForm): void {
    this.apiError = '';
    this.submissionSuccess = false;
    this.submittedInquiryId = null;

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    this.inquiryApi.createInquiry({
      name: this.brief.name.trim(),
      email: this.brief.email.trim(),
      phoneNumber: this.brief.phoneNumber.trim(),
      occasion: this.brief.occasion,
      eventDate: this.brief.eventDate || null,
      package: this.brief.package,
      design: this.brief.design.trim() || null,
      styleNotes: this.brief.styleNotes.trim() || null,
    }).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submissionSuccess = true;
        this.submittedInquiryId = response.id;

        const w = window as Window & {
          dataLayer?: Array<Record<string, unknown>>;
        };

        w.dataLayer = w.dataLayer ?? [];
        w.dataLayer.push({
          event: 'morrow_lead_submitted'
        });
      },
      error: (error: unknown) => {
        this.isSubmitting = false;
        const httpError = error as { status?: number; error?: { message?: string } };

        if (httpError?.status === 0) {
          this.apiError = 'We could not reach the studio just now. Please try again in a moment.';
        } else if (httpError?.error?.message) {
          this.apiError = httpError.error.message;
        } else {
          this.apiError = 'Your note could not be sent just now. Please try again.';
        }
      },
    });
  }

  private emptyBrief(): InvitationBrief {
    return {
      name: '',
      email: '',
      phoneNumber: '',
      occasion: '',
      eventDate: '',
      package: 'not-sure',
      design: '',
      styleNotes: '',
    };
  }
}
