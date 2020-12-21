import { Component, ContentChild, ContentChildren, Input, OnInit, QueryList } from "@angular/core";
import { FdsFormFieldControl } from "./form-field-control";
import { ErrorDirective } from "./error";

@Component({
  selector: "fds-form-field",
  templateUrl: "./form-field.component.html"
})
export class FormFieldComponent implements OnInit {

  @ContentChild(FdsFormFieldControl) _controlNonStatic: FdsFormFieldControl<any>;
  @ContentChild(FdsFormFieldControl, { static: true }) _controlStatic: FdsFormFieldControl<any>;
  @ContentChildren(ErrorDirective) errors: QueryList<Error>;
  @Input() label = "";
  @Input() hideRequiredMarker = false;
  @Input() iconLeft = "";
  @Input() iconRight = "";
  @Input() clearBtn = false;

  constructor() {
  }

  get _control() {
    return this._controlNonStatic || this._controlStatic;
  }

  get controlType() {
    return this._control ? this._control.controlType : "";
  }

  getClasses() {
    switch (this.controlType) {
      case "fds-input-number":
        return {};
      case "fds-autocomplete":
        // Show additional classes related to the autocomplete
        return this._control.getClasses();
    }
    return {};
  }

  isInvalid() {
    return this._control.ngControl && this._control.ngControl.control.touched
      && (this.errors.length || !!this._control.ngControl.control.errors);
  }

  isValid() {
    return this._control.ngControl && this._control.ngControl.control.touched && !this.isInvalid();
  }

  ngOnInit(): void {
  }

  clearCtrl() {
    this._control.ngControl.control.setValue("");
  }

  isClearBtnShown() {
    return this.controlType === "select" && this.clearBtn && this._control.ngControl.value != "";
  }
}
