import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public getEvents(): Observable<any> {
    const dateObj = new Date();
    const yearMonth =
      dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    const data: any = [
      {
        title: 'All Day Event',
        start: yearMonth + '-01',
        color: '#17a2b8'
      },
      {
        title: 'Long Event',
        start: yearMonth + '-07',
        end: yearMonth + '-10',
        color: '#dc3545'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: yearMonth + '-09T16:00:00',
        color: '#343a40'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: yearMonth + '-16T16:00:00'
      },
      {
        title: 'Conference',
        start: yearMonth + '-11',
        end: yearMonth + '-13',
        color: '#343a40'
      },
      {
        title: 'Meeting',
        start: yearMonth + '-12T10:30:00',
        end: yearMonth + '-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: yearMonth + '-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: yearMonth + '-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: yearMonth + '-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: yearMonth + '-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: yearMonth + '-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: yearMonth + '-28',
        color: '#007bff'
      }
    ];
    return of(data);
  }
}
