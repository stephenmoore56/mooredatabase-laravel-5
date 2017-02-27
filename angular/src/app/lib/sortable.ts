import {Result} from "./result";

export class Sortable {

    public sortDirection: number = -1;
    public columnName: string;

    public sortResults(results: Result[], columnName: string): void {
        this.sortDirection *= -1;
        this.columnName = columnName;
        results.sort((a, b) => {
            if (a[this.columnName] === b[this.columnName]) {
                return 0;
            } else {
                return (a[this.columnName] < b[this.columnName]) ? this.sortDirection : this.sortDirection * -1;
            }
        });
    }

}