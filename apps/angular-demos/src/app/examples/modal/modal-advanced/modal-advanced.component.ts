import { Component } from '@angular/core';
import { FdsModalService, MAT_DIALOG_DEFAULT_OPTIONS } from '@fds/angular';
import { ModalAdvancedExampleComponent } from './modal-advanced-example.component';

@Component({
  selector: 'demo-modal-advanced',
  template: `
    <button class="btn btn--primary--outline" (click)="open()">
      Open Advanced Modal
    </button>
  `,
  styles: []
})
export class ModalAdvancedComponent {
  constructor(private modalService: FdsModalService) {}

  open() {
    const modalRef = this.modalService.open(ModalAdvancedExampleComponent);
    modalRef.componentInstance.title = 'Confirmation dialog';
    modalRef.componentInstance.body = 'Are you sure to delete an item?';

    this.modalService.afterAllClosed.subscribe(res => {
      console.log(res);
    });
  }
}
