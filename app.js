const filmListDiv = document.querySelector('#film-list');

fetch('https://ghibliapi.herokuapp.com/films')
.then(response => response.json())
.then(data => {
    data.forEach(film => {
        const filmDiv = document.createElement('div');
        filmDiv.innerHTML = '<a href="film.html?id=' + film.id + '">' + film.title + '</a><br>';

        const filmImg = document.createElement('img');
        filmImg.src = film.image;
        filmImg.classList.add('poster');
        filmDiv.appendChild(filmImg);

        filmListDiv.appendChild(filmDiv);
    });
});

