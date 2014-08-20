'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
    .controller('EdgesController', function ($scope,edges,filterBy) {
        // Define global controller variables
        // ----------------------------------------------------------------------
            var scope = $scope;
            var selectedEdge = null;

        // Define Edge Controller data
        // ----------------------------------------------------------------------
            // Edges Service: return an array of objects
            scope.edges = edges.query();
            // Filters Service: returns a object
            scope.filterBy = filterBy;

        // Defining a method that will display a element in the view
        // ----------------------------------------------------------------------
            scope.selectEdge = function (edge) {
                selectedEdge = (selectedEdge === edge) ? null : edge;
            };
            scope.isSelected = function (edge) {
                return edge === selectedEdge;
            };
        // Defining a method that concatenates the requirements names
        // sent from the view however these data comes from edges array
        // this may well be constructed from begining and injected into
        // the view later.
        // ----------------------------------------------------------------------
            scope.displayRequirements = function (reqs) {
                var results = '';

                for(var i = 0;i < reqs.length; i++) {
                    if (results !== '') {results += ', ';}
                    if (reqs[i].name) {
                        results += reqs[i].name + ' ';
                    }
                    results += reqs[i].value;
                }
                return results;
            };

        // Defining a method that will speak to the api to delete the record
        // ----------------------------------------------------------------------
            scope.deleteEdge = function (edge) {
                edge.$delete();
            };
    });
