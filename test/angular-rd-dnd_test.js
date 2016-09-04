
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
	  console.log(draggable);
    expect(draggable.attr("draggable")).toBe('true');
  });

});

describe('test rdDndDropZone directive', function() {

  it('will be the firt test', function() {
    expect('true').toBe('true');
  });

 
});