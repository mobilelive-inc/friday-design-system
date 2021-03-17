import { Directive, InjectionToken, Input } from '@angular/core';

let nextUniqueId = 0;

/**
 * Injection token that can be used to reference instances of `FdsError`. It serves as
 * alternative token to the actual `FdsError` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
export const FDS_ERROR = new InjectionToken<ErrorDirective>('FdsError');

/** Single error message to be shown underneath the form field. */
@Directive({
  selector: 'fds-error',
  host: {
    class: 'alert-danger text--danger d--flex align--items--center p--0',
    role: 'alert',
    '[attr.id]': 'id'
  },
  providers: [{ provide: FDS_ERROR, useExisting: ErrorDirective }]
})
export class ErrorDirective {
  @Input() id: string = `fds-error-${nextUniqueId++}`;
}
