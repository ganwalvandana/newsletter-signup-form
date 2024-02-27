const btn = document.getElementsByTagName('button')[0]
// btn.addEventListener('onclick', (event) => {
//     // event.preventDefault();
//     const email = document.getElements('email');
//     const mail = email.value
//     console.log(mail)
// });

const urlParam = new URLSearchParams(window.location.search);
const email = urlParam.get("email");

document.getElementsByTagName("span")[0].innerText = email;