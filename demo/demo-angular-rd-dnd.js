(function() {
	"use strict";
	angular.module("demoAngularRdDnd", ["ui.router","angularRdDnd"]);
		
	angular.module("demoAngularRdDnd").config(
			function($stateProvider, $urlRouterProvider) {
				
				$urlRouterProvider
					.when("/","/demo")
					.otherwise("/demo");

				$stateProvider.state("demo", {
					url : "/demo",
					templateUrl : "demo/demo.html"
					
				});		
				
			});
	
})();
