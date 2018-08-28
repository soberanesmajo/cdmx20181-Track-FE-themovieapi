const bladeRunner = document.getElementById('blade-runner');
const starTrek = document.getElementById('star-trek');
const matrix = document.getElementById('matrix');
let print = document.getElementById('print');
let printDetails = document.getElementById('print-details');

print.style.display = 'none';

const api = '4e2f1ceb';
let search;

// Funciones que detonan los botones.

bladeRunner.addEventListener('click', () => {
  search = 'blade+runner';
  getMovies(api, search);
  print.style.display = 'block';
});

starTrek.addEventListener('click', () => {
  search = 'star+trek';
  getMovies(api, search);
  print.style.display = 'block';
});

matrix.addEventListener('click', () => {
  search = 'matrix';
  getMovies(api, search);
  print.style.display = 'block';
});

// Funcion que arroja la data solicitada

const getMovies = (api, search) => {
  let url = `http://www.omdbapi.com/?s=${search}&plot=full&apikey=${api}`;
  fetch(url).then((res) => {
    return res.json();
  })
    .then((data) => {
      // console.log(data);
      printPoster(data);
      details(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getMovies(api, search);

// Funcion para pintar poster 

let movies;

const printPoster = (data) => {
  let moviesArray = [];
  let poster;
  let title;
  let year;
  let type;
  movies = data.Search;

  print.innerHTML = '';
  for (i in movies) {
    title = movies[i].Title;
    year = movies[i].Year;
    type = movies[i].Type;
    poster = movies[i].Poster;

    print.innerHTML += `<img src="${poster}"alt="">
    <h6>${title}</h6>`;

    moviesArray.push({
      'Titulo': title,
      'Año': year,
      'Tipo': type,
      'Poster': poster
    });
  }

  // console.log(moviesArray);
  return moviesArray;
};

const details = (data) => {
  // movies = data.Search;
  console.log(movies);

  // print.addEventListener('click', () => {
  for (i in movies) {
    title = movies[i].Title;
    year = movies[i].Year;
    type = movies[i].Type;
    poster = movies[i].Poster;

    printDetails.innerHTML += `<img src="${poster}"alt="">
      <a href="views/detalles.html"><h5>${title}</h5></a>`; 
  }
  // });
};