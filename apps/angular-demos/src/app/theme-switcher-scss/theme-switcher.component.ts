import { Component, Input } from '@angular/core';
import { ThemeService, ThemeListItem } from '@fds/angular';

@Component({
  selector: 'theme-switcher',
  template: `
    <div class="theme-switcher">
      <p class="text--center">Choose <br />Theme:</p>
      <div class="btns-switcher-holder">
        <button
          *ngFor="let theme of themes"
          class="mb--2 btn navy default"
          [ngClass]="{
            'btn--primary': activeClassName == theme.className,
            'btn--primary': activeClassName != theme.className
          }"
          (click)="switchTheme(theme)"
        >
          {{ theme.title }}
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  @Input() themes: ThemeListItem[] = [];
  get activeClassName() {
    return this.themeService.getThemeClassName();
  }

  constructor(private themeService: ThemeService) {}

  switchTheme(theme) {
    this.themeService.setThemeClassName(theme.className);
  }
}
