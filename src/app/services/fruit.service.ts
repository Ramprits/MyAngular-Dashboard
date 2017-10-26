import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FruitService {
  _baseUrl = 'https://localhost:44366/api/Fruits';
  constructor(private http: Http) { }
  getFruits() {
    return this.http.get(this._baseUrl)
      .map((response: Response) => response.json());
  }
}
