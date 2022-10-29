const formEl = document.querySelector('form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("All fields must be filled!");
    }
    const data = {
        email: email.value,
        password: password.value
    }
    console.log(data);
    event.currentTarget.reset();
}
