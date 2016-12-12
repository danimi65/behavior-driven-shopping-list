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
    let itemHTML = [];
    for(var i = 0; i < this.items.length - 1; i++ ){
      let renderedItem = this.items[i].render();
      itemHTML.push(renderedItem);
    }
    return `<ul>${itemHTML.join('')}</ul>`;
  }
}