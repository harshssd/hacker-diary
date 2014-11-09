var hackers = angular.module('hackers', [
'ngRoute',
'mainController', 'userController'
]);

hackers.config(function($routeProvider, $locationProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'partials/repos.html',
            controller: 'mainController'
        });
        .when('/login', {
            templateUrl: 'partials/empty.html',
            controller: 'userController'
        });
    
    $locationProvider.html5Mode(true);    
    
    });