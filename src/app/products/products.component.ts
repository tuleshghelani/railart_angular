import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  isMobileCategoriesVisible = false;
  productCategories:any = [
    { isExpanded:false, name:'Continues glass railling' },
    { isExpanded:false, name:'Side mounted glass railling' },
    { isExpanded:false, name:'Staircase glass railling' },
    { isExpanded:false, name:'Bracket glass railling' },
    { isExpanded:false, name:'Handrail & Accessories' },
  ]

ngOnInit(){
  setTimeout(() => {
    const AOS = (window as any).AOS;
    if (AOS) {
      AOS.init({
        duration: 800,
      });
      }
    });
  }

  toggleMobileCategories(){
    this.isMobileCategoriesVisible = !this.isMobileCategoriesVisible

    // Add body scroll lock when menu is open
    if (this.isMobileCategoriesVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  toggleCategory(category: any) {
    // Toggle current category
    category.isExpanded = !category.isExpanded;
    
    // Close other categories when one is expanded
    if (category.isExpanded) {
      this.productCategories.forEach((cat:any) => {
        if (cat !== category) {
          cat.isExpanded = false;
        }
      });
    }
  }

  isCategoryActive(category: any): boolean {
    return category.isExpanded;
  }
}
