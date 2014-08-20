'use strict';

/**
 * @ngdoc overview
 * @name swFrontApp
 * @description
 * # swFrontApp
 *
 * Main module of the application.
 */
angular
  .module('swFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .factory('authInterceptor', function ($q,$location) {
      return {
          request: function (config) {
              config.headers = config.headers || {};
              if (localStorage.auth_token) {
                  config.headers.tokem = localStorage.auth_token;
              }
              return config;
          },
          responseError: function (response) {
              if(response.status === 401) {
                  $location.path('/login');
              }
              return $q.reject(response);
          }
      };
  })
  .config(function ($httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
        //controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/edges', {
        templateUrl: 'views/edges.html',
        controller: 'EdgesController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/admin', {
          templateUrl: 'views/admin.html',
          controller: 'AdminController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
