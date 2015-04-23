var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
  $routeProvider
  .when('/', {
  	templateUrl: "js/home/homeTmpl.html",
  	controller: "homeCtrl",
    resolve: {
      teamData: function($route, homeService){
        return homeService.getTeamData($route.current.params.team);
      }
    }
  })
  .when('/teams/:team', {
  	templateUrl: "js/teams/teamTmpl.html",
  	controller: "teamCtrl",
  	resolve: { // Resolve always runs before the page loads!
  		teamData: function($route, teamService){
  			return teamService.getTeamData($route.current.params.team);
  		}
  	}
  })
  .otherwise({
	redirectTo: '/'
  })


});	// End app.config