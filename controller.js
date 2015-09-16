angular.module('myFirstApp')
.controller('myController', function($scope, personService){
	$scope.firstName = 'Juan';
	$scope.lastName = 'Ulises';

	$scope.printName = function(){
		return personService.printName($scope.firstName, $scope.lastName);
	} 
})
.controller('AboutCtrl', ['$scope', '$routeParams', function($scope, $routeParams){

	$scope.input = $routeParams.parm1;

}])
.controller('ContactCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.input = $routeParams.parm2;
}])
;