angular.module('eventApp')
.controller('formCtrl', ['eventFactory', '$scope', function(eventFactory, $scope){
	$scope.formCtrl = this;
	
	this.event = eventFactory.getAllEvents();
	
	this.categories = [
		{id:1, name:'Music', group:'Main'},
		{id:2, name:'Cinema', group:'Main'},
		{id:3, name:'Games', group:'Second'},
		{id:4, name:'Special', group:'Second'}
	]


	this.submitForm = function(form){
		eventFactory.createEvent(angular.copy(form), this.event);
		console.log(this.event);
	}
} ])
;