import { Component, OnInit } from '@angular/core';
import { FruitService } from '../../../services/fruit.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { Message } from 'primeng/primeng';
import { Title } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'at-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  fruits: any[];
  msgs: Message[] = [];
  loading = false;
  fruitsCollectionRef: AngularFirestoreCollection<any>;
  fruits$: Observable<any[]>;
  constructor(private title: Title, private http: FruitService, private afs: AngularFirestore) {
this.title.setTitle('Fruits List');
  }

  ngOnInit() {
    this.fruitsCollectionRef = this.afs.collection<any>('fruits');
    this.fruits$ = this.fruitsCollectionRef.valueChanges();
  }

}
