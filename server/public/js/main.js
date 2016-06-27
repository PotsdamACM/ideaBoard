var app = angular.module("ideaBoard", ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
    $routeProvider
    // the timeline display
        .when('/', {
        templateUrl: 'ideaBoard.html',
        controller: 'ideaController'
    });
});

app.factory('ideaFactory', function($resource) {
    return $resource('/api/ideas/:id');
});

app.controller("ideaController", function($scope, ideaFactory) {
    $scope.ideas = ideaFactory.query();
    $scope.newIdea = {
        username: '',
        created_on: '',
        text: '',
        idea_name: ''
    };

    $scope.post = function() {
        $scope.newIdea.created_on = Date.now();
        ideaFactory.save($scope.newIdea, function() {
            $scope.ideas = ideaFactory.query();
            $scope.newIdea = {
                username: '',
                created_on: '',
                text: '',
                idea_name: ''
            };
        });
    };
});
