
let content = document.getElementById('content');
let myShoppingList = new ShoppingList;
const nameInput = document.getElementById('itemName');
const descriptionInput = document.getElementById('itemDescription');


function addToShoppingList(){
  let newItem = new ShoppingListItem(nameInput.value, descriptionInput.value);
  myShoppingList.addItem(newItem);
  nameInput.value = null;
  descriptionInput.value = null;
  shoppingListContainer.appendChild(myShoppingList.render());

}

let addListItemButton = document.getElementById('add_shopping_list_button');
addListItemButton.addEventListener('click', addToShoppingList);

function changeCheckStatus(idx, checkbox){
  

}

let shoppingListContainer = document.createElement('div');
shoppingListContainer.className = 'shoppingListContainer';
content.appendChild(shoppingListContainer);