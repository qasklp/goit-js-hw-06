const controler = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
controler.addEventListener("input", () => {
    text.style.fontSize = `${controler.value}px`;
})