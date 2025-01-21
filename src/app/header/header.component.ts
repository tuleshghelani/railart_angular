import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isScrollingDown: boolean = false; // Variable to track scroll state

  // Listen to the window scroll event
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Check if the user is scrolling down
    if (scrollPosition > this.lastScrollPosition) {
      this.isScrollingDown = true;
    } else if (scrollPosition === 0 || scrollPosition + windowHeight === documentHeight) {
      // When the user scrolls back to the top, or reaches the bottom
      this.isScrollingDown = false;
    }

    // Update the last scroll position for comparison on the next scroll event
    this.lastScrollPosition = scrollPosition;
  }
  private lastScrollPosition: number = 0;

  closeNavbar(): void {
    const navbar = document.getElementById('railArtNavbarContent');
    if (navbar?.classList.contains('show')) {
      navbar.classList.remove('show'); // Remove the 'show' class to collapse the menu
    }
  }

}
