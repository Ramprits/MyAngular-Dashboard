import { Component, OnInit } from '@angular/core';
import { FruitService } from '../../../services/fruit.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'at-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  fruits: any[];
  loading: boolean = false;
  fruitsCollectionRef: AngularFirestoreCollection<any>;
  fruits$: Observable<any[]>;
  constructor(private http: FruitService, private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.loading = true;
    this.fruitsCollectionRef = this.afs.collection<any>('fruits');
    this.fruits$ = this.fruitsCollectionRef.valueChanges();
    // this.http.getFruits().subscribe(x => { this.fruits = x })
    this.loading = false;
  }

}
