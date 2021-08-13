import { Component, OnInit } from '@angular/core';
import { LifeEvent } from '../LifeEvent';
import { TimelineService } from './timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timeLine: LifeEvent[] = [];

  constructor(private timeLineService: TimelineService) { }

  ngOnInit(): void {
    this.getTimeLine();
  }

  getTimeLine(): void {
    this.timeLineService.getTimeLine()
      .subscribe(timeLine => this.timeLine = timeLine);
  }
}
