'use strict';

footballData.controller('PlayersController',
    function PlayersController($scope, $location, teamDetails, $routeParams, $route, pageAttributes) {
    	var teamId = $route.current.pathParams.teamId;
    	$scope.team = teamDetails.getTeam(teamId);
        $scope.players = teamDetails.getPlayers(teamId);

    	$scope.pageAttributes = pageAttributes;
    	pageAttributes.setTitle('Players | Football Data Angular');
    }
);