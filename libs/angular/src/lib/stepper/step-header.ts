import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
  ElementRef,
  ChangeDetectorRef,
  HostBinding
} from '@angular/core';
import { FdsStepLabel } from './step-label';
import { StepState, CdkStepHeader } from '@angular/cdk/stepper';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';

@Component({
  selector: 'fds-step-header',
  templateUrl: 'step-header.html',
  styleUrls: ['./step-header.scss'],
  host: {
    class: 'fds-step-header fds-focus-indicator',
    role: 'tab'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FdsStepHeader extends CdkStepHeader {
  /** Label of the given step. */
  @Input() label: FdsStepLabel | string;

  @Input() editable = false;

  /** State of the given step. */
  @Input() state: StepState;

  /** Index of the given step. */
  @Input() index: number;

  /** Whether the given step is selected. */
  @Input() selected: boolean;

  @HostBinding('attr.aria-label')
  public get stepAriaLabel(): string {
    return `Step ${this.index + 1} ${this._stringLabel()} ${
      this._getDefaultTextForState(this.state) === 'create' ? 'Done' : ''
    }`;
  }

  @HostBinding('attr.tabindex')
  public get isSelected(): string | number {
    return this.selected ? 0 : '';
  }

  /** Whether the given step label is active. */
  @Input() active: boolean;

  /** Overrides for the header icons, passed in via the stepper. */
  @Input() iconOverrides: { [key: string]: TemplateRef<any> };

  constructor(
    private _focusMonitor: FocusMonitor,
    _elementRef: ElementRef<HTMLElement>,
    changeDetectorRef: ChangeDetectorRef
  ) {
    super(_elementRef);
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  /** Focuses the step header. */
  focus(origin?: FocusOrigin, options?: FocusOptions) {
    if (origin) {
      this._focusMonitor.focusVia(this._elementRef, origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }

  /** Returns the host HTML element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }

  /** Returns string label of given step if it is a text label. */
  _stringLabel(): string | null {
    return this.label instanceof FdsStepLabel ? null : this.label;
  }

  /** Returns MatStepLabel if the label of given step is a template label. */
  _templateLabel(): FdsStepLabel | null {
    return this.label instanceof FdsStepLabel ? this.label : null;
  }

  _getDefaultTextForState(state: StepState): string {
    if (state == 'number') {
      return `${this.index + 1}`;
    }
    if (state == 'edit') {
      return 'create';
    }
    // if (state == 'done') {
    //   return 'done';
    // }
    if (state == 'error') {
      return 'warning';
    }
    return state;
  }
}
