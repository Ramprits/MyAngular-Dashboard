import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomerdataService {
  public _baseUrl = 'assets/data/customers.json';
  constructor(private http: Http) { }
  getCustomers() {
    return this.http.get(this._baseUrl)
      .map((response: Response) => response.json());
  }
}
