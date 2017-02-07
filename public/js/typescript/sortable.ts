import {Results} from './result';

export class Sortable {

    public sortdirection = -1;

    public sortResults(results: Results[], columnName: string) {
        this.sortdirection *= -1;
        results = results.sort((a, b) => {
            if (a[columnName] === b[columnName]) {
                return 0;
            } else {
                return (a[columnName] < b[columnName]) ? this.sortdirection : this.sortdirection * -1;
            }
        });
    }

    public goBack() {
        window.history.back();
    }
}