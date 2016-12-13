const should = chai.should();
const expect = chai.expect();

describe('ShoppingListItem', () => {


  let newList = new ShoppingListItem();

  // beforeEach(function(){
  //   var newList = new ShoppingListItem();
  // });

  it('should be a class', ()=>{
    newList.should.be.a.function
  });
  it('should have a property named name', ()=>{
    newList.should.have.property('name');
  });
  it('should have a property named description', ()=>{
    newList.should.have.property('description');
  });
  it('should have a property named is_done', ()=>{
    newList.should.have.property('is_done');
  });
  it('should have a constructor that accepts two arguments: name and description', ()=>{
    var testItem = new ShoppingListItem("newName", "newDescription");
    testItem.should.have.property('name');
    testItem.name.should.equal('newName');
    testItem.should.have.property('description');
    testItem.description.should.equal('newDescription');
  });
  it('the constructor method sets the new instances name and description properties using the arguments passed in', ()=>{
    var myList = new ShoppingListItem('Celery', 'Extra Green');
    myList.name.should.be.equal('Celery');
    myList.description.should.be.equal('Extra Green');
  });
  it('has a method named check', ()=>{
    newList.should.have.property('check');
    newList.check.should.be.a.function;
  });
  it('it should set the is_done property to true', ()=>{
    newList.check();
    newList.is_done.should.be.equal(true);
  });
  it('has a method named uncheck', ()=>{
    newList.should.have.property('uncheck');
    newList.uncheck.should.be.function;
  });
  it('it should set the is_done property to false', ()=>{
    newList.uncheck();
    newList.is_done.should.be.equal(false);
  });
  it('has a method named render', ()=>{
    newList.should.have.property('render');
    newList.render.should.be.function;
  });
  it('will construct and return an html formatted string', ()=>{
    var htmlOutput = newList.render();
    htmlOutput.should.be.string;
  });
});


