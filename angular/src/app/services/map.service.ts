import {Injectable} from "@angular/core";
import {Result} from "../lib/result";
import {Router} from "@angular/router";

// declare google to suppress name errors
declare let google: any;

// constants for home coordinates
const LATITUDE_HOME: number = 45.009613;
const LONGITUDE_HOME: number = -93.246839;


@Injectable()
export class MapService {

    constructor(private _router: Router) {
    }

    public drawLocationsMap(locations: Result[], map_div: string): void {

        // create a new map
        let map = new google.maps.Map(document.getElementById(map_div), {
            zoom: 6,
            center: new google.maps.LatLng(45.856, -93.214), // Minnesota
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        // click on marker takes you to location detail page
        let buildClickHandler = (i: number) => {
            return () => {
                return this._router.navigateByUrl(`/reports/locations/${locations[i].id}`);
            };
        };

        // popups that show when hovering over marker
        let infowindow = new google.maps.InfoWindow();
        let showInfoWindow = (chartData: any[], marker: any) => {
            return () => {
                infowindow.setContent("" + "<p><strong>" + chartData[0] + "</strong><br />" +
                    chartData[1] + "<br />" +
                    chartData[2] + " " + chartData[3] + "<br />" +
                    chartData[4] + " miles</p>");
                infowindow.maxWidth = 200;
                infowindow.open(map, marker);
                return true;
            };
        };

        // copy data for info windows into a separate array
        let chartData = [];
        let i: any;
        for (i in locations) {
            chartData.push(
                [locations[i].location_name,
                    locations[i].county_name + ' County, ' + locations[i].state_code,
                    locations[i].latitude,
                    locations[i].longitude,
                    locations[i].distance]);
        }

        // put gold star on map to indicate home
        let icon = {
            url: 'images/star_gold.png',
            scaledSize: new google.maps.Size(20, 20)
        };
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(LATITUDE_HOME, LONGITUDE_HOME),
            map: map,
            icon: icon
        });
        let homeData = [];
        homeData.push('Home', 'Hennepin County, MN', LATITUDE_HOME, LONGITUDE_HOME, 0);
        google.maps.event.addListener(marker, 'mouseover', showInfoWindow(homeData, marker));

        // put location markers on map
        let j: any;
        icon = {
            url: 'images/circle_blue.png',
            scaledSize: new google.maps.Size(15, 15)
        };
        for (j in chartData) {
            let marker = new google.maps.Marker({
                position: new google.maps.LatLng(chartData[j][2], chartData[j][3]),
                map: map,
                icon: icon
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

        // popup that shows when hovering over marker
        let infowindow = new google.maps.InfoWindow();
        let showInfoWindow = (chartData: number[], marker: any) => {
            return () => {
                infowindow.setContent("Lat/Lng: " + chartData[0] + " " + chartData[1]);
                infowindow.maxWidth = 200;
                infowindow.open(map, marker);
                return true;
            };
        };
        let chartData = [latitude, longitude];
        google.maps.event.addListener(marker, 'mouseover', showInfoWindow(chartData, marker));
    }

}
