"use strict";
let IdNum = 1;
const addtodo = () => {
    const taskInput = document.querySelector('.text');
    if (taskInput && taskInput.value) {
        let task = taskInput.value;
        const li = document.createElement('li');
        li.innerHTML = `
            <div class='inputs' id="${IdNum}"> 
                <div class='task' id = "${IdNum}"> ${task}</div>
                <div class="buttons">
                    <button class="edit" onclick="editinput(${IdNum})">Edit</button>
                    <button class="delete"><span onclick="removeTask(${IdNum++})">Remove</span ></button>
                </div>
            </div>`;
        const taskList = document.querySelector(".list");
        taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(li);
        taskInput.value = '';
    }
    else {
        prompt('Pleas Enter a task before adding');
    }
};
function removeTask(id) {
    const taskElement = document.getElementById(id.toString());
    if (taskElement) {
        const listItem = taskElement.closest('li');
        if (listItem) {
            listItem.remove();
        }
        else {
            console.error(`Could not find parent <li> element for task with id ${id}`);
        }
    }
    else {
        console.error(`Task element with id ${id} not found`);
    }
}
function editTask(id, context) {
    let className = 'task';
    let getId = document.querySelector(`div.${className}#${CSS.escape(id)}`);
    if (getId && getId.textContent) {
        console.log(getId.textContent);
        getId.textContent = context;
    }
}
const editinput = (id) => {
    let toint = id.toString();
    let className = 'task';
    let getId = document.querySelector(`div.${className}#${CSS.escape(toint)}`);
    let getBelow = document.querySelector(`div.inputs#${CSS.escape(toint)}`);
    if (getId && getId.textContent) {
        const input = document.createElement('input');
        const done = document.createElement('input');
        input.type = 'text';
        input.className = 'editTask';
        input.value = getId.textContent;
        done.type = 'button';
        done.value = 'Done';
        done.className = 'doneTask';
        const newListItem = document.createElement('p');
        newListItem.className = 'editContainer';
        newListItem.appendChild(input);
        newListItem.appendChild(done);
        getBelow.insertAdjacentElement('afterend', newListItem);
        done.addEventListener('click', () => {
            editTask(toint, input.value);
            newListItem.remove();
        });
    }
};
//# sourceMappingURL=index.js.map