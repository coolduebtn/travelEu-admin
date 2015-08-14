'use strict';

/**
 * @ngdoc function
 * @name travelEuAdminApp.controller:CountryEditCtrl
 * @description
 * # CountryEditCtrl
 * Controller of the travelEuAdminApp
 */
angular.module('travelEuAdminApp')
  .controller('CityEditCtrl', function ($scope,$location,$routeParams,City) {

  	var countryId = $routeParams.id;
    var cityId = $routeParams.cityId;

   $scope.city = City.get({ id: cityId }); 

   $scope.updateCity = function() { //Update the edited country. Issues a PUT to /countries/:id
	    $scope.city.$update(function() {
	      $location.path('/countries/'+countryId+'/view/');
 
	    });
	   };
  		
  });
