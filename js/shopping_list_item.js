class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check(){
    this.is_done = true;


  }

  uncheck(){
    this.is_done = false;

  }

  render(){
    let shoppingListItemsHTML = document.createElement('li');
    shoppingListItemsHTML.className = 'completed_' + this.is_done;

    let nameSpan = document.createElement('span');
    nameSpan.innerHTML = this.name;
    shoppingListItemsHTML.appendChild(nameSpan);

    let descriptionSpan = document.createElement('span');
    descriptionSpan.innerHTML = this.description;
    shoppingListItemsHTML.appendChild(descriptionSpan);

    return shoppingListItemsHTML.outerHTML;

    }
}