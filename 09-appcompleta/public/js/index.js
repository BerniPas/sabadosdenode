

let formulario = document.getElementById('formLogin');


formulario.addEventListener('submit', (e) => {

    e.preventDefault();

let email = document.getElementById('email');
let password = document.getElementById('password');

email = email.value;
password = password.value;

if(email == '' || password == ''){
    return alert('Todos los campos son obligatorios');
}

console.log(email);
console.log(password);


}); 

//alert('Hola mundo');




