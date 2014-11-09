var hackers = angular.module('hackers', [
'ngRoute',
'mainController', 'userController'
]);

hackers.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'mainController'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'userController'
        });
    });