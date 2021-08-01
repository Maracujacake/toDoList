let addAoClicarBotao = document.getElementById('addToDo');
let ContainerToDo = document.getElementById('toDoContainer');
let CampoNecessario = document.getElementById('inputField');

addAoClicarBotao.addEventListener('click', function(){
    let paragrafo = document.createElement('p')
    paragrafo.innerText = CampoNecessario.value;
    ContainerToDo.appendChild(paragrafo);
    CampoNecessario.value = ""
})