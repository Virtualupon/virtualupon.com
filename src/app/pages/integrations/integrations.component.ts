import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCloud, faServer, faShieldAlt, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent {
  faCloud = faCloud;
  faServer = faServer;
  faShieldAlt = faShieldAlt;
  faLock = faLock;

  services = [
    { title: 'AWS Cloud', icon: this.faCloud },
    { title: 'Azure Integration', icon: this.faServer },
    { title: 'Virtual Meeting Calibration', icon: this.faShieldAlt },
    { title: 'Data Vault Archiving', icon: this.faLock },
    { title: 'Cloud Backup Solution', icon: this.faCloud },
    { title: 'Microsoft 365', icon: this.faServer }
  ];
}
