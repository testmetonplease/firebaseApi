import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as firebase from 'firebase';


@Component({
  selector: 'app-hacker',
  templateUrl: './hacker.component.html',
  styleUrls: ['./hacker.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HackerComponent implements OnInit {

  storyDataSource: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  storyDataSource$: Observable<any[]>;

  userDataSource: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  userDataSource$: Observable<any[]>;

  News = [];

  map = new Map();

  constructor(db: AngularFireDatabase, private cd: ChangeDetectorRef) {
       const self = this;
       this.storyDataSource$ = this.storyDataSource.asObservable();
       const ref = firebase.database().ref();
       const refTopNews = ref.child('/v0/newstories');

       refTopNews.limitToFirst(30).on('child_added', (snapshot) => {
        this.map.set(snapshot.val(), ref.child(`/v0/item/${snapshot.val()}`)
          .on('value', (snap) => this.addData(snap.val())
      ));
      });

       refTopNews.limitToFirst(30).on('child_changed', (snapshot) => {
         console.log(snapshot.val());
       });

       this.storyDataSource$.subscribe(items => {
        if (items && items.length > 1) {
         self.News = items;
         self.cd.detectChanges();
        }
       });
   }

  ngOnInit() {
   }

  addData(dataObj) {
    let updatedValue;
    const currentValue = this.storyDataSource.value;
    if (currentValue && currentValue[0]) {
      this.map.delete(currentValue[0].id);
      updatedValue = [...currentValue, dataObj];
      updatedValue.slice(1);
    } else {
      updatedValue = [...currentValue, dataObj];
    }
    this.storyDataSource.next(updatedValue);

   }

}
