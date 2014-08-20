'use strict';

angular.module('swFrontApp')
    .filter('edges', function () {
        return function(edges, filterBy) {
            // Get the ranks from the collection sent by the view
            // ------------------------------------------------------------------
            var getRank = function (reqs) {
                var req = {};
                for (var i = 0;i < reqs.length; i++) {
                    if (reqs[i].mode === 'rank') {
                        req = reqs[i];
                        break;
                    }
                }
                return req.value;
            };

            // Return elements of collection edges where matches filterBy
            // ------------------------------------------------------------------
            return edges.filter(function(element, index, array) {
                if(filterBy.category){
                    //console.log(filterBy.category);
                    if(typeof filterBy.category !== 'undefined' && typeof element.category !== 'undefined') {
                        var category = (element.category.name === filterBy.category.name) || filterBy.category.name === 'All';
                        var rank = (filterBy.rank.name === 'All' || getRank(element.requirements) === filterBy.rank.name);
                    }
                }
                return category && rank;
            });
        };
    });
