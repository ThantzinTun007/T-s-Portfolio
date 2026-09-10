import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SocialLink {
  name: string;
  url: string;
  icon: 'facebook' | 'linkedin' | 'discord' | 'github';
  ariaLabel: string;
}

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  readonly currentYear = new Date().getFullYear();
  readonly message = signal<string>('');
  readonly isSent = signal<boolean>(false);

  readonly socials: SocialLink[] = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: 'facebook',
      ariaLabel: 'Facebook Profile',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin',
      ariaLabel: 'LinkedIn Profile',
    },
    {
      name: 'Discord',
      url: 'https://discord.com',
      icon: 'discord',
      ariaLabel: 'Discord Profile',
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: 'github',
      ariaLabel: 'GitHub Profile',
    },
  ];

  sendMessage(): void {
    const text = this.message().trim();
    if (!text) return;
    window.location.href = `mailto:tzt.thantzintun2022@gmail.com?subject=Portfolio Inquiry&body=${encodeURIComponent(
      text
    )}`;
    this.isSent.set(true);
    setTimeout(() => {
      this.message.set('');
      this.isSent.set(false);
    }, 4000);
  }

  scrollToSection(id: string, event?: Event): void {
    if (event) event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
