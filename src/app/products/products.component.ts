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
    { image: 'assets/items/3.png',
      subImages: [
        {title:'End Cap',image:'assets/items/3.png'},
        {title:'Slotted End Cap',image:'assets/items/3.png'}
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
          ['Railing Length','&#8734;','&#8734;','20`','10`','-']
        ]
      } 
    },
    { image: 'assets/items/1.png',
      subImages: [
        {title:'End Cap',image:'assets/items/1.png'},
        {title:'Slotted End Cap',image:'assets/items/1.png'}
      ],
      category: 'BRACKET & COVER SYSTEM',
      ProductName: 'Step Bracket & Cover', 
      essentialDetails: {
        type: 'Bracket and Cover System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['Square Bracket (65mm)', 'Step Cover (13 Feet / 16 Feet)'],
        width: ['Step Bracket (Approx. 0.460 kg / Nos.)', 'Step Cover (Approx. 0.200-0.220 kg)(1 Feet / 1 Side)'],
        finish: 'Natural, Anodized, Powder Coated, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','30`','10`','-']
        ]
      } 
    },
    { image: 'assets/items/2.png',
      subImages: [
        {title:'End Cap',image:'assets/items/2.png'},
        {title:'Slotted End Cap',image:'assets/items/2.png'}
      ],
      category: 'BRACKET & COVER SYSTEM',
      ProductName: 'Modular Step Bracket & Cover', 
      essentialDetails: {
        type: 'Bracket and Cover System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['Square Bracket (65mm)', 'Step Cover (13 Feet / 16 Feet)'],
        width: ['Modular Step Brack et (Approx. 0.340 kg / Nos.)', 'Modular Cover (Approx. 0.160-0.180 kg)(1 Feet / 1 Side)','EPDM Gasket ( Approx. 0.018 kg)(1 Feet / 1 Side)'],
        finish: 'Natural, Anodized, Powder Coated, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','30`','20`','10`']
        ]
      } 
    },
    { image: 'assets/items/4.png',
      subImages: [
        {title:'End Cap',image:'assets/items/4.png'},
        {title:'Slotted End Cap',image:'assets/items/4.png'}
      ],
      category: 'BRACKET & COVER SYSTEM',
      ProductName: 'Heavy Round Bracket & Cover', 
      essentialDetails: {
        type: 'Bracket and Cover System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['Heavy Round Bracket (65mm)', 'Heavy Round Bracket (Approx. 0.480 kg /Nos.)'],
        width: ['Heavy Round Cover (Approx. 0.220-0.240 kg)(1 Feet / 1 Side)', 'Heavy Round Cover (13 Feet / 16 Feet)','EPDM Gasket ( Approx. 0.016 kg)(1 Feet / 1 Side)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','&#8734;','&#8734;','30`']
        ]
      } 
    },
    { image: 'assets/items/27.png',
      subImages: [
        {title:'End Cap',image:'assets/items/27.png'},
        {title:'Slotted End Cap',image:'assets/items/27.png'}
      ],
      category: 'BRACKET & COVER SYSTEM',
      ProductName: 'Heavy Squre Bracket & Cover', 
      essentialDetails: {
        type: 'Bracket and Cover System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['Heavy Bracket (65mm)', 'Heavy Bracket (Approx. 0.480 kg / Nos.)'],
        width: ['Heavy Square Cover (Approx. 0.200-0.220 kg(1 Feet / 1 Side)', 'Heavy Square Cover (13 Feet / 16 Feet)','EPDM Gasket ( Approx. 0.016 kg)(1 Feet / 1 Side)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','&#8734;','&#8734;','30`']
        ]
      } 
    },
    { image: 'assets/items/15.png',
      subImages: [
        {title:'End Cap',image:'assets/items/15.png'},
        {title:'Slotted End Cap',image:'assets/items/15.png'}
      ],
      category: 'BRACKET & COVER SYSTEM',
      ProductName: 'Heavy Bracket & Cover', 
      essentialDetails: {
        type: 'Bracket and Cover System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['Heavy Bracket (65mm)', 'Heavy Bracket (Approx. 0.680 kg / Nos.)'],
        width: ['Heavy Cover (Approx. 0.350-0.80 kg(1 Feet / 1 Side)', 'Heavy Cover (13 Feet / 16 Feet)','EPDM Gasket ( Approx. 0.013 kg)(1 Feet / 1 Side)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','&#8734;','&#8734;','&#8734;']
        ]
      } 
    }
  ];

  continuousSystemImages: any = [
    { image: 'assets/items/17.png',
      subImages: [
        {title:'End Cap',image:'assets/items/17.png'},
        {title:'Slotted End Cap',image:'assets/items/17.png'}
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
    },
    { image: 'assets/items/18.png',
      subImages: [
        {title:'End Cap',image:'assets/items/18.png'},
        {title:'Slotted End Cap',image:'assets/items/18.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: 'Modular Feri', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet / 16 Feet'],
        width: ['Approx. 0.600 Kg - 0.640 kg/ Feet','EPDM Gasket( Approx. 0.090 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','20`','10`','-']
        ]
      } 
    },
    { image: 'assets/items/19.png',
      subImages: [
        {title:'End Cap',image:'assets/items/19.png'},
        {title:'Slotted End Cap',image:'assets/items/19.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: 'Triangle Feri', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet / 16 Feet'],
        width: ['Approx. 0.600 Kg - 0.640 kg/ Feet','EPDM Gasket( Approx. 0.105 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','20`','10`','-']
        ]
      } 
    },
    { image: 'assets/items/20.png',
      subImages: [
        {title:'End Cap',image:'assets/items/20.png'},
        {title:'Slotted End Cap',image:'assets/items/20.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: 'Regular Feri', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet / 16 Feet'],
        width: ['Approx. 0.720 kg - 0.780 kg / Feet'],
        finish: 'Natural, Anodized, Powder Coating Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','20`','10`','-']
        ]
      } 
    },
    { image: 'assets/items/21.png',
      subImages: [
        {title:'End Cap',image:'assets/items/21.png'},
        {title:'Slotted End Cap',image:'assets/items/21.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: 'Clip Feri', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet / 16 Feet'],
        width: ['Approx. 0.850kg - 0.900kg / Feet','EPDM Gasket( Approx. 0.016 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','30`','20`','10`']
        ]
      } 
    },
    { image: 'assets/items/6.png',
      subImages: [
        {title:'End Cap',image:'assets/items/6.png'},
        {title:'Slotted End Cap',image:'assets/items6.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: '40 X 30 Continuous Channel', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet / 16 Feet'],
        width: ['Approx. 0.400-0.440kg/ Feet','EPDM Gaske ( Approx. 0.058 kg/Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','20','10`','-','-']
        ]
      } 
    },
    { image: 'assets/items/7.png',
      subImages: [
        {title:'End Cap',image:'assets/items/7.png'},
        {title:'Slotted End Cap',image:'assets/items/7.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: '50 X 32 Continuous Channel', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet / 16 Feet'],
        width: ['Approx. 0.600-0.6','EPDM Gasket( Approx. 0.110 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','30`','20`','10`','-']
        ]
      } 
    },
    { image: 'assets/items/8.png',
      subImages: [
        {title:'End Cap',image:'assets/items/8.png'},
        {title:'Slotted End Cap',image:'assets/items/8.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: '80 X 37 Continuous Channel', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet / 16 Feet'],
        width: ['Approx. 0.900-0.950kg / Feet','EPDM Gaske ( Approx. 0.110 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;`','30`','20`','10`']
        ]
      }
    },
    { image: 'assets/items/9.png',
      subImages: [
        {title:'End Cap',image:'assets/items/9.png'},
        {title:'Slotted End Cap',image:'assets/items/9.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: '100X 37 Continuous Channel', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet / 16 Feet'],
        width: ['Approx. 1.100 Kg - 1.160 kg/ Feet','EPDM Gasket( Approx. 0.110 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','30`','20`','10`']
        ]
      }
    },
    { image: 'assets/items/10.png',
      subImages: [
        {title:'End Cap',image:'assets/items/10.png'},
        {title:'Slotted End Cap',image:'assets/items/10.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: '115 X 41 Continuous Channel', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['12 Feet / 13 Feet'],
        width: ['Approx.1.400kg - 1.470 kg / Feet','EPDM Gasket(Approx. 0.145 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','&#8734;','30`','20`']
        ]
      }
    },
    { image: 'assets/items/11.png',
      subImages: [
        {title:'End Cap',image:'assets/items/11.png'},
        {title:'Slotted End Cap',image:'assets/items/11.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: '117 X 45 Continuous Channel', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['12 Feet / 13 Feet'],
        width: ['Approx. 1.400 Kg - 1.470 kg/ Feet','EPDM Gasket( Approx. 0.105 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','&#8734;','30`','30`']
        ]
      }
    },
    { image: 'assets/items/12.png',
      subImages: [
        {title:'End Cap',image:'assets/items/12.png'},
        {title:'Slotted End Cap',image:'assets/items/1.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: '50 X 90 Continuous Channel', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet / 16 Feet'],
        width: ['Approx 0.900kg - 0.950 kg / Feet','EPDM Gasket ( Approx. 0.105 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','30`','20`','10`']
        ]
      }
    },
    { image: 'assets/items/13.png',
      subImages: [
        {title:'End Cap',image:'assets/items/13.png'},
        {title:'Slotted End Cap',image:'assets/items/13.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: '50 X 90 Led Continuous Channel', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet / 16 Feet'],
        width: ['Approx. 0.900 Kg - 0.950 kg/ Feet','EPDM Gasket( Approx. 0.105 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','30`','20`','10`']
        ]
      }
    },
    { image: 'assets/items/14.png',
      subImages: [
        {title:'End Cap',image:'assets/items/14.png'},
        {title:'Slotted End Cap',image:'assets/items/14.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: '120 X 60 Continuous Channel', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet / 16 Feet'],
        width: ['Approx. 1.400kg - 1.470kg / Feet','EPDM Gasket( Approx. 0.105 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','&#8734;','&#8734;','&#8734;']
        ]
      }
    },
    { image: 'assets/items/15.png',
      subImages: [
        {title:'End Cap',image:'assets/items/15.png'},
        {title:'Slotted End Cap',image:'assets/items/15.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: '125 X 70 Continuous Channel', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['10 Feet / 12 Feet'],
        width: ['Approx. 1.750 Kg - 1.820 kg / Feet','EPDM Gasket( Approx. 0.105 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','&#8734;','&#8734;','&#8734;']
        ]
      }
    },
    { image: 'assets/items/16.png',
      subImages: [
        {title:'End Cap',image:'assets/items/16.png'},
        {title:'Slotted End Cap',image:'assets/items/16.png'}
      ],
      category: 'CONTINUOUS SYSTEM',
      ProductName: '140 X 90 Continuous Channel', 
      essentialDetails: {
        type: 'Continuous Profile System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['10 Feet / 12 Feet'],
        width: ['Approx. 2.2 Kg - 2.3 kg / Feet','EPDM Gasket( Approx. 0.105 kg/ Feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','&#8734;','&#8734;','&#8734;']
        ]
      }
    }
  ];
  
  bracketSystemImages: any = [
    { image: 'assets/items/22.png',
      category: 'BRACKET SYSTEM',
      ProductName: 'L- Bracket', 
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['Bracket ( 65mm )'],
        width: ['Approx. 0460 kg / Nos.'],
        finish: 'Natural, Anodized, Powder Coated, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','20`','10`','-']
        ]
      } 
    },
    { image: 'assets/items/23.png',
      category: 'BRACKET SYSTEM',
      ProductName: 'T - Bracket', 
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['Bracket ( 65mm )'],
        width: ['Approx. 0440 kg / Nos.'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','20`','10`','-']
        ]
      } 
    },
    { image: 'assets/items/24.png',
      category: 'BRACKET SYSTEM',
      ProductName: 'Tower Bracket', 
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['Bracket ( 50mm )'],
        width: ['Approx. 0310 kg / Nos.'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','20`','10`','-']
        ]
      } 
    },
    { image: 'assets/items/25.png',
      category: 'BRACKET SYSTEM',
      ProductName: 'V - Bracket', 
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['Bracket ( 65mm )'],
        width: ['Approx. 0430 kg / Nos.'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','30`','20`','10`']
        ]
      } 
    },
    { image: 'assets/items/26.png',
      category: 'BRACKET SYSTEM',
      ProductName: 'Radius Bracket', 
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['Bracket ( 50mm )'],
        width: ['Approx. 0460 kg / Nos.'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating',
        RRLChart: [
          ['Glass Height','24"','30"','36"','42"','48"'],
          ['Railing Length','&#8734;','&#8734;','20`','10`','-']
        ]
      } 
    },
    { image: 'assets/items/48 x 48.png',
      category: 'BRACKET SYSTEM',
      ProductName: 'RAB - 01 (48 X 48 Square Spigot)',
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Casting',
        height: '9 inch and 6 Inch',
        weight: ['Spigot 5 inch (0.700 kg / Nos.)','Spigot 10 inch (1.120 kg / Nos.)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      } 
    },
    { image: 'assets/items/50 x 36.png',
      category: 'BRACKET SYSTEM',
      ProductName: 'RAB - 02 (50 X 36 Square Spigot)',
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Casting',
        height: '10 inch and 5 Inch',
        weight: ['Spigot 5 inch (0.408 kg / Nos.)','Spigot 10 inch (0.930 kg / Nos.)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      } 
    }
  ]; 

  // RAILING SPIGOT
  railingSpigotImages: any = [
    { image: 'assets/items/pending.png',
      category: 'BRACKET SYSTEM',
      subCategory: 'RAILING SPIGOT',
      ProductName: 'RAB - 01 (48 X 48 Square Spigot)',
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Casting',
        height: '9 inch and 6 Inch',
        weight: ['Spigot 5 inch (0.700 kg / Nos.)','Spigot 10 inch (1.120 kg / Nos.)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      } 
    },
    { image: 'assets/items/pending.png',
      category: 'BRACKET SYSTEM',
      subCategory: 'RAILING SPIGOT',
      ProductName: 'RAB - 02 (50 X 36 Square Spigot)',
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Casting',
        height: '10 inch and 5 Inch',
        weight: ['Spigot 5 inch (0.408 kg / Nos.)','Spigot 10 inch (0.930 kg / Nos.)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      } 
    },
    { image: 'assets/items/50 mm.png',
      category: 'BRACKET SYSTEM',
      subCategory: 'RAILING SPIGOT',
      ProductName: 'RAB - 03 (50MM Round Spigot)',
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Casting',
        height: '9 inch and 6 Inch',
        weight: ['Spigot 5 inch (0.408 kg / Nos.)','Spigot 10 inch (0.930 kg / Nos.)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/items/pending.png',
      category: 'BRACKET SYSTEM',
      subCategory: 'RAILING SPIGOT',
      ProductName: 'RAB - 04 (Hexagon Spigot)',
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Casting',
        height: '10 inch and 6 Inch',
        weight: ['Spigot 5 inch (0.580 kg / Nos.)','Spigot 10 inch (1.100 kg / Nos.)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/items/pending.png',
      category: 'BRACKET SYSTEM',
      subCategory: 'RAILING SPIGOT',
      ProductName: 'RAB - 05 (Pyramid Bracket)',
      essentialDetails: {
        type: 'Bracket System',
        use: 'Indoor and Outdoor',
        material: 'Aluminium Casting',
        length: '65mm',
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    }
  ];

  handrailAndAccessoriesImages: any = [
    { image: 'assets/HANDRAIL & ACCESSORIES/1.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/1.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/1.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/1.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/1.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 01 (38mm Round)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.170kg - 0.190kg (1 feet)','EPDM Gasket (Approx. 0.056kg/feet)'],
        finish: 'Natural, Anodized, Powder Coated, Wooden Coating, PVDF Coating'
      } 
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/2.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/2.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/2.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/2.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/2.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 02 (50mm Round)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.260kg - 0.290kg ( 1 feet )','EPDM Gasket (Approx 0.085kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating,Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/3.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/3.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/3.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/3.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/3.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 03 (65mm Round)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.420kg - 0.460kg ( 1 feet )','EPDM Gasket (Approx 0.120kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/4.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/4.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/4.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/4.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/4.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 04 (25X25mm Square)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.170kg - 0.190kg ( 1 feet)','EPDM Gasket (Approx 0.056kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/5.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/5.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/5.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/5.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/5.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 05 (40X40mm Square)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.260kg - 0.290kg ( 1 feet )','EPDM Gasket (Approx 0.085kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/6.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/6.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/6.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/6.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/6.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 06 (50X50mm Square)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.360kg - 0.400kg ( 1 feet )','EPDM Gasket (Approx 0.090kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/7.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/7.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/7.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/7.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/7.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 07 (50X40mm)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.250kg - 0.280kg ( 1 feet )','EPDM Gasket (Approx 0.085kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/8.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/8.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/8.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/8.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/8.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 08 (60X40mm)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.380kg - 0.420kg ( 1 feet )','EPDM Gasket (Approx 0.085kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/9.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/9.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/9.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/9.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/9.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 09 (1 Side LED)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.360kg - 0.400kg ( 1 feet )','EPDM Gasket (Approx 0.070kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/10.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/10.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/10.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/10.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/10.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 10 (1 Side Without LED)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.360kg - 0.400kg ( 1 feet )','EPDM Gasket (Approx 0.070kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/11.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/11.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/11.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/11.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/11.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 11 (2 Side LED)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.340kg - 0.380kg ( 1 feet )','EPDM Gasket (Approx 0.85kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/12.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/12.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/12.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/12.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/12.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 12 (2 Side Without LED)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.320kg - 0.360kg ( 1 feet )','EPDM Gasket (Approx 0.085kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/13.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/13.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/13.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/13.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/13.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 13 (Commercial)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.220kg - 0.250kg ( 1 feet )'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/14.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/14.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/14.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/14.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/14.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 14 (Diamond)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.360kg - 0.400kg ( 1 feet )','EPDM Gasket (Approx 0.085kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/15.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/15.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/15.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/15.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/15.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 15 (Eyes)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.300kg - 0.330kg ( 1 feet )','EPDM Gasket (Approx 0.085kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/16.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/16.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/16.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/16.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/16.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 16 (Incline)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.340kg - 0.380kg ( 1 feet )','EPDM Gasket (Approx 0.070kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/17.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/17.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/17.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/17.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/17.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 17 (Incline LED)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.400 gm( 1 feet )','EPDM Gasket (Approx 0.070kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/18.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/18.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/18.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/18.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/18.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 18 (17X19 Slim)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.110 kg (1 feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/20.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/20.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/20.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/20.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/20.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 19 (Small Rightangle)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.220kg - 0.250kg ( 1 feet )','EPDM Gasket (Approx 0.055kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/19.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/19.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/19.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/19.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/19.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 20 (Right Angle)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.400kg - 0.440kg ( 1 feet )','EPDM Gasket (Approx 0.090kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/21.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/21.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/21.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/21.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/21.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 21 (Triangle)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.300 kg - 0.330 kg( 1 feet )','EPDM Gasket (Approx 0.085kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/22.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/22.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/22.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/22.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/22.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 22 (Crystal Diamond)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.300 kg - 0.330 kg( 1 feet )','EPDM Gasket (Approx 0.085kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/23.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/23.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/23.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/23.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/23.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 23 (Flower)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.320kg - 0.350kg ( 1 feet )','EPDM Gasket (Approx 0.085kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/HANDRAIL & ACCESSORIES/24.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/HANDRAIL & ACCESSORIES/24.png'},
        {title:'Fix Bend',image:'assets/HANDRAIL & ACCESSORIES/24.png'},
        {title:'Connector',image:'assets/HANDRAIL & ACCESSORIES/24.png'},
        {title:'End Cap',image:'assets/HANDRAIL & ACCESSORIES/24.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 24 (Capsule)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.320kg - 0.350kg ( 1 feet )','EPDM Gasket (Approx 0.070kg/feet)'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/items/1.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/items/1.png'},
        {title:'Fix Bend',image:'assets/items/1.png'},
        {title:'Connector',image:'assets/items/1.png'},
        {title:'End Cap',image:'assets/items/1.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 29 (40X40 Square Plain)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.180 kg - 0.210 kg( 1 feet )'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/items/1.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/items/1.png'},
        {title:'Fix Bend',image:'assets/items/1.png'},
        {title:'Connector',image:'assets/items/1.png'},
        {title:'End Cap',image:'assets/items/1.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 30 (50X50 Square Plain)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.210 kg - 0.230 kg( 1 feet )'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
      }
    },
    { image: 'assets/items/1.png',
      subImages: [
        {title:'Wall Concealed',image:'assets/items/1.png'},
        {title:'Fix Bend',image:'assets/items/1.png'},
        {title:'Connector',image:'assets/items/1.png'},
        {title:'End Cap',image:'assets/items/1.png'}
      ],
      category: 'HANDRAIL & ACCESSORIES',
      ProductName: 'RA - HR - 31 (50mm Round Plain)', 
      essentialDetails: {
        use: 'Indoor and Outdoor',
        material: 'Aluminium Alloy 6063-T6',
        length: ['13 Feet and 16 Feet'],
        width: ['Approx. 0.180 kg - 0.210 kg( 1 feet )'],
        finish: 'Natural, Anodized, Powder Coating, Wooden Coating, PVDF Coating'
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