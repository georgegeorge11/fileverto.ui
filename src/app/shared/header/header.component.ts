import {Component, inject} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ThemeService} from '../../services/theme.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  router = inject(Router);

  get currentTheme() {
    return this.themeService.currentTheme(); // Reactive signal
  }

  toggleTheme() {
    const nextThemeId = this.currentTheme.id === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(nextThemeId);
  }

  goHome(){
    this.router.navigate(['/']);
  }
}
