import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CarouselItem {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  content?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() items: CarouselItem[] = [];
  @Input() autoplay: boolean = false;
  @Input() loop: boolean = true;
  @Input() slidesPerView: number = 1;
  @Input() spaceBetween: number = 30;
  @Input() navigation: boolean = true;
  @Input() pagination: boolean = true;
}
