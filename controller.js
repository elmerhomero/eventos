angular.module('eventApp')
.controller('formCtrl', ['eventFactory', '$scope', function(eventFactory, $scope){
	$scope.formCtrl = this;
	
	this.event = eventFactory.getAllEvents();

	this.categories = [
		{id:1, name:'Music'},
		{id:2, name:'Cinema'},
		{id:3, name:'Games'},
		{id:4, name:'Special'}
	];

	this.selectedOption = {id:1, name:'Music', group:'Main'};


	this.submitForm = function(form){
		form.category = this.selectedOption.id;
		eventFactory.createEvent(angular.copy(form), this.event);
		console.log(this.event);
	}
} ])
;