const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const edit = document.querySelector('.edit');
let count = 1

let addTodo = (task) => {
    let addelement = document.createElement('li')
    let text = document.createTextNode("ID: " + count + ' ' + task);
    addelement.appendChild(text)
    
    let under = document.getElementById('ele');
    under.appendChild(addelement)
    
    addelement.setAttribute('id', count)
    count = count + 1
    document.getElementById('text').value = "";

}

let removeFunc = (enterId) => {
    getId = document.getElementById(enterId)
    console.log(getId, enterId)
    if (!getId) {
        alert('The Id you enterd is invalid or No ID have been given  please check again')
    } else {
        getId.remove()
        document.getElementById('id').value = "";
    }
}

let editFunc = (enterId, editedText) => {
    getId = document.getElementById(enterId)
    getId.innerHTML = "NO: " + enterId +" " + editedText
    document.getElementById('id').value = "";
    document.getElementById('text').value = "";

}


add.onclick = () => {
    // const task = prompt('Add a task', );
    let inputText= document.getElementById('text')
    addTodo(inputText.value)
}

remove.onclick = () => {
    // const enterId = prompt('Enter Id you want t delete: ')
    let inputId = document.getElementById('id')
    removeFunc(inputId.value)
}

edit.onclick = () => {
    // const getId = prompt('Enter the id you want to edit: ')
    // const editedText = prompt('')
    let inputText = document.getElementById('text')
    let inputId = document.getElementById('id')
    editFunc(inputId.value, inputText.value)
}