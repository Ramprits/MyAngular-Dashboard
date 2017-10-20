import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'at-custoler-list',
  templateUrl: './custoler-list.component.html',
  styleUrls: ['./custoler-list.component.css']
})
export class CustolerListComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Customer List');
  }

}
