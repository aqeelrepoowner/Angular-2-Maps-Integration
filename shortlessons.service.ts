import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ShortLessons } from './shortlessons';

@Injectable()
export class ShortLessonsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private shortlessonsUrl = 'api/shortlessons';  // URL to web api

  constructor(private http: Http) { }

  getShortLessons(): Promise<ShortLessons[]> {
    return this.http.get(this.shortlessonsUrl)
               .toPromise()
               .then(response => response.json().data as shortlessons[])
               .catch(this.handleError);
  }

  getShortLessons(id: number): Promise<ShortLessons> {
    const url = `${this.shortlessonsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as ShortLessons)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.shortlessonsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<ShortLessons> {
    return this.http
      .post(this.shortlessonsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(shortlessons: ShortLessons): Promise<ShortLessons> {
    const url = `${this.shortlessonsUrl}/${shortlessons.id}`;
    return this.http
      .put(url, JSON.stringify(shortlessons), {headers: this.headers})
      .toPromise()
      .then(() => shortlessons)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}



/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/