import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  isMobileCategoriesVisible = false;
  productCategories: any = [
    { isExpanded: false, name: 'Continues glass railling' },
    { isExpanded: false, name: 'Side mounted glass railling' },
    { isExpanded: false, name: 'Staircase glass railling' },
    { isExpanded: false, name: 'Bracket glass railling' },
    { isExpanded: false, name: 'Handrail & Accessories' },
  ]
  handrailAndAccessoriesImages: any = [
    { image: 'assets/items/1.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/2.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/3.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/4.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/5.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/6.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/7.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/8.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/9.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/10.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/11.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/12.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/13.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/14.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
    { image: 'assets/items/15.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  ];

  architecturalRailingSolutionsImages:any = [
    { image: 'assets/product/Glass_Railings_1.jpeg', name: 'Glass Railings', desc: 'Elegant transparency for modern spaces' },
    { image: 'assets/product/Aluminium_Railings_1.jpeg', name: 'Aluminium Railings', desc: 'Durable and lightweight solutions' },
    { image: 'assets/product/Cable_Railings_1.jpeg', name: 'Cable Railings', desc: 'Durable and lightweight solutions' },
    { image: 'assets/product/PVC_and_Vinyl_Railings_1.jpeg', name: 'PVC and Vinyl Railings', desc: 'Elegant transparency for modern spaces' },
    { image: 'assets/product/Acrylic_and_Plastic_Railings_1.jpeg', name: 'Acrylic and Plastic Railings', desc: 'Durable and lightweight solutions' },
    { image: 'assets/product/Staircase_Railings_1.jpeg', name: 'Staircase Railings', desc: 'Durable and lightweight solutions' },
    { image: 'assets/product/Handrail_Railings_1.jpeg', name: 'Handrail Railings', desc: 'Elegant transparency for modern spaces' },
    { image: 'assets/product/Deck_Railings_1.jpeg', name: 'Deck Railings', desc: 'Durable and lightweight solutions' },
    { image: 'assets/product/Terrace_Railings_1.jpeg', name: 'Terrace Railings', desc: 'Durable and lightweight solutions' }
  ]

  exploreProduct: any
  selectedCategoryName: string = 'Architectural Railing Solutions'
  isMobileScreen: boolean = false;

  // HostListener to detect window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.checkScreenSize(width);
  }

  ngOnInit() {
    this.checkScreenSize(window.innerWidth);
    setTimeout(() => {
      const AOS = (window as any).AOS;
      if (AOS) {
        AOS.init({
          duration: 800,
        });
      }
    });
  }

  toggleMobileCategories() {
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
      this.productCategories.forEach((cat: any) => {
        if (cat !== category) {
          cat.isExpanded = false;
        }
      });
    }
  }

  isCategoryActive(category: any): boolean {
    return category.isExpanded;
  }

  selectCategory(categoryName: string) {
    this.selectedCategoryName = categoryName
    console.log('categoryName >>>', this.selectedCategoryName)
  }

  exploreProductDetail(productDetail: any) {
    this.exploreProduct = productDetail
  }

  checkScreenSize(width: number): void {
    this.isMobileScreen = width <= 480; // Set true if width is 480px or less
    console.log('isMobileScreen >>>',this.isMobileScreen,width)
  }
}