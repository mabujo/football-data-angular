footballData.factory('listSeasons', function($resource, $http) {
    /**
     * http://api.football-data.org/v1/ resource
     * earliest season is 2013/14, up to current season
     * ( + 2016/17 has European Championships )
     */
    $http.defaults.headers.common['X-Auth-Token'] = apiKey;
    var resource = $resource('http://api.football-data.org/v1/soccerseasons/:singleSeason',
        {singleSeason:'@singleSeason'},
            {
                "query": {method: "GET",
                        cache : true,
                        isArray: true
                    },
                "get": {method: "GET",
                        isArray: false,
                        cache : true
                    }
            }
        );
    return {
        getSeason: function(seasonId) {
            return resource.get({singleSeason:seasonId});
        },
        getAllSeasons: function(seasonYear) {
            return resource.query({season: seasonYear});
        }
    };
});
