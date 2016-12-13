
let content = document.getElementById('content');
let myShoppingList = new ShoppingList;

let nameInput = document.createElement('input');
nameInput.className ='input';
content.appendChild(nameInput);

let descriptionInput = document.createElement('input');
descriptionInput.className ='input';
content.appendChild(descriptionInput);

let addListItemButton = document.createElement('button');
content.appendChild(addListItemButton);
addListItemButton.innerHTML = 'Add To Shopping List';
addListItemButton.addEventListener('click', () => {
let newItem = new ShoppingListItem(nameInput.value, descriptionInput.value);
  myShoppingList.items.push(newItem);
  nameInput.value = null;
  descriptionInput.value = null;
  shoppingListContainer.innerHTML = myShoppingList.render();
});

let shoppingListContainer = document.createElement('div');
shoppingListContainer.className = 'shoppingListContainer';
content.appendChild(shoppingListContainer);