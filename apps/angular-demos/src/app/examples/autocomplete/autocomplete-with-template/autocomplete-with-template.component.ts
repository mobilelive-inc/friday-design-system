import { Component } from '@angular/core';
import { CountryService } from './country.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'demo-autocomplete-with-template',
  template: `
    <form class="form" role="form" [formGroup]="form">
      <fds-form-field>
        <fds-label>With template</fds-label>
        <fds-autocomplete
          formControlName="country"
          [suggestions]="filteredCountries"
          (completeMethod)="filterCountry($event)"
          field="name"
          [required]="true"
          (onHide)="checkSelectedCountry()"
          [minLength]="1"
        >
          <ng-template let-lookupAddress fdsTemplate="item">
            <div class="option-holder">
              <span class="font--weight--bold">{{ lookupAddress?.name }}</span
              >&nbsp;
              <i>{{ lookupAddress?.code }}</i>
            </div>
          </ng-template>
        </fds-autocomplete>
        <fds-error *ngIf="form.get('country')?.hasError('required')"
          >Country is required</fds-error
        >
      </fds-form-field>
      <pre>Value: {{ form.get('country')?.value | json }}</pre>
    </form>
  `,
  styles: []
})
export class AutocompleteWithTemplateComponent {
  form = this.fb.group({
    country: new FormControl('', Validators.required)
  });

  countries: any[];

  filteredCountries: any[];

  constructor(
    private countryService: CountryService,
    private fb: FormBuilder
  ) {}

  /* Each time when the autocomplete`s panel with suggestions is closed
   clear value if it is not selected.  */
  checkSelectedCountry() {
    const { code } = this.form.get('country').value;
    // Check that code is selected
    if (!code) {
      // Reset autocomplete text
      this.form.get('country').setValue('');
    }
  }

  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
  }

  filterCountry(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
}
