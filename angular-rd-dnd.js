(function() {
	"use strict";
	angular.module("angular-rd-dnd", []);
	
	/**
	 * Directive rdDndDraggable
	 * allows element to be draggable.
	 */	
	angular.module("angular-rd-dnd").directive("rdDndDraggable", rdDndDraggable);
	
	function rdDndDraggable() {
		return function (scope, element, attr) {
				
			/**
			 * HTML5 draggable attribute set to true
			 */  
			element.attr("draggable", "true");
			
			/**
			 * event when drag operation is started
			 * setting dataTransfer Object for firefox
			 */
			element.on("dragstart", function(event) {
				event.dataTransfer.setData("text/plain", ""); // firefox necessary
			});
		}
	}
	
	/**
	 * Directive rdDndDropZone
	 * allows element to be a dropzone
	 */
	angular.module("angular-rd-dnd").directive("rdDndDropZone", rdDndDropZone);
	
	function rdDndDropZone() {
		return function (scope, element, attr) {
				
			/**
			 * event when drag over the dropzone
			 */
			element.addEventListener('dragover', function(event) {
				event.preventDefault();
                element.className = 'dropper drop_hover'; 
            });
		}
	}
	
		
})();
