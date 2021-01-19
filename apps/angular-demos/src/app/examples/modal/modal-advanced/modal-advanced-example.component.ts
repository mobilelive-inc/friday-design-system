import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FdsModalRef } from '@fds/angular';

@Component({
  selector: 'demo-modal-example--advanced',
  template: `
    <div class="modalHeader d--flex mb--3">
      <h5 class="h5 m--none">
        {{ title }}
      </h5>
      <button
        tabindex="1"
        type="button"
        class="icnClose icon-close"
        fdsModalClose
      >
        <span class="sr--only">Close window</span>
      </button>
    </div>
    <div class="modalBody">
      <div class="modalDescription">
        {{ body }}
      </div>
      <br />
      <br />
    </div>
    <div class="modalFooter">
      <button
        tabindex="1"
        type="submit"
        class="btn btn--primary"
        (click)="submitForm()"
      >
        Confirm</button
      >&nbsp;
      <button tabindex="1" class="btn btn--secondary--outline" fdsModalClose>
        Cancel
      </button>
    </div>
  `,
  styles: [':host { max-width:846px; display: block;}']
})
export class ModalAdvancedExampleComponent {
  @Input() title = '';
  @Input() body = '';

  constructor(public dialogRef: FdsModalRef<ModalAdvancedExampleComponent>) {}

  submitForm() {
    this.dialogRef.close(true);
  }
}
