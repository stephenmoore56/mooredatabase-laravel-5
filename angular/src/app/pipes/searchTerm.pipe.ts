import {Pipe, PipeTransform} from '@angular/core';
import {Result} from '../lib/result';

@Pipe({
    name: 'searchTerm',
    pure: true
})
export class SearchTermPipe implements PipeTransform {
    transform(birds: Result[], searchTerm: string): Result[] {
        // apply the search term filter
        if (searchTerm != undefined && searchTerm.trim() != '') {
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
}