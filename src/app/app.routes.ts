import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'agm',
    loadComponent: () => import('./pages/agm/agm.component').then(m => m.AgmComponent)
  },
  {
    path: 'integrations',
    loadComponent: () => import('./pages/integrations/integrations.component').then(m => m.IntegrationsComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'support',
    loadComponent: () => import('./pages/support/support.component').then(m => m.SupportComponent)
  },
  {
    path: 'test-tools',
    loadComponent: () => import('./pages/test-tools/test-tools.component').then(m => m.TestToolsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];