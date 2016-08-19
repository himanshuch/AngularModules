var app = angular.module('myApp',[]);
app.config(function(ngRoute){
	$routeProvider
	.when('/page1',
	{
		controller:'ctrl1',
		template:'partials/page1.html'
	})
	.when('/page2',
	{
		controller:'ctrl2',
		template:'partials/page2.html'
	})
	.otherwise({redirectTo: '/page1'})

})