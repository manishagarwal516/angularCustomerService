import { Component, OnInit } from '@angular/core';
declare var google: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	private map: any;

  constructor() { }

  onMapsReady(){
  	console.log("ghghg");
  	var locations = [
      ['Traveller A', -33.890542, 151.274856, 4],
      ['Traveller B', -33.923036, 151.259052, 5],
      ['Traveller C', -34.028249, 151.157507, 3],
      ['Traveller D', -33.80010128657071, 151.28747820854187, 2],
      ['Traveller E', -33.950198, 151.259302, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 7,
      center: new google.maps.LatLng(-33.923036, 151.259052),
      mapTypeControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }

  ngOnInit() {
  	(<any>window).googleMapsReady=this.onMapsReady.bind(this);
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAMevS2XHJBA7Rf8T-Or9KjzG_2QCCwp0w&callback=googleMapsReady";

  }

}
