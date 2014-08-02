'use strict';

var app = angular.module('tmntApp', ['ui.router',]);

.config(function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('main', {
		url: '/',
		templateUrl: 'views/main.html',
		controller: 'MainCtrl',
	})

	$stateProvider.state('team', {
		url: '/team/:teamId',
		templateUrl: 'templates/team.html',
		controller: 'TeamCtrl'
	})
})
