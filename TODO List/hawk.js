let input = document.querySelector('#input-field');
let addButton = document.querySelector('.add-button');
let ul = document.querySelector('.list-items');
let form = document.querySelector('form');
let arrayOfLists = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value != "") {
        ul.innerHTML += `<li>${input.value} <span class="delete-button"><img src="/deletel.png" alt=""></span></li>`;
        arrayOfLists.push(input.value);
    }
    input.value = '';
});

ul.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.parentElement.remove();
        
    }
});

let searchBtn = document.querySelector('.search-button');
let search = document.querySelector('#search');
let li = document.querySelectorAll('li');
    let searchText = search.value;

search.addEventListener('keyup', (e) => {
    e.preventDefault();
    ul.innerHTML = '';
    arrayOfLists.forEach(function(element){
        if((element.toLowerCase()).includes(search.value.toLowerCase())){
            ul.innerHTML += `<li>${element} <button class="delete-button"><img src="/deletel.png" alt=""></button></li>`;
        }

    });
                                                    
});

