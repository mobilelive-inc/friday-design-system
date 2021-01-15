import { Injectable } from '@angular/core';

export interface ThemeListItem {
  title: string;
  className: string;
  config?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private active = '';

  getThemeClassName() {
    return this.active;
  }

  setThemeClassName(className: string): void {
    if (this.active) {
      document.documentElement.classList.remove(this.active);
    }
    if (className) {
      document.documentElement.classList.add(className);
    }
    this.active = className;
  }
}
