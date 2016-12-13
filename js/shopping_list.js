class ShoppingList{
  constructor(){
    this.items = [];
  }
  addItem(item){
    if(item instanceof ShoppingListItem){
      this.items.push(item);
    }
    else{
      throw Error(`${items} is not an items.`);
    }
  }
  removeItem(item){
    if(item instanceof ShoppingListItem && this.items.indexOf(item) > -1){
      this.items.splice(indexOf(item), 1);
    }if(arguments.length === 0 && item === undefined){
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