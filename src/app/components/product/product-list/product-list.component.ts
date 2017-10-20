import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'at-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[];
  constructor(private title: Title, private http: ProductService) { }
  ngOnInit() {
    this.title.setTitle('Product List');
    this.http.getProducts().subscribe(x => { this.products = x })
  }

}
