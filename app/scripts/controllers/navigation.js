'use strict';

angular.module('swFrontApp')
    .controller('NavigationController', function($scope,$location, auth) {
        var scope = $scope;

        scope.isLoggedIn = auth.isLoggedIn;

        scope.logout = function () {
            var promise = auth.logout();
            promise.then(function () {
                localStorage.removeItem('auth_token');
                $location.path('/login');
            });
        };

        scope.isActive = function (path) {
            var currentPath         =   $location.path().split('/')[1];
            return currentPath      === path.split('/')[1];
        };
    });
