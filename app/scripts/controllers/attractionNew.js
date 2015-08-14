'use strict';


angular.module('travelEuAdminApp')
  .controller('AttractionNewCtrl', function ($scope,Attraction,$location,$routeParams) {
  		var countryId = $routeParams.id;
  		var cityId=$routeParams.cityId;

  		$scope.attraction=new Attraction();

  	$scope.addAttraction = function() { //create a new movie. Issues a POST to /countries
    $scope.attraction.$save({cityId:cityId},function() {
      $location.path('/countries/'+countryId+'/cities/'+cityId+'/view/');
    });
  };
  });
