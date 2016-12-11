const should = chai.should();
const expect = chai.expect();

describe('shoppingListItem', () => {
  let listItem = new ShoppingListItem();
  it('should be a class', ()=>{
    //should.be.a.function
    ShoppingListItem.should.be.a.function;
  });
});