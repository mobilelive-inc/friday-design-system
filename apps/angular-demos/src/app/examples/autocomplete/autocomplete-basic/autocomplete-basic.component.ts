import { Component } from '@angular/core';
import { CountryService } from './country.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'demo-autocomplete-basic',
  template: `
    <form class="form" role="form" [formGroup]="form">
      <fds-form-field>
        <fds-label>Country</fds-label>
        <fds-autocomplete
          formControlName="country"
          [suggestions]="filteredCountries"
          (completeMethod)="filterCountry($event)"
          field="name"
          [minLength]="1"
        >
        </fds-autocomplete>
      </fds-form-field>
      <pre>Value: {{ form.get('country')?.value | json }}</pre>
    </form>
  `,
  styles: []
})
export class AutocompleteBasicComponent {
  form = this.fb.group({
    country: new FormControl('')
  });

  countries: any[];

  filteredCountries: any[];

  constructor(
    private countryService: CountryService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
  }

  filterCountry(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let { query } = event;
    this.countries.forEach(
      item =>
        item.name.toLowerCase().indexOf(query.toLowerCase()) == 0 &&
        filtered.push(item)
    );
    this.filteredCountries = filtered;
  }
}
