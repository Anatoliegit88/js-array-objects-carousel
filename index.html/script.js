// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata. Attenzione! Le immagini nello screenshot sono differenti da quelli  che vi invio, ma il layout non cambia.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const pictures = [
  {
    image: "Antarctica.jpg",
    title: "Visit Antarctica",
    text: "Will be an unforgettable experience!!!",
  },
  {
    image: "Chile.jpg",
    title: "Visit Chile",
    text: "Will be an unforgettable experience!!!",
  },
  {
    image: "Colombia.jpg",
    title: "Visit Colombia",
    text: "Will be an unforgettable experience!!!",
  },
  {
    image: "Machu Pichu.jpg",
    title: "Visit Machu Pichu",
    text: "Will be an unforgettable experience!!!",
  },
  {
    image: "Sunset-Antarctica.jpg",
    title: "Awesome Sunset in Antarctica",
    text: "Will be an unforgettable experience!!!",
  },
];
console.log(pictures);

let pictureItem = "";
let thumbItem = "";

const containerItem = document.querySelectorAll("item-active");
const containerThumb = document.querySelectorAll("thumb-active");

console.log(containerItem);
console.log(containerThumb);

pictures.forEach((item) => {
  pictureItem += `
  <div class="picture active"> 
  <img src="pictures/${item.image}" alt="${item.title}">
  </div>`;

  thumbItem += `
  <div class="thumb">
  <img src="pictures/${item.image}" alt="${item.title}">
  </div>`;
});

containerItem.innerHTML = pictureItem;
containerThumb.innerHTML = thumbItem;

console.log(pictureItem);
console.log(thumbItem);

const pictureList = document.getElementsByClassName("picture active");
let slider = [0];
pictureList[slider].classList.add("active");

const nextBtn = document.getElementsByClassName("next");
const prevBtn = document.getElementsByClassName("prev");

nextBtn.addEventListener("click", clickNext);
prevBtn.addEventListener("click", clickPrev);

function clickNext() {
  pictureList[slider].classList.remove("active");
  if (slider < pictureList.length - 1) {
    slider++;
  } else {
    slider = 0;
    {
      pictureList[slider].classList.add("active");
    }
  }
}

function clickPrev() {
  pictureList[slider].classList.remove("active");
  if (slider > 0) {
    slider--;
  } else {
    slider === pictureList.length - 1;
  }
  pictureList[slider].classList.add("active");
}
