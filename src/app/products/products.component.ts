import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  ngAfterViewInit(){
    // Initialize AOS after view init
      const AOS = (window as any).AOS;
      if (AOS) {
        AOS.init({
          duration: 800,
        });
      }
  }
}
