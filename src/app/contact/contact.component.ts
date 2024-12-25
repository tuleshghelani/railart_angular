import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

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

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
  }
}
