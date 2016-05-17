var viewsApp = angular.module('viewsApp', ['ngRoute', 'ngAnimate']);

viewsApp.config(function($routeProvider){
	$routeProvider.when(
		// this is a placeHolder whatever user puts in url
		'/:anyNameYouWant/', 
		{
			controller: 'viewsController',
			templateUrl: function($routeParams){
				console.log($routeParams);
				console.log($routeParams.anyNameYouWant);
				return 'template' + $routeParams.anyNameYouWant + '.html';

		}
	});
	
	$routeProvider.otherwise({
		redirectTo: ''
	});
});


viewsApp.controller('viewsController', function($scope, $location){
	$scope.message = "Suck it!";

	$scope.nextId = function(id){
		console.log(id);
		$location.path("/"+id);
	};
});


// viewsApp.controller("viewsController", [
//  '$scope', '$location', '$http', '$cookieStore', 
//  function ($scope, $location, $http, $cookieStore) {
// ​
//   	var myGolfer = $cookieStore.get('myGolfer');
//   	console.log(myGolfer);
// ​
// 	console.log($cookieStore);
// 	$cookieStore.put('myGolfer','Zach');
// 	console.log($cookieStore);
// ​
// ​
// 	$scope.nextId = function(id){
// 		console.log(id);
// 		$location.path("/"+id);
// 	}
// } ] );
