let IdNum = 1
const addtodo = (): void => {
    const taskInput = document.querySelector('.text') as HTMLInputElement;

    if (taskInput && taskInput.value) {
        let task: string = taskInput.value;
        const li = document.createElement('li');

        li.innerHTML = `
            <div class='inputs' id="${IdNum}"> 
                <div class='task' id = "${IdNum}"> ${ task }</div>
                <div class="buttons">
                    <button class="edit" onclick="editinput(${IdNum})">Edit</button>
                    <button class="delete"><span onclick="removeTask(${IdNum++})">Remove</span ></button>
                </div>
            </div>`
        // IdNum = IdNum + 1
        const taskList = document.querySelector(".list");
        taskList?.appendChild(li);
        taskInput.value = '';
    } else {
        prompt('Pleas Enter a task before adding')
    }
}


function removeTask(id: number): void {
    const taskElement = document.getElementById(id.toString());
    if (taskElement) {
        // Find the parent <li> element
        const listItem = taskElement.closest('li');
        if (listItem) {
            listItem.remove();
        } else {
            console.error(`Could not find parent <li> element for task with id ${id}`);
        }
    } else {
        console.error(`Task element with id ${id} not found`);
    }
}

function editTask(id: string, context:string): any {
    let className = 'task'
    let getId = document.querySelector(`div.${className}#${CSS.escape(id)}`) as HTMLInputElement;

    if (getId && getId.textContent) {
        // let spec = getId.
        console.log(getId.textContent)
        getId.textContent = context
    }
}

const editinput = (id:number):void => {
    let toint = id.toString()
    let className = 'task'
    let getId = document.querySelector(`div.${className}#${CSS.escape(toint)}`) as HTMLInputElement;
    let getBelow = document.querySelector(`div.inputs#${CSS.escape(toint)}`) as HTMLInputElement;

    if (getId && getId.textContent) {
        const input = document.createElement('input');
        const done = document.createElement('input');
        
        input.type = 'text';
        input.className = 'editTask'
        input.value = getId.textContent;

        done.type = 'button'
        done.value = 'Done'
        done.className = 'doneTask'
        const newListItem = document.createElement('p');
        newListItem.className = 'editContainer'
        
        newListItem.appendChild(input);
        newListItem.appendChild(done);
        getBelow.insertAdjacentElement('afterend', newListItem);
        
        done.addEventListener('click', () => {
            editTask(toint, input.value)
            newListItem.remove()
        });
        
    }
}