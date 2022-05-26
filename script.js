const buttonAdicionar = document.getElementsByTagName('button')[0];
const input = document.getElementsByTagName('input')[0];
const ol = document.getElementsByTagName('ol')[0];

function adicionaTarefa() {
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = '';
}

buttonAdicionar.addEventListener('click', adicionaTarefa);
