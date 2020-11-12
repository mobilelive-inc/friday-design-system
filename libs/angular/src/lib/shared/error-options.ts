import {Injectable} from '@angular/core';
import {FormGroupDirective, NgForm, FormControl} from '@angular/forms';

/** Error state matcher that matches when a control is invalid and dirty. */
@Injectable()
export class FdsShowOnDirtyErrorStateMatcher implements FdsErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || (form && form.submitted)));
  }
}

/** Provider that defines how form controls behave with regards to displaying error messages. */
@Injectable({providedIn: 'root'})
export class FdsErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.touched || (form && form.submitted)));
  }
}
