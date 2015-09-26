'use strict';

/**
 * @ngdoc function
 * @name travelEuAdminApp.controller:CountryEditCtrl
 * @description
 * # CountryEditCtrl
 * Controller of the travelEuAdminApp
 */
angular.module('travelEuAdminApp')
  .controller('AttractionEditCtrl', function ($scope,$location,$routeParams,Attraction,baseUrl,$http) {

    var cityId = $routeParams.cityId;
    var countryId = $routeParams.id;
    var attractionId = $routeParams.attractionId;

    $scope.attraction = Attraction.get({ id: attractionId }); 

    $scope.updateAttraction = function() { //Update the edited country. Issues a PUT to /countries/:id
	    $scope.attraction.$update(function() {
	      $location.path('/countries/'+countryId+'/cities/'+cityId+'/view/');
 
	    });
	   };

    $scope.loadTags = function(query) {
        return $http.get(baseUrl+'/categories');
    };

  });
