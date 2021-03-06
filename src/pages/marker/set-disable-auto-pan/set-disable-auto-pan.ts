import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-set-disable-auto-pan',
  templateUrl: 'set-disable-auto-pan.html',
})
export class SetDisableAutoPanPage {
  map: GoogleMap;
  marker: Marker;
  isDisabled = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = this.googleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.map.addMarker({
        position: {
          lat: 0,
          lng: 0
        },
        'animation': GoogleMapsAnimation.BOUNCE,
        'title': 'The map does not move when you click on this marker.'
      }).then((marker: Marker) => {
        this.marker = marker;
        this.toggleDisable();
      });
    });
  }

  toggleDisable() {
    this.marker.setDisableAutoPan(this.isDisabled);
  }
}
