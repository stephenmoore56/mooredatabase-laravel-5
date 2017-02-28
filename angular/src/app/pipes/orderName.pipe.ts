import {Pipe, PipeTransform} from '@angular/core';
import {Result} from '../lib/result';

@Pipe({
    name: 'orderName',
    pure: true
})
export class OrderNamePipe implements PipeTransform {
    transform(birds: Result[], orderName: string): Result[] {
        // apply the order name filter
        if (orderName !== 'All' && orderName != undefined && orderName.trim() != '') {
            return birds.filter((bird) => {
                if (bird.order_name === orderName) {
                    return true;
                }
            });
        } else {
            return birds;
        }
    }
}