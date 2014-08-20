'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:New Edge Controller
 * @description
 * # New Edge
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
    .controller('newEdgeController', function ($scope, edges, categories, ranks,filterBy) {
        // Define global controller variables
        // ----------------------------------------------------------------------
            var scope = $scope;
        // Define Edge Controller data
        // ----------------------------------------------------------------------
            // Ranks Service: returns an array of objects
            scope.ranks = ranks.query();
            // Filters Service: returns a object
            scope.filterBy = filterBy;

        // Defining the method save for adding new edges on the db
        // we make a call to the rest API and the API will save the new
        // edge into the db and response with proper action
        // ----------------------------------------------------------------------
            scope.newEdge = new edges;
            scope.createEdge = function () {
                var edge = scope.newEdge.$save();
                edge.then(function (response) {
                    scope.edges.push(response);
                    scope.newEdge = new edges;
                });
            };
        // Get categories for the form
            scope.categories = categories.query();
        // Ranks without the All item
            //console.log(typeof scope.ranks);
            if(typeof scope.ranks !== 'undefined')
                scope.ranks = scope.ranks.slice(1);
    });
