
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

   // it('should push milk into the array', ()=>{
   //  let milkItem = new ShoppingListItem('milk', 'good for your bones');
   //  newShoppingList.addItem(milkItem);
   //  newShoppingList.should.contain(milkItem);
   //  milkItem.should.be.an.instanceof(ShoppingListItem);
   //  });

   it('should push milk into the array', ()=>{
    var milk = new ShoppingListItem('milk', 'organic');
    newShoppingList.addItem(milk);
    newShoppingList.items.includes(milk).should.equal(true);
   });

   it('should throw an error', ()=>{
    newShoppingList.addItem.should.throw(Error);
   });

   it('should have a removeItem method', ()=>{
    newShoppingList.removeItem.should.be.a.function;
   });

   it('should remove butter from the array', ()=> {
     var butterItem = new ShoppingListItem('butter', 'oh so buttery');
    newShoppingList.addItem(butterItem);
    var breadItem = new ShoppingListItem('bread', 'goes well with butter');
    newShoppingList.addItem(breadItem);
    // console.log(newShoppingList.items);
   
    // console.log(newShoppingList.items);
    
    var cheeseItem = new ShoppingListItem('cheese', 'so yummy');
    newShoppingList.addItem(cheeseItem);
    // console.log(newShoppingList.items);
    newShoppingList.removeItem(butterItem);
      // newShoppingList.items.includes(butterItem).should.equal(false);
      console.log(newShoppingList);
    newShoppingList.items.should.not.contain(butterItem);
    });
    
    it('should remove milk from the array', ()=>{
      var breadItem = new ShoppingListItem('bread', 'goes well with butter');
    newShoppingList.addItem(breadItem);
    var milkItem = new ShoppingListItem('milk', 'lani moo');
    newShoppingList.addItem(milkItem);
    newShoppingList.removeItem();
    newShoppingList.items.includes(milkItem).should.equal(false);
    });

    it('should throw an error', ()=>{
    newShoppingList.removeItem.should.throw(Error);
   });

    it('should have a method named render', ()=>{
      newShoppingList.render.should.be.a.function;
    });

   




});