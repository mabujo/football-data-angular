'use strict';

footballData.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/',
	{
		templateUrl:'templates/SiteHome.html',
		controller: 'SiteHomeController'
	});
	$routeProvider.when('/season/:seasonId',
	{
		title: 'Season',
		templateUrl: 'templates/Season.html',
		controller: 'SeasonController'
	});
	$routeProvider.when('/players/:teamId',
	{
		title: 'Players',
		templateUrl: 'templates/Players.html',
		controller: 'PlayersController',
	});

	$routeProvider.otherwise({redirectTo: '/'});

	/* Set to true only if using web server to direct everything to index*/
	//$locationProvider.html5Mode(true);
});