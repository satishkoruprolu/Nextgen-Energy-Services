import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
services = [
  {
    title: 'Laboratory Calibration',
    desc: 'Precision calibration services for pressure, temperature, flow, and analytical instruments ensuring compliance with ISO and NABL standards.'
  },
  {
    title: 'On-site Calibration',
    desc: 'Field calibration services at oil & gas facilities minimizing downtime and ensuring operational accuracy in critical environments.'
  },
  {
    title: 'Loop Checking',
    desc: 'Comprehensive loop testing and commissioning support to validate instrumentation performance across process control systems.'
  },
  {
    title: 'Automation Services',
    desc: 'End-to-end industrial automation solutions including PLC, SCADA, and DCS integration for optimized plant performance.'
  }
];

}