import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
import { ReactiveFormsModule, FormBuilder, Validators,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
 
export class Contact {

  contactForm!: FormGroup;
  loading = false;
  success = false;
  error = false;
  
  constructor(
  private fb: FormBuilder,
) {

    this.contactForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z\s]+$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

  }

  sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;
	this.success = false;
	this.error = false;

    const formData = this.contactForm.getRawValue();

    emailjs.send(
      'service_oxu4pyf',
      'template_3yt0l2b',
      formData,
      'pF2g2f5c9nX37D9ht'
    ).then((response) => {
  this.loading = false;
  this.error = false;
  this.success = true;

  this.contactForm.reset({
    title: '',
    name: '',
    email: '',
    message: ''
  });

  setTimeout(() => {
    this.success = false;
  }, 5000);

}).catch(() => {
      this.loading = false;
      this.error = true;

      setTimeout(() => this.error = false, 3000);
    });
  }
  
  allowOnlyLetters(event: KeyboardEvent) {
	  const charCode = event.which || event.keyCode;

	  if (
		!(charCode >= 65 && charCode <= 90) &&
		!(charCode >= 97 && charCode <= 122) &&
		charCode !== 32
	  ) {
		event.preventDefault();
	  }
	}
}