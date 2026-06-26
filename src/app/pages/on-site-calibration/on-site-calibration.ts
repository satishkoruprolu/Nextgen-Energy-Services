import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../shared/accordion/accordion';


@Component({
  selector: 'app-on-site-calibration',
  standalone: true,
  imports: [CommonModule, AccordionComponent, ],
  templateUrl: './on-site-calibration.html',
  styleUrls: ['./on-site-calibration.css']
})
export class OnSiteCalibration {
activeIndex: number | null = 0;

onsiteItems = [
  {
    title: 'Comprehensive Calibration Solutions',
    content: 'We offer on-site calibration for a wide range of instruments and equipment, including pressure gauges, temperature sensors, flow meters, electrical meters, and more. Our technicians are equipped with state-of-the-art calibration tools to ensure your equipment meets industry standards and specifications.'
  },
  {
    title: 'Accurate and Reliable Results',
    content: 'Our team of certified calibration technicians follows stringent procedures to deliver accurate and reliable calibration results. We adhere to national and international standards, ensuring that your instruments are calibrated to the highest level of precision.'
  },
  {
    title: 'Minimized Downtime',
    content: 'By bringing our calibration services directly to your location, we eliminate the need for equipment transport and reduce operational interruptions. Our flexible scheduling allows us to perform calibrations at a time that is most convenient for you, minimizing impact on your production schedule.'
  },
  {
    title: 'Calibration Documentation and Certificates',
    content: 'After calibration, we provide comprehensive documentation and calibration certificates for each instrument. These records are crucial for maintaining compliance with industry regulations and for future reference during audits.'
  },
  {
    title: 'Emergency and Scheduled Services',
    content: 'Whether you require immediate calibration due to a sudden equipment failure or prefer to schedule routine calibration services, we are here to assist. Our team is available for both emergency call-outs and planned maintenance, ensuring your equipment remains in peak condition.'
  },
  {
    title: 'Expertise Across Industries',
    content: 'We have extensive experience providing on-site calibration services across various industries, including manufacturing, energy, pharmaceuticals, aerospace, and more. Our knowledge of industry-specific requirements ensures that your equipment is calibrated to meet the unique demands of your sector.'
  }
];

toggle(index: number) {
  this.activeIndex = this.activeIndex === index ? null : index;
}
}