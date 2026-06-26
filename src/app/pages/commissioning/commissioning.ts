import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../shared/accordion/accordion';

@Component({
  selector: 'app-commissioning',
  imports: [CommonModule, AccordionComponent],
  standalone: true,
  templateUrl: './commissioning.html',
  styleUrls: ['./commissioning.css'],
})
export class Commissioning {activeIndex: number | null = 0;

  CommissioningItems = [
    {
	title: 'Pre-Commissioning Inspection',
	content: 'We perform detailed inspections of instruments, pipelines, electrical systems, and control panels before startup to ensure installation quality and system readiness.'
    },
	{
	title: 'Functional Testing & Verification',
	content: 'Our engineers conduct systematic functional testing of automation systems, field instruments, motors, PLC/DCS controls, and safety interlocks to verify operational performance.'
	},
    {
	title: 'Loop Checking & Signal Validation',
	content: 'We validate signal transmission between field instruments and control systems to ensure accurate communication and control functionality throughout the plant.'
	},
	{
	title: 'Startup & Operational Support',
	content: 'Our commissioning specialists provide complete startup assistance, troubleshooting, and operational support to ensure smooth plant activation and stable performance.'
	},
    {
	title: 'Safety & Compliance Assurance',
	content: 'We ensure all commissioning activities comply with industrial safety standards, operational procedures, and project specifications for secure plant operation.'
	},
    {
	title: 'Documentation & Reporting',
	content: 'Comprehensive commissioning reports, test records, calibration certificates, and verification documents are provided for compliance and future maintenance reference.'
	}
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
