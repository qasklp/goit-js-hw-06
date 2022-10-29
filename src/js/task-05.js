const nameEl = document.querySelector('#name-output');
const inputEl = document.querySelector('#name-input');
//console.log(inputEl);
inputEl.addEventListener("input", (event) => {
    if (event.currentTarget.value != '') {
        nameEl.textContent = event.currentTarget.value;
    }else {
        nameEl.textContent = "Anonymous";
    }
});