import Data from "./modules/Data.js";
import Registration from "./modules/Registration/Registration.js"
// import CheckNull from "./modules/Registration/checkNull.js";

const form = document.querySelector('.form');
const name = document.querySelector('#name');
const login = document.querySelector('#login');
const password = document.querySelector('#password');

form.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.type === 'submit') {
        Registration(name.value, login.value, password.value) 
        name.value = '';
        login.value = '';
        password.value = '';




        Data.forEach(i => {
            console.log(i);
        })
        console.log('------------------------')
    }
})

