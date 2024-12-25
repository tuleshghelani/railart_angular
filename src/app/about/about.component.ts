import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

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
}
