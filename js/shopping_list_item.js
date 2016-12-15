class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
    this.id = `id${Date.now()}`,

    this.element = null;
  }

  check(){
    this.is_done = true;


  }

  uncheck(){
    this.is_done = false;

  }

  removeMyElement(){
    this.element.remove();
  }

  render(){
    this.element = document.createElement('li');
    this.element.className = 'completed_' + this.is_done;
    this.element.dataset.id = this.id;

    let nameSpan = document.createElement('span');
    nameSpan.innerHTML = this.name + ': ';
    this.element.appendChild(nameSpan);

    let descriptionSpan = document.createElement('span');
    descriptionSpan.innerHTML = this.description;
    this.element.appendChild(descriptionSpan);

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'checkBox';
    checkBox.onchange = function(){
      changeCheckedStatus();
    };
    this.element.appendChild(checkBox);

    let removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener('click', () => {
      myShoppingList.removeItem(this);
      this.removeMyElement();
    });
    this.element.appendChild(removeButton);

    return this.element;
  }
}