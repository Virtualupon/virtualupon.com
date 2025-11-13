import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheckCircle,
  faVideo,
  faDesktop,
  faRecordVinyl,
  faUserTie,
  faShieldAlt,
  faLock,
  faUsers,
  faFileSignature,
  faChartLine,
  faArchive,
  faIdCard,
  faArrowRight,
  faEnvelope,
  faChevronDown,
  faPlay,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('showcaseVideo') showcaseVideo!: ElementRef<HTMLVideoElement>;

  // Icons
  faCheckCircle = faCheckCircle;
  faVideo = faVideo;
  faDesktop = faDesktop;
  faRecordVinyl = faRecordVinyl;
  faUserTie = faUserTie;
  faShieldAlt = faShieldAlt;
  faLock = faLock;
  faUsers = faUsers;
  faFileSignature = faFileSignature;
  faChartLine = faChartLine;
  faArchive = faArchive;
  faIdCard = faIdCard;
  faArrowRight = faArrowRight;
  faEnvelope = faEnvelope;
  faChevronDown = faChevronDown;
  faPlay = faPlay;
  faCalendarAlt = faCalendarAlt;

  isVideoPlaying = false;

  // Updated stats - replaced marketing numbers with actual value propositions
  stats = [
    {
      icon: this.faDesktop,
      number: 'Zero Installation',
      label: 'Works in any browser'
    },
    {
      icon: this.faLock,
      number: 'End-to-End Encryption',
      label: 'Enterprise security included'
    },
    {
      icon: this.faUsers,
      number: '75 Participants',
      label: '1000+ viewers supported'
    },
    {
      icon: this.faCheckCircle,
      number: 'One-Click Join',
      label: 'No registration required'
    }
  ];

  features = [
    {
      icon: this.faFileSignature,
      title: 'Invitations',
      description: 'Automated and digitalized invitation process'
    },
    {
      icon: this.faShieldAlt,
      title: 'Secure Connections',
      description: 'End-to-end encrypted communications'
    },
    {
      icon: this.faLock,
      title: 'Secure Authentication',
      description: 'Role-based authorization system'
    },
    {
      icon: this.faChartLine,
      title: 'Post-Event Evaluation',
      description: 'Comprehensive reporting and analytics'
    },
    {
      icon: this.faArchive,
      title: 'Recording & Archiving',
      description: 'Save all meetings for future reference'
    },
    {
      icon: this.faUsers,
      title: 'Large Scale Participation',
      description: 'Support for thousands of participants'
    },
    {
      icon: this.faIdCard,
      title: 'Registration',
      description: 'Streamlined attendee registration'
    },
    {
      icon: this.faFileSignature,
      title: 'Verified Digital Signatures',
      description: 'Secure and verified digital signing'
    }
  ];

  industries = [
    { name: 'Finance', icon: '💰', color: '#10b981' },
    { name: 'Legal & E-Notary', icon: '⚖️', color: '#3b82f6' },
    { name: 'Corporation Meetings', icon: '🏢', color: '#8b5cf6' },
    { name: 'Insurance', icon: '🛡️', color: '#f59e0b' },
    { name: 'Real Estate', icon: '🏘️', color: '#ef4444' },
    { name: 'Education', icon: '🎓', color: '#6366f1' },
    { name: 'Local Government', icon: '🏛️', color: '#ec4899' },
    { name: 'E-Health', icon: '🏥', color: '#14b8a6' }
  ];

  services = [
    {
      icon: this.faVideo,
      title: 'Virtual Meeting Platform',
      description: 'VirtualUpon is a live virtual meeting platform designed to facilitate all your business, faculty, and annual general meeting needs.'
    },
    {
      icon: this.faDesktop,
      title: '100% Browser Based',
      description: 'VirtualUpon is completely browser based, your attendees just need to click on a link and they\'re in the meeting.'
    },
    {
      icon: this.faRecordVinyl,
      title: 'Recorded Video Meetings',
      description: 'With a simple click, save all your video meetings for future use, and necessary reference.'
    },
    {
      icon: this.faUserTie,
      title: 'Moderated Video Calls',
      description: 'We assign you a personal moderator for your virtual meeting to ensure all technical aspects of your event run smoothly.'
    }
  ];

  ngOnInit(): void {
    // Initialize AOS (Animate On Scroll) if available
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
  }

  ngAfterViewInit(): void {
    // Ensure hero video plays - with retry logic
    setTimeout(() => {
      if (this.heroVideo && this.heroVideo.nativeElement) {
        const video = this.heroVideo.nativeElement;
        
        // Ensure attributes are set
        video.muted = true;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        
        // Try to play
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video autoplay started successfully');
            })
            .catch(error => {
              console.log('Autoplay prevented, will try on user interaction:', error);
              
              // Retry on any user interaction
              const tryPlay = () => {
                video.play()
                  .then(() => console.log('Video started after user interaction'))
                  .catch(e => console.log('Still cannot play:', e));
              };
              
              // Add listeners for user interaction
              document.addEventListener('click', tryPlay, { once: true });
              document.addEventListener('touchstart', tryPlay, { once: true });
              document.addEventListener('scroll', tryPlay, { once: true });
            });
        }
      }
    }, 100);
  }

  playShowcaseVideo(): void {
    if (this.showcaseVideo && this.showcaseVideo.nativeElement) {
      this.showcaseVideo.nativeElement.play();
      this.isVideoPlaying = true;
    }
  }

  toggleVideo(event: Event): void {
    const video = event.target as HTMLVideoElement;
    if (video.paused) {
      video.play();
      this.isVideoPlaying = true;
    } else {
      video.pause();
      this.isVideoPlaying = false;
    }
  }
}