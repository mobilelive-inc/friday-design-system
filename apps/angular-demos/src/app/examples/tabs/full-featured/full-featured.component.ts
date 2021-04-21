import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-full-featured',
  template: `
    <fds-tabView>
      <fds-tabPanel>
        <ng-template fdsTemplate="header"
          ><strong>Custom Header 1</strong></ng-template
        >
        consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
        cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
        imperdiet. Duis sagittis ipsum.
      </fds-tabPanel>
      <fds-tabPanel
        header="Header Text"
        leftIcon="icon-check"
        rightIcon="icon-warning-circle"
        [disabled]="true"
      >
        Disabled content
      </fds-tabPanel>
      <fds-tabPanel header="Header 3" [closable]="true">
        Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
        quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
        tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus
        risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
        quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
        ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat
        condimentum velit. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos
      </fds-tabPanel>
    </fds-tabView>
  `,
  styles: []
})
export class FullFeaturedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
