(function() {
    'use strict';
    mooredatabaseReportsApp.filter('searchBirds', function() {
        return function(birds, birdQuery) {
            if (!birdQuery || !birds) {
                return birds;
            }
            var regex = new RegExp(birdQuery, 'i');
            var result = birds.filter(function(bird) {
                if (bird.common_name.match(regex) || 
                    bird.scientific_name.match(regex) || 
                    bird.order_name.match(regex) || 
                    bird.family.match(regex) || 
                    bird.subfamily.match(regex)) {
                    return true;
                }
            });
            return result;
        };
    });
})();