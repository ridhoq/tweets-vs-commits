'use strict';

angular.module('tweetsVsCommits', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource',
               'ui.router', 'tweetsVsCommits.services'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/form.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
