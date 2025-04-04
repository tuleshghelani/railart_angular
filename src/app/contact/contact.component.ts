import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FocusableInput extends HTMLInputElement {
  focused: boolean;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('nameInput') nameInput!: ElementRef<FocusableInput>;

  formData: FormData = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      const AOS = (window as any).AOS;
      if (AOS) {
        AOS.init({
          duration: 800,
          once: true
        });
      }
    });
  }

  onInputFocus(input: HTMLInputElement | HTMLTextAreaElement): void {
    (input as any).focused = true;
  }

  onInputBlur(input: HTMLInputElement | HTMLTextAreaElement): void {
    (input as any).focused = input.value.length > 0;
  }

  onSubmit(): void {
    if (this.isValidForm()) {
      // Add your form submission logic here
      console.log('Form submitted:', this.formData);
      
      // Reset form after successful submission
      this.resetForm();
    }
  }

  callPhone(): void {
    window.location.href = 'tel:+917359993301';
  }

  sendEmail(): void {
    window.location.href = 'mailto:railart2010@yahoo.in';
  }

  private isValidForm(): boolean {
    return (
      this.formData.name.length >= 2 &&
      this.isValidEmail(this.formData.email) &&
      this.formData.message.length >= 10
    );
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
