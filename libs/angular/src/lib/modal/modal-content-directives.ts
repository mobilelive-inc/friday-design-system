import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  ElementRef
} from "@angular/core";
import { FdsModalService } from "./modal.service";
import { _closeDialogVia, FdsModalRef } from "./modal-ref";

/** Counter used to generate unique IDs for dialog elements. */
let dialogElementUid = 0;

/**
 * Button that will close the current dialog.
 */
@Directive({
  selector: "[fdsModalClose]",
  exportAs: "fdsModalClose",
  host: {
    "(click)": "_onButtonClick($event)",
    "[attr.aria-label]": "ariaLabel || null",
    "[attr.type]": "type"
  }
})
export class FdsModalClose implements OnInit, OnChanges {
  /** Screen reader label for the button. */
  @Input("aria-label") ariaLabel: string;

  /** Default to "button" to prevents accidental form submits. */
  @Input() type: "submit" | "button" | "reset" = "button";

  // TODO: @Dmitriy needs to check directive and fix it if it doesn't work
  /** Dialog close input. */
  @Input("fds-modal-close") dialogResult: any;
  @Input("fdsModalClose") _matDialogClose: any;

  constructor(
    // The dialog title directive is always used in combination with a `FdsModalRef`.
    // tslint:disable-next-line: lightweight-tokens
    @Optional() public dialogRef: FdsModalRef<any>,
    private _elementRef: ElementRef<HTMLElement>,
    private _dialog: FdsModalService) {
  }

  ngOnInit() {
    if (!this.dialogRef) {
      // When this directive is included in a dialog via TemplateRef (rather than being
      // in a Component), the DialogRef isn't available via injection because embedded
      // views cannot be given a custom injector. Instead, we look up the DialogRef by
      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
      // be resolved at constructor time.
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];

    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }

  _onButtonClick(event: MouseEvent) {
    // Determinate the focus origin using the click event, because using the FocusMonitor will
    // result in incorrect origins. Most of the time, close buttons will be auto focused in the
    // dialog, and therefore clicking the button won't result in a focus change. This means that
    // the FocusMonitor won't detect any origin change, and will always output `program`.
    _closeDialogVia(this.dialogRef,
      event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
  }
}

/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
@Directive({
  selector: "[fdsModalTitle]",
  exportAs: "fdsModalTitle",
  host: {
    "class": "fds-modal-title",
    "[id]": "id"
  }
})
export class FdsModalTitle implements OnInit {
  @Input() id: string = `fds-modal-title-${dialogElementUid++}`;

  constructor(
    // The dialog title directive is always used in combination with a `FdsModalRef`.
    // tslint:disable-next-line: lightweight-tokens
    @Optional() private _dialogRef: FdsModalRef<any>,
    private _elementRef: ElementRef<HTMLElement>,
    private _dialog: FdsModalService) {
  }

  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;
    }

    if (this._dialogRef) {
      Promise.resolve().then(() => {
        const container = this._dialogRef._containerInstance;

        if (container && !container._ariaLabelledBy) {
          container._ariaLabelledBy = this.id;
        }
      });
    }
  }
}


/**
 * Scrollable content container of a dialog.
 */
@Directive({
  selector: `[fds-modal-content], fds-modal-content, [fdsModalContent]`,
  host: { "class": "fds-modal-content" }
})
export class FdsModalContent {
}


/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
@Directive({
  selector: `[fds-modal-actions], fds-modal-actions, [fdsModalActions]`,
  host: { "class": "fds-modal-actions" }
})
export class FdsModalActions {
}


/**
 * Finds the closest FdsModalRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openModals References to the currently-open dialogs.
 */
function getClosestDialog(element: ElementRef<HTMLElement>, openModals: FdsModalRef<any>[]) {
  let parent: HTMLElement | null = element.nativeElement.parentElement;

  while (parent && !parent.classList.contains("fds-modal-container")) {
    parent = parent.parentElement;
  }

  return parent ? openModals.find(modal => modal.id === parent!.id) : null;
}
