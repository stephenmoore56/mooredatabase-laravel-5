import {Injectable} from "@angular/core";

// constants for home coordinates
const LATITUDE_HOME: number = 45.009613;
const LONGITUDE_HOME: number = -93.246839;

// private methods
function deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
}

function km2mile(km: number): number {
    return km * 0.621371192;
}

function round(value: number, precision: number): number {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    // implementation of haversine formula
    let R = 6371; // mean radius of the earth in km
    let dLat = deg2rad(lat2 - lat1);  // deg2rad below
    let dLon = deg2rad(lon2 - lon1);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

@Injectable()
export class GeoService {

    //noinspection JSMethodCanBeStatic
    public getDistanceFromHomeInMiles(latitude: number, longitude: number): number {
        let km = getDistanceFromLatLonInKm(latitude, longitude, LATITUDE_HOME, LONGITUDE_HOME);
        return round(km2mile(km), 2);
    }

}