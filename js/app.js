let content = document.getElementById('content');

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
  // do something with values in name and desc inputs

});
