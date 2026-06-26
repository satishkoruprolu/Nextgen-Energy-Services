import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})

export class Header {

  isMenuOpen = false;
  isServicesOpen = false;
  isEmployersOpen = false;

  constructor(public router: Router) {}

  serviceRoutes = [
    'lab-calibration',
    'on-site-calibration',
    'loop-checking',
    'commissioning',
    'safety-valve-testing'
  ];
  
  employerRoutes = [
    'employers',
    'careers'
  ];

  isServicesActive(): boolean {
    return this.serviceRoutes.some(route =>
      this.router.url.includes(route)
    );
  }
  
  isEmployersActive(): boolean {
    return this.employerRoutes.some(route =>
      this.router.url.includes(route)
    );
  }

  openServices() {
    if (window.innerWidth > 768) this.isServicesOpen = true;
  }

  closeServices() {
    if (window.innerWidth > 768) this.isServicesOpen = false;
  }

  toggleServices() {
    if (window.innerWidth <= 768) {
      this.isServicesOpen = !this.isServicesOpen;
    }
  }
  
  openEmployers() {
    if (window.innerWidth > 768) this.isEmployersOpen = true;
  }

  closeEmployers() {
    if (window.innerWidth > 768) this.isEmployersOpen = false;
  }

  toggleEmployers() {
    if (window.innerWidth <= 768) {
      this.isEmployersOpen = !this.isEmployersOpen;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}