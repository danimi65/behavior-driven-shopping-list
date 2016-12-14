
let content = document.getElementById('content');
let myShoppingList = new ShoppingList;

let nameInput = document.createElement('input');
nameInput.className ='nameInput';
// nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Name');
content.appendChild(nameInput);

let descriptionInput = document.createElement('input');
descriptionInput.className ='descriptionInput';
// descriptionInput.setAttribute('type', 'text');
descriptionInput.setAttribute('placeholder', 'Description');
content.appendChild(descriptionInput);

function addToShoppingList(){
  let newItem = new ShoppingListItem(nameInput.value, descriptionInput.value);
  myShoppingList.addItem(newItem);
  nameInput.value = null;
  descriptionInput.value = null;
  shoppingListContainer.innerHTML = myShoppingList.render();
}

let addListItemButton = document.createElement('button');
content.appendChild(addListItemButton);
addListItemButton.innerHTML = 'Add To Shopping List';
addListItemButton.addEventListener('click', addToShoppingList);

function changeCheckStatus(idx, checkbox){

}

let shoppingListContainer = document.createElement('div');
shoppingListContainer.className = 'shoppingListContainer';
content.appendChild(shoppingListContainer);