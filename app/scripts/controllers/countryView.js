'use strict';

/**
 * @ngdoc function
 * @name travelEuAdminApp.controller:CountryNewCtrl
 * @description
 * # CountryNewCtrl
 * Controller of the travelEuAdminApp
 */
angular.module('travelEuAdminApp')
  .controller('CountryViewCtrl', function ($scope,$routeParams,Country,City,$location) {
  	var countryId = $routeParams.id;

   $scope.country = Country.get({ id: countryId }); 
    var cityToBeDeleted=null;

   $scope.deleteCity = function(city) { // Delete a city. Issues a DELETE to /cities/:id

  		  var cityId = city.id ;
  		  cityToBeDeleted=City.get({ id: cityId });
	  
	      cityToBeDeleted.$delete({id:cityId},function() {
	        $location.path('/countries/'+countryId+'/view/');
	      });
	    
	  };
  });
