var viewsApp = angular.module('viewsApp', ['ngRoute', 'ngAnimate']);

viewsApp.config(function($routeProvider){
	$routeProvider.when(
		// this is a placeHolder whatever user puts in url
		'/:anyNameYouWant/', 
		{
			controller: 'viewsController',
			templateUrl: function($routeParams){
				console.log($routeParams);
				return 'template' + $routeParams.anyNameYouWant + '.html';
		}
	});
	
	// $routeProvider.otherwise({
	// 	redirectTo: ' '
	// });
});


viewsApp.controller('viewsController', function($scope, $location){
	$scope.message = "Suck it!";

	$scope.nextId = function(id){
		console.log(id);
		$location.path("/"+id);
	};
});
