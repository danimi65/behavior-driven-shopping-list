class ShoppingList{
  constructor(){
    this.items = [];
  }
  addItem(items){
    if(items instanceof ShoppingListItem){
      this.items.push(items);
    }
    else{
      throw Error(`${items} is not an items.`);
    }
  }
  removeItem(ShoppingListItem){
    if(this.items.indexOf(ShoppingListItem) !== -1){
      this.items.splice(indexOf(ShoppingListItem), 1);
    }if(arguments.length === 0){
      this.items.pop();
    }else{
      throw Error(`${ShoppingListItem} is not an items.`);
    }
  }
  render(){
    var shoppingListHTML = [];
    for(var i = 0; i < this.items.length - 1; i++ ){
      shoppingListHTML.push(this.items[i]);
    }
    return `<ul>${shoppingListHTML.join('')}</ul>`;
  }
}