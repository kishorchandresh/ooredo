import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../_services/request.service';
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  constructor(private requestService:RequestService, ) { }
  
  env =environment;
  grapthDataUrl:any = this.env.GRAPH_DATA_URL;
  activeLink='Overall';

  graphData :any  = {};

  ngOnInit(): void {
    this.getData();
  }

  // get the data from api
  getData(){
    this.requestService.getGraphData().then((response:any)=>{ 
      this.graphData.distance  =    response.graphdata.distance;
      this.graphData.alarms    =    response.graphdata.alarms;
      this.graphData.fuels     =    response.graphdata.fuels;
      this.graphData.trips     =    response.graphdata.trips;
    })
  }

  changeActiveLink(link:string){
    this.activeLink=link;
  }
}
