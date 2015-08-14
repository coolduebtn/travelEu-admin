'use strict';

/**
 * @ngdoc function
 * @name travelEuAdminApp.controller:CountryEditCtrl
 * @description
 * # CountryEditCtrl
 * Controller of the travelEuAdminApp
 */
angular.module('travelEuAdminApp')
  .controller('CountryEditCtrl', function ($scope,$location,$routeParams,Country) {

  	var countryId = $routeParams.id;

   $scope.country = Country.get({ id: countryId }); 

   $scope.updateCountry = function() { //Update the edited country. Issues a PUT to /countries/:id
	    $scope.country.$update(function() {
	      $location.path('/countries');
 
	    });
	   };
  		
  });
