import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class Home{
values = [
    {
      title: 'ACCURACY',
      desc: 'Ensuring precise and reliable calibration results to maintain the integrity of measurements and meet industry standards.',
      image: '/assets/images/photo-sm-welding-a.webp'
    },
    {
      title: 'INTEGRITY',
      desc: 'We will create a project plan from the ground up with delivery dates, committed timelines and full reporting accountabilities that suit you.',
      image: '/assets/images/photo-sm-welding-b.webp'
    },
    {
      title: 'QUALITY',
      desc: 'Commitment to delivering high- quality calibration services that exceed customer expectations and comply with relevant regulations.',
      image: '/assets/images/photo-sm-welding-c.webp'
    },
    {
      title: 'CUSTOMER FOCUS',
      desc: 'Putting customers needs first, providing personalized solutions, excellent service,and timely support.',
      image: '/assets/images/photo-sm-welding-d.webp'
    }
  ];

  services = [
    {
      title: 'NABL LABORATORY CALIBRATION',
      desc: "Our NABL lab facility will provide the excellent calibration services for different equipment's and instruments as per the ISO 17025 standards.",
      image: '/assets/images/photo-pt-oil-a.webp'
    },
    {
      title: 'ONSITE CALIBRATION',
      desc: "Our field service engineers conduct periodic maintenance activities to guaranty performance of the equipment's.",
      image: '/assets/images/photo-pt-oil-b.webp'
    },
    {
      title: 'LOOP CHECKING',
      desc: 'Our field calibration team calibrate a range of instruments at your own premises. This will eliminate the need of shipping cost',
      image: '/assets/images/photo-pt-oil-c.webp'
    }
  ];
  
  clients = [
  '/assets/images/1.webp',
  '/assets/images/2.webp',
  '/assets/images/4.webp',
  '/assets/images/5.webp',
  '/assets/images/6.webp',
  '/assets/images/7.webp',
  '/assets/images/8.webp',
  '/assets/images/9.webp',
  '/assets/images/10.webp',
  '/assets/images/11.webp',
  '/assets/images/12.webp',
  '/assets/images/13.webp',
  '/assets/images/14.webp',
  '/assets/images/15.webp',
  '/assets/images/16.webp',
  '/assets/images/17.webp',
  '/assets/images/18.webp',
  '/assets/images/19.webp',
  '/assets/images/20.webp',
  '/assets/images/21.webp'
];
/* start: slider section*/
currentSlide = 0;
interval: any;

slides = [
  {
    title: 'On Site Calibration Services',
    desc: 'We understand the importance of minimizing downtime for our customers. We offer on-site calibration services to reduce any potential disruption to your operation.',
    image: '/assets/images/slider-oil-a.webp'
  },
  {
    title: 'NABL Laboratory Services',
    desc: 'Our NABL lab facility will provide excellent calibration services for different equipment and instruments as per the ISO 17025 standards.',
    image: '/assets/images/slider-oil-b.webp'
  },
  {
    title: 'Loop Checking Services',
    desc: 'We offer professional Loop Checking Services designed to verify and validate the performance of your control systems.',
    image: '/assets/images/slider-oil-c.webp'
  }
];

ngOnInit() {
  this.startAutoSlide();
}

startAutoSlide() {
  this.interval = setInterval(() => {
    this.nextSlide();
  }, 3000);
}

pause() {
  clearInterval(this.interval);
}

resume() {
  this.startAutoSlide();
}

nextSlide() {
  this.currentSlide = (this.currentSlide + 1) % this.slides.length;
}

prevSlide() {
  this.currentSlide =
    (this.currentSlide - 1 + this.slides.length) % this.slides.length;
}

goToSlide(index: number) {
  this.currentSlide = index;
}
/*end : slider section*/

}