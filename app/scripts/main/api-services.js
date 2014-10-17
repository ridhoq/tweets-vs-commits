'use strict';

angular.module('tweetsVsCommits.services', [])
  .factory('twitterService', function ($q) {
    var authorizationResult = false;

    return {
        initialize: function () {
          //initialize OAuth.io with public key of the application
          OAuth.initialize('LlcT1C1iMAYuKq6iYpqmTDEIV2c', {cache: true});
          //try to create an authorization result when the page loads, this means a returning user won't have to click the twitter button again
          authorizationResult = OAuth.create('twitter');
        },
        isReady: function () {
            return (authorizationResult);
          },
        connectTwitter: function () {
            var deferred = $q.defer();
            OAuth.popup('twitter', {cache: true}, function (error, result) { //cache means to execute the callback if the tokens are already present
                if (!error) {
                  authorizationResult = result;
                  deferred.resolve();
                } else {
                  //do something if there's an error
                  console.log('Twitter connection failed!');
                  console.log(error);
                }
              });
            return deferred.promise;
          },
        clearCache: function () {
            OAuth.clearCache('twitter');
            authorizationResult = false;
          },
        getLatestTweets: function () {
            //create a deferred object using Angular's $q service
            var deferred = $q.defer();
            authorizationResult.get('/1.1/statuses/user_timeline.json').done(function (data) { //https://dev.twitter.com/docs/api/1.1/get/statuses/home_timeline
                //when the data is retrieved resolved the deferred object
                deferred.resolve(data);
              });
            //return the promise of the deferred object
            return deferred.promise;
          }
      };
  });

angular.module('tweetsVsCommits.services')
  .factory('gitHubService', function ($q) {
    var authorizationResult = false;

    return {
        initialize: function () {
          //initialize OAuth.io with public key of the application
          OAuth.initialize('LlcT1C1iMAYuKq6iYpqmTDEIV2c', {cache: true});
          //try to create an authorization result when the page loads, this means a returning user won't have to click the twitter button again
          authorizationResult = OAuth.create('github');
        },
        isReady: function () {
            return (authorizationResult);
          },
        connectGitHub: function () {
            var deferred = $q.defer();
            OAuth.popup('github', {cache: true}, function (error, result) { //cache means to execute the callback if the tokens are already present
                if (!error) {
                  authorizationResult = result;
                  deferred.resolve();
                } else {
                  //do something if there's an error
                  console.log('GitHub connection failed!');
                  console.log(error);
                }
              });
            return deferred.promise;
          },
        clearCache: function () {
            OAuth.clearCache('github');
            authorizationResult = false;
          },
        getLatestCommits: function () {
            //create a deferred object using Angular's $q service
            var deferred = $q.defer();
            authorizationResult.get('user').done(function (data) {
                //when the data is retrieved resolved the deferred object
                authorizationResult.get('users/' + data.login + '/events').done(function (data) {
                  console.log(data);
                  deferred.resolve(data);
                });
              });
            //return the promise of the deferred object
            return deferred.promise;
          }
      };
  });
