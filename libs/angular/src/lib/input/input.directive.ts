import { Directive, ElementRef, HostBinding, Input, Optional, Self } from "@angular/core";
import { NgControl } from "@angular/forms";
import { FdsFormFieldControl } from "../form-field/form-field-control";

let nextUniqueId = 0;

@Directive({
  selector: "[fdsInput]",
  host: {
    "[class.formControl]": "true",
    "[disabled]": "disabled",
    '[attr.id]': 'id',
    "[required]": "required"
  },
  providers: [{provide: FdsFormFieldControl, useExisting: InputDirective}],
})
export class InputDirective {
  protected _uid = `Fds-input-${nextUniqueId++}`;

  public controlType = '';

  constructor(
    /** @docs-private */
    @Optional() @Self() public ngControl: NgControl,
    private hostElement: ElementRef
  ) {
    // Force setter to be called in case id was not specified.
    this.id = this.id;
    this.controlType = this.hostElement.nativeElement.tagName.toLowerCase();
  }

  protected _disabled = false;

  /**
   * Implemented as part of FdsFormFieldControl.
   * @docs-private
   */
  @Input()
  get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;

    // Browsers may not fire the blur event if the input is disabled too quickly.
    // Reset from here to ensure that the element doesn't become stuck.
    // if (this.focused) {
    //   this.focused = false;
    //   this.stateChanges.next();
    // }
  }

  /**
   * Implemented as part of FdsFormFieldControl.
   * @docs-private
   */
  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) { this._required = value; }
  protected _required = false;

  protected _id: string;

  /**
   * Implemented as part of FdsFormFieldControl.
   * @docs-private
   */
  @Input()
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value || this._uid;
  }
}
