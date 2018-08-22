const bladeRunner = document.getElementById('blade-runner');
const starTrek = document.getElementById('star-trek');
const matrix = document.getElementById('matrix');

const api = '4e2f1ceb';
let search;

// Funciones que detonan los botones.

bladeRunner.addEventListener('click', () => {
  search = 'blade+runner';
  getMovies(api, search);
});

starTrek.addEventListener('click', () => {
  search = 'star+trek';
  getMovies(api, search);
});

matrix.addEventListener('click', () => {
  search = 'matrix';
  getMovies(api, search);
});

// Funcion que arroja la data solicitada

const getMovies = (api, search) => {
  let url = `http://www.omdbapi.com/?t=${search}&plot=full&apikey=${api}`;
  fetch(url).then((res) => {
    return res.json();
  })
    .then((data) => {
      console.log(data);
      printPoster(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getMovies(api, search);

// Funcion para pintar poster 

const printPoster = (data) => {
  let title = data.Title;
  console.log(title);
};

