'use strict';

angular.module('swFrontApp')
    .service('auth', function ($http) {

        var thisService = this;

        thisService.login = function (user) {
            return $http.post('/api/login', {
                email: user.email,
                password: user.password
            });
        };

        thisService.logout = function () {
            return $http.get('/api/logout');
        };

        thisService.isLoggedIn = function () {
            return (localStorage.getItem('auth_token')) ? true : false;
        };
    });
