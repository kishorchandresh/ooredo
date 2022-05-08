import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MonitorCardComponent } from './elements/monitor-card/monitor-card.component';
import { MapComponent } from './elements/map/map.component';
import { ChartCardComponent } from './elements/chart-card/chart-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MonitorCardComponent,
    MapComponent,
    ChartCardComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    HeaderComponent,
    MonitorCardComponent,
    MapComponent,
    ChartCardComponent
  ]
})
export class SharedModule { }
