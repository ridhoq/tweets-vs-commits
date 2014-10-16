'use strict';

angular.module('tweetsVsCommits', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/form.html',
        controller: 'FormCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
