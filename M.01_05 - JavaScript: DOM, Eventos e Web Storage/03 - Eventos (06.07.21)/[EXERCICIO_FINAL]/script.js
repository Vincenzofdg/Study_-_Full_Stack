function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index++) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();



// EXERCICIO 01:
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysOfMonth() {
  let listaDias = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index++) {
    let diasLista = document.createElement('li');
    let dias = dezDaysList[index];
    if (dias === 24 || dias === 31) { // para classe "day holiday"      
      diasLista.innerHTML = dias;
      diasLista.className = 'day holiday';
      listaDias.appendChild(diasLista);
    }
    else if (dias === 4 || dias === 11 || dias === 18) { // para classe "day friday"
      diasLista.innerHTML = dias;
      diasLista.className = 'day friday';
      listaDias.appendChild(diasLista);
    }
    else if (dias === 25) { // para classes "day holiday" e "day friday"
      diasLista.innerHTML = dias;
      diasLista.className = 'day holiday friday';
      listaDias.appendChild(diasLista);
    }
    else { // para classe "day"
      diasLista.innerHTML = dias;
      diasLista.className = 'day'
      listaDias.appendChild(diasLista);
    }
  }
}
createDaysOfMonth();



// EXERCICIO 02:
function novoBotao(botaoNome) {
  let botaoLocalizacao = document.querySelector('.buttons-container'); // ESTOU NA LOCALIDADE
  let botao = document.createElement('button'); // CRIEI O BOTAO 

  botao.id = 'btn-holiday';
  botao.innerHTML = botaoNome;

  botaoLocalizacao.appendChild(botao);
}
novoBotao('Feriado');



// EXERCICIO 03:
function colorindoHoliday() {
  let botaoClick = document.getElementById('btn-holiday');
  let diasHoliday = document.querySelectorAll('.holiday')

  let corFundo = 'rgb(238,238,238)';
  let corNova = 'pink';

  botaoClick.addEventListener('click', function () {
    for (let index = 0; index < diasHoliday.length; index++) {
      if (diasHoliday[index].style.backgroundColor === corNova) {
        diasHoliday[index].style.backgroundColor = corFundo;
      }
      else {
        diasHoliday[index].style.backgroundColor = corNova;
      }
    }
  })

}
colorindoHoliday()



// EXERCICIO 04:
function novobotao2(botaoNome2) {
  let botaoLocalizacao2 = document.querySelector('.buttons-container');
  let botao2 = document.createElement('button');

  botao2.id = 'btn-friday';
  botao2.innerHTML = botaoNome2;
  botaoLocalizacao2.appendChild(botao2);
}
novobotao2('Sexta-Feira');



// EXERCICIO 05:
function sextaFeira(sextaNum) {
  let botaoSexta = document.getElementById('btn-friday');
  let sexta = document.querySelectorAll('.friday');

  let textoNovo = 'SEXTA!';

  botaoSexta.addEventListener('click', function () {
    for (let index = 0; index < sexta.length; index++) {

      if (sexta[index].innerHTML !== textoNovo) {

        sexta[index].innerHTML = textoNovo;
      }
      else {
        sexta[index].innerHTML = sextaNum[index];
      }
    }
  })
}

let sextaArray = [4, 11, 18, 25];
sextaFeira(sextaArray);



// EXERCICIO 06:
function zoomDayOn() {

  let aumentandoDiaOn = document.querySelector('#days');

  aumentandoDiaOn.addEventListener('mouseover', function (event) {

    event.target.style.color = 'black';
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';

  })
}

function zoomDayOff() {

  let aumentandoDiaOff = document.querySelector('#days');

  aumentandoDiaOff.addEventListener('mouseout', function (event) {

    event.target.style.color = '#777';
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';

  })
}

zoomDayOn();
zoomDayOff();



// EXERCICIO 07:
function tarefaTitulo(tarefaNome) {
  const tarefaPath = document.querySelector('.my-tasks');
  let tarefa = document.createElement('span');
  tarefa.className = 'task-tarefa'
  tarefa.innerHTML = tarefaNome;
  tarefaPath.appendChild(tarefa);
}
tarefaTitulo('Cozinhar');



// EXERCICIO 08:
function tarefaLegenda(legendaCor) {
  const legendaPath = document.querySelector('.my-tasks');
  let legenda = document.createElement('div');
  legenda.className = 'task';
  legenda.style.backgroundColor = legendaCor;
  legendaPath.appendChild(legenda);
}
tarefaLegenda('blue');



// EXERCICIO 09:
function selecionandoTask() {

  let tarefaSelecionada = document.getElementsByClassName('task selected'); //duvida
  let legendaClickPath = document.querySelector('.task');

  legendaClickPath.addEventListener('click', function (event) {
    let tarefaName = document.querySelector('.task-tarefa');

    if (tarefaSelecionada.length === 0) {
      event.target.className = 'task selected'
      tarefaName.style.color = 'blue';
    } else {
      event.target.className = 'task'
      tarefaName.style.color = '#777';
    }
  })
}
selecionandoTask();



// EXERCICIO 10:
function eventoCalendario() {
  let selecionaTarefa = document.getElementsByClassName('task selected');
  let selecionaDia = document.querySelector('#days');
  let tarefa = document.querySelector('.task');
  let tarefaCor = tarefa.style.backgroundColor;


  selecionaDia.addEventListener('click', function(event) {
    let eventTargetColor = event.target.style.color;
    if (selecionaTarefa.length > 0 && eventTargetColor !== tarefaCor) {
      let color = selecionaTarefa[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === tarefaCor && selecionaTarefa.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  })
}
eventoCalendario()



// BÔNUS:
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();