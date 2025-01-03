document.querySelector('.slider-input').addEventListener('change', changeBackground);

function changeBackground() {
  const sliderInput = document.querySelector('.slider-input');
  const bodyElement = document.querySelector('body');
  const headerElement = document.querySelector('header');
  const navElement = document.querySelector('nav');
  const olElement = document.querySelector('ol');
  const footerElement = document.querySelector('footer');



  if (sliderInput.checked) {
    bodyElement.style.backgroundColor = '#1F1D1B';
    bodyElement.style.color = 'white'; 
    headerElement.style.backgroundColor ='#1F3327';
    navElement.style.backgroundColor ='#1F3327';
    olElement.style.backgroundColor ='#5E6D58';
    footerElement.style.backgroundColor ='#1F3327';
  } else {
    bodyElement.style.backgroundColor = ''; 
    bodyElement.style.color = ''; 
    headerElement.style.backgroundColor = '';
    navElement.style.backgroundColor = '';
    olElement.style.backgroundColor ='#B0C9A3';
    footerElement.style.backgroundColor ='';
  }
}
