const input = document.querySelector('.input-login');
const button = document.querySelector('.btn-login');
const form = document.querySelector('.form-login');

const ValidateInput = ({target}) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}

const HandleSubmit = (event) =>{
    event.preventDefault();

    localStorage.setItem('player', input.value);

    window.location = 'pages/game.html';
}

input.addEventListener('input', ValidateInput);
form.addEventListener('submit', HandleSubmit);