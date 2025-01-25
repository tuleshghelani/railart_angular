import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'railart';
  slides: any = [
    {
      id: 1,
      image: 'assets/slider/slider_1.jpeg',
      title: 'Unobstructed',
      description: 'glass railings that elevate your view and your space!',
    },
    {
      id: 2,
      image: 'assets/slider/slider_2.jpeg',
      title: 'Innovation',
      description: 'transparent protection with timeless design',
    },
    {
      id: 3,
      image: 'assets/slider/slider_3.jpeg',
      title: 'Modern Design',
      description: 'glass railings for a seamless look.',
    },
  ];
  currentSlide = 0;
  translateValue = 0;
  private autoSlideInterval: any;
  ngOnInit() {
    this.startAutoSlide();
    // Initialize AOS after view init
    setTimeout(() => {
      const AOS = (window as any).AOS;
      if (AOS) {
        AOS.init({
          duration: 800,
        });
      }
    });

    // Handle navbar scroll
    const header = document.querySelector('.navbar');
    if (header) {
      const header_height = (header as HTMLElement).offsetHeight;

      const add_class_on_scroll = () =>
        header.classList.add('scrolled', 'shadow-sm');
      const remove_class_on_scroll = () =>
        header.classList.remove('scrolled', 'shadow-sm');

      window.addEventListener('scroll', function () {
        const scrollpos = window.scrollY;
        if (scrollpos >= header_height) {
          add_class_on_scroll();
        } else {
          remove_class_on_scroll();
        }
      });
    }
  }
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateTranslateValue();
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateTranslateValue();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateTranslateValue();
  }

  private updateTranslateValue() {
    this.translateValue = -100 * this.currentSlide;
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }
}
