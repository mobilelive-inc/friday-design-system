import { Component } from '@angular/core';
import { FdsModalService, MAT_DIALOG_DEFAULT_OPTIONS } from '@fds/angular';
import { ModalBasicExampleComponent } from './modal-basic-example.component';

@Component({
  selector: 'demo-modal-basic',
  template: `
    <button class="btn btn--primary--outline" (click)="open()">
      Open Modal
    </button>
  `,
  styles: []
})
export class ModalBasicComponent {
  constructor(private modalService: FdsModalService) {}

  open() {
    this.modalService.open(ModalBasicExampleComponent);
    this.modalService.afterAllClosed.subscribe(res => {
      console.log(res);
    });
  }
}
