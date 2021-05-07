const api = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f3590148aa33d73160c34cf4a712fac8&hash=0d90061027af6621ca73185cef650d56&limit=50&offset=0`;

let ignores = ["http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708"];

let footer = document.querySelector(".footer");
let container = document.querySelector(".container");

fetch(api)
  .then((response) => response.json())
  .then((item) => {
    if (item.data) {
      item.data.results.forEach((result) => {
        createCharacterCard(result);
      });
    }
    footer.innerHTML = item.attributionHTML;
  });

function createCharacterCard(character) {
  container.innerHTML += `
            <div class='character'>
                <a href='${character.urls[0].url}'></a>
                    <img class='character-img' src = '${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}'>
                <p class='character-name'>${character.name}</p>   
            </div>`;
}
