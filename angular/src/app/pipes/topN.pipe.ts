import {Pipe, PipeTransform} from '@angular/core';
import {Result} from '../lib/result';

@Pipe({
    name: 'topN',
    pure: true
})
export class TopNPipe implements PipeTransform {
    transform(birds: Result[], topN: number): Result[] {
        if (topN >= 10 && topN <= 50) {
            return birds.slice(0, topN);
        } else {
            return birds;
        }
    }
}