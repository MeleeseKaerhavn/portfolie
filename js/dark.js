document.querySelector('.slider-input').addEventListener('change', changeBackground);

function changeBackground() {
  const sliderInput = document.querySelector('.slider-input');
  const bodyElement = document.querySelector('body');

  if (sliderInput.checked) {
    bodyElement.style.backgroundColor = 'black';
    bodyElement.style.color = 'white'; 
  } else {
    bodyElement.style.backgroundColor = ''; 
    bodyElement.style.color = ''; 
  }
}
