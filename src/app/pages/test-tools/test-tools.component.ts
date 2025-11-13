import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface InstructionStep {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  figureLabel: string;
}

interface TestSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  steps: InstructionStep[];
  isExpanded: boolean;
}

interface TroubleshootingItem {
  id: number;
  question: string;
  answer: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-test-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-tools.component.html',
  styleUrl: './test-tools.component.scss'
})
export class TestToolsComponent {
  videoUrl: SafeResourceUrl;
  lightboxImage = signal<string | null>(null);
  currentProgress = signal(0);

  testSections = signal<TestSection[]>([
    {
      id: 'initial-setup',
      title: 'Initial Setup - Open Your Browser',
      icon: '🌐',
      description: 'Start by opening your browser and logging into the platform',
      isExpanded: false,
      steps: [
        {
          id: 1,
          title: 'Navigate to the Platform',
          description: 'Open your internet browser and go to address: https://condo.virtualupon.co. With your user name and password handy, click login.',
          imagePath: '',
          figureLabel: ''
        },
        {
          id: 2,
          title: 'Access Test Settings',
          description: 'After you log in, click \'Test\' button on the left side of the screen',
          imagePath: 'http://www.virtualupon.com/wp-content/uploads/2022/01/1-1-1.png',
          figureLabel: 'figure 1-1'
        },
        {
          id: 3,
          title: 'Open Settings Menu',
          description: 'Click settings',
          imagePath: 'http://www.virtualupon.com/wp-content/uploads/2022/01/1-2-1.png',
          figureLabel: 'figure 1-2'
        },
        {
          id: 4,
          title: 'Access Devices',
          description: 'Click \'Devices\'',
          imagePath: 'http://www.virtualupon.com/wp-content/uploads/2022/01/1-3-1.png',
          figureLabel: 'figure 1-3'
        }
      ]
    },
    {
      id: 'camera',
      title: 'Check Your Camera',
      icon: '📹',
      description: 'Test and configure your video camera settings',
      isExpanded: false,
      steps: [
        {
          id: 1,
          title: 'Turn Camera On/Off',
          description: 'To turn your device\'s camera on/off, click on Video button. Click \'allow\' if you see a question in the browser.',
          imagePath: 'http://www.virtualupon.com/wp-content/uploads/2022/01/2-1-1.png',
          figureLabel: 'figure 2-1'
        },
        {
          id: 2,
          title: 'Verify Camera Feed',
          description: 'Look inside the box - now you should see yourself (or whatever your camera is pointed at!)',
          imagePath: 'http://www.virtualupon.com/wp-content/uploads/2022/01/2-2-1.png',
          figureLabel: 'figure 2-2'
        },
        {
          id: 3,
          title: 'Select Camera Device',
          description: 'If you have multiple video cameras, select the name from drop down menu',
          imagePath: 'http://www.virtualupon.com/wp-content/uploads/2022/01/2-3-1.png',
          figureLabel: 'figure 2-3'
        }
      ]
    },
    {
      id: 'microphone',
      title: 'Check Your Microphone',
      icon: '🎤',
      description: 'Test and configure your microphone settings',
      isExpanded: false,
      steps: [
        {
          id: 1,
          title: 'Microphone On/Off',
          description: 'To Unmute/Mute yourself, click the microphone button. Click \'allow\' if you see a question in the browser.',
          imagePath: 'http://www.virtualupon.com/wp-content/uploads/2022/01/3-1-1.png',
          figureLabel: 'figure 3-1'
        },
        {
          id: 2,
          title: 'Test Audio Levels',
          description: 'Start speaking clearly - you should see the sound level indicator moving',
          imagePath: 'http://www.virtualupon.com/wp-content/uploads/2022/01/3-2-1.png',
          figureLabel: 'figure 3-2'
        },
        {
          id: 3,
          title: 'Select Microphone Device',
          description: 'If you have multiple microphones, select the name from drop down menu',
          imagePath: 'http://www.virtualupon.com/wp-content/uploads/2022/01/3-3-1.png',
          figureLabel: 'figure 3-3'
        }
      ]
    },
    {
      id: 'speakers',
      title: 'Check Your Speakers',
      icon: '🔊',
      description: 'Test and configure your speaker settings',
      isExpanded: false,
      steps: [
        {
          id: 1,
          title: 'Play Test Sound',
          description: 'Click on the link that says "Play a test sound" - you should hear a sound from your device Speakers',
          imagePath: 'http://www.virtualupon.com/wp-content/uploads/2022/01/4-1-1.png',
          figureLabel: 'figure 4-1'
        },
        {
          id: 2,
          title: 'Select Speaker Device',
          description: 'If you have multiple speakers, select the name from drop down menu',
          imagePath: 'http://www.virtualupon.com/wp-content/uploads/2022/01/4-2-1.png',
          figureLabel: 'figure 4-2'
        }
      ]
    }
  ]);

  troubleshootingItems = signal<TroubleshootingItem[]>([
    {
      id: 1,
      question: 'Error obtaining microphone or camera permission',
      answer: 'Click on the Padlock icon in your browser\'s address bar and open the site settings. Change Camera and Microphone to "Allow".',
      isExpanded: false
    },
    {
      id: 2,
      question: 'How do I test my video and audio online?',
      answer: 'Search online for "Check your video online" to test your video, and "Check your audio online" to test your audio. These are great preliminary checks before contacting support.',
      isExpanded: false
    },
    {
      id: 3,
      question: 'How do I allow camera and audio access in my browser?',
      answer: 'Search online for "Allow camera and audio access on [your specific browser]" for detailed instructions. Different browsers have different methods.',
      isExpanded: false
    }
  ]);

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/HS69OuACQUk'
    );
  }

  totalSections = computed(() => this.testSections().length);
  completedSections = computed(() => 
    this.testSections().filter(section => !section.isExpanded).length
  );

  toggleSection(sectionId: string): void {
    this.testSections.update(sections =>
      sections.map(section =>
        section.id === sectionId
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    );
    this.updateProgress();
  }

  toggleTroubleshooting(itemId: number): void {
    this.troubleshootingItems.update(items =>
      items.map(item =>
        item.id === itemId
          ? { ...item, isExpanded: !item.isExpanded }
          : item
      )
    );
  }

  openLightbox(imagePath: string): void {
    this.lightboxImage.set(imagePath);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxImage.set(null);
    document.body.style.overflow = 'auto';
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  updateProgress(): void {
    const expanded = this.testSections().filter(s => s.isExpanded).length;
    const total = this.testSections().length;
    this.currentProgress.set((expanded / total) * 100);
  }
}
