import { Component } from '@angular/core';

@Component({
  selector: 'demo-modal-example--basic',
  template: `
    <div class="modalHeader d--flex mb--3">
      <h5 class="h5 m-none">
        What is cupcake? This is a title.
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
        A standard cupcake uses the same basic ingredients as standard-sized
        cakes: butter, sugar, eggs, and flour. Nearly any recipe that is
        suitable for a layer cake can be used to bake cupcakes. The cake batter
        used for cupcakes may be flavored or have other ingredients stirred in,
        such as raisins, berries, nuts, or chocolate chips.
      </div>
    </div>
  `,
  styles: [':host { max-width:846px; display: block;}']
})
export class ModalBasicExampleComponent {}
