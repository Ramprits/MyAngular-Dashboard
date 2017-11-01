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

  addEmployee(employee: Employee) {
    this.afs.collection('employees').add({
      'firstName': employee.firstName,
      'lastName': employee.lastName,
      'born': employee.born,
      'email': employee.email,
      'mobile': employee.mobile
    }).then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    }).catch(function (error) {
      console.error('Error adding document: ', error);
    });

  }
}
export class Employee {
  constructor(public firstName: '', public lastName: '', public born: '', public email: '', public mobile: '') { }
}
