import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getCommonData(): Observable<any> {
    return this.http.get<any>('http://app.boostwords.com/boostwords-2/get-commonData');
  }
}

