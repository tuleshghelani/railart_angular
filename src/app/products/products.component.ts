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
  handrailAndAccessoriesImages:any = [
    { image:'assets/product/1.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/2.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/3.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/4.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/5.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/6.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/7.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/8.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/9.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/10.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/11.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/12.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/13.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/14.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
    { image:'assets/product/15.png', name:'Glass Railing', desc:'Elegence tranparency for modern spaces' },
  ]
  exploreProduct:any
  selectedCategoryName:string = 'Architectural Railing Solutions'

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

  selectCategory(categoryName:string){
    this.selectedCategoryName = categoryName
    console.log('categoryName >>>',this.selectedCategoryName)
  }

  exploreProductDetail(productDetail:any){
    this.exploreProduct = productDetail
  }
}
