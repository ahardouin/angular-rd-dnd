(function(){
	"use strict";
	angular
    .module("demoAngularRdDnd")
    .controller("DemoCtrl", DemoCtrl);

	function DemoCtrl($scope, $rootScope) { 
		var vm = this;
		vm.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
				"In non ligula odio. Nullam aliquam lorem quis vehicula gravida. " +
				"Morbi pellentesque orci vel tempus tempor. Nam aliquam non augue quis vulputate.";
		vm.title = "Angular Rd Dnd - Drag And Drop with HTML5";
		vm.description = "Simple angular directive to use HTML5 Drag and Drop API. " +
				"This example use bootstrap panels to drag and bootstrap bodys panel as drop zone. " +
				"You can override style when drag over a drop zone by specify class " +
				"in rd-dnd-dragover-class attribute.";
		
		$rootScope.models = {
				dropZoneA : { title : "DropZoneA",
							  content : [ {title: "Draggable A",
								  		   content: vm.lorem }, 
								  		 {title: "Draggable B",
									  	   content: vm.lorem }]},
				dropZoneB : { title : "DropZoneB",
		  					  content : [ {title: "Draggable C",
		  						  			content: vm.lorem }, 
		  						  			{title: "Draggable D",
		  						  			content: vm.lorem }]},
		  		dropZoneC : { title : "DropZoneC",
				  content : [ {title: "Draggable E",
					  			content: vm.lorem }, 
					  			{title: "Draggable F",
					  			content: vm.lorem }]}
		};
		
		
		// Model to JSON for demo purpose
		$scope.$watch('models', function(model) {
	    	vm.modelAsJson = angular.toJson(model, true);
	    }, true);
	}
	
})();

