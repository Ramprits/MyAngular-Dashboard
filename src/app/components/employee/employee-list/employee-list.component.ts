import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from 'app/shared/Interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'at-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  newEmployee: boolean;
  loading: boolean;
  public firstName: '';
  public lastName: '';
  public born: '';
  public email: '';
  public mobile: '';
  myForm: FormGroup;
  newEmployeButtonName = false;
  employeeRef: AngularFirestoreCollection<IEmployee>;
  employees: any;
  constructor(private title: Title,
    private employeeService: EmployeeService,
    private afs: AngularFirestore,
    public fb: FormBuilder, private router: Router
  ) {
    this.title.setTitle('Employee List');
  }
  ngOnInit() {
    this.getEmployees();
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      born: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  Add() {
    this.newEmployee = !this.newEmployee;
    this.newEmployeButtonName = !this.newEmployeButtonName;
  }
  getEmployees() {
    this.employeeRef = this.afs.collection('employees');
    this.loading = true;
    this.employees = this.employeeRef.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as IEmployee;
          const id = a.payload.doc.id;
          return { id, data };

        }, (error) => { console.error('There are some : ', { error }) });
      });
    this.loading = false;
  }
  cancel(): void {
    this.myForm.reset();
    this.router.navigate(['/dashboard']);
  }
  onSubmit(newEmployee) {
    console.log(newEmployee);
    this.employeeService.addEmployee(newEmployee)
    this.newEmployee = !this.newEmployee;
  }
}
interface EmployeeId extends IEmployee {
  id: string;
};
