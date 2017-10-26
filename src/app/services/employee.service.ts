import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { IEmployee } from 'app/shared/Interface';

@Injectable()
export class EmployeeService {

  employeeRef: AngularFirestoreCollection<IEmployee>;
  constructor(private http: Http, private afs: AngularFirestore) { }
  getEmployees() {
    this.afs.collection('employees');
    this.employeeRef.valueChanges();
  }
}
