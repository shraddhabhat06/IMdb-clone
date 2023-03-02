//This code is for displaying popular movies from the "themoviedb.org" API.
const API_KEY = "api_key=087bcc7848a3058ec9f2f6057b77194b";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_PATH = "https://image.tmdb.org/t/p/original";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;



function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
      Movies(data.results);
    });
}


//The code calls getMovies() passing in the API_URL as an argument to display popular movies
getMovies(API_URL);

const slideBox = document.querySelector("#movie-box");



const showMovies = (data) => {
  data.forEach((item) => {
    const box = document.createElement("div");

    box.setAttribute("class", "mySlides fade");

    box.innerHTML = ` <img src="${
      IMG_PATH + item.poster_path
    }" style="width: 100%">
    <div class="text">${item.vote_average}</div>
    `;
    slideBox.appendChild(box);
  });
};

//sidebar

const movieBox = document.getElementById("popular-Movie");



const Movies = (data) => {
  console.log(data);
  data.forEach((item) => {
    const cards = document.createElement("div");

    cards.setAttribute("class", "card");

    cards.innerHTML = `
      <img src="${IMG_PATH + item.poster_path}">
      <div class="text-container">
        <h2>${item.title}</h2>
        <br>
        <p> ${item.overview}</p>
        <br>
        </h3>Rating: ${item.vote_average}</h3>
        <br>
        <br>
        
        
      </div>
    `;

    movieBox.appendChild(cards);
  });
};

let slideIndex = 1;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");


showSlides();

function currentSlide(index) {
  slideIndex = index;
  showSlides();
}

function plusSlides(step) {
  if (step < 0) {
    slideIndex -= 2;

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }

  showSlides();
}


function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  

  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
}
