import { Component } from '@angular/core';
import { ThemeListItem } from '@fds/angular';

@Component({
  selector: 'fds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demos';

  // Themes list with corespondent classes
  themesList: ThemeListItem[] = [
    {
      title: 'Default',
      className: ''
    },
    {
      title: 'Navy',
      className: 'navy-theme'
    },
    {
      title: 'Lemon',
      className: 'lemon-theme'
    },
    {
      title: 'Lime',
      className: 'lime-theme'
    }
  ];
}
