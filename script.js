const buttonApagaTarefa = document.getElementById('remover-finalizados');
const buttonAdicionar = document.getElementById('criar-tarefa');
const buttonApagar = document.getElementById('apaga-tudo');
const buttonRemoverSelecionado = document.getElementById('remover-selecionado');
const buttonMoveCima = document.getElementById('mover-cima');
const buttonMoveBaixo = document.getElementById('mover-baixo');
const buttonSalvar = document.getElementById('salvar-tarefas');
const input = document.getElementsByTagName('input')[0];
const ol = document.getElementsByTagName('ol')[0];
const tarefa = document.getElementsByClassName('tarefa');
const completa = document.getElementsByClassName('completed');

function adicionaTarefa() {
  const li = document.createElement('li');
  li.innerText = input.value;
  li.className = 'tarefa';
  li.addEventListener('click', adicionaClasse);
  li.addEventListener('dblclick', tarefaCompleta);
  ol.appendChild(li);
  input.value = '';
}

buttonAdicionar.addEventListener('click', function() {
adicionaTarefa();
});

function mudaCorItem() {
  document.querySelector('.selecionada').style.backgroundColor = 'rgb(128, 128, 128)';
}

function adicionaClasse(event) {
  const selecionada = document.querySelector('.selecionada');
  if (selecionada === null) {
    event.target.classList.add('selecionada');
    mudaCorItem();
  } else {
    selecionada.style.backgroundColor = 'white';
    selecionada.classList.remove('selecionada');
    event.target.classList.add('selecionada');
    mudaCorItem();
  }
}

function tarefaCompleta(event) {
  if (event.target.className === 'tarefa selecionada') {
    event.target.style.textDecoration = 'line-through solid black';
    event.target.className = 'completed';
    event.target.style.backgroundColor = 'white';
  } else {
    event.target.style.textDecoration = 'none';
    event.target.className = 'tarefa selecionada';
  }
}

function apagaLista() {
  while (tarefa[0] !== undefined) {
    tarefa[0].remove();
  }
}
buttonApagar.addEventListener('click', apagaLista);

function apagaTarefasCompleta() {
  while (completa[0] !== undefined) {
    completa[0].remove();
  }
}
buttonApagaTarefa.addEventListener('click', apagaTarefasCompleta);

function removeItemSelecionado() {
  document.querySelector('.selecionada').remove();
}
buttonRemoverSelecionado.addEventListener('click', removeItemSelecionado);

function itemSobe() {
  const selecionada = document.querySelector('.selecionada');
  const temp = selecionada.innerHTML;
  selecionada.innerHTML = selecionada.previousElementSibling.innerHTML;
  selecionada.previousElementSibling.innerHTML = temp;
}
buttonMoveCima.addEventListener('click', itemSobe);

function itemDesce() {
  const selecionada = document.querySelector('.selecionada');
  const temp = selecionada.innerHTML;
  selecionada.innerHTML = selecionada.nextElementSibling.innerHTML;
  selecionada.nextElementSibling.innerHTML = temp;
}
buttonMoveBaixo.addEventListener('click', itemDesce);

buttonSalvar.addEventListener('click', salvarItens);
function salvarItens() {
localStorage.setItem('lista', ol.innerHTML);
}

window.onload = function() {
  const recuperandoObjeto = localStorage.getItem('lista');
  const filhos = ol.children;
  if (localStorage.getItem('lista')) {
    ol.innerHTML = recuperandoObjeto;
    for (let filho of filhos) {
      filho.addEventListener('click', adicionaClasse);
      filho.addEventListener('dblclick', tarefaCompleta);
    }
  }
}
