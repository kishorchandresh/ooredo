import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.css']
})
export class ChartCardComponent implements OnInit, AfterViewInit {
  @Input() graphData: any;
  @Input() graphType: any;
  constructor() { }

  ngOnInit() { }
  ngAfterViewInit() {
    if (this.graphType == 'alarms') { this.alarmsChart(); }
    if (this.graphType == 'distance') { this.distanceChart(); }
    if (this.graphType == 'fuels') { this.fuelsChart(); }
    if (this.graphType == 'trips') { this.tripsChart(); }
  }

  // createDistance chart
  distanceChart(): void {
    let lineDatas: any = [];
    let dataLabels: any = [];
    this.graphData.filter((value: any, index: any, arr: any) => {
      lineDatas.push(value.data);
      dataLabels.push(value.date);
      return;
    })
    const myChart = new Chart("distance", {
      type: 'line',
      data: {
        labels: dataLabels,
        datasets: [{
          label: this.graphType,
          data: lineDatas,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            title:{
              display: true,
              text: 'KM'
            },
            beginAtZero: true,
            
          },
          x: {
            title:{
              display: true,
              text: 'Month: Aug'
            },
            
          },
          
        }
      }
    });
  }
  // create alarms
  alarmsChart(): void {

    let majorData:any =[];
    let criticalData:any =[];
    let minerData:any =[];
    let dataLabels: any = [];
    this.graphData.filter((value: any, index: any, arr: any) => {
      majorData.push(value.data[0]);
      criticalData.push(value.data[1]);
      minerData.push(value.data[2]);
      dataLabels.push(value.date);
      return;
    })
    const myChart = new Chart("alarms", {
      type: 'bar',
      data: {
        labels: dataLabels,
        datasets: [
          {
          label: 'Critical',
          data: criticalData,
          backgroundColor: [
            
            'rgba(255, 240, 0, 1)',
            // yellow
          ],
          borderColor: [
            'rgba(255, 240, 0, 1)',
            
          ],
          borderWidth: 1,
          order: 1,
          categoryPercentage:0.7,
          },
        {
          label: 'Major',
          data: majorData,
          backgroundColor: [
            
            'rgba(255, 0, 0, 1)',
            // dark red
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            
            // red
          ],
          borderWidth: 1,
          categoryPercentage:0.35,
          order: 0
        },
        {
          label: 'Miner',
          data: minerData,
          backgroundColor: [
            
            'rgba(50,205,50, 1)',
            // limegreen
          ],
          borderColor: [
            'rgba(50,205,50, 1)',
            
          ],
          borderWidth: 1,
          categoryPercentage:1,
          order: 2
        }
      ]
      },
      options: {
        scales: {
          x:{
            stacked:true,
            title:{
              display: true,
              text: 'Month: Aug'
            },
            
          },
          y: {
            beginAtZero: true,
            title:{
              display: true,
              text: 'Alarms'
            },
            
          }
        }
      }
    });
  }
  
  // Chart of fuels
  fuelsChart(): void {
    let lineDatas: any = [];
    let dataLabels: any = [];
    this.graphData.filter((value: any, index: any, arr: any) => {
      lineDatas.push(value.data);
      dataLabels.push(value.date);
      return;
    })
    // create chart
    const myChart = new Chart("fuels", {
      type: 'line',
      data: {
        labels: dataLabels,
        datasets: [{
          label: this.graphType,
          data: lineDatas,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          fill: {
            target: 'origin',
            above: 'rgb(0,250,154)',   // Area will be red above the origin
            below: 'rgb(0, 0, 255)'    // And blue below the origin
          }
        }]
      },
      options: {
        scales: {
          x:{
            title:{
              display: true,
              text: 'Month: Aug'
            },
          },
          y: {
            beginAtZero: true,
            title:{
              display: true,
              text: 'Fuels'
            },
          }
        }
      }
    });
  }

  // Chart of trips
  tripsChart(): void {
    let majorData:any =[];
    let criticalData:any =[];
    let minerData:any =[];
    let dataLabels: any = [];

    this.graphData.filter((value: any, index: any, arr: any) => {
      majorData.push(value.data[0]);
      criticalData.push(value.data[1]);
      minerData.push(value.data[2]);
      dataLabels.push(value.date);
      return;
    })

    // create Chart
    const myChart = new Chart("trips", {
      type: 'bar',
      data: {
        labels: dataLabels,
        datasets: [
          {
          label: 'Critical',
          data: criticalData,
          backgroundColor: [
            
            'rgba(255, 240, 0, 1)',
            // yellow
          ],
          borderColor: [
            'rgba(255, 240, 0, 1)',
            
          ],
          borderWidth: 1,
          order: 1,
          categoryPercentage:0.7,
          },
        {
          label: 'Major',
          data: majorData,
          backgroundColor: [
            
            'rgba(255, 0, 0, 1)',
            // dark red
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            
            // red
          ],
          borderWidth: 1,
          categoryPercentage:0.35,
          order: 0
        },
        {
          label: 'Miner',
          data: minerData,
          backgroundColor: [
            
            'rgba(50,205,50, 1)',
            // limegreen
          ],
          borderColor: [
            'rgba(50,205,50, 1)',
            
          ],
          borderWidth: 1,
          categoryPercentage:1,
          order: 2
        }
      ]
      },
      options: {
        scales: {
          x:{
            stacked:true,
            title:{
              display: true,
              text: 'Month: Aug'
            },
          },
          y: {
            beginAtZero: true,
            title:{
              display: true,
              text: 'Trips'
            },
          }
        }
      }
    });
  }
 
  

}
