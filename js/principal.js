// começo do evento de click

const music1 = document.getElementById('música1');
const music2 = document.getElementById('música2');
const music3 = document.getElementById('música3');

const movieMusic1 = document.querySelector('.movieMusic1');
const movieMusic2 = document.querySelector('.movieMusic2');
const movieMusic3 = document.querySelector('.movieMusic3');

// fim do evento de click

música1.addEventListener('click', () =>{
    música1.classList.toggle('active');
    movieMusic1.classList.toggle('active');
});
música2.addEventListener('click', () =>{
    música2.classList.toggle('active');
    movieMusic2.classList.toggle('active');
});
música3.addEventListener('click', () =>{
    música3.classList.toggle('active');
    movieMusic3.classList.toggle('active');
});