import { Component, Input, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() latitude:any;
  @Input() longitude :any;
  constructor() { }
  env = environment
  ngOnInit(): void {
    let loader = new Loader({
      apiKey: this.env.MAP_API_KEY
    })
    loader.load().then(()=>{
      new google.maps.Map(document.getElementById("map")!,{
        center:{
          lat:20.0063,lng:77.006
        },
        zoom:14
      })
    })
  }

}
