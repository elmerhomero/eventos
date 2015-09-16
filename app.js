angular.module('myFirstApp', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		.when('/about/:parm1', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		})
		.when('/contact/:parm2', {
			templateUrl: 'views/contact.html',
			controller: 'ContactCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})

		$locationProvider.html5Mode(true);
}])

.factory('personService', function(){
	var person = {};
	person.printName = function(firstName, lastName){
		return firstName + ' ' + lastName;
	}
	return person;
});