'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
    .controller('LoginController', function ($scope, $location, auth) {
        // Define global controller variables
        // ----------------------------------------------------------------------
            var scope                       = $scope;

        // Define Login Controller data
        // ----------------------------------------------------------------------

        // Defining a submit method for login
        // ----------------------------------------------------------------------
        scope.login = function () {
            if (scope.loginForm.$valid) {
                var promise = auth.login(scope.user);
                promise.then(success, error);
            }
        };
        var success = function (response) {
            // Here should be a redirect to the app dashboard
            // once the user has succesfully logged in
            // ----------------------------------------------------------------------
            localStorage.setItem('auth_token', response.data.auth_token);
            $location.path('/edges');
        };
        var error = function (response) {
            scope.wrongCredentials = true;
        };
    });
