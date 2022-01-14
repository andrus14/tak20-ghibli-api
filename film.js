const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const apiUrl = 'https://ghibliapi.herokuapp.com/films/' + urlParams.get('id');

const titleH1 = document.querySelector('#title');
const posterImg = document.querySelector('#poster');

fetch(apiUrl)
.then(response => response.json())
.then(film => {
    titleH1.innerText = film.title;
    posterImg.src = film.image;
});