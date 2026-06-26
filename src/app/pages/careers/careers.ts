import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { JobService, JobOpening } from '../../services/job.service';

@Component({
  selector: 'app-careers',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './careers.html',
  styleUrls: ['./careers.css'],
})
export class Careers implements OnInit {

  // === EmailJS configuration ====================================
  private readonly SERVICE_ID       = 'service_lxxjpm7';
  private readonly PUBLIC_KEY       = '0Bg0jcOZRcqN1hNNG';
  private readonly TEMPLATE_TO_ORG  = 'template_y1dwubh';
  private readonly TEMPLATE_TO_USER = 'template_3jzuxze';
  // ==============================================================

  isModalOpen  = false;
  isSuccess    = false;
  submitError  = false;
  loading      = false;

  selectedRole  = '';
  submittedName = '';

  jobsLoading = true;
  jobsError   = false;
  openings: JobOpening[] = [];

  applyForm!: FormGroup;

  // ✅ NgZone injected — forces Angular change detection after external Promise resolves
  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private ngZone: NgZone        // ← ADD THIS
  ) {
    this.applyForm = this.fb.group({
      firstName:  ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z\s]+$/)]],
      lastName:   ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z\s]+$/)]],
      email:      ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      phone:      ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]{10}$/)]],
      role:       ['', [Validators.required]],
      experience: ['', [Validators.required, Validators.min(0), Validators.max(30), Validators.pattern(/^\d{1,2}$/)]],
      location:   [''],
      linkedIn:   [''],
      coverNote:  ['']
    });
  }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe({
      next: (jobs) => {
        this.openings    = jobs;
        this.jobsLoading = false;
      },
      error: (err) => {
        console.error('[Careers] Failed to load jobs', err);
        this.jobsLoading = false;
        this.jobsError   = true;
      }
    });
  }

  applyFor(role: string): void {
    this.selectedRole = role;
    this.applyForm.reset();
    this.applyForm.patchValue({ role });
    this.isSuccess   = false;
    this.submitError = false;
    this.isModalOpen = true;
  }

  openGeneralForm(): void {
    this.applyFor('General Application');
  }

  closeModal(): void {
    this.isModalOpen  = false;
    this.isSuccess    = false;
    this.submitError  = false;
    this.selectedRole = '';
    this.applyForm.reset();
  }

  applyAnother(): void {
    const role = this.selectedRole;
    this.applyForm.reset();
    this.applyForm.patchValue({ role });
    this.isSuccess   = false;
    this.submitError = false;
  }

  sendApplication(): void {
    if (this.applyForm.invalid) {
      this.applyForm.markAllAsTouched();
      return;
    }

    this.loading     = true;
    this.submitError = false;

    const v = this.applyForm.getRawValue();
    this.submittedName = v.firstName;

    const payload = {
      ...v,
      title:    'Job Application - ' + this.selectedRole,
      name:     v.firstName + ' ' + v.lastName,
      to_email: v.email,
      reply_to: v.email,
      message:
        'Role: '                 + v.role                + '\n' +
        'Experience: '           + (v.experience || '-') + '\n' +
        'Location: '             + (v.location   || '-') + '\n' +
        'LinkedIn / Portfolio: ' + (v.linkedIn   || '-') + '\n' +
        'Phone: '                + v.phone               + '\n\n' +
        'Cover Note:\n'          + (v.coverNote  || '-')
    };

    const orgPromise  = emailjs.send(this.SERVICE_ID, this.TEMPLATE_TO_ORG,  payload, this.PUBLIC_KEY);
    const userPromise = emailjs.send(this.SERVICE_ID, this.TEMPLATE_TO_USER, payload, this.PUBLIC_KEY)
      .catch(err => {
        console.warn('[Careers] auto-reply failed:', err);
        return null;
      });

    Promise.all([orgPromise, userPromise])
      .then(() => {
        // ✅ ngZone.run() forces Angular to detect the state change after the external Promise
        this.ngZone.run(() => {
          this.loading   = false;
          this.isSuccess = true;
        });
      })
      .catch(err => {
        console.error('[Careers] email send FAILED', err);
        this.ngZone.run(() => {
          this.loading     = false;
          this.submitError = true;
        });
      });
  }

  allowOnlyLetters(event: KeyboardEvent): void {
    const c = event.which || event.keyCode;
    if (!(c >= 65 && c <= 90) && !(c >= 97 && c <= 122) && c !== 32) {
      event.preventDefault();
    }
  }

  allowOnlyNumbers(event: KeyboardEvent): void {
    const c = event.which || event.keyCode;
    if (c < 48 || c > 57) event.preventDefault();
  }
}
