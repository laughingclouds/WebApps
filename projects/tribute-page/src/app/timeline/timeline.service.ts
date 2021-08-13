import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LifeEvent } from '../LifeEvent';
import { DATA } from '../data';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  // This will return the whole timeline

  timeLine: LifeEvent[] = DATA;
  constructor() { }

  getTimeLine(): Observable<LifeEvent[]> {
    return of(this.timeLine);
  }
}
