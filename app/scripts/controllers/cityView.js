'use strict';

/**
 * @ngdoc function
 * @name travelEuAdminApp.controller:CountryNewCtrl
 * @description
 * # CountryNewCtrl
 * Controller of the travelEuAdminApp
 */
angular.module('travelEuAdminApp')
  .controller('CityViewCtrl', function ($scope,$routeParams,City,Attraction,$location) {
  	$scope.countryId = $routeParams.id;
  	var cityId = $routeParams.cityId;

   $scope.city = City.get({ id: cityId }); 

    $scope.deleteAttraction = function(attractionId) { // Delete a city. Issues a DELETE to /cities/:id

 		var attractionToBeDeleted=Attraction.get({ id: attractionId });

	      attractionToBeDeleted.$delete({id:attractionId},function() {
	        $location.path('/countries/'+$scope.countryId+'/cities/'+cityId+'/view/');
	      });
	    
	  };
  });
