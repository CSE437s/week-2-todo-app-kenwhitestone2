var test1 = 123;
let testItems = ['item1', 'item2', 'item3', 'item4']

function addItem(){
  const inputElement = document.getElementById('add-item-text')
  const text = inputElement.value;
  console.log(text);
  testItems.push(text);
  console.log(testItems);

  const listItem = document.createElement("li");
  listItem.classList.add('list-item');
  const textnode = document.createTextNode(text);
  console.log('textnode');

  listItem.appendChild(textnode);
  document.getElementById("todo-list").appendChild(listItem);

  inputElement.value = '';
}

function printList(){

  for (i = 0; i < testItems.length; i++){

    console.log(testItems[i]);
    const listItem = document.createElement("li");
    listItem.classList.add('list-item');
    const text = document.createTextNode(testItems[i]);
  
    listItem.appendChild(text);
    document.getElementById("todo-list").appendChild(listItem);
  
  
  }
}

printList();
