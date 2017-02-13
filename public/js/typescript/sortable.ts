import {Result} from "./result";

export class Sortable {

    public sortDirection: number = -1;
    public columnName: string = 'common_name';

    public sortResults(results: Result[], columnName: string): void {
        // toggle sort direction if column name hasn't changed
        if (this.columnName === columnName) {
            this.sortDirection *= -1;
        } else {
            // otherwise set sort order ascending
            this.sortDirection = 1;
        }
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