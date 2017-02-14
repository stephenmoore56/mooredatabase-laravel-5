import {Injectable} from "@angular/core";
import {Result} from "./result";

@Injectable()
export class ReportMapService {

    constructor() {
    }

    public drawLocationsMap(locations: Result[], map_div: string): void {

        // create a new map
        let map = new google.maps.Map(document.getElementById(map_div), {
            zoom: 6,
            center: new google.maps.LatLng(45.856, -93.214), // Minnesota
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        // click on marker takes you to location detail page
        let buildClickHandler = function (i) {
            return function () {
                window.location = '/reports/locations/' + locations[i].id;
                return true;
            };
        };

        // popups that show when hovering over marker
        let infowindow = new google.maps.InfoWindow();
        let showInfoWindow = function (chartData, marker) {
            return function () {
                infowindow.setContent("" + "<p>Location: " + chartData[0] + "<br />" + "County/State: " + chartData[1] + "<br />" + "Lat/Lng: " + chartData[2] + " " + chartData[3] + "</p>");
                infowindow.maxWidth = 200;
                infowindow.open(map, marker);
                return true;
            };
        };

        // copy data for info windows into a separate array
        let chartData = [];
        for (let i = 0; i < locations.length; i++) {
            chartData.push([locations[i].location_name,
                locations[i].county_name + ', ' + locations[i].state_code,
                locations[i].latitude, locations[i].longitude]);
        }

        // put markers on map
        for (let j = 0; j < chartData.length; j++) {
            let marker = new google.maps.Marker({
                position: new google.maps.LatLng(chartData[j][2], chartData[j][3]),
                map: map
            });
            google.maps.event.addListener(marker, 'click', buildClickHandler(j));
            google.maps.event.addListener(marker, 'mouseover', showInfoWindow(chartData[j], marker));
        }

    }

    public drawLocationMap(latitude: number, longitude: number, map_canvas_id: string): void {

        // create a new topo map
        let map = new google.maps.Map(document.getElementById(map_canvas_id), {
            zoom: 13,
            center: new google.maps.LatLng(latitude, longitude),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        });
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            title: latitude + " " + longitude
        });
    }

}
