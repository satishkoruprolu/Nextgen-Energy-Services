import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then(m => m.Services)
  },
  {
    path: 'lab-calibration',
    loadComponent: () => import('./pages/lab-calibration/lab-calibration').then(m => m.LabCalibration)
  },
  {
    path: 'on-site-calibration',
    loadComponent: () => import('./pages/on-site-calibration/on-site-calibration').then(m => m.OnSiteCalibration)
  },
  {
    path: 'loop-checking',
    loadComponent: () => import('./pages/loop-checking/loop-checking').then(m => m.LoopChecking)
  },
  {
    path: 'commissioning',
    loadComponent: () => import('./pages/commissioning/commissioning').then(m => m.Commissioning)
  },
  {
    path: 'safety-valve-testing',
    loadComponent: () => import('./pages/safety-valve-testing/safety-valve-testing').then(m => m.SafetyValveTesting)
  },
  {
    path: 'employers',
    loadComponent: () => import('./pages/employers/employers').then(m => m.Employers)
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers').then(m => m.Careers)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
