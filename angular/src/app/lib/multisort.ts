export function sortBy(...args: any[]) {

    let fields = [].slice.call(args);

    return (A, B) => {
        let a, b, field, key, reverse, result, i;

        for (i in fields) {
            result = 0;
            field = fields[i];

            key = typeof field === 'string' ? field : field.name;

            a = A[key] == undefined ? '' : A[key];
            b = B[key] == undefined ? '' : B[key];

            if (typeof field.primer !== 'undefined') {
                a = field.primer(a);
                b = field.primer(b);
            }

            reverse = (field.reverse) ? -1 : 1;

            if (a < b) result = reverse * -1;
            if (a > b) result = reverse * 1;
            if (result !== 0) break;
        }
        return result;
    }
}