'use strict';

/**
 * @ngdoc function
 * @name travelEuAdminApp.controller:CountryNewCtrl
 * @description
 * # CountryNewCtrl
 * Controller of the travelEuAdminApp
 */
angular.module('travelEuAdminApp')
  .controller('CountryNewCtrl', function ($scope,Country,$location) {
   	$scope.country = new Country();  //create new country instance. Properties will be set via ng-model on UI
 
  $scope.addCountry = function() { //create a new movie. Issues a POST to /countries
    $scope.country.$save(function() {
      $location.path('/countries');
    });
  };
  });
