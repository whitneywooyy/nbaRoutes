var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;

	// console.log("Team data", $scope.teamData);

	$scope.toggleNewGameForm = function(){
		$scope.showNewGameForm = !$scope.showNewGameForm;
	};

	if ($routeParams.team === "utahjazz") {
		$scope.homeTeam = "Utah Jazz";
		$scope.logoPath = "images/jazz-logo.png";
	}
	else if ($routeParams.team === "losangeleslakers") {
		$scope.homeTeam = "Los Angeles Lakers";
		$scope.logoPath = "images/lakers-logo.png";
	}
	else if ($routeParams.team === "miamiheat") {
		$scope.homeTeam = "Miami Heat";
		$scope.logoPath = "images/heat-logo.png";
	}

	$scope.submitGame = function(){
		$scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
		teamService.addNewGame($scope.newGame).then(function(){
			teamService.getTeamData($scope.newGame.homeTeam).then(function(response){	// What is response doing?
					$scope.teamData = response;	// Set $scope.teamData equal to the data you got back from the promise. // WHICH promise?
				console.log("New game object", $scope.newGame);

					$scope.newGame = {};
					$scope.showNewGameForm = false;
			});
		});
		
	};
	// console.log("New game:", $scope.newGame);

	// console.log($scope.teamData);

});	// end app.controller

