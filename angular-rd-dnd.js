(function() {
	"use strict";
	angular.module("angularRdDnd", []);
	
	/**
	 * Directive rdDndDraggable
	 * allows element to be draggable.
	 */	
	angular.module("angularRdDnd").directive("rdDndDraggable", rdDndDraggable);
	
	function rdDndDraggable($rootScope) {
	
		return function (scope, element, attr) {
							
				/**
				 * HTML5 draggable attribute set to true
				 */  
				element.attr("draggable", "true");
				
				/**
				 * event when mouse over the draggable element
				 */
				element.on("mouseover", function(event) {
					// cursor move when mouse over draggable element
					element.css("cursor", "move");
				});
				
				/**
				 * event when drag operation is started
				 * setting dataTransfer Object for firefox
				 */
				element.on("dragstart", function(event) {
					event.dataTransfer.setData("text/plain", ""); // firefox necessary
					//save object dragged in rootscope
					$rootScope.rdModelDraggedElement = scope.$eval(attr.rdDndDraggable);
					// save index of object dragged (in dropzone table content) in rootscope
					$rootScope.rdModelDraggedElementIndex = scope.$eval(attr.rdDndDraggableIndex);
					event.stopPropagation();
				});
				
				
			}
		}
	
	/**
	 * Directive rdDndDropZone
	 * allows element to be a dropzone
	 */
	angular.module("angularRdDnd").directive("rdDndDropZone", rdDndDropZone);
	
	function rdDndDropZone($rootScope, $parse) {
		
		return function (scope, element, attr) {
			
				/**
				 * event when click on a drop zone
				 * to memory the original dropzone of drag and drop
				 */
				element.on("mousedown", function(event) {
					// save model content original dropzone of drag and drop
					$rootScope.rdModelDragFromDropZone = attr.rdDndDropZone;
				});
				
				/**
				 * event when drag over the dropzone
				 */
				element.on('dragover', function(event) {
					
					event.preventDefault(); // allows drop
	                if(attr.rdDndDragoverClass) {
	                	// add styles drag_over
	                	element.addClass(attr.rdDndDragoverClass);
	                } else {
	                	// add styles drag_over
	                	element.css("background", "#eee");
	                	element.css("border", "3px dashed #ddd");
	                	element.css("box-shadow", "0 0 2em rgba(0, 0, 0, 0.3) inset");
	                }
	                event.stopPropagation();
	            });
				
				/**
				 * event when leave the dropzone
				 */
				element.on('dragleave', function(event) {
					// remove class "drag_over" or class defined by user
	                if(attr.rdDndDragoverClass) {
	                	element.removeClass(attr.rdDndDragoverClass);
	                } else {
	                	// delete styles drag_hover
	                	element.css("background", "");
	                	element.css("border", "");
	                	element.css("box-shadow", "");
	                }
	                event.stopPropagation();
	            });
				
				/**
				 * event when drop element
				 */
				element.on('drop', function(event) {
					event.preventDefault(); // allows drop
					// remove class "drag_over" or class defined by user
	                if(attr.rdDndDragoverClass) {
	                	element.removeClass(attr.rdDndDragoverClass);
	                } else {
	                	// delete styles drag_hover
	                	element.css("background", "");
	                	element.css("border", "");
	                	element.css("box-shadow", "");
	                }
	                // add the element on target dropzone
	                scope.$eval(attr.rdDndDropZone).push($rootScope.rdModelDraggedElement);
	                // remove the element on original dropzone
	                scope.$eval($rootScope.rdModelDragFromDropZone).splice($rootScope.rdModelDraggedElementIndex, 1);
	                // apply on scope
	                scope.$apply(); 
	                
	                event.stopPropagation();
	                
	            });
				
			}
		
	}
	
		
})();
