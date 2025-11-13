import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailService, ContactFormData } from '../../services/email.service';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faPaperPlane,
  faCheckCircle,
  faCalendarAlt,
  faQuestionCircle,
  faVideo,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, FormsModule, HttpClientModule],
  providers: [EmailService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // Icons
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faClock = faClock;
  faPaperPlane = faPaperPlane;
  faCheckCircle = faCheckCircle;
  faCalendarAlt = faCalendarAlt;
  faQuestionCircle = faQuestionCircle;
  faVideo = faVideo;
  faSpinner = faSpinner;

  formSubmitted = false;
  isSubmitting = false;
  errorMessage = '';

  // Form Data
  formData: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  };

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    // Scroll to top when component loads
    window.scrollTo(0, 0);

    // Initialize AOS if available
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        once: true,
        offset: 100
      });
    }
  }

  submitForm(): void {
    // Validate form
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    // Send email via service
    this.emailService.sendContactEmail(this.formData).subscribe({
      next: (response) => {
        console.log('Email sent successfully:', response);
        this.formSubmitted = true;
        this.isSubmitting = false;
        
        // Reset form after 5 seconds
        setTimeout(() => {
          this.resetForm();
        }, 5000);
      },
      error: (error) => {
        console.error('Error sending email:', error);
        this.errorMessage = 'Failed to send message. Please try again or contact us directly.';
        this.isSubmitting = false;
      }
    });
  }

  validateForm(): boolean {
    if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
      this.errorMessage = 'Please fill in all required fields.';
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return false;
    }

    return true;
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    };
    this.formSubmitted = false;
    this.errorMessage = '';
  }
}