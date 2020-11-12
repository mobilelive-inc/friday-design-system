import { Component } from "@angular/core";
import { FdsModal, MAT_DIALOG_DEFAULT_OPTIONS } from "@fds/angular";
import { ModalBasicExampleComponent } from "./modal-basic-example.component";

@Component({
  selector: "demo-modal-basic",
  template: `
	<p>
	  <button class="btn btn__primary__outline" (click)="open()">Open Modal</button>
	</p>
  `,
  styles: [],
})
export class ModalBasicComponent {

  constructor(private modalService: FdsModal) {
  }

  open() {
    this.modalService.open(ModalBasicExampleComponent);
    this.modalService.afterAllClosed.subscribe(res=>{
      console.log(res);
    });
  }

}
