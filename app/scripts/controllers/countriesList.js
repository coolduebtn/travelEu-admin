'use strict';

/**
 * @ngdoc function
 * @name travelEuAdminApp.controller:CountriesListCtrl
 * @description
 * # CountriesListCtrl
 * Controller of the travelEuAdminApp
 */
angular.module('travelEuAdminApp')
  .controller('CountriesListCtrl', function ($scope,Country,$window) {


  	$scope.countries = Country.query(); //fetch all countries. 
 
	  $scope.deleteCountry = function(country) { // Delete a country. Issues a DELETE to /countries/:id
	  		
	      country.$delete(function() {
	        $window.location.href = ''; //redirect to home
	      });
	    
	  };
    
  });
