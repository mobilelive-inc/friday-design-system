// import {Component} from '@angular/core';
// import {themeDark, themeGray} from "./theme";
// import {ThemeConfig, ThemeService} from "./theme.service";
//
// @Component({
//     selector: 'theme-switcher',
//     template: `
//         <div class="theme-switcher">
//             <p class="text--center">Choose <br>Theme:</p>
//             <div class="btns-switcher-holder">
//                 <button *ngFor="let theme of themes" class="mb-tiny btn btn__primary btn--sm navy default"
//                         (click)="switchTheme(theme)">
//                     {{theme.name}}
//                 </button>
//             </div>
//         </div>
//     `,
//     styleUrls: ['./theme-switcher.component.scss'],
// })
// export class ThemeSwitcherComponent {
//     themes: ThemeConfig[] = [themeDark, themeGray];
//
//     constructor(private themeService: ThemeService) {
//     }
//
//     switchTheme(theme) {
//         this.themeService.setTheme(theme);
//     }
// }
