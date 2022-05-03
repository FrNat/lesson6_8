const textHref = document.querySelector('a');

//назначение
textHref.addEventListener('click'), (event) => {
event.preventDefault(); //отмена

textHref.textContent = prompt('Введите новый текст')

})