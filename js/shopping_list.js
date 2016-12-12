class ShoppingList{
  constructor(){
    this.items = [];
  }
  addItem(item){
    if(item instanceof ShoppingListItem){
      this.items.push(item);
    }
    else{
      throw Error(`${item} is not an item.`);
    }
  }
  removeItem(ShoppingListItem){
    if(this.items.indexOf(ShoppingListItem) !== -1){
      this.items.splice(indexOf(ShoppingListItem), 1);
    }if(arguments.length === 0){
      this.items.pop();
    }else{
      throw Error(`${ShoppingListItem} is not an item.`);
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