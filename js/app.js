
let content = document.getElementById('content');
let myShoppingList = new ShoppingList;
const nameInput = document.getElementById('itemName');
const descriptionInput = document.getElementById('itemDescription');

const shoppingListContainer = document.createElement('div');
shoppingListContainer.className = 'shoppingListContainer';
content.appendChild(shoppingListContainer);

function addToShoppingList(){
  let newItem = new ShoppingListItem(nameInput.value, descriptionInput.value);
  myShoppingList.addItem(newItem);
  nameInput.value = null;
  descriptionInput.value = null;
  shoppingListContainer.innerHTML = '';
  shoppingListContainer.appendChild(myShoppingList.render());

}

let addListItemButton = document.getElementById('add_shopping_list_button');
addListItemButton.addEventListener('click', addToShoppingList);

function changeCheckedStatus(item){
  if(item.is_done === false){
    item.check();
  }else if(item.is_done === true){
    item.uncheck();
  }
}