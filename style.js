const btn = document.querySelector('.btn');
const yesBtn = document.querySelector('.yesbtn');
const noBtn = document.querySelector('.nobtn');
const list = document.querySelector('ul');
const trashIcon = document.querySelector('trash');
const input = document.getElementById('inputs');
const deleteQuestion = document.querySelector('.deletequestion');
const back = document.querySelector('.back');
const newTodo = document.getElementsByClassName('todoItems');
const body = document.querySelector('body');


const added = [];


input.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
        addTodoList();
});

btn.addEventListener('click', function(){
    addTodoList();

})



const colsetoggle = () => {
    back.classList.remove('visible');
    deleteQuestion.classList.remove('visible');

};

const toggleBack = () => {
    back.classList.toggle('visible');
};



const clearInput = () => {
    input.value = '';
};

let newLi = document.createElement('li');

const addNewList = (input) => {

    let newLi = document.createElement('li');
    let divChild = document.createElement('div');
    newLi.innerHTML = '<div>'+input+'</div>';
    let checkIcon = document.createElement('i');
    let trashIcon = document.createElement('i');

    newLi.className = 'item';

    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightgray';
    checkIcon.addEventListener('click', function(){
        checkIcon.style.color = 'limegreen';
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = 'fas fa-trash';
    trashIcon.style.color = 'darkgray';
    trashIcon.addEventListener('click', function(){
        deleteQuestion.classList.add('visible');
        toggleBack()
        yesBtn.addEventListener('click', function () {
            colsetoggle();
            clearInput();
            newLi.remove()
        });
    })

    divChild.appendChild(trashIcon);

    newLi.appendChild(divChild);

    list.appendChild(newLi);


    noBtn.addEventListener('click', function(){
        colsetoggle();
        clearInput();
    });
    
};

function addTodoList () {
    const inputValue = input.value;


    if (inputValue.trim() === ''){
        alert(' plz enter valid value')
        return;
    }
    
    const newAdded = {
        inputs: inputValue
    };

    added.push(newAdded);
    clearInput();
    addNewList(newAdded.inputs);

};
