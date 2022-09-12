let gameLibrary = [
    {
        "name": "Multiversus",
        "genre": "Fighting",
        "multiplayer": true
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

// DOM
const shelf = document.querySelector('#shelf');
const gameOne = document.querySelector('.game');
gameOne.textContent = gameLibrary[0].name + ' ' + gameLibrary[0].genre + ' ' + 'is multiplayer? : ' + gameLibrary[0].multiplayer;
const newGameButton = document.createElement('button');
newGameButton.setAttribute('id', 'newGameButton');
newGameButton.textContent = 'Add New Game to Library';
shelf.appendChild(newGameButton);