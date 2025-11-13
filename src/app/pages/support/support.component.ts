import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faQuestionCircle,
  faVideo 
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faQuestionCircle = faQuestionCircle;
  faVideo = faVideo;
}