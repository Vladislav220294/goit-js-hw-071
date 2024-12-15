const inputName = document.querySelector('#name-input');
const outPutName = document.querySelector('#name-output');
inputName.addEventListener('input', () => {
    outPutName.textContent = inputName.value.trim();
    if (inputName.value.trim() === '') {
        outPutName.textContent = 'Anonymous';
    }
    
})