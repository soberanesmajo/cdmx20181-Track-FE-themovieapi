const bladeRunner = document.getElementById('blade-runner');
const starTrek = document.getElementById('star-trek');
const matrix = document.getElementById('matrix');
let print = document.getElementById('print');
let printTitle = document.getElementById('print-title');

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
  let url = `http://www.omdbapi.com/?s=${search}&plot=full&apikey=${api}`;
  fetch(url).then((res) => {
    return res.json();
  })
    .then((data) => {
      // console.log(data);
      printPoster(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getMovies(api, search);

// Funcion para pintar poster 

const printPoster = (data) => {
  let moviesArray = [];
  let poster;
  let title;
  let year;
  let type;
  let movies = data.Search;
  for (i in movies) {
    console.log(movies[i].Title);
    // forEach(element => {
    //   console.log(element);
    // });
  }


  // let title = data.Title;
  // // console.log(title);
  // let posterMovie = data.Poster;
  // // console.log(posterMovie);
  // print.innerHTML = `<img src="${posterMovie}"alt="">`;
  // printTitle.innerHTML = `<h5>${title}</h5>`;
};

