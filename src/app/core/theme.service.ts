import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  readonly currentTheme = signal<ThemeMode>('light');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const isDarkActive = document.documentElement.classList.contains('dark');
      const savedTheme = localStorage.getItem('app-theme') as ThemeMode | null;
      if (isDarkActive || savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        this.currentTheme.set('dark');
      } else {
        this.currentTheme.set('light');
      }

      effect(() => {
        const theme = this.currentTheme();
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.style.colorScheme = 'dark';
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.style.colorScheme = 'light';
        }
        localStorage.setItem('app-theme', theme);
      });
    }
  }

  toggleTheme(): void {
    this.currentTheme.update((mode) => (mode === 'light' ? 'dark' : 'light'));
  }

  setTheme(mode: ThemeMode): void {
    this.currentTheme.set(mode);
  }
}
