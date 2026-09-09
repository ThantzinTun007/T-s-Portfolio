import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/theme.service';

interface NavItem {
  name: string;
  href: string;
  icon: 'home' | 'projects' | 'experience' | 'skills' | 'chat';
  active?: boolean;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly themeService = inject(ThemeService);
  readonly isMobileMenuOpen = signal<boolean>(false);

  readonly navItems: NavItem[] = [
    { name: 'Home', href: '#home', icon: 'home', active: true },
    { name: 'Projects', href: '#projects', icon: 'projects' },
    { name: 'Experience', href: '#experience', icon: 'experience' },
    { name: 'Skills', href: '#skills', icon: 'skills' },
    { name: 'Chat', href: '#chat', icon: 'chat' },
  ];

  activeItem = signal<string>('Home');

  setActive(item: string, event?: Event): void {
    if (event) event.preventDefault();
    this.activeItem.set(item);
    this.isMobileMenuOpen.set(false);

    const navItem = this.navItems.find((n) => n.name === item);
    if (!navItem) return;

    const targetId = navItem.href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }
}
