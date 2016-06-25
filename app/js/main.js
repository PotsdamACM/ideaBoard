var app = angular.module("ideaBoard", []);

app.controller("ideaController", function($scope) {
    $scope.ideas = [];
    $scope.newIdea = {
        username: '',
        created_on: '',
        text: '',
        idea_name: ''
    };

    $scope.post = function() {
        $scope.newIdea.created_on = Date.now();
        $scope.ideas.push($scope.newIdea);
        $scope.newIdea = {
            username: '',
            created_on: '',
            text: '',
            idea_name: ''
        };
    };
});
