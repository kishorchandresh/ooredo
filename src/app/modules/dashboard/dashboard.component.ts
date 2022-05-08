import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activeLink='Dashboard';
  lat= 20.0063; // domo latitude
  long=77.006;   // domo longitude

  constructor() { }
  monitorCardData=[
    {icon:"fa fa-pencil-square-o",  name:"Registration",  data:"124"},
    {icon:"fa fa-pencil-square-o",  name:"Online",        data:"92"},
    {icon:"fa fa-car",              name:"Moving",        data:"92"},
    {icon:"fa fa-pencil-square-o",  name:"Idle",          data:"92"},
    {icon:"fa fa-pencil-square-o",  name:"Offline",       data:"92"},
  ]

  ngOnInit(): void {
    
  }

  changeActiveLink(link:string){
    this.activeLink=link;
  }
}
