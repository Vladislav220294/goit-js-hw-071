function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backGroundColor = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
btnChangeColor.addEventListener('click', () => {
  const functionColor = getRandomHexColor();
  colorSpan.textContent = functionColor;
  backGroundColor.style.backgroundColor = functionColor;

})