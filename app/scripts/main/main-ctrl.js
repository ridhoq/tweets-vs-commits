'use strict';

angular.module('tweetsVsCommits')
  .controller('MainCtrl', function ($scope, $q, twitterService) {

  $scope.tweets;
  $scope.twitterService = twitterService;
  $scope.twitterService.initialize();

  //using the OAuth authorization result get the latest 20 tweets from twitter for the user
  $scope.refreshTimeline = function () {
    $scope.twitterService.getLatestTweets().then(function (data) {
      $scope.tweets = data;
      console.log($scope.tweets);
    });
  };

  //when the user clicks the connect twitter button, the popup authorization window opens
  $scope.connectTwitterButton = function () {
    $scope.twitterService.connectTwitter().then(function () {
      if ($scope.twitterService.isReady()) {
        //if the authorization is successful, hide the connect button and display the tweets
        $scope.refreshTimeline();
      }
    });
  };

  //sign out clears the OAuth cache, the user will have to reauthenticate when returning
  $scope.signOutTwitter = function () {
    $scope.twitterService.clearCache();
    $scope.tweets.length = 0;
  };

  //if the user is a returning user, hide the sign in button and display the tweets
  if ($scope.twitterService.isReady()) {
    $scope.refreshTimeline();
  }
});
