import { Component, OnInit } from '@angular/core';

import { ShortLessons }        from './shortlessons';
import { ShortLessonsService } from './shortlessons.service';

@Component({
  selector: 'my-shortlessons',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class ShortLessonsComponent implements OnInit {
  shortLessons: ShortLessons[] = [];

  constructor(private slService: ShortLessonsService) { }

  ngOnInit(): void {
    this.slService.getShortLessons() {
      .then(shortLessons => this.shortLessons = shortLessons.slice(1, 5));
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/