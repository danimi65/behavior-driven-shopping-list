
describe('shoppingList',() =>{

  let newShoppingList;

  beforeEach(()=>{
    newShoppingList = new ShoppingList('veggies', 'fruits');
  });

  it('should be a class', ()=>{
    ShoppingList.should.be.a.function;
  });

  it('should have a property named items', ()=>{ newShoppingList.should.have.property('items');
  });

  it('should contain an empty array', ()=>{
    newShoppingList.items.should.be.an('array');
    newShoppingList.items.should.deep.equal([]);
  });

   it('should have a method named addItem', ()=>{
    newShoppingList.addItem.should.be.a.function;
   });

   it('should push milk into the array', ()=>{
    newShoppingList.addItem();
    newShoppingList.items.should.be.an.instanceof(ShoppingListItem.name);
    newShoppingList.items.push('milk');
   });
   it('should throw an error', ()=>{
    newShoppingList.addItem.should.throw(Error);
   });

   it('should have a removeItem method', ()=>{
    newShoppingList.removeItem.should.be.a.function;
   });

   it('should remove butter from the array', ()=> {
    let newShoppingList = new ShoppingList(['bread', 'butter', 'milk']);
    newShoppingList.removeItem();
    newShoppingList.items.should.be.an.instanceof(ShoppingListItem.name);
    newShoppingList.items.splice(newShoppingList.items.indexOf('butter', 1));
    it('should remove milk from the array', ()=>{
      let newShoppingList = new ShoppingList(['bread', 'butter', 'milk']);
      newShoppingList.removeItem();
      newShoppingList.items.should.be.an.instanceof(ShoppingListItem.name);
      newShoppingList.items.pop();

    })
    it('should throw an error', ()=>{
    newShoppingList.removeItem.should.throw(Error);
   });

    it('should have a method named render', ()=>{
      newShoppingList.render.should.be.a.function;
    });

   }); 




});