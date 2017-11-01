import { Component, OnInit } from '@angular/core';
import { CustomerdataService } from 'app/components/customer/customer-list/customerdata.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'at-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerdataService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(c => { this.customers = c })
  }

}
