const btn = document.querySelector('.btn');
const yesBtn = document.querySelector('.yesbtn');
const noBtn = document.querySelector('.nobtn');
const list = document.querySelector('.list');
const input = document.getElementById('inputs');
const deleteQuestion = document.querySelector('.deletequestion');
const back = document.querySelector('.back');
const newTodo = document.getElementsByClassName('todoItems');
const body = document.querySelector('body');



input.addEventListener('keydown', function(event){


    if(event.key === 'Enter')
        addTodoList();
});

btn.addEventListener('click', function(){
    addTodoList();
    clearInput()

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



const addNewList = () => {
    let newLi = document.createElement('div');

    newLi.className = 'item';
    newLi.innerHTML = `
    <p>${input.value}</p>
    <div class="item-btn">
        <input type="checkbox" class='check'>
        <div >
            <i class="fa-sharp fa-solid fa-trash"></i>
        </div>
    </div>
    `

    list.appendChild(newLi);


    noBtn.addEventListener('click', function(){
        colsetoggle();
        clearInput();
    });
    
};

list.addEventListener('click', (e) =>{

    if(e.target.classList.contains('fa-sharp')){
        deleteQuestion.classList.add('visible');
        toggleBack()
        yesBtn.addEventListener('click', function () {
            colsetoggle();
            clearInput();
            e.target.parentElement.parentElement.remove();
        });
    } else if(e.target.classList.contains('fa-square-check')){
        e.target.parentElement.parentElement.classList.toggle('checked');
    }
})

function addTodoList () {


    if (input.value.trim() === ''){
       alert('pls input a value')
       return
    } 
    addNewList();

};
