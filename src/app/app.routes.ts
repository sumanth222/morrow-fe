import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page.component').then((m) => m.HomePageComponent),
    title: 'Morrow Studio | Invitations for the moments that matter',
  },
  {
    path: 'explore',
    loadComponent: () => import('./pages/explore-page.component').then((m) => m.ExplorePageComponent),
    title: 'Explore invitations | Morrow Studio',
  },
  {
    path: 'packages',
    loadComponent: () => import('./pages/packages-page.component').then((m) => m.PackagesPageComponent),
    title: 'Invitation packages and pricing | Morrow Studio',
  },
  {
    path: 'how-it-works',
    loadComponent: () => import('./pages/how-it-works-page.component').then((m) => m.HowItWorksPageComponent),
    title: 'How it works | Morrow Studio',
  },
  {
    path: 'our-work/wedding-os',
    loadComponent: () => import('./pages/wedding-os-page.component').then((m) => m.WeddingOsPageComponent),
    title: 'WeddingOS case study | Morrow Studio',
  },
  {
    path: 'preview/:slug',
    loadComponent: () => import('./pages/preview-page.component').then((m) => m.PreviewPageComponent),
    title: 'Play with an invitation | Morrow Studio',
  },
  {
    path: 'start',
    loadComponent: () => import('./pages/start-order-page.component').then((m) => m.StartOrderPageComponent),
    title: 'Start an invitation | Morrow Studio',
  },
  {
    path: 'not-found',
    loadComponent: () => import('./pages/not-found-page.component').then((m) => m.NotFoundPageComponent),
    title: 'Page not found | Morrow Studio',
  },
  { path: '**', redirectTo: 'not-found' },
];
