const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const edit = document.querySelector('.edit');
let count = 1

let addTodo = (task) => {
    let addelement = document.createElement('li')
    let text = document.createTextNode("Id Number: " + count + ' ' + task);
    addelement.appendChild(text)
    
    let under = document.getElementById('ele');
    under.appendChild(addelement)
    
    addelement.setAttribute('id', count)
    count = count + 1
}

let removeFunc = (enterId) => {
    getId = document.getElementById(enterId)

    if (!getId) {
        alert('The Id you enterd is invalid, please check again')
    } else {
        getId.remove()
    }
}

let editFunc = (enterId, editedText) => {
    getId = document.getElementById(enterId)
    getId.innerHTML = "Id Number: " + enterId +" " + editedText
}


add.onclick = () => {
    const task = prompt('Add a task', );
    addTodo(task)
}

remove.onclick = () => {
    const enterId = prompt('Enter Id you want t delete: ')
    removeFunc(enterId)
}

edit.onclick = () => {
    const getId = prompt('Enter the id you want to edit: ')
    const editedText = prompt('')
    editFunc(getId, editedText)
}