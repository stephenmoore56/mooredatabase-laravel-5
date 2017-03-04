import {Result} from "./result";
import {sortBy} from "./multisort";

export class SpeciesList {

    public birds: Result[] = [];
    public orders: Result[] = [];
    private originalBirds: Result[] = [];
    public sortDirection: number = -1;
    private columnNames: any[] = [];
    public topNList: any[];
    public pageTitle: string;

    constructor() {
        this.topNList = [
            {value: Infinity, name: 'All'},
            {value: 10, name: 'Top 10'},
            {value: 20, name: 'Top 20'},
            {value: 30, name: 'Top 30'},
            {value: 40, name: 'Top 40'},
            {value: 50, name: 'Top 50'}
        ];
    }

    public setBirds(birds: Result[]): void {
        this.birds = birds;
        this.originalBirds = birds;
    }

    public sortResults(columnName: string): void {
        console.log(columnName);
        this.sortResultsMulti([columnName]);
    }

    public sortResultsMulti(columnNames: string[]): void {

        // get sort parameters
        this.sortDirection *= -1;
        this.columnNames = [];
        let reverse = (this.sortDirection == -1);
        for (let i in columnNames) {
            this.columnNames.push({
                name: columnNames[i],
                reverse: reverse
            })
        }

        // sort the data
        let filteredBirds = this.originalBirds; // start with original query results
        filteredBirds.sort(sortBy(...this.columnNames));

        // need to clone the array
        this.birds = filteredBirds.slice(0);
    }

}