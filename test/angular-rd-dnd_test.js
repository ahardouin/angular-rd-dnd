
describe('test rdDndDraggable directive', function() {
	
  beforeEach(module('angularRdDnd')); 
  beforeEach(inject(function($rootScope, $compile) {
	  scope = $rootScope.$new();
	  scope.index = 1;
	  scope.item = {
			  title: "draggable item title",
	  		  content: "draggable item content" };
	  draggable = $compile('<div rd-dnd-draggable="item" rd-dnd-draggable-index="index"></div>')(scope);
	  scope.$digest();
	}));

  it('should have draggable attribute to be true', function() {
    expect(draggable.attr("draggable")).toBe('true');
  });

});

describe('test rdDndDropZone and rdDndDraggable  directives', function() {
	
	beforeEach(module('angularRdDnd')); 
	beforeEach(inject(function($rootScope, $compile) {
	  scope = $rootScope.$new();
	  $rootScope.rdModelDraggedElement = {
			  title: "draggable item title",
	  		  content: "draggable item content" };
	  $rootScope.rdModelDragFromDropZone = "content1";
	  $rootScope.rdModelDraggedElementIndex = "1";
	  
	  scope.content = [{title: "Draggable E", content: "draggable item content" }, {title: "Draggable F", content: "draggable item content" }];
	  scope.content1 = [{title: "draggable item title", content: "draggable item content" }];
	 
	  dropZone = $compile('<div rd-dnd-drop-zone="content" rd-dnd-dragover-class="drag_over"><div>')(scope);
	  dropZone1 = $compile('<div rd-dnd-drop-zone="content1"><div>')(scope);
	  scope.$digest();
	}));
	
	it('must apply class specify in attribute rd-dnd-dragover-class when dragover', function() {
		dropZone.triggerHandler('dragover');
		dropZone1.triggerHandler('dragover');
		expect(dropZone.hasClass('drag_over')).toBeTruthy();
		expect(dropZone1.hasClass('drag_over')).toBeFalsy();
	});
	
	it('must remove class specify in attribute rd-dnd-dragover-class when dragleave', function() {
		dropZone.triggerHandler('dragover');
		expect(dropZone.hasClass('drag_over')).toBeTruthy();
		dropZone.triggerHandler('dragleave');
		expect(dropZone.hasClass('drag_over')).toBeFalsy();
	});
	
	it('must add dragged element when drop on dropzone', function() {
		dropZone.triggerHandler('drop');
		expect(scope.content).toEqual([ {title: "Draggable E", content: "draggable item content" }, 
		     	                    {title: "Draggable F", content: "draggable item content" },
		     	                   {title: "draggable item title", content: "draggable item content" }
		     	                    ]);
	});
 
});