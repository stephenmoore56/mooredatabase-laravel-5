import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Result} from './result';

function mapResults(response: Response): Result[] {
    // The response of the API has a data
    // property with the actual results
    return response.json().data.map(r => {
        return r;
    });
}

@Injectable()
export class ReportDataService {

    private baseUrl: string = "http://lumen.local/api/reports";

    constructor(private http: Http) {
    }

    public getSpeciesByMonth(): Observable<Result[]> {
        return this.getResults('speciesByMonth');
    }

    public getSpeciesByYear(): Observable<Result[]> {
        return this.getResults('speciesByYear');
    }

    public getSpeciesByOrder(): Observable<Result[]> {
        return this.getResults('speciesByOrder');
    }

    public getSpeciesForMonth(month: number): Observable<Result[]> {
        return this.getResults(`speciesForMonth/${month}`);
    }

    private getResults(endpoint: string): Observable<Result[]> {
        return this.http
            .get(`${this.baseUrl}/${endpoint}`, {headers: this.getHeaders()})
            .map(mapResults);
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}