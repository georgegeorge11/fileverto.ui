import {effect, inject, Injectable, signal} from '@angular/core';
import {Theme} from '../models/theme.model';
import {themes} from '../utils/theme-options';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  cookieService = inject(CookieService);

  // Load the saved theme from cookies, or default to the first theme
  savedThemeId = this.cookieService.get("theme") || themes[0].id;
  currentTheme = signal<Theme>(themes.find(t => t.id === this.savedThemeId) || themes[0]);

  getThemes(): Theme[] {
    return themes;
  }

  setTheme(themeId: string): void {
    const theme = themes.find((t) => t.id === themeId);
    if (theme) {
      this.currentTheme.set(theme);
      this.cookieService.set("theme", themeId, 365); // Save in cookie for 1 year
    }
  }

  updateThemeClass = effect(() => {
    const theme = this.currentTheme();
    document.body.classList.remove(...themes.map((t) => `${t.id}-theme`));
    document.body.classList.add(`${theme.id}-theme`);
  });
}
