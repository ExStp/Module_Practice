import Data from "../Data.js";

const error = document.querySelector('#error');

const CheckNull = (name, login, password) => {

    let errName = Data.find(user => user.name === name);
    let errLogin = Data.find(user => user.login === login);
    
    if (Boolean(errName)) {
        error.textContent = 'Пользователь с таким именем уже существует';
        return true
    }
    if (Boolean(errLogin)) {
        error.textContent = 'Пользователь с таким логином уже существует';
        return true
    }

    if (name.length < 3) {
        error.textContent = 'Имя должно содержать более 3 символов';
        return true
    };
    if (login.length < 5) {
        error.textContent = 'Логин должен содержать более 5 символов';
        return true
    };

    if (password.length < 6) {
        error.textContent = 'Пароль должен содержать более 6 символов';
        return true
    };

    
}

export default CheckNull;