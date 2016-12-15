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
      for(var i = 0; i < this.items.length; i++){
        if (this.items[i].id === item.id){
          this.items.splice(i, 1);
        }
      }
    }else if(arguments.length === 0){
      this.items.pop();
    }else{
      throw Error('this is not an item.');
    }
  }

  render(){
    let list = document.createElement('ul');
    for(var i = 0; i < this.items.length; i++ ){
      let renderedItem = this.items[i].render();
      list.appendChild(renderedItem);
    }
    return list;
  }
}