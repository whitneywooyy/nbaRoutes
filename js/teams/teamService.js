var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){
	this.addNewGame = function(gameObj){
		var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
		var homeScoreInt = parseInt(gameObj.homeTeamScore);
		var opponentScoreInt = parseInt(gameObj.opponentScore);
			if (homeScoreInt > opponentScoreInt) {
				gameObj.won = true;
			}
			else {
				gameObj.won = false;
			}
		return $http({
			method: "POST",
			url: url,
			data: gameObj
		})
	}	// End this.addNewGame

	this.getTeamData = function(team){
		var dfd = $q.defer();
		var url = "https://api.parse.com/1/classes/" + team;
		$http({
			method: "GET",
			url: url
		}).then(function(data){
			// console.log("Data: ", data);
			var results = data.data.results;
			// console.log("Results before: ", results);
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {
				if (results[i].won) {
					wins++;
				}
				else if (!results[i].won) {
					losses++;
				}
			}
			results.wins = wins;
			results.losses = losses;
			// console.log("Wins:" + wins);
			// console.log("Losses: " + losses)
			// console.log(results);
			dfd.resolve(results);
		})

		return dfd.promise;

	}	// End this.getTeamData

});	// End app.service