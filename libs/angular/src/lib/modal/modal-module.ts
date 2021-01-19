import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';

import {
  MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
  FdsModalService
} from './modal.service';
import { FdsModalContainer } from './modal-container';
import {
  FdsModalActions,
  FdsModalClose,
  FdsModalContent,
  FdsModalTitle
} from './modal-content-directives';

@NgModule({
  imports: [OverlayModule, PortalModule],
  exports: [
    FdsModalContainer,
    FdsModalClose,
    FdsModalTitle,
    FdsModalContent,
    FdsModalActions,
    OverlayModule,
    PortalModule
  ],
  declarations: [
    FdsModalContainer,
    FdsModalClose,
    FdsModalTitle,
    FdsModalActions,
    FdsModalContent
  ],
  providers: [FdsModalService, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
  entryComponents: [FdsModalContainer]
})
export class FdsModalModule {}
