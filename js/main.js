$(function(){
    $('body').append('<h1>Hola, {{yourName}}</h1>');
    
    $('body').append('<div id="main-container" ng-controller="searchController"><div class="container container-centered"><input type="text" placeholder="search" id="search" ng-model="post.filter"> <li ng-repeat="post in Posts | filter: post.filter">{{post.Title}}</li></div></div>');
  });
