export type OccasionCategory = 'wedding' | 'birthday' | 'baby' | 'home' | 'corporate';

export interface InvitationPalette {
  name: string;
  paper: string;
  ink: string;
  accent: string;
  wash: string;
  line: string;
}

export interface InvitationDesign {
  slug: string;
  title: string;
  category: OccasionCategory;
  occasionLabel: string;
  label: string;
  index: string;
  priceFrom: number;
  description: string;
  artKicker: string;
  artTitle: string;
  artSubtitle: string;
  artDate: string;
  palette: InvitationPalette;
  features: string[];
  badge?: string;
}

export interface OccasionFilter {
  label: string;
  value: 'all' | OccasionCategory;
}
