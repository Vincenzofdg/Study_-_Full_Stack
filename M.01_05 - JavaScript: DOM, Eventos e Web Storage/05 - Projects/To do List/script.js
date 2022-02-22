// CONSTANTES A SE DECLARAR AO COMEÇO DO CODIGO
const btnTaskCriation = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const deleteAll = document.getElementById('apaga-tudo');
const deleteDone = document.getElementById('remover-finalizados');
const deleteSelected = document.getElementById('remover-selecionado');
const btnSave = document.getElementById('salvar-tarefas');
const btnUp = document.getElementById('mover-cima');
const btnDown = document.getElementById('mover-baixo');



// ADICIONA TAREJA À LISTA AO CLICAR NO BOTAO 
function btnClickTask() {
    btnTaskCriation.addEventListener('click', function() {
        let inputTextTask = document.getElementById('texto-tarefa');

        let taskCriated = document.createElement('li')
        taskCriated.innerText = inputTextTask.value;
        taskCriated.id = 'task';
        taskList.appendChild(taskCriated)
        inputTextTask.value = '';
    })
}
btnClickTask();

// AO CLICAR NO ITEM MUDAR A COR DO TEXTO DO ITEM PARA CINZA RGB(128,128,128)
function taskCorlorChange() {
    taskList.addEventListener('click', function(event) {
        let taskArray = document.querySelectorAll('#task')
        if (event.target.classList.contains('selected')) {
            event.target.classList.remove('selected');
        } else {
            for (let t = 0; t < taskArray.length; t++) {
                taskArray[t].classList.remove('selected')
            }
            event.target.classList.add('selected');
        }
    })
}
taskCorlorChange();

// RISCANDO AS TAREFAS COM DUPLO CLIQUE:
function textLineThrough() {
    taskList.addEventListener('dblclick', function(event) {
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        }
    })
}
textLineThrough();

// CLICAR NO BOTAO APAGA TODOS OS VALORES DE LISTA-TAREFAS
function deletingAll() {
    deleteAll.addEventListener('click', function() {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    })
}
deletingAll();

// CLICAR NO BOTAO APAGA TODOS OS VALORES DA CLASSE .COMPLETED
function deletingDone() {
    deleteDone.addEventListener('click', function() {
        let selected = document.querySelectorAll('.completed')
        for (let i = 0; i < selected.length; i++) {
            if (selected[i].parentNode) {
                selected[i].parentNode.removeChild(selected[i]);
            }
        }
    })
}
deletingDone();

// CLICAR NO BOTAO APAGA TODOS OS VALORES DA CLASSE .SELECTED
function deletingSelected() {
    deleteSelected.addEventListener('click', function() {
        let selected = document.querySelector('.selected')
        selected.parentNode.removeChild(selected);
    })
}
deletingSelected();


// SALVANDO INFORMAÇÕES NO LOCALSTORAGE
// TANTO TASKLIST.CHILDELEMENTCOUNT QUANTO TASK.LENGHT SÃO A MESMA FORMA DE MODOS DIFERENTES
function saveTasks() {
    btnSave.addEventListener('click', function() {
        let task = document.querySelectorAll('#task')
        if (task.length > 0) {
            for (let s = 0; s < task.length; s++) {
                localStorage.setItem(`text ${s + 1}`, task[s].innerHTML);
                localStorage.setItem(`class ${s + 1}`, task[s].className);
            }
        } else {
            localStorage.clear();
        }
    })
}
saveTasks();

function recoveringTasks() {
    for (let r = 0; r < (localStorage.length / 2); r++) {
        let taskCriated = document.createElement('li')
        taskCriated.innerHTML = localStorage.getItem(`text ${r + 1}`);
        taskCriated.className = localStorage.getItem(`class ${r + 1}`);
        taskList.appendChild(taskCriated);
    }
}
recoveringTasks();

// MOVIMENTANDO AS TASK:
        // MOVENDO PARA CIMA:
btnUp.addEventListener('click', function() {
    let btnSelected = document.querySelector('.selected');
    let taskUp = btnSelected.previousElementSibling;
    if (taskUp == null) {
        return;
    } else {
        const btnSelectedHTML = btnSelected.innerHTML;
        const taskUpHTML = taskUp.innerHTML;
        const btnSelectedClass = btnSelected.className;
        const taskUpClass = taskUp.className;
        btnSelected.innerHTML = taskUpHTML;
        btnSelected.className = taskUpClass;
        taskUp.innerHTML = btnSelectedHTML;
        taskUp.className = btnSelectedClass;
    }
})
        // MOVENDO PARA BAIXO:
btnDown.addEventListener('click', function() {
    let btnSelected = document.querySelector('.selected');
    let taskDown = btnSelected.nextElementSibling;
    if (taskDown == null) {
        return;
    } else {
    const btnSelectedHTML = btnSelected.innerHTML;
    const taskUpHTML = taskDown.innerHTML;
    const btnSelectedClass = btnSelected.className;
    const taskUpClass = taskDown.className;
    btnSelected.innerHTML = taskUpHTML;
    btnSelected.className = taskUpClass;
    taskDown.innerHTML = btnSelectedHTML;
    taskDown.className = btnSelectedClass;
    }
})