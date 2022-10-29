const inputEl = document.querySelector('input');
const inputLen = Number(inputEl.dataset.length);
inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === inputLen) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else if (inputEl.value.length === 0) {
        inputEl.classList.remove("invalid");
        inputEl.classList.remove("valid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
})