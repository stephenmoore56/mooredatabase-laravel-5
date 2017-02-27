import {Result} from "./result";
import {sortBy} from "./multisort";

export class SpeciesList {

    public birds: Result[] = [];
    public orders: Result[] = [];
    private originalBirds: Result[] = [];
    public sortDirection: number = -1;
    private columnNames: any[] = [];

    public setBirds(birds: Result[]): void {
        this.birds = birds;
        this.originalBirds = birds;
    }

    public sortResults(columnName: string): void {
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