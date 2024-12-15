function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgroundEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  const newArr = [];
  for (let i = 0; i < inputEl.value.trim(); i += 1) {
    const divNewEl = document.createElement('div');
    divNewEl.style.width = `${size}px`;
    divNewEl.style.height = `${size}px`;
    divNewEl.style.backgroundColor = getRandomHexColor();
    newArr.push(divNewEl);
    size += 10;
    
  }
backgroundEl.append(...newArr);
} 
function destroyBoxes() {backgroundEl.innerHTML = '';}

btnCreateEl.addEventListener('click', () => {
  const amount = inputEl.value.trim();
  if (amount > 1 && amount < 100) {
    createBoxes(amount);
    inputEl.value = '';
  }
  else { return alert('Wrong amount!')}

});
btnDestroyEl.addEventListener('click', destroyBoxes)


