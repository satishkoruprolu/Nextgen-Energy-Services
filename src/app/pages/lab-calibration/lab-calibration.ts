import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../shared/accordion/accordion';

@Component({
  selector: 'app-lab-calibration',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './lab-calibration.html',
  styleUrls: ['./lab-calibration.css']
})
export class LabCalibration {

  activeIndex: number = 0;

  labItems  = [
    {
      title: 'Uncompromising Accuracy',
      content: 'Our calibration services adhere to stringent NABL guidelines, guaranteeing that your instruments and equipment deliver precise and reliable measurements.'
    },
    {
      title: 'Regulatory Compliance',
      content: 'We help you meet industry regulations and standards, ensuring your operations are in full compliance with local and international requirements.'
    },
    {
      title: 'Expertise and Experience',
      content: 'Our team of skilled professionals brings extensive experience and technical expertise to every calibration, ensuring top-notch service and support.'
    },
    {
      title: 'Comprehensive Reporting',
      content: 'We provide detailed calibration certificates and reports that document the accuracy and performance of your equipment, supporting your quality assurance processes.'
    }
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}