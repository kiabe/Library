let gameLibrary = [
    {
        name: "Multiversus",
        genre: "Fighting",
        multiplayer: true
    }
];

function Game(name, genre, multiplayer) {
    this.name = name
    this.genre = genre
    this.multiplayer = multiplayer
}

Game.prototype.sayName = function () {
    return this.name;
};

Game.prototype.sayGenre = function () {
    return this.genre;
};

Game.prototype.isMultiplayer = function () {
    return this.multiplayer;
};

function addGameToLibrary(Game) {
    // code here to add new Game object to gameLibrary array
    // to add to an existing array, can use .push() function
    gameLibrary.push(Game);
}

let RE2Make = new Game('Resident Evil 2 Remake', 'Survival Horror', false);
addGameToLibrary(RE2Make);

let Valorant = new Game('Valorant', 'Tactical FPS', true);
addGameToLibrary(Valorant);

// DOM Variable Selectors
const shelf = document.querySelector('#shelf');
const gameCaseCount = document.querySelectorAll('.game');
const button = document.querySelector('#button');

// DOM Stuff
function createGameCase() {
    const gameCase = document.createElement('div');
    gameCase.classList.add('game');
    shelf.appendChild(gameCase);
}

function labelGameCase() {
    // Prints on to div with class name 'game' that label cases with the following: name, genre, and whether it is multiplayer or not
    // Loops through gameLibrary array and prints content of object to gameCase div

    for (let i = 0; i < gameCaseCount.length; i++) {
        const ul = document.createElement('ul');
        gameCaseCount[i].appendChild(ul);
        for (let j = 0; j < 20; j++) {
            // print content of gameLibrary to divs in gameCase
            if (j === 0) {
                const li = document.createElement('li');
                ul.appendChild(li);
                li.textContent = "Name of game: " + gameLibrary[i].name;
            } else if (j === 1) {
                const li = document.createElement('li');
                ul.appendChild(li);
                li.textContent = "Genre: " + gameLibrary[i].genre;
            } else if (j === 2) {
                const li = document.createElement('li');
                ul.appendChild(li);
                li.textContent = "Is this multiplayer? : " + gameLibrary[i].multiplayer;
            }
        }
    }
}

labelGameCase();

// DOM Button Stuff
const newGameButton = document.createElement('button');
newGameButton.setAttribute('id', 'newGameButton');
newGameButton.textContent = 'Add New Game to Library';
button.appendChild(newGameButton);