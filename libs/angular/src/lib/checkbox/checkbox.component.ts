import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl
} from '@angular/forms';

export const CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'fds-checkbox',
  template: `
    <div
      [ngStyle]="style"
      [ngClass]="{
        formCheck: true,
        'fds-checkbox-checked': checked,
        'fds-checkbox-disabled': disabled,
        'fds-checkbox-focused': focused
      }"
      [class]="styleClass"
    >
      <div class="checkBox checkBox--curved">
        <input
          #cb
          type="checkbox"
          class="checkBox"
          [attr.id]="inputId"
          [attr.name]="name"
          [readonly]="readonly"
          [value]="value"
          [checked]="checked"
          (focus)="onFocus()"
          (blur)="onBlur()"
          (change)="handleChange($event)"
          [disabled]="disabled"
          [attr.tabindex]="tabindex"
          [attr.aria-labelledby]="ariaLabelledBy"
          [attr.required]="required"
        />
        <span class="checkboxFake"></span>
      </div>
      <!-- TODO this div is not rendered and not read by screen reader -->
      <!-- <div
        class="fds-checkbox-box"
        (click)="onClick($event, cb, true)"
        [ngClass]="{
          'fds-highlight': checked,
          'fds-disabled': disabled,
          'fds-focus': focused
        }"
        role="checkbox"
        [attr.aria-checked]="checked"
      >
        <span
          class="fds-checkbox-icon"
          [ngClass]="checked ? checkboxIcon : null"
        ></span>
      </div> -->
      <label
        (click)="onClick($event, cb, true)"
        [class]="labelStyleClass"
        [ngClass]="{
          'fds-checkbox-label checkLabel': true,
          'fds-checkbox-label-active': checked,
          'fds-disabled': disabled,
          'fds-checkbox-label-focus': focused
        }"
        *ngIf="label"
        [attr.for]="inputId"
        >{{ label }}</label
      >
    </div>
  `,
  providers: [CHECKBOX_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() value: any;

  @Input() name: string;

  @Input() disabled: boolean;

  @Input() binary: boolean;

  @Input() label: string;

  @Input() ariaLabelledBy: string;

  @Input() tabindex: number;

  @Input() inputId: string;

  @Input() style: any;

  @Input() styleClass: string;

  @Input() labelStyleClass: string;

  @Input() formControl: FormControl;

  @Input() checkboxIcon: string = '';

  @Input() readonly: boolean;

  @Input() required: boolean;

  @ViewChild('cb') inputViewChild: ElementRef;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  model: any;

  onModelChange: Function = () => {};

  onModelTouched: Function = () => {};

  focused: boolean = false;

  checked: boolean = false;

  constructor(private cd: ChangeDetectorRef) {}

  onClick(event, checkbox, focus: boolean) {
    event.preventDefault();

    if (this.disabled || this.readonly) {
      return;
    }

    this.checked = !this.checked;
    this.updateModel(event);

    if (focus) {
      checkbox.focus();
    }
  }

  updateModel(event) {
    if (!this.binary) {
      if (this.checked) this.addValue();
      else this.removeValue();

      this.onModelChange(this.model);

      if (this.formControl) {
        this.formControl.setValue(this.model);
      }
    } else {
      this.onModelChange(this.checked);
    }

    this.onChange.emit({ checked: this.checked, originalEvent: event });
  }

  handleChange(event) {
    if (!this.readonly) {
      this.checked = event.target.checked;
      this.updateModel(event);
    }
  }

  isChecked(): boolean {
    if (this.binary) return this.model;
    else return this.model && this.model.indexOf(this.value) > -1;
  }

  removeValue() {
    this.model = this.model.filter(val => val !== this.value);
  }

  addValue() {
    if (this.model) this.model = [...this.model, this.value];
    else this.model = [this.value];
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }

  focus() {
    this.inputViewChild.nativeElement.focus();
  }

  writeValue(model: any): void {
    this.model = model;
    this.checked = this.isChecked();
    this.cd.markForCheck();
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

  setDisabledState(val: boolean): void {
    this.disabled = val;
    this.cd.markForCheck();
  }
}
