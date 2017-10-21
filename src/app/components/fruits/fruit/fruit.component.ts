import { Component, OnInit } from '@angular/core';
import { FruitService } from '../../../services/fruit.service';

@Component({
  selector: 'at-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  fruits: any[];

  constructor(private http: FruitService) { }

  ngOnInit() {
    this.http.getFruits().subscribe(x => { this.fruits = x })
  }

}
