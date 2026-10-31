import { InvitationDesign, InvitationPalette, OccasionFilter } from '../models/invitation.model';

export const PALETTES: InvitationPalette[] = [
  { name: 'Terracotta', paper: '#f5e9da', ink: '#553a31', accent: '#b7654d', wash: '#e5c7ae', line: '#c68b73' },
  { name: 'Olive garden', paper: '#f0efdf', ink: '#3d493b', accent: '#78815f', wash: '#d7ddc6', line: '#aab392' },
  { name: 'Buttercream', paper: '#fff3d7', ink: '#5c4639', accent: '#d49a44', wash: '#f4ddb0', line: '#d4b87e' },
  { name: 'Rosewater', paper: '#f6e6e3', ink: '#5f3e43', accent: '#bd777d', wash: '#e9c4c2', line: '#d8a2a4' },
  { name: 'Midnight', paper: '#263b3a', ink: '#f6eedf', accent: '#d8b27a', wash: '#3f5852', line: '#7f9a87' },
];

export const OCCASION_FILTERS: OccasionFilter[] = [
  { label: 'Everything', value: 'all' },
  { label: 'Weddings', value: 'wedding' },
  { label: 'Birthdays', value: 'birthday' },
  { label: 'Little ones', value: 'baby' },
  { label: 'New beginnings', value: 'home' },
  { label: 'Gather at work', value: 'corporate' },
];

export const INVITATIONS: InvitationDesign[] = [
  {
    slug: 'the-garden-party', title: 'The garden party', category: 'wedding', occasionLabel: 'Wedding', label: 'A day to remember', index: '01', priceFrom: 499,
    description: 'A botanical, story-led invitation for a celebration with room to breathe.',
    artKicker: 'TOGETHER WITH THEIR FAMILIES', artTitle: 'Mira & Arjun', artSubtitle: 'invite you to celebrate their next chapter', artDate: '14 · FEBRUARY · 2027', palette: PALETTES[0],
    features: ['Multi-event timeline', 'Photo gallery', 'Location and RSVP'], badge: 'Studio favourite'
  },
  {
    slug: 'a-little-more-sunshine', title: 'A little more sunshine', category: 'birthday', occasionLabel: 'Birthday', label: 'One happy year', index: '02', priceFrom: 499,
    description: 'A joyful little page for big candles, tiny wishes and very good cake.',
    artKicker: 'HIP HIP HOORAY', artTitle: 'Mila turns five', artSubtitle: 'come for the cake, stay for the confetti', artDate: 'SATURDAY · 3 PM', palette: PALETTES[2],
    features: ['Playful motion', 'Party details', 'Easy RSVP'], badge: 'Playful'
  },
  {
    slug: 'little-wildflower', title: 'Little wildflower', category: 'baby', occasionLabel: 'Baby shower', label: 'A little wonder', index: '03', priceFrom: 499,
    description: 'Soft botanical details for welcoming someone wonderfully new.',
    artKicker: 'A LITTLE ONE IS ON THE WAY', artTitle: 'Baby on the way', artSubtitle: 'join us for a shower full of love', artDate: 'SUNDAY · 11 AM', palette: PALETTES[1],
    features: ['Gentle animations', 'Registry links', 'Guest responses']
  },
  {
    slug: 'the-open-door', title: 'The open door', category: 'home', occasionLabel: 'Housewarming', label: 'A new beginning', index: '04', priceFrom: 499,
    description: 'An inviting little note for a new address and a table with extra chairs.',
    artKicker: 'A HOME IS MADE OF MOMENTS', artTitle: 'Come on in', artSubtitle: 'we have a new place and would love your face', artDate: 'SUNDAY · 12:30 PM', palette: PALETTES[3],
    features: ['Map and directions', 'Potluck notes', 'One-tap RSVP']
  },
  {
    slug: 'good-people-good-work', title: 'Good people, good work', category: 'corporate', occasionLabel: 'Work event', label: 'An evening together', index: '05', priceFrom: 499,
    description: 'A considered invitation for launches, team gatherings and ideas worth sharing.',
    artKicker: 'AN EVENING BY DESIGN', artTitle: 'The next chapter', artSubtitle: 'an evening of good ideas and better company', artDate: 'THURSDAY · 6:30 PM', palette: PALETTES[4],
    features: ['Agenda and speakers', 'Venue information', 'Attendance tracking']
  },
  {
    slug: 'golden-hour', title: 'Golden hour', category: 'wedding', occasionLabel: 'Engagement', label: 'A happy yes', index: '06', priceFrom: 499,
    description: 'Warm colours and a little sparkle for the beginning of a new story.',
    artKicker: 'SAVE A LITTLE SPACE IN YOUR HEART', artTitle: 'Asha & Dev', artSubtitle: 'are making it official. Come celebrate!', artDate: '22 · NOVEMBER · 2026', palette: PALETTES[3],
    features: ['Save the date', 'Photo moments', 'Map and RSVP']
  },
];

export function getInvitation(slug: string | null | undefined): InvitationDesign | undefined {
  return INVITATIONS.find((invitation) => invitation.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
}
