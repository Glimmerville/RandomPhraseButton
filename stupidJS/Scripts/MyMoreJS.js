function makeNewItem() {
    //find the list element
    var list = document.getElementById('todolist');
    //create new li elemnt
    var newItem = document.createElement('li');

    //put text in the new li
    newItem.innerHTML = 'Toast';

    //put new elment in the list
    list.appendChild(newItem);
}
function removeItem() {
    //find the list element
    var list = document.getElementById('todolist');
    //find the first item
    list.firstChild.remove();
}