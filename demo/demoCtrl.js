(function(){
	"use strict";
	angular
    .module("demoAngularRdDnd")
    .controller("DemoCtrl", DemoCtrl);

	function DemoCtrl($scope) { 
		var vm = this;
		vm.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
				"In non ligula odio. Nullam aliquam lorem quis vehicula gravida. " +
				"Morbi pellentesque orci vel tempus tempor. Nam aliquam non augue quis vulputate.";
		vm.title = "Angular Rd Dnd - Drag And Drop with HTML5";
		vm.description = "Simple angular directive to use HTML5 Drag and Drop API. " +
				"This example use bootstrap panels elements to drag and bootstrap bodys panel as drop zone. " +
				"You can override style when drag over a drop zone by specify class " +
				"in rd-dnd-dragover-class attribute.";
	}
	
})();

