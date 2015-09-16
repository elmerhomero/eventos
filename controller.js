angular.module('eventApp')
.controller('formCtrl', function($scope){
	
	$scope.event = [];

	$scope.submitForm = function(form){
		$scope.event.push(angular.copy(form));
		console.log($scope.event);
	}
})
;