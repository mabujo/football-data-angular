footballData.factory('seasonDetails', function($resource, $http) {
    /**
     * http://api.football-data.org/v1/ resource
     * get details of a single season
     */
    $http.defaults.headers.common['X-Auth-Token'] = apiKey;
    var resource = $resource('http://api.football-data.org/v1/soccerseasons/:singleSeason',
        {singleSeason:'@singleSeason'},
            {
                "getTeams": {
                        method: "GET",
                        cache : true,
                        isArray: false,
                        url: 'http://api.football-data.org/v1/soccerseasons/:singleSeason/teams',
                },
                "getFixtures": {
                        method: "GET",
                        isArray: false,
                        cache : true,
                        url: 'http://api.football-data.org/v1/soccerseasons/:singleSeason/fixtures'
                },
                "getLeagueTable": {
                        method: "GET",
                        isArray: false,
                        cache : true,
                        url: 'http://api.football-data.org/v1/soccerseasons/:singleSeason/leagueTable'
                }
            }
        );
    return {
        getTeams: function(seasonId) {
            return resource.getTeams({singleSeason:seasonId});
        },
        getFixtures: function(seasonId) {
            return resource.getFixtures({singleSeason:seasonId});
        },
        getLeagueTable: function(seasonId) {
            return resource.getLeagueTable({singleSeason:seasonId});
        }
    };
});