import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges} from '@angular/core';
declare let google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() customers: any[] = [];
  @ViewChild('mapContainer') mapDiv : ElementRef;

  constructor() { }

  private renderMap(){
    const options = {
      mapTypeControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let map = new google.maps.Map(this.mapDiv.nativeElement, options);
    let infowindow = new google.maps.InfoWindow();
    let geocoder = new google.maps.Geocoder();
    let marker;
    let bounds = new google.maps.LatLngBounds();

    this.customers.forEach(function(customer, key) {
      let address = customer.address + ","+ customer.city;
      geocoder.geocode({'address': address}, function(results, status) {
        let name = customer.first_name + " " + customer.last_name;
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);
          marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
          bounds.extend(results[0].geometry.location);
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(name);
              infowindow.open(map, marker);
            }
          })(marker, key));
             map.fitBounds(bounds);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    });
  }

  ensureScript(){
    const document = this.mapDiv.nativeElement.ownerDocument;
    const script = <HTMLScriptElement>document.querySelector('script[id="googlemaps"]');
    if (script) {
      this.renderMap();
    } else {
      const script = document.createElement('script');
      script.id = 'googlemaps';
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMevS2XHJBA7Rf8T-Or9KjzG_2QCCwp0w';
      script.onload = () => {
        this.renderMap();
      };      
      document.body.appendChild(script);
     }
  }
  ngOnInit() {
    setTimeout(() => {
        this.ensureScript();
      }, 200);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if(propName === "customers"){
        this.ensureScript();
      }
    }
  }  

}
