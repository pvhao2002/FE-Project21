import {AfterViewInit, Component} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: true,
      loop: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  }

}
