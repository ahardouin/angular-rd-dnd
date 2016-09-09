
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

describe('test rdDndDropZone directive', function() {
	
	beforeEach(module('angularRdDnd')); 
	beforeEach(inject(function($rootScope, $compile) {
	  scope = $rootScope.$new();
	  scope.content = [ {title: "Draggable E", content: "draggable item content" }, 
	                    {title: "Draggable F", content: "draggable item content" }];
	  dropZone = $compile('<div rd-dnd-drop-zone="content" rd-dnd-dragover-class="drag_over"><div>')(scope);
	  scope.$digest();
	}));
	
	it('doit changer de classe CSS si dragover', function() {
		dropZone.triggerHandler('dragover');
		expect(dropZone.hasClass('drag_over')).toBeTruthy();
	});

 
});