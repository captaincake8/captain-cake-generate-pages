'use strict';

angular
  .module('generatePagesApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
     .when('/page/create', {
        templateUrl: 'views/createNewPage.html',
        controller: 'NewPageCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })



      .otherwise({
            templateUrl: 'views/createNewPage.html',
            controller: 'NewPageCtrl'
      });
  });
