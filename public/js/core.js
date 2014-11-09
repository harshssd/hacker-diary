var hackers = angular.module('hackers', [
'ngRoute',
'mainController', 'userController'
]);

hackers.config(function($routeProvider, $locationProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'userController'
        });
    
    $locationProvider.html5Mode(true);    
    
    });