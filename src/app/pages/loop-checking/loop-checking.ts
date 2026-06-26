import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../shared/accordion/accordion';

@Component({
  selector: 'app-loop-checking',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './loop-checking.html',
  styleUrls: ['./loop-checking.css']
})
export class LoopChecking {

  activeIndex: number | null = 0;

  loopItems = [
    {
      title: 'End-to-End Loop Verification',
      content: 'We perform complete loop checking from field instruments to control systems, ensuring signal integrity and accurate communication across the entire loop.'
    },
    {
      title: 'Accurate Signal Testing',
      content: 'Our engineers validate analog and digital signals, ensuring proper calibration, scaling, and response of transmitters, controllers, and actuators.'
    },
    {
      title: 'Reduced Commissioning Time',
      content: 'By identifying issues early during loop checking, we significantly reduce delays during commissioning and startup phases.'
    },
    {
      title: 'Documentation and Reporting',
      content: 'Detailed loop check reports and documentation are provided for every instrument loop, ensuring traceability and compliance with project standards.'
    },
    {
      title: 'Troubleshooting and Fault Detection',
      content: 'We quickly identify wiring errors, signal mismatches, and configuration issues, ensuring smooth system performance.'
    },
    {
      title: 'Industry Expertise',
      content: 'Our loop checking services cover industries such as oil & gas, power plants, chemical plants, and manufacturing facilities.'
    }
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}