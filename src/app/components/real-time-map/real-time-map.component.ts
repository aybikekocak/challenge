import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import Popup from '@arcgis/core/widgets/Popup';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';

@Component({
  selector: 'app-real-time-map',
  templateUrl: './real-time-map.component.html',
  styleUrls: ['./real-time-map.component.css']
})
export class RealTimeMapComponent implements OnInit {

  selectedFeature: any;

  constructor() { }

  ngOnInit(): void {
    const map = new Map({
      basemap: 'streets-navigation-vector'
    });

    const view = new MapView({
      container: 'viewDiv',
      map: map,
      center: [-40, 28],
      zoom: 2
    });

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    view.when(() => {
      view.on('click', (event) => {
        const point = view.toMap(event);
        const markerSymbol = new SimpleMarkerSymbol({
          color: [226, 119, 40],
          outline: {
            color: [255, 255, 255],
            width: 2
          }
        });
        const graphic = new Graphic({
          geometry: point,
          symbol: markerSymbol
        });
        graphicsLayer.add(graphic);

        const popupTemplate = {
          title: 'Custom Popup',
          content: '<p>This is a custom popup</p>'
        };

        const popup = new Popup({
          content: `<p>Latitude: ${point.latitude.toFixed(2)}</p><p>Longitude: ${point.longitude.toFixed(2)}</p>`
        });

        view.popup.open({
          features: [graphic],
          location: point,
          updateLocationEnabled: true
        });

        this.selectedFeature = graphic.attributes;
      });
    });
  }
}
