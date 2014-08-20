'use strict';

angular.module('swFrontApp')
    .controller('FiltersController',function (filterBy, ranks, categories, $scope) {
        // Define global controller variables
        // ----------------------------------------------------------------------
            var scope = $scope;

        // Define Filters Controller data
        // ----------------------------------------------------------------------
            // Ranks Service: returns an array of object
            scope.ranks = ranks.query();

        // Defining a method that filters the data on the view
        // ----------------------------------------------------------------------

            filterBy.rank = scope.ranks[0]
            // Categories Service: returns an array of objects
            scope.categories = categories.query(function () {
                scope.categories.unshift({name:'All'});
                filterBy.category = scope.categories[0];
            });
    });
