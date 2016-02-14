'use strict';

footballData.controller('SeasonController',
    function SeasonController($scope, $location, listSeasons, seasonDetails, $routeParams, $route, pageAttributes) {
    	var seasonId = $route.current.pathParams.seasonId;
        $scope.singleSeason = listSeasons.getSeason(seasonId);
        $scope.teams = seasonDetails.getTeams(seasonId);
        $scope.fixtures = seasonDetails.getFixtures(seasonId);
        $scope.leagueTable = seasonDetails.getLeagueTable(seasonId);

        $scope.pageAttributes = pageAttributes;
    	pageAttributes.setTitle('Season | Football Data Angular');
    }
);