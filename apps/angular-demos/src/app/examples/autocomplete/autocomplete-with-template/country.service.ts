import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get('/assets/countries.json')
      .toPromise()
      .then((res:any) => {
        // <any[]> res.body.data
        console.log(res);
        return res.data;
      })
      .then(data => { return data; });
  }
}
