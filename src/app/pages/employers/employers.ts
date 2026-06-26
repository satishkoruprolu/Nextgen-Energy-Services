import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-employers',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './employers.html',
  styleUrls: ['./employers.css'],
})
export class Employers {
  // === EmailJS configuration ====================================
  private readonly SERVICE_ID    = 'service_lxxjpm7';
  private readonly PUBLIC_KEY    = '0Bg0jcOZRcqN1hNNG';
  private readonly TEMPLATE_TO_ORG  = 'template_zx6w4rj';
  // Create a second EmailJS template configured with To Email = {{email}}
  // and replace the id below with the new template id.
  private readonly TEMPLATE_TO_USER = 'template_user_reply';
  // ==============================================================

  isFormOpen = false;

  loading = false;
  success = false;
  error = false;
  submittedName = '';
  submittedCompany = '';

  hiringForm!: FormGroup;

  hiringSolutions = [
    { icon: '\u{1F454}', title: 'Permanent Hiring',     desc: 'Long-term, full-time engineering and technical roles, end-to-end.' },
    { icon: '\u{1F4DD}', title: 'Contract Staffing',    desc: 'Skilled instrumentation talent on-demand for short or long projects.' },
    { icon: '\u{1F465}', title: 'Bulk Hiring Support',  desc: 'Scale your workforce fast for plant turnarounds and shutdowns.' },
    { icon: '\u{1F3AF}', title: 'Role-Based Recruitment', desc: 'Targeted search for niche calibration, automation and safety roles.' }
  ];

  constructor(private fb: FormBuilder) {
    this.hiringForm = this.fb.group({
      firstName:  ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z\s]+$/)]],
      lastName:   ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z\s]+$/)]],
      email:      ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      company:     ['', [Validators.required, Validators.minLength(2)]],
      jobTitle:    ['', [Validators.required, Validators.minLength(2)]],
      phone:      ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]{10}$/)]],
      location:    [''],
      hiringType:  [''],
      roleDetails: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  openForm() {
    this.isFormOpen = true;
    this.success = false;
    this.error = false;
    this.scrollToForm();
  }

  submitAnother() {
    this.success = false;
    this.error = false;
    this.hiringForm.reset({
      firstName: '', lastName: '', email: '', company: '',
      jobTitle: '', phone: '', location: '',
      hiringType: '', roleDetails: ''
    });
    this.scrollToForm();
  }

  private scrollToForm() {
    setTimeout(() => {
      const el = document.getElementById('hiringForm');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  sendRequirement() {
    if (this.hiringForm.invalid) {
      this.hiringForm.markAllAsTouched();
      console.warn('[Employers] form invalid', this.hiringForm.value);
      return;
    }

    this.loading = true;
    this.success = false;
    this.error = false;

    const v = this.hiringForm.value;
    this.submittedName = v.firstName;
    this.submittedCompany = v.company;

    const payload = {
      ...v,
      title: 'Hiring Requirement - ' + v.company,
      name: v.firstName + ' ' + v.lastName,
      to_email: v.email,
      reply_to: v.email,
      message:
        'Company: ' + v.company + '\n' +
        'Contact: ' + v.firstName + ' ' + v.lastName + ' (' + v.jobTitle + ')\n' +
        'Phone: ' + (v.phone || '-') + '\n' +
        'Location: ' + (v.location || '-') + '\n' +
        'Hiring Type: ' + (v.hiringType || '-') + '\n\n' +
        'Role Details:\n' + v.roleDetails
    };

    console.log('[Employers] sending requirement', payload);

    const orgPromise  = emailjs.send(this.SERVICE_ID, this.TEMPLATE_TO_ORG,  payload, this.PUBLIC_KEY);
    const userPromise = emailjs.send(this.SERVICE_ID, this.TEMPLATE_TO_USER, payload, this.PUBLIC_KEY)
      .catch(err => {
        console.warn('[Employers] employer auto-reply failed (template may not exist yet):', err);
        return null;
      });

    Promise.all([orgPromise, userPromise]).then((results) => {
      console.log('[Employers] email send result', results);
      this.loading = false;
      this.success = true;
      this.scrollToForm();
    }).catch((err) => {
      console.error('[Employers] organisation email FAILED', err);
      this.loading = false;
      this.error = true;
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

	allowOnlyNumbers(event: KeyboardEvent) {
	  const charCode = event.which || event.keyCode;

	  if (charCode < 48 || charCode > 57) {
		event.preventDefault();
	  }
	}
}
