import { FormGroup } from '@angular/forms';

/**
 * Marks all controls in a form group as touched
 * @param formGroup - The form group to touch
 */
export function markFormGroupTouched(formGroup: FormGroup) {
  Object.values(formGroup.controls).forEach((control: FormGroup) => {
    control.markAsTouched();

    if (control.controls) {
      markFormGroupTouched(control);
    }
  });
}
