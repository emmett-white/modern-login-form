const fields = document.querySelectorAll('.box input');

checkFields = () => {
    document.getElementsByTagName('BUTTON')[0].disabled = (fields[0].value !== '' && fields[1].value !== '' ? (false) : (true));
}

window.addEventListener('keyup', checkFields);