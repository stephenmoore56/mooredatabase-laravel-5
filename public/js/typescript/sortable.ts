import {Result} from './result';

export class Sortable {

    public birds: Result[] = [];

    public originalBirds: Result[] = [];
    public birdQuery: string = '';
    public orders: Result[] = [];
    public orderName: string = 'All';
    public sortdirection: number = -1;

    public sortResults(results: Result[], columnName: string) {
        this.sortdirection *= -1;
        results = results.sort((a, b) => {
            if (a[columnName] === b[columnName]) {
                return 0;
            } else {
                return (a[columnName] < b[columnName]) ? this.sortdirection : this.sortdirection * -1;
            }
        });
    }

    public filterResults(birdQuery: string = '') {
        this.birdQuery = birdQuery;
        this.filterBirds();
    }

    public filterOrder(orderName: string = 'All') {
        this.orderName = orderName;
        this.filterBirds();
    }

    private filterBirds() {
        // apply the string filter
        if (this.birdQuery !== '') {
            let regex = new RegExp(this.birdQuery, 'i');
            let birds = this.originalBirds.filter(function (bird) {
                if (bird.common_name.match(regex) ||
                    bird.scientific_name.match(regex) ||
                    bird.order_name.match(regex) ||
                    bird.family.match(regex) ||
                    bird.subfamily.match(regex)) {
                    return true;
                }
            });
        } else {
            let birds = this.originalBirds;
        }
        // apply the order filter
        if (this.orderName !== 'All') {
            let birds2 = birds.filter(function (bird) {
                if (bird.order_name === this.orderName) {
                    return true;
                }
            }.bind(this));
            birds = birds2;
        }
        this.birds = birds;
    }

    public goBack() {
        window.history.back();
    }
}