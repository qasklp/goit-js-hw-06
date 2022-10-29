let valueEl = document.querySelector('#value');
let counterValue = 0;
const increaseBtn = document.querySelector('button[data-action="increment"]');
const decreaseBtn = document.querySelector('button[data-action="decrement"]');
increaseBtn.addEventListener('click',() =>{
    counterValue += 1;
    valueEl.textContent = `${counterValue}`;
});
decreaseBtn.addEventListener('click',()=>{
    counterValue -= 1;
    valueEl.textContent = `${counterValue}`;
});
