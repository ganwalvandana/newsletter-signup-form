 const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    // event.preventDefault();
    const email = document.getElementById('email');
    const mail = email.value
    console.log(mail)
});