let adicionarAoBotao = document.getElementById('addToDo');
let ContainerToDo = document.getElementById('toDoContainer');
let CampoNecessario = document.getElementById('inputField');

adicionarAoBotao.addEventListener('click', function(){
    let paragrafo = document.createElement('p')
    ContainerToDo.appendChild(paragrafo);
})