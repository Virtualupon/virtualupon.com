import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselComponent, CarouselItem } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { number: '35+', label: 'Years of Experience' },
    { number: '162', label: 'Participants at Once' },
    { number: '224+', label: 'Projects Completed' }
  ];

  teamMembers: CarouselItem[] = [
    { title: 'Edita Sehic', subtitle: 'Head of Finance', image: 'assets/images/team/imageedit_20_5157983186.png' },
    { title: 'Shahir Salih', subtitle: 'Marketing & Sales', image: 'assets/images/team/0.jpg' },
    { title: 'Atef Kabaja', subtitle: 'Advisory Board – Technology', image: 'assets/images/team/IMG-20201018-WA0005.jpg' },
    { title: 'Llana Salih', subtitle: 'Communication & Public Relations', image: 'assets/images/team/Llana.jpg' },
    { title: 'Dom Sing', subtitle: 'VP of Business Development', image: 'assets/images/team/dom.jpeg' },
    { title: 'Nazmul Hassan Babu', subtitle: 'Technology', image: 'assets/images/team/hassan.jpg' },
    { title: 'Akil Thabet', subtitle: 'Advisory Board- Strategy', image: 'assets/images/team/akil.jpg' },
    { title: 'Ramy Badir', subtitle: 'Technology', image: 'assets/images/team/ramy.gif' },
    { title: 'Sachin Yadav', subtitle: 'Technology', image: 'assets/images/team/sachan.jpg' },
    { title: 'Genet Berhe', subtitle: 'Account Management', image: 'assets/images/team/Gennet.jpeg' },
    { title: 'Haneen Bakbak', subtitle: 'Technology', image: 'assets/images/team/hannen.png' },
    { title: 'Zain Ul Abideen', subtitle: 'Technology', image: 'assets/images/team/zin.jpg' },
    { title: 'Martin Leshi', subtitle: 'VP of Development', image: 'assets/images/team/martin.jpeg' }
  ];
}