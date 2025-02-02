import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  isMobileCategoriesVisible = false;
  productCategories: any = [
    { isExpanded: false, name: 'BRACKET & COVER SYSTEM' },
    { isExpanded: false, name: 'CONTINUOUS SYSTEM' },
    { isExpanded: false, name: 'BRACKET SYSTEM' },
    { isExpanded: false, name: 'HANDRAIL & ACCESSORIES' }
  ]

  bracketAndCoverSystemImages: any = [
    { image: 'assets/items/1.png',
      subImages: [
        {title:'End Cap',image:'assets/items/1.png'},
        {title:'Slotted End Cap',image:'assets/items/1.png'}
      ],
      category: 'BRACKET & COVER SYSTEM',
      ProductName: 'Square Bracket & cover', 
      essentialDetails: {
        type: 'Bracket and Cover System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['Square Bracket (65mm)', 'Square Bracket (Approx. 0.250 kg/ Nos.)'],
        width: ['Square Cover (Approx. 0.160-0.180 kg) (1 Feet / 1 Side)', 'Square Cover (13 Feet / 16 Feet EPDM Gesket (Approx. 0.016 kg)(1 Feet / 1 Side)'],
        finish: 'Natural, Anodized, Powder Coated, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','20`','10','-']
        ]
      } 
    },
  ];

  continuousSystemImages: any = [
    { image: 'assets/items/1.png',
      subImages: [
        {title:'End Cap',image:'assets/items/1.png'},
        {title:'Slotted End Cap',image:'assets/items/1.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: 'Commercial feri', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet / 16 Feet'],
        width: ['Approx. 0.500kg - 0.530kg / Feet'],
        finish: 'Natural, Anodized, Powder Coated, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','30`','20`','10`','-','-']
        ]
      } 
    }
  ];
  
  bracketSystemImages: any = [
    { image: 'assets/items/1.png',
      category: 'BRACKET SYSTEM',
      ProductName: 'L- Bracket', 
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['Square Bracket (65mm)'],
        width: ['Approx. 0460 kg / Nos.'],
        finish: 'Natural, Anodized, Powder Coated, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','20`','10','-']
        ]
      } 
    }
  ];
  handrailAndAccessoriesImages: any = [
    { image: 'assets/items/1.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/items/1.png'},
        {title:'Fix Bend',image:'assets/items/1.png'},
        {title:'Connector',image:'assets/items/1.png'},
        {title:'End Cap',image:'assets/items/1.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 01 (38mm Round)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.170kg - 0.190kg (1 feet)','EPDM Gasket (Approx. 0.056kg/feet)'],
        finish: 'Natural, Anodized, Powder Coated, Wooden Coating, PVDF Coating',
      } 
    }
  ];


  // highlightProductImages: any = [
  //   { image: 'assets/items/1.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/2.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/3.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/4.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/5.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/6.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/7.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/8.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/9.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/10.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/11.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/12.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/13.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/14.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  //   { image: 'assets/items/15.png', name: 'Glass Railing', desc: 'Elegence tranparency for modern spaces' },
  // ];

  highlightProductImages:any = [
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
  selectedCategoryName: string = 'Highlight Products'
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