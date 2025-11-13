import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent, CarouselItem } from '../../components/carousel/carousel.component';
import {
  faUsers,
  faShieldAlt,
  faVideo,
  faLock,
  faChartLine,
  faBell,
  faEnvelope,
  faCalendar,
  faFileAlt,
  faFileDownload,
  faQuestionCircle,
  faArrowRight,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agm',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, CarouselComponent],
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent {
  faUsers = faUsers;
  faShieldAlt = faShieldAlt;
  faVideo = faVideo;
  faLock = faLock;
  faChartLine = faChartLine;
  faBell = faBell;
  faEnvelope = faEnvelope;
  faCalendar = faCalendar;
  faFileAlt = faFileAlt;
  faFileDownload = faFileDownload;
  faQuestionCircle = faQuestionCircle;
  faArrowRight = faArrowRight;
  faPhone = faPhone;

  testimonials: CarouselItem[] = [
    {
      content: 'I thought the process worked well. Everyone was visible. Clarity was good. Well Organized. Thank you for getting me all set up on time!',
      title: 'Leslie Blain',
      subtitle: 'HCC254, Oakville, Ontario, Canada'
    },
    {
      content: 'No communication lag. No network hiccups. The sound quality was good. Good picture. Prompt support from the support team.',
      title: 'Mohammad Arif',
      subtitle: 'PCC43, Mississauga, Ontario, Canada'
    },
    {
      content: 'Our first reason to choose VirtualUpon was based on the availability of our desired dates. Reaching a quorum was crucial to us. The excellent Tech Support provided before and during the meeting helped us reach our quorum.',
      title: 'Syed Shah',
      subtitle: 'President, PCC43, Mississauga, Ontario, Canada'
    },
    {
      content: 'Very impressed with the service and support',
      title: 'K. Dhaliwal Sagr',
      subtitle: 'PCECC810, Mississauga, Ontario, Canada'
    }
  ];

  features = [
    {
      icon: this.faUsers,
      title: 'Live Meeting Moderation',
      description: 'We give you the option to have a moderator on board to make sure all technical aspects are taken care of.'
    },
    {
      icon: this.faFileAlt,
      title: 'Attendee Registration',
      description: 'We make sure all your participants are properly registered and ready to start your meeting.'
    },
    {
      icon: this.faUsers,
      title: 'Audience Engagement',
      description: 'Audio and video muting, participant hand-raise, meeting disturbance enforcement built-in by default.'
    },
    {
      icon: this.faChartLine,
      title: 'Real-time Voting',
      description: 'Integrated real-time voting on directors\' positions, removal, and specific matters with post-event analytics.'
    },
    {
      icon: this.faVideo,
      title: 'Advanced Presenter Controls',
      description: 'Start your meeting with everyone muted, or video off. Personalize your meeting features at ease.'
    },
    {
      icon: this.faShieldAlt,
      title: 'HD Virtual Meeting Technology',
      description: 'HD real-time live video and audio for concurrent user participation and thousands more by live stream.'
    }
  ];

  securityFeatures = [
    {
      icon: this.faShieldAlt,
      title: 'Security and Encryption',
      description: 'All communications done with end-to-end encryption giving you peace of mind.'
    },
    {
      icon: this.faLock,
      title: 'Token-based Voter Authentication',
      description: 'All users obtain a computer-generated code for authentication, aside from password authentication.'
    },
    {
      icon: this.faChartLine,
      title: 'IP Address Tracking',
      description: 'We make sure no unwanted participants are in your meeting.'
    },
    {
      icon: this.faFileAlt,
      title: 'Audit Trails',
      description: 'We audit every document and email sent to ensure your participants are successfully receiving documentation.'
    }
  ];
}