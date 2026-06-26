import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../shared/accordion/accordion';


@Component({
  selector: 'app-safety-valve-testing',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './safety-valve-testing.html',
  styleUrls: ['./safety-valve-testing.css']
})
export class SafetyValveTesting { activeIndex: number | null = 0;

  SafetyItems = [
    {
	title: 'Safety Valve Inspection',
	content: 'We perform detailed inspection of safety valves to identify wear, corrosion, leakage, and mechanical issues that may affect performance and operational safety.'
	},
	{
	title: 'Set Pressure Verification',
	content: 'Our engineers accurately verify valve set pressure to ensure the valve activates at the correct operating threshold and complies with required specifications.'
	},
    {
	title: 'Leak Testing & Performance Validation',
	content: 'We conduct leak tests and functional performance checks to confirm proper sealing, pressure release, and operational efficiency of the safety valve.'
	},
	{
	title: 'Calibration & Adjustment',
	content: 'Safety valves are calibrated and adjusted using certified testing equipment to maintain precise operation and reliable overpressure protection.'
	},
    {
	title: 'Compliance & Certification',
	content: 'Comprehensive testing documentation and certification reports are provided to ensure compliance with industrial regulations and safety standards.'
	},
    {
	title: 'On-Site & Workshop Testing',
	content: 'We provide both on-site and workshop-based safety valve testing services, minimizing operational downtime and supporting plant maintenance schedules.'
	}
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
