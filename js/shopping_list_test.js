
describe('ShoppingList',() =>{

  let newShoppingList;

  beforeEach(()=>{
    newShoppingList = new ShoppingList();
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
    newShoppingList.addItem.should.be.a.function;
   });

   it('should push milk into the array', ()=>{
    let milkItem = new ShoppingListItem('milk', 'good for your bones');
    newShoppingList.addItem(milkItem);
    newShoppingList.should.contain(milkItem);
   //  milkItem.should.be.an.instanceof(ShoppingListItem);
    });

   it('should throw an error', ()=>{
    newShoppingList.addItem.should.throw(Error);
   });

   it('should have a removeItem method', ()=>{
    newShoppingList.removeItem.should.be.a.function;
   });

   it('should remove butter from the array', ()=> {
    let breadItem = new ShoppingListItem('bread', 'goes well with butter');
    newShoppingList.addItem(breadItem);
    let butterItem = new ShoppingListItem('butter', 'oh so buttery');
    newShoppingList.addItem(butterItem);
    let cheeseItem = new ShoppingListItem('cheese', 'so yummy');
    newShoppingList.addItem(cheeseItem);
    newShoppingList.removeItem(butterItem);
    
    it('should remove milk from the array', ()=>{
      let newShoppingList = new ShoppingList(['bread', 'butter', 'milk']);
      newShoppingList.removeItem();
      // newShoppingList.items.should.be.an.instanceof(ShoppingListItem);
      newShoppingList.items.pop();

    });
    it('should throw an error', ()=>{
    newShoppingList.removeItem.should.throw(Error);
   });

    it('should have a method named render', ()=>{
      newShoppingList.render.should.be.a.function;
    });

   }); 




});