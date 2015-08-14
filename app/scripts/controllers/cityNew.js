'use strict';

/**
 * @ngdoc function
 * @name travelEuAdminApp.controller:CountryNewCtrl
 * @description
 * # CountryNewCtrl
 * Controller of the travelEuAdminApp
 */
angular.module('travelEuAdminApp')
  .controller('CityNewCtrl', function ($scope,City,$location,$routeParams) {
  	var countryId = $routeParams.id;
   	$scope.city = new City();  //create new country instance. Properties will be set via ng-model on UI
 
  $scope.addCity = function() { //create a new movie. Issues a POST to /countries
    $scope.city.$save({countryId:countryId},function() {
      $location.path('/countries/'+countryId+'/view/');
    });
  };
  });
