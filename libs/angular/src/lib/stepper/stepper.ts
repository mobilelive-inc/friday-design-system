import { BooleanInput } from '@angular/cdk/coercion';
import {
  CdkStep,
  CdkStepper,
  StepContentPositionState,
  STEPPER_GLOBAL_OPTIONS,
  StepperOptions
} from '@angular/cdk/stepper';
import { AnimationEvent } from '@angular/animations';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Directive,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  Optional,
  Output,
  QueryList,
  SkipSelf,
  TemplateRef,
  ViewChildren,
  ViewEncapsulation,
  ContentChild
} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup
} from '@angular/forms';
import { FdsErrorStateMatcher } from '../shared/error-options';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { fdsStepperAnimations } from './stepper-animations';
import { Template } from '../shared/template.directive';
import { FdsStepLabel } from './step-label';

@Component({
  selector: 'fds-step',
  templateUrl: 'step.html',
  providers: [
    { provide: FdsErrorStateMatcher, useExisting: FdsStep },
    { provide: CdkStep, useExisting: FdsStep }
  ],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'fdsStep',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FdsStep extends CdkStep implements FdsErrorStateMatcher {
  /** Content for step label given by `<ng-template matStepLabel>`. */
  @ContentChild(FdsStepLabel) stepLabel: FdsStepLabel;

  constructor(
    @Inject(forwardRef(() => FdsStepper)) stepper: FdsStepper,
    @SkipSelf() private _errorStateMatcher: FdsErrorStateMatcher,
    @Optional() @Inject(STEPPER_GLOBAL_OPTIONS) stepperOptions: StepperOptions
  ) {
    super(stepper, stepperOptions);
  }

  /** Custom error state matcher that additionally checks for validity of interacted form. */
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const originalErrorState = this._errorStateMatcher.isErrorState(
      control,
      form
    );

    // Custom error state checks for the validity of form that is not submitted or touched
    // since user can trigger a form change by calling for another step without directly
    // interacting with the current form.
    const customErrorState = !!(control && control.invalid && this.interacted);

    debugger;
    if (originalErrorState || customErrorState) {
      return true;
    }
    return false;
  }
}

@Directive({
  selector: '[fdsStepper]',
  providers: [{ provide: CdkStepper, useExisting: FdsStepper }]
})
export class FdsStepper extends CdkStepper implements AfterContentInit {
  static ngAcceptInputType_editable: BooleanInput;
  static ngAcceptInputType_optional: BooleanInput;
  static ngAcceptInputType_completed: BooleanInput;
  static ngAcceptInputType_hasError: BooleanInput;
  /** Full list of steps inside the stepper, including inside nested steppers. */
  @ContentChildren(FdsStep, { descendants: true }) _steps: QueryList<FdsStep>;
  /** Steps that belong to the current stepper, excluding ones from nested steppers. */
  readonly steps: QueryList<FdsStep> = new QueryList<FdsStep>();
  /** Event emitted when the current step is done transitioning in. */
  @Output() readonly animationDone: EventEmitter<void> = new EventEmitter<
    void
  >();
  /** Stream of animation `done` events when the body expands/collapses. */
  _animationDone = new Subject<AnimationEvent>();

  ngAfterContentInit() {
    super.ngAfterContentInit();

    // Mark the component for change detection whenever the content children query changes
    this.steps.changes.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._stateChanged();
    });

    this._animationDone
      .pipe(
        // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
        // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
        // See https://github.com/angular/angular/issues/24084
        distinctUntilChanged(
          (x, y) => x.fromState === y.fromState && x.toState === y.toState
        ),
        takeUntil(this._destroyed)
      )
      .subscribe(event => {
        if ((event.toState as StepContentPositionState) === 'current') {
          this.animationDone.emit();
        }
      });
  }
}

@Component({
  selector: 'fds-horizontal-stepper',
  exportAs: 'FdsHorizontalStepper',
  templateUrl: 'stepper-horizontal.html',
  inputs: ['selectedIndex'],
  styleUrls: ['./stepper.scss'],
  host: {
    /* class: 'fds-stepper-horizontal', */
    id: 'fds--slider--stepper',
    class: 'fds-advanced-stepper fds--slider--stepper',
    role: 'progressbar',
    ariaValuenow: '0',
    ariaValuemin: '0',
    ariaValuemax: '100'
  },
  animations: [fdsStepperAnimations.horizontalStepTransition],
  providers: [
    { provide: FdsStepper, useExisting: FdsHorizontalStepper },
    { provide: CdkStepper, useExisting: FdsHorizontalStepper }
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FdsHorizontalStepper extends FdsStepper
  implements AfterContentInit {
  /** Whether the label should display in bottom or end position. */
  @Input()
  labelPosition: 'bottom' | 'end' = 'end';

  @ContentChildren(Template) templates: QueryList<any>;

  public headerTemplate: TemplateRef<any>;

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;
      }
    });
    super.ngAfterContentInit();
  }

  static ngAcceptInputType_editable: BooleanInput;
  static ngAcceptInputType_optional: BooleanInput;
  static ngAcceptInputType_completed: BooleanInput;
  static ngAcceptInputType_hasError: BooleanInput;
}
