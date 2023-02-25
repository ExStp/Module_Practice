import Data from "../Data.js";
import CheckNull from "./checkNull.js";

const error = document.querySelector('#error');

const Registration = (name, login, password) => {
    if (CheckNull(name, login, password)) return;
    Data.push({
        name: name,
        id: Date.now(),
        login: login,
        password: password
    });
    error.textContent = 'Вы зарегистрировались';
}

export default Registration;