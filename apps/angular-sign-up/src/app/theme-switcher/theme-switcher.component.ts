import { Component, OnInit } from "@angular/core";
import { ThemeService, ThemeListItem } from "@fds/angular";

@Component({
  selector: "fds-theme-switcher",
  template: `
	<div class="text--right">
	  Theme:
	  <a href="javascript:void(0);" *ngFor="let theme of themesList"
		 class="btn btn__tooltip"
		 [ngClass]="{'text__primary': activeClassName == theme.className, 
                'text__secondary': activeClassName != theme.className }"
		 (click)="switchTheme(theme)">
		{{theme.title}}</a>
	</div>
  `,
  styles: []
})
export class ThemeSwitcherComponent {

  // Themes list with corespondent classes
  themesList: ThemeListItem[] = [
    {
      title: "Default",
      className: ""
    },
    {
      title: "Navy",
      className: "navy-theme",
      config: {
        button: {
          rounded: true
        },
        input: {
          outline: true
        }
      }
    }
  ];

  constructor(private themeService: ThemeService) {
  }

  get activeClassName() {
    return this.themeService.getThemeClassName();
  }

  switchTheme(theme) {
    this.themeService.setThemeClassName(theme.className);
  }
}
