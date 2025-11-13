import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  /**
   * Send contact form email
   * @param formData Contact form data
   * @returns Observable with email response
   */
  sendContactEmail(formData: ContactFormData): Observable<EmailResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<EmailResponse>(
      `${this.apiUrl}/send`,
      formData,
      { headers }
    ).pipe(
      map(response => {
        console.log('✅ Email sent successfully:', response);
        return response;
      }),
      catchError(error => {
        console.error('❌ Error sending email:', error);
        const errorMessage = error.error?.message || error.message || 'Failed to send email';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  /**
   * Send quote request email
   * @param formData Contact form data
   * @returns Observable with email response
   */
  sendQuoteRequest(formData: ContactFormData): Observable<EmailResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<EmailResponse>(
      `${this.apiUrl}/quote`,
      formData,
      { headers }
    ).pipe(
      map(response => {
        console.log('✅ Quote request sent successfully:', response);
        return response;
      }),
      catchError(error => {
        console.error('❌ Error sending quote request:', error);
        const errorMessage = error.error?.message || error.message || 'Failed to send quote request';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  /**
   * Send demo request email
   * @param formData Contact form data
   * @returns Observable with email response
   */
  sendDemoRequest(formData: ContactFormData): Observable<EmailResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<EmailResponse>(
      `${this.apiUrl}/demo`,
      formData,
      { headers }
    ).pipe(
      map(response => {
        console.log('✅ Demo request sent successfully:', response);
        return response;
      }),
      catchError(error => {
        console.error('❌ Error sending demo request:', error);
        const errorMessage = error.error?.message || error.message || 'Failed to send demo request';
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}