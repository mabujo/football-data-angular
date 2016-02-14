footballData.factory('teamDetails', function($resource, $http) {
    /**
     * http://api.football-data.org/v1/ resource
     * get details of a single season
     */
    $http.defaults.headers.common['X-Auth-Token'] = apiKey;
    var resource = $resource('http://api.football-data.org/v1/teams/:teamId',
        {teamId:'@teamId'},
            {
                "getTeam": {
                    method: "GET",
                        cache : true,
                        isArray: false
                },
                "getPlayers": {
                        method: "GET",
                        cache : true,
                        isArray: false,
                        url: 'http://api.football-data.org/v1/teams/:teamId/players',
                },
                "getFixtures": {
                        method: "GET",
                        isArray: false,
                        cache : true,
                        url: 'http://api.football-data.org/v1/soccerseasons/:teamId/fixtures'
                }
            }
        );
    return {
        getPlayers: function(teamId) {
            return resource.getPlayers({teamId:teamId});
        },
        getTeam: function(teamId) {
            return resource.getTeam({teamId:teamId});
        },
        getFixtures: function(teamId) {
            return resource.getFixtures({teamId:teamId});
        }
    };
});