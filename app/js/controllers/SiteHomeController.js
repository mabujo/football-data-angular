'use strict';

footballData.controller('SiteHomeController',
    function SiteHomeController($scope, $location, listSeasons, pageAttributes) {

    	$scope.yearsAvailable = [
    			{id : 1, name: '2013'},
	    		{id : 2, name: '2014'},
	    		{id : 3, name: '2015'},
	    		{id : 4, name: '2016'}
    	];
    	$scope.selectedYear = {id : 3, name: '2015'};

    	$scope.switchYear = function () {
    		$scope.seasons = listSeasons.getAllSeasons($scope.selectedYear.name);
    	};

        $scope.seasons = listSeasons.getAllSeasons($scope.selectedYear.name);

        $scope.pageAttributes = pageAttributes;
        pageAttributes.setTitle('Football Data Angular');
    }
);