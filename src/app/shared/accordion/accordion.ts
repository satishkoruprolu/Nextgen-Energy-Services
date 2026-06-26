import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.html',
  styleUrls: ['./accordion.css']
})
export class AccordionComponent {

  @Input() items: { title: string; content: string }[] = [];

  activeIndex: number | null = 0;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}