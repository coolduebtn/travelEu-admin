'use strict';

/**
 * @ngdoc function
 * @name travelEuAdminApp.controller:CountryNewCtrl
 * @description
 * # CountryNewCtrl
 * Controller of the travelEuAdminApp
 */
angular.module('travelEuAdminApp')
  .controller('AttractionViewCtrl', function ($scope,$routeParams,Attraction) {
  	 	$scope.countryId = $routeParams.id;
  	 	$scope.cityId = $routeParams.cityId;
  	 var attractionId = $routeParams.attractionId;

  	 $scope.attraction = Attraction.get({ id: attractionId }); 
  	
  });
