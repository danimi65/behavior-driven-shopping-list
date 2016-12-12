// const should = chai.should();
const expect = chai.expect();

describe('shoppingList',() =>{

  let newShoppingList;

  beforeEach(()=>{
    newShoppingList = new ShoppingList('veggies', 'fruits');
  });

  it('should be a class', ()=>{
    newShoppingList.should.be.a.function;
  });

  it('should have a property named items', ()=>{ newShoppingList.should.have.property('items');
  });

  it('should contain an empty array', ()=>{
    newShoppingList.items.should.be.an('array');
    newShoppingList.items.should.deep.equal([]);
  });

   it('should have a method named addItem', ()=>{
    expect(newShoppingList.addItem).to.be.a.function;
   });

   it('should push milk into the array', ()=>{
    newShoppingList.addItem();
    shoppingList.items.should.be.an.instanceof(ShoppingListItem.name);
    shoppingList.items.push('milk');
   });
   it('should throw an error', ()=>{
    newShoppingList.addItem.should.throw(Error);
   });

   it('should have a removeItem method', ()=>{
    expect(newShoppingList.removeItem).to.be.a.function;
   });

   it('should remove fruits from the array', ()=> {
    let newShoppingList = new ShoppingList(['bread', 'butter', 'milk']);
    newShoppingList.removeItem();
    newShoppingList.items.should.be.an.instanceof(ShoppingListItem.name);
    newShoppingList.items.splice(newShoppingList.items.idexOf('butter', 1));
    it('should throw an error', ()=>{
    newShoppingList.removeItem.should.throw(Error);
   });

    it('should have a method named render', ()=>{
      expect(newShoppingList.render).to.be.a.function;
    });

   });




});