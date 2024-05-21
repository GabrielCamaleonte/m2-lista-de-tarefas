const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks) {
  const task_list = document.querySelector('ul')

  task_list.innerHTML = ""
  
  for (let i = 0; i < tasks.length; i++) {
    createTaskItem(tasks[i])
  }

}

function createTaskItem(task) {
  const task_list = document.querySelector('ul')

    const task_item = document.createElement('li');    
    const task_info = document.createElement('div');
    const productType = document.createElement('span')
    const productName = document.createElement('p');
    const task_button = document.createElement('button')
  
    productName.innerText = task.title;
    

    task_item.appendChild(task_info);
    task_item.appendChild(task_button);
    task_info.appendChild(productType);
    task_info.appendChild(productName);
    task_list.appendChild(task_item);

    task_item.className = "task__item"
    task_info.className = "task-info__container";
    task_button.className = "task__button--remove-task";
    productType.className = "task-type"
    
     if(task.type.toUpperCase() === "URGENTE"){
       productType.className += ' span-urgent' 
     }else if(task.type.toUpperCase() === "IMPORTANTE"){
      productType.className += " span-important"
     }else if(task.type.toUpperCase() === "NORMAL"){
      productType.className += " span-normal"
  }
  task_button.addEventListener('click', function(evt){
    evt.preventDefault()
    var posTask = tasks.indexOf(task)
    tasks.splice(posTask, 1);
    
    renderElements(tasks)
  })
}
console.log(renderElements(tasks))

let events = document.querySelector('button')

events.addEventListener('click', function(evt){
  evt.preventDefault()
  var title = document.getElementById('input_title');
  var type = document.querySelector('select')
  var obj = {title: title.value, type: type.value}

  tasks.unshift(obj)

  renderElements(tasks)

})
