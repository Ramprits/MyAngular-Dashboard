import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from 'app/shared/Interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'at-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeRef: AngularFirestoreCollection<IEmployee>;
  employees: Observable<IEmployee[]>;
  employeesss: any;
  constructor(private employeeService: EmployeeService, private afs: AngularFirestore) { }
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeRef = this.afs.collection('employees');
    this.employees = this.employeeRef.valueChanges();

    this.employeesss = this.employeeRef.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as IEmployee;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });


  }
  public firstName;
  public lastName;
  public born;
  public email;
  public mobile;

  AddEmployee() {
    this.afs.collection('employees').add({
      'firstName': this.firstName,
      'lastName': this.lastName,
      'born': this.born,
      'email': this.email,
      'mobile': this.mobile
    }).then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    }).catch(function (error) {
      console.error('Error adding document: ', error);
    });


  }
}
interface EmployeeId extends IEmployee {
  id: string;
}
