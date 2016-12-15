class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;


    this.element = null; //will be set in render()
  }

  check(){
    this.is_done = true;


  }

  uncheck(){
    this.is_done = false;

  }

  removeMyElement(){
    this.element.remove();
    // override in shopping list
    // console.log('should not be here');
  }

  render(){
    this.element = document.createElement('li');
    this.element.className = 'completed_' + this.is_done;

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
    // checkBox.type = 'checkbox';
    // checkBox.className = 'checkBox';
    removeButton.innerHTML = "remove";
    removeButton.addEventListener('click', () => {
      console.log('clicked removeButton');
      this.removeMyElement();
    });

    this.element.appendChild(removeButton);

    return this.element;
    // return shoppingListItemsHTML.outerHTML; converting a DOM element to string form removes all listeners
  }
}