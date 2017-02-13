import {Result} from "./result";

export class SpeciesList {

    public birds: Result[] = [];
    public originalBirds: Result[] = [];
    public searchTerm: string = '';
    public orders: Result[] = [];
    public orderName: string = 'All';
    public sortDirection: number = -1;
    public columnName: string = 'common_name';
    public topN: number = Infinity;

    public sortResults(columnName: string): void {
        // toggle sort direction if column name hasn't changed
        if (this.columnName === columnName) {
            this.sortDirection *= -1;
        } else {
            // otherwise set sort order ascending
            this.sortDirection = 1;
        }
        this.columnName = columnName;
        this.applyFilters();
    }

    public setSearchTermFilter(searchTerm: string = ''): void {
        this.searchTerm = searchTerm;
        this.applyFilters();
    }

    public setOrderNameFilter(orderName: string = 'All'): void {
        this.orderName = orderName;
        this.applyFilters();
    }

    public setTopNFilter(topN: number = Infinity): void {
        this.topN = topN;
        this.applyFilters();
    }

    private applyFilters(): void {
        // apply the filters in sequence
        let filteredBirds = this.originalBirds; // start with query results
        filteredBirds = this.filterSearchTerm(filteredBirds, this.searchTerm);
        filteredBirds = this.filterOrderName(filteredBirds, this.orderName);

        // apply current sort before top N filter
        this.applySort(filteredBirds);
        filteredBirds = this.filterTopN(filteredBirds, this.topN);
        this.birds = filteredBirds;
    }

    private applySort(birds: Result[]): void {
        // apply current sort (column and direction)
        birds.sort((a, b) => {
            if (a[this.columnName] === b[this.columnName]) {
                return 0;
            } else {
                return (a[this.columnName] < b[this.columnName]) ? this.sortDirection : this.sortDirection * -1;
            }
        });
    }

    private filterSearchTerm(birds: Result[], searchTerm: string): Result[] {
        // apply the search term filter
        if (searchTerm !== '') {
            let regex = new RegExp(searchTerm, 'i');
            return birds.filter(function (bird) {
                if (bird.common_name.match(regex) ||
                    bird.scientific_name.match(regex) ||
                    bird.order_name.match(regex) ||
                    bird.family.match(regex) ||
                    bird.subfamily.match(regex)) {
                    return true;
                }
            });
        } else {
            return birds;
        }
    }

    private filterOrderName(birds: Result[], orderName: string): Result[] {
        // apply the order name filter
        if (orderName !== 'All') {
            return birds.filter(function (bird) {
                if (bird.order_name === orderName) {
                    return true;
                }
            });
        } else {
            return birds;
        }
    }

    private filterTopN(birds: Result[], topN: number): Result[] {
        // apply the top N filter
        return birds.filter((item, index) => index < topN)
    }

}