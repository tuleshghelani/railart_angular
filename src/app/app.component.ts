import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'railart';

  ngOnInit() {
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
    const header = document.querySelector(".navbar");
    if (header) {
      const header_height = (header as HTMLElement).offsetHeight;

      const add_class_on_scroll = () => header.classList.add("scrolled", "shadow-sm");
      const remove_class_on_scroll = () => header.classList.remove("scrolled", "shadow-sm");

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
}
