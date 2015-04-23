var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, teamData){
	$scope.teamData = teamData;
	// $scope.newGame = {};
	console.log(teamData);

	if ($scope.utahjazz) {
		$scope.homeTeam = "Utah Jazz";
		$scope.logoPath = "images/jazz-logo.png";
	}
	else if ($scope.team === "losangeleslakers") {
		$scope.homeTeam = "Los Angeles Lakers";
		$scope.logoPath = "images/lakers-logo.png";
	}
	else if ($scope.team === "miamiheat") {
		$scope.homeTeam = "Miami Heat";
		$scope.logoPath = "images/heat-logo.png";
	}
});