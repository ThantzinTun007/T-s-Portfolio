import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  url: string;
  icon: 'facebook' | 'linkedin' | 'discord' | 'github';
  ariaLabel: string;
}

@Component({
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
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
  ];
}
