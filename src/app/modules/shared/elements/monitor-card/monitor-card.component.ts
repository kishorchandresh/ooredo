import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-card',
  templateUrl: './monitor-card.component.html',
  styleUrls: ['./monitor-card.component.css']
})
export class MonitorCardComponent implements OnInit {
  @Input() cardData:any;
  @Input() cardIcon:any;
  constructor() { }

  ngOnInit(): void {
  }

}
