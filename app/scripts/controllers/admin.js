'use strict';

angular.module('swFrontApp')
    .controller('AdminController', function ($scope, $http) {
        // Define global controller variables
        // ----------------------------------------------------------------------
            var scope                       = $scope;
            var httpReq                     = $http;

        // Define Login Controller data
        // ----------------------------------------------------------------------
            httpReq.get('/api/users');
    });
