const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const h3Tag = document.querySelector('h3');
const bodyTag = document.getElementById('bodyGradient');



function setGradient(){

    bodyTag.style.background = `linear-gradient(to bottom right, ${color1.value}, ${color2.value})`;

    h3Tag.textContent = `${bodyTag.style.background};`;

}


color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);