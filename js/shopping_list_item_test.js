const should = chai.should();
// const expect = chai.expect();

describe('shoppingListItem', () => {


  let newList = new ShoppingListItem();

  // beforeEach(function(){
  //   var newList = new ShoppingListItem();
  // });

  it('should be a class', ()=>{
    newList.should.be.a.function
  });
  it('should have a property named name', ()=>{
    newList.should.have.property('name');
    newList.name.should.be('string');
  });
  it('should have a property named description', ()=>{
    newList.should.have.property('description');
    newList.description.should.be('string');
  });
  it('should have a property named is_done', ()=>{
    newList.should.have.property('is_done');
    newList.is_done.should.be('boolean');
  });
  it('should have a constructor that accepts two arguments: name and description', ()=>{
    newList.should.have.property('name', 'description');
  });
  it('the constructor method sets the new instances name and description properties using the arguments passed in', ()=>{
    var myList = new ShoppingListItem('Celery', 'Extra Green');
    myList.name.should.be.equal('Celery');
    myList.description.should.be.equal('Extra Green');
  });
  it('has a method named check', ()=>{
    newList.should.have.property('check');
    newList.render.should.be('function');
  });
  it('it should set the is_done property to true', ()=>{
    newList.check();
    newList.is_done.should.be.equal(true);
  });
  it('has a method named uncheck', ()=>{
    newList.should.have.property('uncheck');
    newList.render.should.be('function');
  });
  it('it should set the is_done property to false', ()=>{
    newList.uncheck();
    newList.is_done.should.be.equal(false);
  });
  it('has a method named render', ()=>{
    newList.has.property('render');
    newList.render.should.be('function');
  });
  it('will construct and return an html formatted string', ()=>{
    newList.render();
    newList.render.should.be('string');
  });
});