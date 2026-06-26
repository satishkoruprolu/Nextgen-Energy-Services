import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {

  services = [
    {
      title: 'Laboratory Calibration',
      desc: 'High-precision calibration services using NABL-certified laboratory standards.',
      route: '/lab-calibration',
      icon: '🧪'
    },
    {
      title: 'On-Site Calibration',
      desc: 'Field calibration services performed directly at your facility.',
      route: '/on-site-calibration',
      icon: '🏭'
    },
    {
      title: 'Loop Checking',
      desc: 'Validation of instrumentation loops ensuring accurate signal flow.',
      route: '/loop-checking',
      icon: '🔄'
    },
    {
      title: 'Commissioning',
      desc: 'System startup, testing, and performance validation services.',
      route: '/commissioning',
      icon: '⚙️'
    },
    {
      title: 'Safety Valve Testing',
      desc: 'Pressure safety testing ensuring compliance with industry standards.',
      route: '/safety-valve-testing',
      icon: '🛡️'
    }
  ];

}