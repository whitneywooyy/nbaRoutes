var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){
	this.getTeamData = teamService.getTeamData;
	// console.log("Something", this.getTeamData);
});