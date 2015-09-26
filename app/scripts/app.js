'use strict';

/**
 * @ngdoc overview
 * @name travelEuAdminApp
 * @description
 * # travelEuAdminApp
 *
 * Main module of the application.
 */
angular
  .module('travelEuAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-loading-bar',
    'ngTagsInput'
  ])
  .constant('baseUrl', 'http://localhost:8080')
  .factory('Country', function($resource,baseUrl) {
      var url=baseUrl + '/countries/:id';
      return $resource(url, { id: '@id' }, {
        update: {
          method: 'PUT'
        }
    });
  })
  .factory('City', function($resource,baseUrl) {
       var url=baseUrl + '/cities/:id';
      return $resource(url, { id:'@id' }, {
        update: {
          method: 'PUT'
        }
    });
  })
  .factory('Attraction', function($resource,baseUrl) {
       var url=baseUrl + '/attractions/:id';
      return $resource(url, { id:'@id' }, {
        update: {
          method: 'PUT'
        }
    });
  })
  .factory('Category', function($resource,baseUrl) {
       var url=baseUrl + '/categories/:id';
      return $resource(url, { id:'@id' }, {
        update: {
          method: 'PUT'
        }
    });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/countries', {
        templateUrl: 'views/countries-list.html',
        controller: 'CountriesListCtrl'
      })
      .when('/countries/:id/view', {
        templateUrl: 'views/country-view.html',
        controller: 'CountryViewCtrl'
      })
      .when('/countries/new', {
        templateUrl: 'views/country-new.html',
        controller: 'CountryNewCtrl'
      })
      .when('/countries/:id/edit', {
        templateUrl: 'views/country-edit.html',
        controller: 'CountryEditCtrl'
      })
      .when('/countries/:id/cities/:cityId/view', {
        templateUrl: 'views/city-view.html',
        controller: 'CityViewCtrl'
      })
      .when('/countries/:id/cities/new', {
        templateUrl: 'views/city-new.html',
        controller: 'CityNewCtrl'
      })
      .when('/countries/:id/cities/:cityId/edit', {
        templateUrl: 'views/city-edit.html',
        controller: 'CityEditCtrl'
      })
       .when('/countries/:id/cities/:cityId/attractions/:attractionId/view', {
        templateUrl: 'views/attraction-view.html',
        controller: 'AttractionViewCtrl'
      })
      .when('/countries/:id/cities/:cityId/attractions/new', {
        templateUrl: 'views/attraction-new.html',
        controller: 'AttractionNewCtrl'
      })
      .when('/countries/:id/cities/:cityId/attractions/:attractionId/edit', {
        templateUrl: 'views/attraction-edit.html',
        controller: 'AttractionEditCtrl'
      })
      .otherwise({
        redirectTo: '/countries'
      });
  });
