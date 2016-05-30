var routerApp = angular.module('hackathonApp', ['ui.router']);
routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('approvals', {
            url: '/approvals',
            templateUrl: 'application/approvals/approvals.html',
            controller: 'approvalsController'
        }).state('claims', {
            url: '/claims',
            templateUrl: 'application/claims/claims.html',
            controller: 'claimsController'
        }).state('login', {
            url: '/login',
            templateUrl: 'application/login/login.html',
            controller: 'loginController'
        }).state('home', {
            url: '/home',
            templateUrl: 'application/home/home.html',
            controller: 'homeController'
        }).state('usecase', {
            url: '/usecase',
            templateUrl: 'application/usecase/usecase.html',
            controller: 'usecaseController'
        }).state('insurance', {
            url: '/insurance',
            templateUrl: 'application/insurance/insurance.html',
            controller: 'insuranceController'
        });
}).run(function ($rootScope) {
    $rootScope.showNotifications = false;
});